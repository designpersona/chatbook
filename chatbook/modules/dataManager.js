/**
 * 데이터 관리 모듈 (IndexedDB, LocalStorage)
 */

const DataManager = (() => {
    const DB_NAME = 'ChatArchiveDB';
    const DB_VERSION = 1;
    const STORE_NAME = 'chats';
    const SETTINGS_KEY = 'chatArchiveSettings';
    const HAS_DATA_KEY = 'chatArchiveHasData';
    const LAST_VIEW_KEY = 'lastView';
    const LAST_FILE_KEY = 'lastFileName';
    const LOCAL_MAX_DAYS = 7;

    let db = null;

    // DB 초기화
    const initDB = () => {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = () => reject("DB Open Error");
            request.onsuccess = (e) => {
                db = e.target.result;
                resolve(db);
            };
            request.onupgradeneeded = (e) => {
                const database = e.target.result;
                if (!database.objectStoreNames.contains(STORE_NAME)) {
                    database.createObjectStore(STORE_NAME, { keyPath: 'id' });
                }
            };
        });
    };

    // 데이터 저장
    const saveChatData = (data, fileName) => {
        return initDB().then((database) => {
            return new Promise((resolve, reject) => {
                const transaction = database.transaction(STORE_NAME, 'readwrite');
                const store = transaction.objectStore(STORE_NAME);
                store.clear();

                const savePromises = data.map((item) =>
                    new Promise((res, rej) => {
                        const request = store.add(item);
                        request.onerror = () => rej();
                        request.onsuccess = () => res();
                    })
                );

                Promise.all(savePromises)
                    .then(() => {
                        localStorage.setItem(HAS_DATA_KEY, 'true');
                        localStorage.setItem(LAST_FILE_KEY, fileName);
                        localStorage.setItem('dataLoadedTimestamp', Date.now().toString());
                        resolve();
                    })
                    .catch(reject);
            });
        });
    };

    // 데이터 로드
    const loadChatData = () => {
        return initDB().then((database) => {
            return new Promise((resolve, reject) => {
                const transaction = database.transaction(STORE_NAME, 'readonly');
                const store = transaction.objectStore(STORE_NAME);
                const request = store.getAll();

                request.onerror = () => reject("Data Load Error");
                request.onsuccess = (e) => resolve(e.target.result || []);
            });
        });
    };

    // 데이터 삭제
    const clearChatData = () => {
        return initDB().then((database) => {
            return new Promise((resolve, reject) => {
                const transaction = database.transaction(STORE_NAME, 'readwrite');
                const store = transaction.objectStore(STORE_NAME);
                const request = store.clear();

                request.onerror = () => reject();
                request.onsuccess = () => {
                    localStorage.removeItem(HAS_DATA_KEY);
                    localStorage.removeItem(LAST_FILE_KEY);
                    resolve();
                };
            });
        });
    };

    // 설정 저장
    const saveSettings = (settings) => {
        try {
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        } catch (e) {
            console.warn('Failed to save settings', e);
        }
    };

    // 설정 로드
    const loadSettings = () => {
        try {
            const settings = localStorage.getItem(SETTINGS_KEY);
            return settings ? JSON.parse(settings) : {};
        } catch (e) {
            console.warn('Failed to load settings', e);
            return {};
        }
    };

    // 데이터 존재 확인
    const hasData = () => {
        try {
            return localStorage.getItem(HAS_DATA_KEY) === 'true';
        } catch (e) {
            return false;
        }
    };

    // 마지막 파일명 가져오기
    const getLastFileName = () => {
        try {
            return localStorage.getItem(LAST_FILE_KEY) || null;
        } catch (e) {
            return null;
        }
    };

    // 마지막 뷰 저장
    const setLastView = (view) => {
        try {
            localStorage.setItem(LAST_VIEW_KEY, view);
        } catch (e) {
            console.warn('Failed to save last view', e);
        }
    };

    // 마지막 뷰 로드
    const getLastView = () => {
        try {
            return localStorage.getItem(LAST_VIEW_KEY);
        } catch (e) {
            return null;
        }
    };

    // 자동 정리 (오래된 데이터 삭제)
    const autoCleanup = (maxDays = LOCAL_MAX_DAYS) => {
        return loadChatData().then((data) => {
            const now = Date.now();
            const maxAgeMs = maxDays * 24 * 60 * 60 * 1000;

            const filteredData = data.filter((item) => {
                if (!item.timestamp) return true;
                return now - item.timestamp < maxAgeMs;
            });

            if (filteredData.length < data.length) {
                return saveChatData(filteredData, getLastFileName());
            }
            return Promise.resolve();
        });
    };

    // 백업 생성
    const exportBackup = (data, filename = 'backup.json') => {
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    };

    // 백업 복구
    const importBackup = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    saveChatData(data, 'imported-' + file.name).then(() => resolve(data));
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = () => reject(new Error('파일을 읽을 수 없습니다.'));
            reader.readAsText(file);
        });
    };

    return {
        initDB,
        saveChatData,
        loadChatData,
        clearChatData,
        saveSettings,
        loadSettings,
        hasData,
        getLastFileName,
        setLastView,
        getLastView,
        autoCleanup,
        exportBackup,
        importBackup,
    };
})();
