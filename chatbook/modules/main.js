/**
 * 메인 진입점 - 모듈 초기화 및 통합 로직
 * 주의: 이 파일은 script.js가 로드되기 전에 실행되어야 합니다.
 */

// 모듈 초기화가 완료되었음을 알리기
window.ModulesReady = false;

document.addEventListener('DOMContentLoaded', async () => {
    // This project currently ships both the modular prototype and the legacy all-in-one `script.js`.
    // When both initialize, they attach duplicate listeners to the same file input/view buttons,
    // which can cause "upload twice" / "refresh to see data" behavior due to racing handlers.
    // If legacy `script.js` is present on the page, prefer legacy mode and skip modular init.
    const legacyScriptTag = document.querySelector('script[src$="script.js"]');
    if (legacyScriptTag) {
        console.log('ℹ Legacy script.js present, skipping modular init');
        return;
    }

    // script.js가 이미 로드되었는지 확인
    const usingLegacyScript = typeof chatData !== 'undefined';
    
    if (usingLegacyScript) {
        console.log('ℹ script.js already initialized, using legacy mode');
        return;
    }

    console.log('🚀 Initializing modular architecture...');

    // ===== DOM 요소 수집 =====
    const domElements = {
        fileInput: document.getElementById('file-input'),
        uploadBox: document.querySelector('.upload-dropzone'),
        visibleUploadBtn: document.getElementById('visible-upload-btn'),
        loadingScreen: document.getElementById('loading-screen'),
        dashboard: document.getElementById('dashboard'),
        uploadScreen: document.getElementById('upload-screen'),
    };

    const viewElements = {
        views: {
            dashboard: document.getElementById('dashboard-view'),
            mypage: document.getElementById('mypage-view'),
            settings: document.getElementById('settings-view'),
            contentDisplay: document.getElementById('content-display'),
        },
        buttons: {
            dashboardBtn: document.getElementById('dashboard-btn'),
            myPageBtn: document.getElementById('mypage-btn'),
            settingsBtn: document.getElementById('settings-btn'),
        },
    };

    // ===== 모듈 초기화 =====
    
    // DataManager 초기화
    try {
        await DataManager.initDB();
        console.log('✓ Database initialized');
    } catch (e) {
        console.error('Database initialization failed:', e);
    }

    // UIManager 초기화
    UIManager.init(viewElements);
    console.log('✓ UI Manager initialized');

    // FileHandler 초기화
    FileHandler.init(
        {
            fileInput: domElements.fileInput,
            uploadBox: domElements.uploadBox,
            visibleUploadBtn: domElements.visibleUploadBtn,
            loadingScreen: domElements.loadingScreen,
        },
        {
            onFileReady: handleFileReady,
            onProcessingComplete: handleProcessingComplete,
            onError: handleProcessingError,
            onLoadingChange: handleLoadingChange,
        }
    );
    console.log('✓ File Handler initialized');

    // ===== 파일 처리 콜백 함수 =====
    
    async function handleFileReady(fileData) {
        const { file, text, isJson } = fileData;
        
        if (isJson) {
            try {
                const jsonData = JSON.parse(text);
                // 데이터 처리 로직은 여기서 구현
                console.log('JSON 데이터 처리:', jsonData);
                FileHandler.onProcessingComplete();
            } catch (e) {
                console.error('JSON 파싱 오류:', e);
                FileHandler.onProcessingError("JSON 파일 파싱에 실패했습니다.");
            }
        } else {
            // HTML 파일 처리
            console.log('HTML 파일 처리:', file.name);
            FileHandler.onProcessingComplete();
        }
    }

    function handleProcessingComplete(data) {
        console.log('파일 처리 완료:', data);
        // UI 업데이트
        showDashboard();
    }

    function handleProcessingError(message) {
        console.error('처리 오류:', message);
        alert(message);
    }

    function handleLoadingChange(isLoading) {
        console.log('로딩 상태:', isLoading);
    }

    // ===== 유틸리티 함수 =====
    
    function showDashboard() {
        if (domElements.uploadScreen) {
            domElements.uploadScreen.classList.add('hidden');
        }
        if (domElements.dashboard) {
            domElements.dashboard.classList.remove('hidden');
            domElements.dashboard.style.display = 'flex';
        }
    }

    // ===== 이벤트 리스너 =====
    
    // 대시보드 버튼
    const dashboardBtn = document.getElementById('dashboard-btn');
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', () => {
            UIManager.showDashboardView();
            DataManager.setLastView('dashboard');
        });
    }

    // 마이페이지 버튼
    const myPageBtn = document.getElementById('mypage-btn');
    if (myPageBtn) {
        myPageBtn.addEventListener('click', () => {
            UIManager.showMyPageView();
            DataManager.setLastView('mypage');
        });
    }

    // 설정 버튼
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            UIManager.showSettingsView();
            DataManager.setLastView('settings');
        });
    }

    // ===== 초기 데이터 로드 =====
    
    const hasData = DataManager.hasData();
    if (hasData) {
        try {
            const data = await DataManager.loadChatData();
            console.log('로드된 데이터:', data.length, '개');
        } catch (e) {
            console.error('데이터 로드 오류:', e);
        }
    }

    window.ModulesReady = true;
    console.log('✓ Application initialized successfully');
});
