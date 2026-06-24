/**
 * 파일 업로드 및 처리 모듈
 */

const FileHandler = (() => {
    let currentFile = null;
    let currentFileText = "";
    let currentEncoding = 'UTF-8';

    const dom = {
        fileInput: null,
        uploadBox: null,
        visibleUploadBtn: null,
        loadingScreen: null,
    };

    const callbacks = {
        onFileReady: null,
        onProcessingComplete: null,
        onError: null,
        onLoadingChange: null,
    };

    // 초기화
    const init = (domElements, callbackFunctions) => {
        Object.assign(dom, domElements);
        Object.assign(callbacks, callbackFunctions);
        setupEventListeners();
    };

    // 이벤트 리스너 설정
    const setupEventListeners = () => {
        // 버튼 클릭
        if (dom.visibleUploadBtn) {
            dom.visibleUploadBtn.addEventListener('click', () => {
                dom.fileInput?.click();
            });
        }

        // 드래그 & 드롭
        if (dom.uploadBox) {
            dom.uploadBox.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dom.uploadBox.classList.add('drag-over');
            });

            dom.uploadBox.addEventListener('dragleave', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dom.uploadBox.classList.remove('drag-over');
            });

            dom.uploadBox.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dom.uploadBox.classList.remove('drag-over');

                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    handleFile(files[0]);
                }
            });
        }

        // 파일 입력
        if (dom.fileInput) {
            dom.fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    handleFile(file);
                }
            });
        }
    };

    // 파일 처리
    const handleFile = (file) => {
        currentFile = file;
        readFile(file, currentEncoding);
    };

    // 파일 읽기
    const readFile = (file, encoding) => {
        showLoading(true);
        const isJson = file.name.toLowerCase().endsWith('.json');

        const reader = new FileReader();
        reader.onload = (event) => {
            currentFileText = event.target.result;

            if (callbacks.onFileReady) {
                callbacks.onFileReady({
                    file,
                    text: currentFileText,
                    isJson,
                    encoding,
                    onComplete: onProcessingComplete,
                    onError: onProcessingError,
                });
            }
        };

        reader.onerror = () => {
            onProcessingError("파일을 읽을 수 없습니다.");
        };

        if (encoding === 'EUC-KR') {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsText(file, 'UTF-8');
        }
    };

    // 처리 완료
    const onProcessingComplete = () => {
        showLoading(false);
        if (callbacks.onProcessingComplete) {
            callbacks.onProcessingComplete({
                file: currentFile,
                text: currentFileText,
            });
        }
    };

    // 처리 오류
    const onProcessingError = (message) => {
        showLoading(false);
        if (callbacks.onError) {
            callbacks.onError(message);
        }
    };

    // 로딩 표시
    const showLoading = (show) => {
        if (dom.loadingScreen) {
            dom.loadingScreen.classList.toggle('hidden', !show);
        }
        if (callbacks.onLoadingChange) {
            callbacks.onLoadingChange(show);
        }
    };

    // 현재 상태 반환
    const getState = () => ({
        currentFile,
        currentFileText,
        currentEncoding,
    });

    // 상태 업데이트
    const setState = (state) => {
        if (state.currentFile !== undefined) currentFile = state.currentFile;
        if (state.currentFileText !== undefined) currentFileText = state.currentFileText;
        if (state.currentEncoding !== undefined) currentEncoding = state.currentEncoding;
    };

    // 파일 입력 초기화
    const resetFileInput = () => {
        if (dom.fileInput) {
            dom.fileInput.value = '';
        }
    };

    // 파일 다시 읽기
    const reloadFile = (encoding) => {
        currentEncoding = encoding;
        if (currentFile) {
            readFile(currentFile, encoding);
        }
    };

    return {
        init,
        handleFile,
        readFile,
        showLoading,
        getState,
        setState,
        resetFileInput,
        reloadFile,
        onProcessingComplete,
        onProcessingError,
    };
})();
