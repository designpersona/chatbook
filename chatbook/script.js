
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const fileInput = document.getElementById('file-input');
    const globalSettingsBtn = document.getElementById('global-settings-btn');
    const uploadScreen = document.getElementById('upload-screen');
    const uploadBox = document.querySelector('.upload-dropzone');
    const visibleUploadBtn = document.getElementById('visible-upload-btn');
    const dashboard = document.getElementById('dashboard');
    const chatListElement = document.getElementById('chat-list');
    const searchInput = document.getElementById('search-input');
    const historySearchInput = document.getElementById('history-search-input');
    const historySearchBar = document.getElementById('history-search-bar');
    const historySearchStack = document.getElementById('history-search-stack');
    const historyTopBtn = document.getElementById('history-top-btn');
    const historyBottomBtn = document.getElementById('history-bottom-btn');
    const historyNavPill = document.getElementById('history-nav-pill');
    const historySearchToggle = document.getElementById('history-search-toggle');
    const historySearchClose = document.getElementById('history-search-close');
    const historySearchCount = document.getElementById('history-search-count');
    const historySearchPrev = document.getElementById('history-search-prev');
    const historySearchNext = document.getElementById('history-search-next');
    const fixedHistoryHeader = document.getElementById('fixed-history-header');
    const fixedPageTitle = document.getElementById('fixed-page-title');
    const mainContent = document.querySelector('.main-content');
    const languageSelector = document.getElementById('language-selector');
    const contentDisplay = document.getElementById('content-display');
    const emptyState = document.getElementById('empty-state');
    const chatContent = document.getElementById('chat-content');
    const postUploadPlaceholder = document.getElementById('post-upload-placeholder');
    const resetBtn = document.getElementById('reset-btn');
    const myPageBtn = document.getElementById('mypage-btn');
    const settingsBtn = document.getElementById('settings-btn'); // Legacy sidebar button
    const myPageView = document.getElementById('mypage-view');
    const settingsView = document.getElementById('settings-view');
    const statTotalChats = document.getElementById('stat-total-chats');
    const statFreshness = document.getElementById('stat-freshness');
    const statDateRange = document.getElementById('stat-date-range');
    const statActiveDays = document.getElementById('stat-active-days');
    const themeToggle = document.getElementById('theme-toggle');
    const dashboardBtn = document.getElementById('dashboard-btn');
    const chatsTitle = document.getElementById('chats-title');
    const sidebar = document.querySelector('.sidebar');
    const sidebarCollapseToggle = document.getElementById('sidebar-collapse-toggle');
    const analysisBar = document.getElementById('analysis-bar');
    const analysisBarHostDashboard = document.getElementById('analysis-bar-host-dashboard');
    const analysisBarHostMyPage = document.getElementById('analysis-bar-host-mypage');
    const analysisPresetSelect = document.getElementById('analysis-preset');
    const analysisStartInput = document.getElementById('analysis-start');
    const analysisEndInput = document.getElementById('analysis-end');
    const analysisClearBtn = document.getElementById('analysis-clear');
    const analysisMonthlyNav = document.getElementById('analysis-monthly-nav');
    const analysisMonthPrev = document.getElementById('analysis-month-prev');
    const analysisMonthNext = document.getElementById('analysis-month-next');
    const analysisMonthDisplay = document.getElementById('analysis-month-display');

    let currentAnalysisYear = new Date().getFullYear();
    let currentAnalysisMonth = new Date().getMonth() + 1; // 1-12
    const pageTitle = document.getElementById('page-title');
    const prevChatBtn = document.getElementById('prev-chat-btn');
    const nextChatBtn = document.getElementById('next-chat-btn');
    const mypageFilename = document.getElementById('mypage-filename');
    const mypageFilesize = document.getElementById('mypage-filesize');
    const mypageTotalChats = document.getElementById('mypage-total-chats');
    const mypageTotalMessages = document.getElementById('mypage-total-messages');
    const mypageTotalChars = document.getElementById('mypage-total-chars');
    const mypageLastLoaded = document.getElementById('mypage-last-loaded');
    const mypageEstimatedTokens = document.getElementById('mypage-estimated-tokens');
    const mypageEstimatedInputTokens = document.getElementById('mypage-estimated-input-tokens');
    const mypageEstimatedOutputTokens = document.getElementById('mypage-estimated-output-tokens');
    const mypageEstimatedCost = document.getElementById('mypage-estimated-cost');
    const pricingModelSelect = document.getElementById('pricing-model-select');
    const inputRateUsdInput = document.getElementById('input-rate-usd-input');
    const outputRateUsdInput = document.getElementById('output-rate-usd-input');
    const fxKrwPerUsdInput = document.getElementById('fx-krw-per-usd-input');
    const replaceFileBtn = document.getElementById('replace-file-btn');
    const autoExpireToggle = document.getElementById('auto-expire');
    const dashboardUploadBtn = document.getElementById('dashboard-upload-btn');
    const dashboardRemoveBtn = document.getElementById('status-remove-btn');
    const dashboardViewCard = document.getElementById('dashboard-view-card');
    const dashboardMyPageCard = document.getElementById('dashboard-mypage-card');
    const dashboardSettingsCard = document.getElementById('dashboard-settings-card');
    const dashboardFileName = document.getElementById('dashboard-file-name');
    const dashboardUploadSummary = document.getElementById('dashboard-upload-summary');
    const placeholderMessage = document.getElementById('placeholder-message');
    const uploadIntro = document.getElementById('upload-intro');
    const uploadStatus = document.getElementById('upload-status');
    const filterByDateToggle = document.getElementById('filter-by-date');
    const persistLocalToggle = document.getElementById('persist-local');
    const privacyModeToggle = document.getElementById('privacy-mode');
    const localStorageStatusValue = document.getElementById('local-storage-status');
    const autoDeleteDateValue = document.getElementById('auto-delete-date');
    const filterStartInput = document.getElementById('filter-start');
    const filterEndInput = document.getElementById('filter-end');
    const sidebarFilterToggle = document.getElementById('sidebar-filter-by-date');
    const sidebarFilterStart = document.getElementById('sidebar-filter-start');
    const sidebarFilterEnd = document.getElementById('sidebar-filter-end');
    const sidebarFilterReset = document.getElementById('sidebar-filter-reset');
    const keywordModeSelect = document.getElementById('keyword-mode');
    const keywordLanguageSelect = document.getElementById('keyword-language');
    const quickButtons = document.querySelectorAll('.quick-btn');
    const exportBackupBtn = document.getElementById('export-backup-btn');
    const importBackupBtn = document.getElementById('import-backup-btn');
    const backupInput = document.getElementById('backup-input');
    const loadingScreen = document.getElementById('loading-screen');
    const clearDataModal = document.getElementById('clear-data-modal');
    const clearDataConfirmBtn = document.getElementById('clear-data-confirm-btn');
    const clearDataCancelBtn = document.getElementById('clear-data-cancel-btn');
    const clearDataResetPrefsToggle = document.getElementById('clear-data-reset-prefs');
    const estimatedCostSection = document.getElementById('settings-estimated-cost');
    const estimatedCostToggle = document.getElementById('settings-estimated-cost-toggle');
    const languageSettingSelect = document.getElementById('language-setting-select');

    // New Dropdown Elements
    const uploadDropdownArea = document.getElementById('upload-dropdown-area');
    const newDropZone = document.getElementById('new-drop-zone');
    const manualFileSelectBtn = document.getElementById('manual-file-select-btn');
    const chatSortSelect = document.getElementById('chat-sort-select');

    // Status Dropdown Elements
    const statusUploadDropdownArea = document.getElementById('status-upload-dropdown-area');
    // statusDropZone removed as it's now info box
    const statusReplaceBtn = document.getElementById('status-replace-btn');

    // Modal Elements
    const parseModal = document.getElementById('parsing-modal');
    const filePreview = document.getElementById('file-preview-text');
    const encodingWarning = document.getElementById('encoding-warning');
    const encodingSelect = document.getElementById('encoding-select');
    const reloadFileBtn = document.getElementById('reload-file-btn');
    const radioInputs = document.querySelectorAll('input[name="split-strategy"]');
    const customSelectorInput = document.getElementById('custom-selector');
    const applyParsingBtn = document.getElementById('apply-parsing-btn');
    const cancelModalBtn = document.getElementById('cancel-modal-btn');

    // State
    let chatData = [];
    let currentFile = null;
    let currentFileText = "";
    let currentEncoding = 'UTF-8';
    let hasLoadedData = false;
    let isRestoring = false;
    let lastLoadedAt = null;
    let lastSavedSessionAt = null;
    let quickMode = 'all';
    let currentSortMode = 'newest'; // 'newest' | 'oldest' | 'active'
    let startWasManual = false;
    let userSidebarOverride = false;
    let didAutoRevealSidebar = false;
    // Analytics render state (must be initialized early to avoid TDZ)
    let pendingChartRender = null;
    let latestChartData = null;
    let latestChartRange = null;
    let deferredChartRender = null;
    let lastUploadCardHasData = null;
    const CHAT_LIST_BATCH_SIZE = 30;
    const CHAT_LIST_SCROLL_THRESHOLD = 180;
    let chatListRenderState = {
        items: [],
        renderedCount: 0
    };
    let pendingChatListAppend = false;
    let tokenEstimateCache = {
        source: null,
        result: null
    };
    const statsSummaryCache = new WeakMap();
    let pendingMyPageRefresh = null;
    let fullRangeAppliedStamp = null;
    const keywordStatsCache = new Map();
    const myPageStatsCache = new Map();
    const recentKeywordSummaryCache = new Map();
    const chartTooltip = createChartTooltip();
    let dashboardTopResizeObserver = null;
    const SETTINGS_KEY = 'chatArchiveSettings';
    const VIEW_STORAGE_KEY = 'cav:lastView';
    const HAS_DATA_KEY = 'cav:hasData';
    const LOCAL_MAX_DAYS = 7;
    const DEFAULT_PRICING_MODEL = 'gpt-4o-mini';
    // OpenAI API pricing (USD per 1M tokens), as of 2026-01-28.
    const MODEL_PRICING_USD_PER_1M = {
        'gpt-4o-mini': { input: 0.15, output: 0.60 },
        'gpt-4o': { input: 2.50, output: 10.00 },
        'gpt-4.1-mini': { input: 0.40, output: 1.60 },
        'gpt-4.1': { input: 2.00, output: 8.00 },
        'gpt-4.1-nano': { input: 0.10, output: 0.40 }
    };

    const UPLOAD_STATUS_EXPANDED_KEY = 'cav:uploadStatusExpanded';

    function getUploadStatusExpandedPreference() {
        try {
            return localStorage.getItem(UPLOAD_STATUS_EXPANDED_KEY) === 'true';
        } catch (e) {
            return false;
        }
    }

    function setUploadStatusExpandedPreference(expanded) {
        try {
            localStorage.setItem(UPLOAD_STATUS_EXPANDED_KEY, expanded ? 'true' : 'false');
        } catch (e) { }
    }

    function applyUploadStatusExpanded(expanded) {
        if (uploadStatus) uploadStatus.classList.toggle('expanded', !!expanded);
        if (statusUploadDropdownArea) statusUploadDropdownArea.classList.toggle('hidden-height', !expanded);
        updateStatusUploadToggleLabel();
    }

    function isDateFilterEnabled() {
        return !!((filterByDateToggle && filterByDateToggle.checked) || (sidebarFilterToggle && sidebarFilterToggle.checked));
    }

    function loadSettingsSnapshotEarly() {
        try {
            const stored = localStorage.getItem(SETTINGS_KEY);
            if (!stored) return {};
            const parsed = JSON.parse(stored);
            return parsed && typeof parsed === 'object' ? parsed : {};
        } catch (e) {
            return {};
        }
    }

    function isPrivacyModeEnabled() {
        if (privacyModeToggle) return !!privacyModeToggle.checked;
        const early = loadSettingsSnapshotEarly();
        return !!early.privacyMode;
    }

    function isPersistLocalEnabled() {
        const early = loadSettingsSnapshotEarly();
        if (early.persistLocal !== undefined) return early.persistLocal !== false;
        // Default: persist locally unless the user explicitly turned it off.
        if (persistLocalToggle) return persistLocalToggle.checked !== false;
        return true;
    }

    function setDateFilterEnabled(value) {
        if (filterByDateToggle) filterByDateToggle.checked = value;
        if (sidebarFilterToggle) sidebarFilterToggle.checked = value;
    }

    function updateEmptyState() {
        if (!postUploadPlaceholder) return;
        if (isRestoring) {
            if (emptyState) {
                emptyState.classList.add('hidden');
                emptyState.classList.remove('visible');
            }
            postUploadPlaceholder.classList.add('hidden');
            return;
        }
        if (emptyState) {
            emptyState.classList.add('hidden');
            emptyState.classList.remove('visible');
        }
        postUploadPlaceholder.classList.remove('hidden');
        const header = document.getElementById('content-header');
        if (header) header.classList.toggle('hidden', !hasLoadedData);
        if (fixedHistoryHeader) {
            const showHeader = hasLoadedData && postUploadPlaceholder && postUploadPlaceholder.classList.contains('hidden');
            fixedHistoryHeader.classList.toggle('hidden', !showHeader);
        }
        updateUploadCard();
    }

    // --- IndexedDB Helper (Local Persistence) ---
    const DB_NAME = 'ChatArchiveDB';
    const DB_VERSION = 1;
    const STORE_NAME = 'chats';

    function initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = (e) => reject("DB Open Error");
            request.onsuccess = (e) => resolve(e.target.result);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                }
            };
        });
    }

    function getFileMeta(input) {
        if (!input) return { fileName: null, fileSize: null };
        if (typeof input === 'string') return { fileName: input, fileSize: null };
        if (typeof input === 'object') {
            const fileName = typeof input.name === 'string' ? input.name : null;
            const fileSize = typeof input.size === 'number' ? input.size : null;
            return { fileName, fileSize };
        }
        return { fileName: null, fileSize: null };
    }

    async function saveChatDataFn(data, fileInputMeta) {
        try {
            const meta = getFileMeta(fileInputMeta);
            const db = await initDB();
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            store.put({
                id: 'currentSession',
                fileName: meta.fileName,
                fileSize: meta.fileSize,
                chatData: data,
                timestamp: new Date().getTime()
            });
            setHasDataFlag(true);
        } catch (e) {
            console.error("Save to DB failed", e);
        }
    }

    async function loadChatDataFn() {
        try {
            const db = await initDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(STORE_NAME, 'readonly');
                const store = tx.objectStore(STORE_NAME);
                const request = store.get('currentSession');
                request.onsuccess = (e) => resolve(e.target.result);
                request.onerror = () => resolve(null);
            });
        } catch (e) {
            return null;
        }
    }

    async function clearChatDataFn() {
        try {
            const db = await initDB();
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            store.clear();
            setHasDataFlag(false);
        } catch (e) {
            console.error("Clear DB failed", e);
        }
    }

    // --- 1. File Upload Logic ---

    function showLoading(isVisible) {
        if (!loadingScreen) return;
        loadingScreen.classList.toggle('hidden', !isVisible);
    }

    // Check DB on load
    const earlySettings = loadSettingsSnapshotEarly();
    // IMPORTANT: initialize privacy toggles *before* restore/upload logic runs.
    // Otherwise the default unchecked DOM state can incorrectly disable persistence.
    if (persistLocalToggle) {
        persistLocalToggle.checked = earlySettings.persistLocal !== false;
    }
    if (privacyModeToggle) {
        privacyModeToggle.checked = !!earlySettings.privacyMode;
    }
    if (autoExpireToggle) {
        autoExpireToggle.checked = !!earlySettings.autoExpire;
    }
    const lastView = getLastView();
    const hasStoredData = getHasDataFlag() || lastView === 'dashboard' || lastView === 'mypage' || lastView === 'settings';
    isRestoring = hasStoredData;
    if (isRestoring) {
        if (emptyState) emptyState.classList.add('hidden');
        if (postUploadPlaceholder) postUploadPlaceholder.classList.add('hidden');
    }
    applyLastView(hasStoredData ? 'dashboard' : 'history');
    document.documentElement.classList.remove(
        'view-dashboard-prepaint',
        'view-mypage-prepaint',
        'view-settings-prepaint',
        'view-history-prepaint'
    );
    showLoading(true);

    function shouldAutoDeleteSession(session) {
        if (!session || !session.timestamp) return false;
        const autoDeleteEnabled = !!earlySettings.autoExpire;
        if (!autoDeleteEnabled) return false;
        const cutoff = Date.now() - LOCAL_MAX_DAYS * 24 * 60 * 60 * 1000;
        return session.timestamp < cutoff;
    }

    function updateRetentionStatus() {
        if (!localStorageStatusValue && !autoDeleteDateValue) return;

        const privacyMode = isPrivacyModeEnabled();
        const persist = !privacyMode && isPersistLocalEnabled();
        const autoDelete = !privacyMode && !!(autoExpireToggle && autoExpireToggle.checked);

        const translate = (key, fallback) => {
            try {
                const lang = typeof window.currentLanguage === 'string' ? window.currentLanguage : 'en';
                const dict = typeof window.translations === 'object' ? window.translations : (typeof translations === 'object' ? translations : null);
                return (dict && dict[lang] && dict[lang][key]) ? dict[lang][key] : fallback;
            } catch (e) {
                return fallback;
            }
        };

        if (localStorageStatusValue) {
            if (privacyMode) {
                localStorageStatusValue.textContent = translate('storage-status-privacy', 'Privacy mode (no local storage)');
            } else if (!persist) {
                localStorageStatusValue.textContent = translate('storage-status-not-saved', 'Not saved locally');
            } else if (lastSavedSessionAt) {
                const savedLabel = translate('storage-status-saved-locally', 'Saved locally');
                localStorageStatusValue.textContent = `${savedLabel} · ${new Date(lastSavedSessionAt).toLocaleString()}`;
            } else {
                localStorageStatusValue.textContent = translate('storage-status-not-saved-yet', 'Not saved yet');
            }
        }

        if (autoDeleteDateValue) {
            if (privacyMode) {
                autoDeleteDateValue.textContent = '-';
            } else if (!autoDelete) {
                autoDeleteDateValue.textContent = '-';
            } else if (!lastSavedSessionAt) {
                autoDeleteDateValue.textContent = '-';
            } else {
                const expireAt = lastSavedSessionAt + LOCAL_MAX_DAYS * 24 * 60 * 60 * 1000;
                autoDeleteDateValue.textContent = new Date(expireAt).toLocaleDateString();
            }
        }
    }

    function applyPrivacyModeUiState() {
        const enabled = isPrivacyModeEnabled();
        if (persistLocalToggle) {
            persistLocalToggle.disabled = enabled;
            if (enabled) persistLocalToggle.checked = false;
        }
        if (autoExpireToggle) {
            autoExpireToggle.disabled = enabled;
            if (enabled) autoExpireToggle.checked = false;
        }
        updateRetentionStatus();
    }

    if (!isPersistLocalEnabled()) {
        setHasDataFlag(false);
        isRestoring = false;
        updateEmptyState();
        document.body.classList.remove('booting');
        showLoading(false);
    } else {
        loadChatDataFn().then(session => {
            if (session && session.chatData && session.chatData.length > 0) {
                if (shouldAutoDeleteSession(session)) {
                    clearChatDataFn();
                    chatData = [];
                    currentFile = null;
                    lastLoadedAt = null;
                    hasLoadedData = false;
                    setHasDataFlag(false);
                    isRestoring = false;
                    renderList(getFilteredChatData());
                    updateStats();
                    showHistoryView();
                    const toastText = (() => {
                        try {
                            const lang = typeof window.currentLanguage === 'string' ? window.currentLanguage : 'en';
                            const dict = typeof window.translations === 'object' ? window.translations : (typeof translations === 'object' ? translations : null);
                            const t = dict && dict[lang] ? dict[lang] : null;
                            return (t && t['auto-deleted-toast']) ? t['auto-deleted-toast'] : 'Local data was auto-deleted by security settings.';
                        } catch (e) {
                            return 'Local data was auto-deleted by security settings.';
                        }
                    })();
                    showToast(toastText);
                    return;
                }
                chatData = session.chatData;
                // Fake file object for display
                currentFile = { name: session.fileName || "Restored Session", size: session.fileSize ?? null };
                lastLoadedAt = session.timestamp || null;
                lastSavedSessionAt = session.timestamp || null;
                hasLoadedData = true;
                setHasDataFlag(true);
                isRestoring = false;

                renderList(getFilteredChatData());
                updateStats();
                showDashboard('none');
                applyLastView();
                updateRetentionStatus();
                console.log("Restored session from local DB");
            } else {
                updateEmptyState();
                setHasDataFlag(false);
                isRestoring = false;
                showHistoryView();
                updateRetentionStatus();
            }
        }).catch(() => {
            updateEmptyState();
            isRestoring = false;
        }).finally(() => {
            updateEmptyState();
            document.body.classList.remove('booting');
            showLoading(false);
        });
    }

    loadSettings();
    applyPrivacyModeUiState();

    window.ChatBookOnLanguageChange = () => {
        updateRetentionStatus();
        updateStatusUploadToggleLabel();
        updateBrandToggleLabel();
    };

    function getUiTranslation(key, fallback) {
        try {
            const lang = document.documentElement && document.documentElement.lang ? document.documentElement.lang : 'en';
            const dict = (typeof translations === 'object' && translations) ? translations : (typeof window.translations === 'object' ? window.translations : null);
            const t = dict && dict[lang] ? dict[lang] : null;
            const value = t && typeof t[key] === 'string' ? t[key] : null;
            return value || fallback;
        } catch (e) {
            return fallback;
        }
    }

    function updateStatusUploadToggleLabel() {
        if (!dashboardUploadBtn) return;
        const isOpen = !!(statusUploadDropdownArea && !statusUploadDropdownArea.classList.contains('hidden-height'));
        const openText = getUiTranslation('file-toggle-open', '열기');
        const closeText = getUiTranslation('file-toggle-close', '닫기');
        const label = isOpen ? closeText : openText;
        const textEl = dashboardUploadBtn.querySelector('.btn-text');
        if (textEl) textEl.textContent = label;
        dashboardUploadBtn.setAttribute('aria-label', label);
    }

    function updateBrandToggleLabel() {
        const brandToggleTextEl = document.getElementById('brand-toggle-text');
        const brandCardEl = document.querySelector('.brand-card');
        if (!brandToggleTextEl || !brandCardEl) return;

        const isOpen = brandCardEl.classList.contains('expanded');
        const openText = getUiTranslation('file-toggle-open', '열기');
        const closeText = getUiTranslation('file-toggle-close', '닫기');
        brandToggleTextEl.textContent = isOpen ? closeText : openText;
    }

    // Brand card (How to Use) toggle - only trigger on header
    const brandCard = document.querySelector('.brand-card');
    const brandHeader = document.querySelector('.brand-card .action-card-header');
    if (brandHeader && brandCard) {
        brandHeader.addEventListener('click', () => {
            brandCard.classList.toggle('expanded');
            updateBrandToggleLabel();
        });
    }

    // Trigger hidden input on button click
    if (visibleUploadBtn) {
        visibleUploadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Always toggle dropdown regardless of where in the button is clicked
            if (uploadIntro) uploadIntro.classList.toggle('expanded');
            if (uploadDropdownArea) uploadDropdownArea.classList.toggle('hidden-height');
        });
    }

    // Allow clicking the header text/area to toggle dropdown (like "How to use" card)
    const uploadIntroTop = document.querySelector('.upload-intro-top');
    if (uploadIntroTop) {
        uploadIntroTop.addEventListener('click', (e) => {
            // Prevent double toggle if clicking the button itself (since button has its own handler)
            if (e.target.closest('button')) return;

            if (uploadIntro) uploadIntro.classList.toggle('expanded');
            if (uploadDropdownArea) uploadDropdownArea.classList.toggle('hidden-height');
        });
    }

    if (manualFileSelectBtn) {
        manualFileSelectBtn.addEventListener('click', () => {
            fileInput.click();
        });
    }

    // Drag & Drop specific handling
    // Status Upload Button Logic
    if (dashboardUploadBtn) {
        dashboardUploadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (uploadStatus) uploadStatus.classList.toggle('expanded');
            if (statusUploadDropdownArea) statusUploadDropdownArea.classList.toggle('hidden-height');
            setUploadStatusExpandedPreference(!!(statusUploadDropdownArea && !statusUploadDropdownArea.classList.contains('hidden-height')));
            updateStatusUploadToggleLabel();
        });
    }

    const uploadStatusTop = document.querySelector('.upload-status-top');
    if (uploadStatusTop) {
        uploadStatusTop.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            if (uploadStatus) uploadStatus.classList.toggle('expanded');
            if (statusUploadDropdownArea) statusUploadDropdownArea.classList.toggle('hidden-height');
            setUploadStatusExpandedPreference(!!(statusUploadDropdownArea && !statusUploadDropdownArea.classList.contains('hidden-height')));
            updateStatusUploadToggleLabel();
        });
    }

    if (statusReplaceBtn) {
        statusReplaceBtn.addEventListener('click', (e) => {
            // Replace: open the native file picker without collapsing File Management.
            e.preventDefault();
            e.stopPropagation();

            if (!fileInput) return;
            // Allow selecting the same file again.
            fileInput.value = '';
            requestAnimationFrame(() => fileInput.click());
        });
    }

    // statusDropZone events removed

    // Drag & Drop specific handling

    // Drag & Drop specific handling
    if (newDropZone) {
        newDropZone.addEventListener('click', () => {
            fileInput.click();
        });

        newDropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            newDropZone.classList.add('drag-over');
        });

        newDropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            newDropZone.classList.remove('drag-over');
        });

        newDropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            newDropZone.classList.remove('drag-over');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleMultipleFiles(files);
            }
        });
    } else if (uploadBox) {
        // Fallback for Drag & Drop
        uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadBox.classList.add('drag-over');
        });

        uploadBox.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadBox.classList.remove('drag-over');
        });

        uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadBox.classList.remove('drag-over');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleMultipleFiles(files);
            }
        });
    }

    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        handleMultipleFiles(files);
    });

    // Ensure the status upload toggle label matches the initial dropdown state.
    updateStatusUploadToggleLabel();
    updateBrandToggleLabel();

    function handleFile(file) {
        currentFile = file;
        // Reset reveal flags so new upload can trigger auto-reveal
        didAutoRevealSidebar = false;
        userSidebarOverride = false;
        readFile(file, currentEncoding);
    }

    // --- Multiple File Upload (conversations-000, -001, ... merge) ---
    function handleMultipleFiles(fileList) {
        const files = Array.from(fileList);

        // If only one file, fall back to single-file flow
        if (files.length === 1) {
            handleFile(files[0]);
            return;
        }

        // Multiple files: only JSON merge is supported.
        // Sort by filename so -000 comes before -001, etc.
        const jsonFiles = files.filter(f => f.name.toLowerCase().endsWith('.json'));
        const otherFiles = files.filter(f => !f.name.toLowerCase().endsWith('.json'));

        if (jsonFiles.length === 0 && otherFiles.length > 0) {
            // Fallback: load the first non-JSON file
            handleFile(otherFiles[0]);
            return;
        }

        // Sort JSON files by name (handles -000, -001, -002, ...)
        jsonFiles.sort((a, b) => a.name.localeCompare(b.name));

        showLoading(true);
        didAutoRevealSidebar = false;
        userSidebarOverride = false;

        // Read all JSON files and merge their arrays
        const readPromises = jsonFiles.map(file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const json = JSON.parse(e.target.result);
                    resolve({ file, json });
                } catch (err) {
                    console.warn(`[MultiUpload] Failed to parse ${file.name}:`, err);
                    resolve({ file, json: null }); // Skip bad files gracefully
                }
            };
            reader.onerror = () => resolve({ file, json: null });
            reader.readAsText(file, currentEncoding);
        }));

        Promise.all(readPromises).then(async (results) => {
            // Build a merged array from all valid JSON arrays
            let merged = [];
            let hasNonArray = false;
            let firstFile = null;
            let totalSize = 0;

            for (const { file, json } of results) {
                if (json === null) continue;
                if (!firstFile) firstFile = file;
                totalSize += file.size;

                if (Array.isArray(json)) {
                    merged = merged.concat(json);
                } else {
                    // Single-object JSON — treat like a single conversation
                    hasNonArray = true;
                    merged.push(json);
                }
            }

            if (merged.length === 0) {
                alert('선택한 파일에서 유효한 대화 데이터를 찾을 수 없습니다.');
                showLoading(false);
                return;
            }

            // Use a synthetic file descriptor for UI display
            const fileNames = jsonFiles.map(f => f.name).join(', ');
            currentFile = {
                name: fileNames,
                size: totalSize,
                _isMulti: true,
                _count: jsonFiles.length,
            };

            await processJSONData(merged);
            lastLoadedAt = Date.now();
            hasLoadedData = true;
            updateStats();
            showDashboard();
            refreshChatList();
            if (!isPrivacyModeEnabled() && isPersistLocalEnabled()) {
                lastSavedSessionAt = Date.now();
                saveChatDataFn(chatData, currentFile);
            }
            updateRetentionStatus();
            showLoading(false);

            // Notify user how many files were merged
            showToast(`${jsonFiles.length}개 파일 병합 완료 · 총 ${merged.length.toLocaleString()}개 대화`);
        }).catch(err => {
            console.error('[MultiUpload] Unexpected error:', err);
            alert('파일을 처리하는 중 오류가 발생했습니다.');
            showLoading(false);
        });
    }

    function readFile(file, encoding) {
        showLoading(true);
        // Detect file type by extension
        const isJson = file.name.toLowerCase().endsWith('.json');

        const reader = new FileReader();
        reader.onload = (event) => {
            currentFileText = event.target.result;

            if (isJson) {
                try {
                    const jsonData = JSON.parse(currentFileText);
                    processJSONData(jsonData).then(() => {
                        lastLoadedAt = Date.now();
                        hasLoadedData = true;
                        updateStats();
                        showDashboard();
                        refreshChatList();
                        if (!isPrivacyModeEnabled() && isPersistLocalEnabled()) {
                            lastSavedSessionAt = Date.now();
                            saveChatDataFn(chatData, file); // Auto-save
                        }
                        updateRetentionStatus();
                        showLoading(false);
                    });
                } catch (e) {
                    alert("JSON 파일 파싱에 실패했습니다. 올바른 형식이 아닙니다.");
                    console.error(e);
                    showLoading(false);
                }
                return;
            }

            // HTML Parsing Logic (Existing)
            // Check if parsing seems successful automatically first
            const success = tryAutoParse(currentFileText);

            if (success) {
                lastLoadedAt = Date.now();
                hasLoadedData = true;
                updateStats();
                showDashboard();
                refreshChatList();
                if (!isPrivacyModeEnabled() && isPersistLocalEnabled()) {
                    lastSavedSessionAt = Date.now();
                    saveChatDataFn(chatData, file); // Auto-save
                }
                updateRetentionStatus();
                showLoading(false);
            } else {
                // If auto parse yields 0 or 1 big chunk (likely fail), show debug modal
                showParsingModal(currentFileText);
                showLoading(false);
            }
        };
        reader.onerror = () => {
            showLoading(false);
        };
        reader.readAsText(file, encoding);
    }

    function refreshChatList() {
        // Legacy script.js owns the data flow; avoid stale cached results from module CacheManager.
        if (typeof CacheManager !== 'undefined') {
            CacheManager.invalidate(null);
        }
        recentKeywordSummaryCache.clear();
        const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
        if (keyword && isHistoryView()) {
            applySearchFilter(keyword);
            return;
        }
        renderList(getFilteredChatData());
    }

    // --- JSON Processing (ChatGPT Export Support) ---
    async function processJSONData(json) {
        chatData = [];

        // Case 1: ChatGPT Export (Array of conversations)
        if (Array.isArray(json)) {
            for (let index = 0; index < json.length; index++) {
                const conv = json[index];
                let title = conv.title || "제목 없음";
                let contentHTML = "";
                let searchText = "";
                let previewText = "";
                let parsed = null;
                let createTime = conv.create_time || null;
                let userText = "";
                let assistantText = "";
                let userCount = 0;
                let assistantCount = 0;

                // ChatGPT structure: mapping -> dict of nodes
                if (conv.mapping) {
                    parsed = parseChatGPTMapping(conv.mapping);
                    contentHTML = parsed.html;
                    // Extract clean text for preview/search from the parsed messages
                    previewText = parsed.preview;  // Use the preview from the last relevant message or first
                    searchText = parsed.fullText.toLowerCase();
                    userText = (parsed.userText || "").toLowerCase();
                    assistantText = (parsed.assistantText || "").toLowerCase();
                    userCount = parsed.userCount || 0;
                    assistantCount = parsed.assistantCount || 0;

                    // Fallback title generation
                    if (!title || title === "New chat" || title === "제목 없음") {
                        // Use the first valid user message as title if available
                        title = parsed.firstUserMessage || previewText.substring(0, 30).split('\n')[0] || "제목 없음";
                    }

                } else if (conv.messages) {
                    // Simple format [Already handled but let's sync the logic if needed]
                    // ... (omitted for brevity, assuming main path is mapping for high fidelity)
                    // Let's just reuse the logic for consistency if possible, but structure is different.
                    // Keeping existing simple logic but enhancing it slightly for subtitle
                    contentHTML = conv.messages.map(msg => {
                        const role = (msg.role || "user").toLowerCase();
                        const roleName = role === 'user' ? 'You' : 'ChatGPT';
                        const containerClass = role === 'user' ? 'user-msg' : 'assistant-msg';
                        const text = msg.content || "";
                        const safeText = formatMessageContent(text);

                        let timeStr = "";
                        const msgTime = msg.create_time || msg.time || 0;
                        if (msgTime > 0) {
                            const date = new Date(msgTime * 1000);
                            const year = date.getFullYear();
                            const month = String(date.getMonth() + 1).padStart(2, '0');
                            const day = String(date.getDate()).padStart(2, '0');
                            const hours = String(date.getHours()).padStart(2, '0');
                            const minutes = String(date.getMinutes()).padStart(2, '0');
                            timeStr = `<span class="timestamp" style="font-size:0.8rem; color:#bbb; font-weight:400; margin-left:8px;">${year}. ${month}. ${day}. ${hours}:${minutes}</span>`;
                        }

                        return `
                        <div class="msg ${containerClass}" style="padding:1rem; margin-bottom:1rem; border-radius:8px;">
                            <div style="display:flex; align-items:center; margin-bottom:0.5rem;">
                                <strong style="color:#444; font-size:0.9rem;">${roleName}</strong>
                                ${timeStr}
                            </div>
                            <div style="line-height:1.6; color:#222;">${safeText}</div>
                        </div>
                    `;
                    }).join('');

                    const fullText = conv.messages.map(m => m.content).join(" ");
                    userText = conv.messages
                        .filter(m => (m.role || "user").toLowerCase() === 'user')
                        .map(m => m.content || '')
                        .join(" ");
                    assistantText = conv.messages
                        .filter(m => (m.role || "assistant").toLowerCase() === 'assistant')
                        .map(m => m.content || '')
                        .join(" ");
                    userCount = conv.messages.filter(m => (m.role || "user").toLowerCase() === 'user').length;
                    assistantCount = conv.messages.filter(m => (m.role || "assistant").toLowerCase() === 'assistant').length;
                    searchText = `${title} ${fullText}`.toLowerCase();
                    userText = userText.toLowerCase();
                    assistantText = assistantText.toLowerCase();
                    previewText = fullText.substring(0, 100); // Simple preview
                    if (!title || title === "제목 없음") {
                        title = fullText.substring(0, 30).split('\n')[0] || "제목 없음";
                    }
                } else {
                    contentHTML = `<pre>${escapeHtml(JSON.stringify(conv, null, 2))}</pre>`;
                    searchText = `${title} ${contentHTML}`.toLowerCase();
                    previewText = "Unknown format";
                    userText = "";
                    assistantText = "";
                    userCount = 0;
                    assistantCount = 0;
                }

                chatData.push({
                    id: index,
                    title: title,
                    subtitle: previewText.substring(0, 80).replace(/\n/g, ' '), // Ensure sidebar preview is rich
                    contentHTML: `<div class="view-content">${contentHTML}</div>`,
                    searchText: searchText,
                    userText: userText,
                    assistantText: assistantText,
                    userCount: userCount,
                    assistantCount: assistantCount,
                    messageTimes: parsed ? parsed.messageTimes : [],
                    createTime: createTime
                });

                if (index % 50 === 0) {
                    await new Promise(resolve => setTimeout(resolve, 0));
                }
            }
        } else {
            chatData.push({
                id: 0,
                title: "JSON 데이터",
                subtitle: "단일 객체 또는 알 수 없는 형식",
                contentHTML: `<pre>${escapeHtml(JSON.stringify(json, null, 2))}</pre>`,
                searchText: JSON.stringify(json).toLowerCase(),
                userText: "",
                assistantText: "",
                userCount: 0,
                assistantCount: 0,
                messageTimes: [],
                createTime: json.create_time || null
            });
        }

        // The upload flow renders the sidebar once via refreshChatList().
    }

    function parseChatGPTMapping(mapping) {
        let messages = [];
        // Traverse mapping to get messages
        Object.values(mapping).forEach(node => {
            if (node.message) {
                const role = node.message.author ? node.message.author.role : "System";
                if (role === 'system' && !node.message.content) return;

                if (node.message.content && node.message.content.parts) {
                    let text = node.message.content.parts.join('\n');

                    // CLEAN NOISE: Remove "citeturn..." artifacts
                    // Matches "citeturn" followed by any combination of "search", "turn", and digits/letters
                    text = text.replace(/citeturn[\w\d]+/g, '');
                    text = text.replace(/【\d+:\d+†source】/g, '');

                    if (text && text.trim() !== "") {
                        messages.push({
                            time: node.message.create_time || 0,
                            role: role,
                            text: text
                        });
                    }
                }
            }
        });

        // Sort: Oldest first
        messages.sort((a, b) => a.time - b.time);

        // Extract metadata for overview
        const fullText = messages.map(m => m.text).join(" ");
        const userText = messages.filter(m => m.role === 'user').map(m => m.text).join(" ");
        const assistantText = messages.filter(m => m.role === 'assistant').map(m => m.text).join(" ");
        const userCount = messages.filter(m => m.role === 'user').length;
        const assistantCount = messages.filter(m => m.role === 'assistant').length;
        const firstUserMessage = messages.find(m => m.role === 'user')?.text || "";
        // Preview: Prefer the *last* message content effectively (most recent context) or first
        // Let's use the last message for preview as it's often the current state
        const lastMsg = messages[messages.length - 1];
        const preview = lastMsg ? lastMsg.text : "";

        const html = messages.map(msg => {
            const roleName = msg.role === 'user' ? 'You' : 'ChatGPT';
            const containerClass = msg.role === 'user' ? 'user-msg' : 'assistant-msg';

            // Format Content (Code blocks, etc.)
            const formattedText = formatMessageContent(msg.text);

            // Format Timestamp
            let timeStr = "";
            if (msg.time > 0) {
                const date = new Date(msg.time * 1000);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                timeStr = `<span class="timestamp" style="font-size:0.8rem; color:#bbb; font-weight:400; margin-left:8px;">${year}. ${month}. ${day}. ${hours}:${minutes}</span>`;
            }

            return `
                <div class="msg ${containerClass}" style="padding:1rem; margin-bottom:1rem; border-radius:8px;">
                    <div style="display:flex; align-items:center; margin-bottom:0.5rem;">
                        <strong style="color:#444; font-size:0.9rem;">${roleName}</strong>
                        ${timeStr}
                    </div>
                    <div style="line-height:1.6; color:#222;">${formattedText}</div>
                </div>
            `;
        }).join('');

        const messageTimes = messages.map(msg => msg.time).filter(time => time > 0);

        return { html, fullText, preview, firstUserMessage, messageTimes, userText, assistantText, userCount, assistantCount };
    }

    function formatMessageContent(rawText) {
        if (!rawText) return "";

        // 1. Split by code blocks
        // Regex to capture ```lang ... ```
        const parts = rawText.split(/(```[\s\S]*?```)/g);

        return parts.map(part => {
            if (part.startsWith('```')) {
                // It is a code block
                // Structure: ```language\n code \n```
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = match[1] || "code";
                    const code = match[2];
                    const safeCode = escapeHtml(code.trim());

                    // New Collapsible Structure
                    return `
                        <div class="code-container">
                            <div class="code-header">
                                <span>${escapeHtml(lang)}</span>
                            </div>
                            <pre class="code-content"><code>${safeCode}</code></pre>
                            <button class="toggle-code-btn">Show Full Code ⌄</button>
                        </div>
                    `;
                }
                return escapeHtml(part);
            } else {
                let processed = escapeHtml(part);
                processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                processed = processed.replace(/\n/g, '<br>');
                return processed;
            }
        }).join('');
    }

    // --- 2. Parsing Modal Logic ---
    function showParsingModal(text) {
        parseModal.classList.remove('hidden');

        // Show context preview (first 500 chars)
        const preview = text.substring(0, 500);
        filePreview.textContent = preview;

        // Simple encoding check
        if (preview.includes('\uFFFD')) {
            encodingWarning.classList.remove('hidden');
        } else {
            encodingWarning.classList.add('hidden');
        }

        // Analyze and Suggest Selectors
        const suggestedContainer = document.getElementById('suggested-selectors-container');
        const suggestedTags = document.getElementById('suggested-tags');


        suggestedTags.innerHTML = '';
        const suggestions = analyzeStructure(text);

        if (suggestions.length > 0) {
            suggestedContainer.classList.remove('hidden');
            suggestions.forEach(item => {
                const badge = document.createElement('span');
                badge.className = 'suggestion-badge';
                badge.textContent = `${item.selector} (${item.count}개)`;
                badge.style.cssText = "background:#eee; padding:4px 8px; border-radius:12px; font-size:0.8rem; cursor:pointer; border:1px solid #ddd;";

                badge.addEventListener('click', () => {
                    // Set radio to selector
                    const radio = document.querySelector('input[value="selector"]');
                    if (radio) radio.checked = true;
                    // Trigger change to show input
                    if (radio) radio.dispatchEvent(new Event('change'));

                    customSelectorInput.classList.remove('hidden');
                    customSelectorInput.value = item.selector;
                });
                suggestedTags.appendChild(badge);
            });
        } else {
            suggestedContainer.classList.add('hidden');
        }
    }

    // Helper: Analyze frequent tags and classes
    function analyzeStructure(htmlText) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        // Count common structural tags
        const classCounts = {};
        const tagCounts = {};

        // Use a walker or querySelectorAll('*')
        // Limiting to body to be safe
        const elements = doc.body.querySelectorAll('*');

        elements.forEach(el => {
            // Count classes
            if (el.classList.length > 0) {
                el.classList.forEach(cls => {
                    if (classCounts[cls]) classCounts[cls]++;
                    else classCounts[cls] = 1;
                });
            }
            // Count semantic tags
            const tagName = el.tagName.toLowerCase();
            if (['h1', 'h2', 'h3', 'h4', 'div', 'section', 'article', 'li', 'tr', 'p'].includes(tagName)) {
                if (tagCounts[tagName]) tagCounts[tagName]++;
                else tagCounts[tagName] = 1;
            }
        });

        // Filter and Sort
        const candidates = [];

        // 1. Classes > 2 repetition
        Object.entries(classCounts).forEach(([cls, count]) => {
            if (count > 2) {
                candidates.push({ selector: '.' + cls, count: count });
            }
        });

        // 2. Tags > 2 repetition
        Object.entries(tagCounts).forEach(([tag, count]) => {
            if (count > 2) {
                candidates.push({ selector: tag, count: count });
            }
        });

        // Sort by count desc
        candidates.sort((a, b) => b.count - a.count);

        // Return top 15
        return candidates.slice(0, 15);
    }

    // Reload with different encoding
    reloadFileBtn.addEventListener('click', () => {
        if (!currentFile) return;
        currentEncoding = encodingSelect.value;
        readFile(currentFile, currentEncoding);
        // Note: readFile triggers showParsingModal again if parse fails. 
        // We might want to just close the modal temporarily or show a loading state. 
        // For simplicity, it just updates the view.
    });

    // Strategy Selection UI
    radioInputs.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'selector') {
                customSelectorInput.classList.remove('hidden');
            } else {
                customSelectorInput.classList.add('hidden');
            }
        });
    });

    // Apply Manual Parsing
    applyParsingBtn.addEventListener('click', () => {
        const strategy = document.querySelector('input[name="split-strategy"]:checked').value;
        let selector = null;

        if (strategy === 'selector') {
            selector = customSelectorInput.value.trim();
            if (!selector) {
                alert("선택자를 입력해주세요.");
                return;
            }
        }

        processData(currentFileText, selector); // Force parse with specific selector if given
        updateStats();

        parseModal.classList.add('hidden');
        showDashboard();
    });

    cancelModalBtn.addEventListener('click', () => {
        parseModal.classList.add('hidden');
        // Reset to initial state
        fileInput.value = '';
    });


    // --- 3. Core Logic & Parsing ---

    function tryAutoParse(htmlText) {
        // Try to parse silently. If result count > 1, assume success.
        // If 1, check if title is "전체 대화" (fallback).
        processData(htmlText);

        // Success criteria: found more than 1 item, or found 1 item that IS NOT the fallback
        if (chatData.length > 1) return true;
        if (chatData.length === 1 && chatData[0].id !== 9999) return true;

        return false; // Fail, show modal
    }

    function processData(htmlText, customSelector = null) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        let nodes = [];
        let mode = 'auto';

        if (customSelector) {
            mode = 'custom';
            try {
                nodes = Array.from(doc.querySelectorAll(customSelector));
            } catch (e) {
                console.error("Invalid selector", e);
            }
        } else {
            // Auto detection priority
            // 1. .conversation (Standard for some exports)
            nodes = Array.from(doc.querySelectorAll('.conversation'));
            if (nodes.length > 0) mode = 'class';

            // 2. h3 (Old standard)
            if (nodes.length === 0) {
                const headers = Array.from(doc.querySelectorAll('h3'));
                if (headers.length > 0) {
                    mode = 'header';
                    nodes = headers;
                }
            }

            // 3. .message, .msg (Common alternatives)
            if (nodes.length === 0) {
                nodes = Array.from(doc.querySelectorAll('.message, .msg, .chat-item'));
                if (nodes.length > 0) mode = 'class';
            }
        }

        chatData = [];

        if (nodes.length > 0) {
            if (mode === 'header') {
                // Header based grouping
                nodes.forEach((header, index) => {
                    let contentHTML = header.outerHTML;
                    let textContent = header.innerText;
                    let sibling = header.nextSibling;

                    while (sibling && (sibling.nodeName !== 'H3')) { // Crude check matching the start tag
                        if (sibling.nodeType === Node.ELEMENT_NODE) {
                            contentHTML += sibling.outerHTML;
                            textContent += ' ' + sibling.innerText;
                        } else if (sibling.nodeType === Node.TEXT_NODE) {
                            contentHTML += sibling.textContent;
                            textContent += ' ' + sibling.textContent;
                        }
                        sibling = sibling.nextSibling;
                    }

                    chatData.push(createChatItem(index, textContent, contentHTML));
                });
            } else {
                // Node based (class, custom selector)
                nodes.forEach((node, index) => {
                    chatData.push(createChatItem(index, node.innerText, node.outerHTML));
                });
            }
        } else {
            // Fallback: entire doc
            const bodyContent = doc.body.innerHTML;
            const textContent = doc.body.innerText.trim();
            chatData.push({
                id: 9999, // Magic ID for fallback
                title: "전체 대화 내용 (파싱 실패)",
                subtitle: "구조를 인식할 수 없어 전체 내용을 표시합니다.",
                contentHTML: bodyContent,
                searchText: textContent.toLowerCase()
            });
        }

        renderList(getFilteredChatData());
    }

    function createChatItem(id, text, html) {
        const textContent = text.trim();
        return {
            id: id,
            title: extractTitle(textContent),
            subtitle: textContent.substring(0, 100).replace(/\n/g, ' '),
            contentHTML: html,
            searchText: `${extractTitle(textContent)} ${textContent}`.toLowerCase(),
            userText: "",
            assistantText: "",
            userCount: 0,
            assistantCount: 0
        };
    }

    // --- Helpers ---

    function setLastView(view) {
        try {
            localStorage.setItem(VIEW_STORAGE_KEY, view);
        } catch (e) {
            console.warn('Failed to persist view state', e);
        }
    }

    function getLastView() {
        try {
            return localStorage.getItem(VIEW_STORAGE_KEY);
        } catch (e) {
            console.warn('Failed to read view state', e);
            return null;
        }
    }

    function setHasDataFlag(hasData) {
        try {
            if (hasData) {
                localStorage.setItem(HAS_DATA_KEY, 'true');
            } else {
                localStorage.removeItem(HAS_DATA_KEY);
            }
        } catch (e) {
            console.warn('Failed to persist data flag', e);
        }
    }

    function getHasDataFlag() {
        try {
            return localStorage.getItem(HAS_DATA_KEY) === 'true';
        } catch (e) {
            console.warn('Failed to read data flag', e);
            return false;
        }
    }

    function applyLastView(defaultView) {
        const view = getLastView() || defaultView;
        if (view === 'dashboard') {
            showDashboardView();
        } else if (view === 'mypage') {
            showMyPageView();
        } else if (view === 'settings') {
            showSettingsView();
        } else if (view === 'history') {
            showHistoryView();
        }
    }

    function maybeAutoRevealSidebar(delayMs = 0) {
        const hasAnyData = hasLoadedData || (Array.isArray(chatData) && chatData.length > 0);
        if (!hasAnyData) return;

        // Don't auto-reveal if user has manually toggled
        if (userSidebarOverride) return;

        // Don't auto-reveal if already expanded
        if (!sidebar || !sidebar.classList.contains('collapsed')) {
            didAutoRevealSidebar = true; // Mark as done to prevent future attempts
            return;
        }

        // Only reveal once
        if (didAutoRevealSidebar) return;
        didAutoRevealSidebar = true;

        setTimeout(() => {
            // Double-check it's still collapsed before revealing
            if (!sidebar || !sidebar.classList.contains('collapsed')) return;

            // Force layout so the width transition is observable right after the dashboard becomes visible.
            // eslint-disable-next-line no-unused-expressions
            sidebar && sidebar.offsetWidth;
            setSidebarCollapsed(false, true); // Save preference as expanded
        }, delayMs);
    }

    function showDashboard(defaultView = 'history') {
        if (uploadScreen) {
            uploadScreen.classList.add('hidden');
            setTimeout(() => {
                uploadScreen.style.display = 'none';
                dashboard.style.display = 'flex';
                requestAnimationFrame(() => {
                    dashboard.classList.remove('hidden');
                    // Reveal after dashboard becomes visible so the animation is observable.
                    maybeAutoRevealSidebar(120);
                });
            }, 500);
        } else {
            dashboard.style.display = 'flex';
            dashboard.classList.remove('hidden');
            maybeAutoRevealSidebar(0);
        }
        setHistoryFixedHeaderVisible(false);
        updateEmptyState();
        if (defaultView === 'history') {
            showHistoryView();
        }
    }

    function showDashboardView() {
        if (pageTitle) pageTitle.textContent = '대시보드';
        if (fixedPageTitle) fixedPageTitle.textContent = '대화 기록';
        if (languageSelector) languageSelector.classList.remove('hidden');
        if (analysisBar && analysisBarHostDashboard) {
            analysisBarHostDashboard.appendChild(analysisBar);
            analysisBar.classList.remove('hidden');
        }
        const dashboardView = document.getElementById('dashboard-view');
        if (dashboardView) dashboardView.classList.remove('hidden');
        myPageView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        contentDisplay.classList.add('hidden');
        const header = document.getElementById('content-header');
        if (header) header.classList.remove('hidden');
        setHistoryHeaderSecondaryVisible(false);
        setHistoryFixedHeaderVisible(false);
        setHistorySearchBarVisible(false);
        updateTitleNavButtons();
        updateIconButtonStates('dashboard');
        scheduleAnalyticsCharts();
        scheduleDashboardTopSync();
        setLastView('dashboard');
        // 분석 화면에서는 사이드바를 자동으로 접어 화면을 넓게 사용 (사용자 제안 반영)
        setSidebarCollapsed(true, false);
    }

    function scheduleDashboardTopSync() {
        const dashboardView = document.getElementById('dashboard-view');
        if (!dashboardView) return;

        const sync = () => {
            if (dashboardView.classList.contains('hidden')) return;

            // On narrow layouts the grid collapses to a single column; don't force heights.
            if (window.matchMedia && window.matchMedia('(max-width: 860px)').matches) {
                dashboardView.style.removeProperty('--dashboard-top-height');
                return;
            }

            const statsGrid = dashboardView.querySelector('.dashboard-top .stats-grid');
            if (!statsGrid) return;
            const height = Math.ceil(statsGrid.getBoundingClientRect().height);
            if (height > 0) {
                dashboardView.style.setProperty('--dashboard-top-height', `${height}px`);
            }
        };

        const statsGrid = dashboardView.querySelector('.dashboard-top .stats-grid');
        if (statsGrid && typeof ResizeObserver === 'function') {
            if (!dashboardTopResizeObserver) {
                dashboardTopResizeObserver = new ResizeObserver(() => {
                    // Debounce via rAF to avoid thrashing during chart renders.
                    requestAnimationFrame(sync);
                });
            }
            try {
                dashboardTopResizeObserver.observe(statsGrid);
            } catch (e) { }
        }

        // Wait for layout + charts to render.
        requestAnimationFrame(() => requestAnimationFrame(sync));
        setTimeout(sync, 200);
    }

    function showHistoryView() {
        const activeItem = document.querySelector('.chat-item.active');
        if (pageTitle) pageTitle.textContent = '';
        // Hide language switcher only when viewing an actual conversation body.
        // On the start/upload state (no data) or when no chat is selected, keep it visible.
        if (languageSelector) {
            const shouldHide = !!(hasLoadedData && activeItem);
            languageSelector.classList.toggle('hidden', shouldHide);
        }
        if (activeItem) {
            const itemId = activeItem.dataset.id;
            const activeData = chatData.find(entry => String(entry.id) === String(itemId));
            const titleText = activeData && activeData.title ? activeData.title : '대화 기록';
            if (fixedPageTitle) fixedPageTitle.textContent = titleText;
        } else {
            if (fixedPageTitle) fixedPageTitle.textContent = '대화 기록';
        }
        const dashboardView = document.getElementById('dashboard-view');
        if (dashboardView) dashboardView.classList.add('hidden');
        myPageView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        if (analysisBar) analysisBar.classList.add('hidden');
        contentDisplay.classList.remove('hidden');
        contentDisplay.classList.add('visible');
        const header = document.getElementById('content-header');
        if (header) header.classList.toggle('hidden', !hasLoadedData);
        setHistoryHeaderSecondaryVisible(true);
        setHistoryFixedHeaderVisible(hasLoadedData && !!activeItem);
        setHistorySearchBarVisible(hasLoadedData && !!activeItem);
        if (!activeItem && postUploadPlaceholder) {
            updateEmptyState();
            if (chatContent) chatContent.innerHTML = '';
        }
        updateTitleNavButtons();
        setLastView('history');
    }

    function showMyPageView() {
        if (pageTitle) pageTitle.textContent = '마이페이지';
        if (fixedPageTitle) fixedPageTitle.textContent = '대화 기록';
        if (languageSelector) languageSelector.classList.remove('hidden');
        if (analysisBar && analysisBarHostMyPage) {
            analysisBarHostMyPage.appendChild(analysisBar);
            analysisBar.classList.remove('hidden');
        }
        const dashboardView = document.getElementById('dashboard-view');
        if (dashboardView) dashboardView.classList.add('hidden');
        myPageView.classList.remove('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        contentDisplay.classList.add('hidden');
        const header = document.getElementById('content-header');
        if (header) header.classList.remove('hidden');
        setHistoryHeaderSecondaryVisible(false);
        setHistoryFixedHeaderVisible(false);
        setHistorySearchBarVisible(false);
        updateTitleNavButtons();
        updateIconButtonStates('mypage');
        setMyPageLoadingState();
        scheduleMyPageRefresh();
        setLastView('mypage');
        // 분석 화면에서는 사이드바를 자동으로 접어 화면을 넓게 사용 (사용자 제안 반영)
        setSidebarCollapsed(true, false);
    }

    function setMyPageLoadingState() {
        const loadingText = (() => {
            try {
                const lang = (typeof window.currentLanguage === 'string' && window.currentLanguage)
                    ? window.currentLanguage
                    : (localStorage.getItem('chatbook-language') || document.documentElement.lang || 'en');
                return String(lang).toLowerCase().startsWith('ko') ? '계산 중...' : 'Calculating...';
            } catch (e) {
                return 'Calculating...';
            }
        })();
        const setText = (id, value = loadingText) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.textContent = value;
            el.classList.add('is-calculating');
        };
        const setBox = (id) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.innerHTML = `<div class="chart-loading">${escapeHtml(loadingText)}</div>`;
            el.classList.add('is-calculating');
        };
        const hideEmpty = (id) => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        };

        if (myPageView) myPageView.setAttribute('aria-busy', 'true');
        setText('keyword-recent-summary');
        setBox('topic-map');
        setBox('keyword-chart');
        setText('attitude-summary');
        setText('focus-style-label');
        setText('peak-time-hour');
        const peakTimeChart = document.getElementById('peak-time-chart');
        const peakTimeAxis = document.getElementById('peak-time-axis');
        if (peakTimeChart) peakTimeChart.innerHTML = '<div class="chart-loading chart-loading-fill"></div>';
        if (peakTimeAxis) peakTimeAxis.innerHTML = '';
        ['topic-empty', 'keyword-empty', 'attitude-empty', 'peak-time-empty'].forEach(hideEmpty);

        ['attitude-assistant', 'attitude-debate', 'attitude-emotional'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.width = '33%';
        });
        ['attitude-assistant-pct', 'attitude-debate-pct', 'attitude-emotional-pct'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '--';
        });
    }

    function scheduleMyPageRefresh() {
        if (pendingMyPageRefresh) {
            clearTimeout(pendingMyPageRefresh);
            pendingMyPageRefresh = null;
        }

        requestAnimationFrame(() => {
            pendingMyPageRefresh = setTimeout(() => {
                pendingMyPageRefresh = null;
                if (getActiveAnalyticsView() !== 'mypage') return;
                updateStats();
            }, 60);
        });
    }

    function showSettingsView() {
        if (pageTitle) pageTitle.textContent = '설정';
        if (fixedPageTitle) fixedPageTitle.textContent = '대화 기록';
        if (languageSelector) languageSelector.classList.remove('hidden');
        if (analysisBar) analysisBar.classList.add('hidden');
        const dashboardView = document.getElementById('dashboard-view');
        if (dashboardView) dashboardView.classList.add('hidden');
        myPageView.classList.add('hidden');
        if (settingsView) settingsView.classList.remove('hidden');
        contentDisplay.classList.add('hidden');
        const header = document.getElementById('content-header');
        if (header) header.classList.remove('hidden');
        setHistoryHeaderSecondaryVisible(false);
        setHistoryFixedHeaderVisible(false);
        setHistorySearchBarVisible(false);
        updateTitleNavButtons();
        updateIconButtonStates('settings');
        updateTokenEstimates();
        setLastView('settings');
        // 설정 화면에서도 사이드바를 자동으로 접어 화면을 넓게 사용
        setSidebarCollapsed(true, false);
    }

    function updateIconButtonStates(activeView) {
        // activeView can be 'dashboard', 'mypage', or 'settings'
        if (dashboardBtn) {
            dashboardBtn.classList.toggle('active', activeView === 'dashboard');
        }
        if (myPageBtn) {
            myPageBtn.classList.toggle('active', activeView === 'mypage');
        }
        if (settingsBtn) {
            settingsBtn.classList.toggle('active', activeView === 'settings');
        }
    }



    function extractTitle(text) {
        if (!text) return "제목 없음";
        // Clean whitespace but preserve some structure for logic
        const cleanText = text.replace(/\s+/g, ' ').trim();

        // Strategy:
        // 1. If starts with number + dot (e.g. "1. "), take the whole sentence/line.
        // 2. Otherwise take first sentence ending with . ? !
        // 3. Fallback to first 50 chars.

        // Check for number bullet
        const numberMatch = cleanText.match(/^([0-9]+\.)\s+(.*)/);
        if (numberMatch) {
            // It starts with "1. Something..."
            // Take the number and the following text up to a reasonable length or punctuation
            // Actually, if it's "3. Error...", we want "3. Error..."
            // Let's take the first 60 chars of this line.
            let rest = numberMatch[0]; // The whole match
            if (rest.length > 50) {
                // Try to cut at punctuation
                const punctMatch = rest.match(/^.*?[.?!](\s|$)/);
                if (punctMatch) return punctMatch[0];
                return rest.substring(0, 50) + "...";
            }
            return rest;
        }

        const sentenceMatch = cleanText.match(/^.*?[.?!](\s|$)/);
        let title = sentenceMatch ? sentenceMatch[0] : cleanText.substring(0, 50);
        if (title.length > 80) title = title.substring(0, 80) + "...";
        return title;
    }

    function createChatListItem(item) {
        const li = document.createElement('li');
        li.className = 'chat-item';
        li.dataset.id = item.id;
        li.innerHTML = `
            <span class="chat-title">${escapeHtml(item.title)}</span>
            <span class="chat-preview">${escapeHtml(item.subtitle)}</span>
        `;
        li.addEventListener('click', () => loadContent(item, li));
        return li;
    }

    function appendChatListBatch() {
        if (!chatListElement) return;
        if (chatListRenderState.renderedCount >= chatListRenderState.items.length) return;

        const existingLoadMore = chatListElement.querySelector('.chat-list-load-more');
        if (existingLoadMore) existingLoadMore.remove();

        const items = chatListRenderState.items;
        const start = chatListRenderState.renderedCount;
        const end = Math.min(start + CHAT_LIST_BATCH_SIZE, items.length);
        const fragment = document.createDocumentFragment();

        for (let index = start; index < end; index += 1) {
            fragment.appendChild(createChatListItem(items[index]));
        }

        chatListRenderState.renderedCount = end;

        if (end < items.length) {
            const remaining = items.length - end;
            const loadMoreItem = document.createElement('li');
            loadMoreItem.className = 'chat-list-load-more';
            loadMoreItem.innerHTML = `<button type="button">더 보기 (${remaining.toLocaleString()}개)</button>`;
            const button = loadMoreItem.querySelector('button');
            if (button) {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    appendChatListBatch();
                });
            }
            fragment.appendChild(loadMoreItem);
        }

        chatListElement.appendChild(fragment);
        updateTitleNavButtons();
    }

    function maybeAppendChatListOnScroll() {
        if (!chatListElement) return;
        if (pendingChatListAppend) return;
        if (chatListRenderState.renderedCount >= chatListRenderState.items.length) return;

        const remainingScroll = chatListElement.scrollHeight - chatListElement.scrollTop - chatListElement.clientHeight;
        if (remainingScroll > CHAT_LIST_SCROLL_THRESHOLD) return;

        pendingChatListAppend = true;
        requestAnimationFrame(() => {
            pendingChatListAppend = false;
            appendChatListBatch();
        });
    }

    function renderList(items) {
        const safeItems = Array.isArray(items) ? items : [];
        chatListRenderState = {
            items: safeItems,
            renderedCount: 0
        };
        chatListElement.innerHTML = '';
        chatListElement.scrollTop = 0;
        if (safeItems.length === 0) {
            chatListElement.innerHTML = '<li style="padding:1rem; color:#888; text-align:center;">검색 결과가 없습니다.</li>';
            updateTitleNavButtons();
            return;
        }

        appendChatListBatch();
    }

    function getVisibleChatItems() {
        return Array.from(document.querySelectorAll('.chat-item'));
    }

    function findRenderedChatElementById(itemId) {
        return getVisibleChatItems().find(item => String(item.dataset.id) === String(itemId));
    }

    function getChatListEntryId(entry) {
        if (!entry) return null;
        if (entry.dataset && entry.dataset.id !== undefined) return entry.dataset.id;
        if (entry.id !== undefined) return entry.id;
        return null;
    }

    function ensureChatListIndexRendered(targetIndex) {
        while (
            targetIndex >= chatListRenderState.renderedCount &&
            chatListRenderState.renderedCount < chatListRenderState.items.length
        ) {
            appendChatListBatch();
        }
    }

    function updateTitleNavButtons() {
        const navButtons = Array.from(document.querySelectorAll('.history-nav-btn'));
        if (navButtons.length === 0) return;
        const dashboardView = document.getElementById('dashboard-view');
        const isHistoryView = !(
            (dashboardView && !dashboardView.classList.contains('hidden')) ||
            (myPageView && !myPageView.classList.contains('hidden')) ||
            (settingsView && !settingsView.classList.contains('hidden'))
        );
        if (!isHistoryView) {
            navButtons.forEach(btn => {
                btn.classList.add('is-hidden');
                btn.classList.add('is-disabled');
                btn.setAttribute('aria-hidden', 'true');
                btn.setAttribute('aria-disabled', 'true');
                if (btn.tagName === 'BUTTON') btn.disabled = true;
            });
            return;
        }
        navButtons.forEach(btn => {
            btn.classList.remove('is-hidden');
            btn.removeAttribute('aria-hidden');
        });
        const items = chatListRenderState.items && chatListRenderState.items.length > 0
            ? chatListRenderState.items
            : getVisibleChatItems();
        if (items.length === 0) {
            navButtons.forEach(btn => {
                btn.classList.add('is-disabled');
                btn.setAttribute('aria-disabled', 'true');
                if (btn.tagName === 'BUTTON') btn.disabled = true;
            });
            return;
        }
        const activeElement = document.querySelector('.chat-item.active');
        const activeId = activeElement ? activeElement.dataset.id : null;
        const activeIndex = activeId === null
            ? -1
            : items.findIndex(item => String(getChatListEntryId(item)) === String(activeId));
        const canPrev = activeIndex !== 0 && activeIndex !== -1 ? true : activeIndex === -1;
        const canNext = activeIndex !== items.length - 1 && activeIndex !== -1 ? true : activeIndex === -1;
        navButtons.forEach(btn => {
            const direction = btn.dataset.direction || (btn.classList.contains('left') ? 'prev' : 'next');
            const enabled = direction === 'prev' ? canPrev : canNext;
            btn.classList.toggle('is-disabled', !enabled);
            btn.setAttribute('aria-disabled', String(!enabled));
            if (btn.tagName === 'BUTTON') btn.disabled = !enabled;
        });
    }

    function loadChatByIndex(targetIndex) {
        const items = chatListRenderState.items && chatListRenderState.items.length > 0
            ? chatListRenderState.items
            : getVisibleChatItems();
        if (items.length === 0) return;
        if (targetIndex < 0 || targetIndex >= items.length) return;
        ensureChatListIndexRendered(targetIndex);
        const target = items[targetIndex];
        const itemId = getChatListEntryId(target);
        const itemElement = findRenderedChatElementById(itemId);
        const item = chatData.find(entry => String(entry.id) === String(itemId));
        if (!item) return;
        loadContent(item, itemElement);
        if (itemElement) itemElement.scrollIntoView({ block: 'nearest' });
        updateTitleNavButtons();
    }

    function handleTitleNav(direction) {
        const items = chatListRenderState.items && chatListRenderState.items.length > 0
            ? chatListRenderState.items
            : getVisibleChatItems();
        if (items.length === 0) return;
        const activeElement = document.querySelector('.chat-item.active');
        const activeId = activeElement ? activeElement.dataset.id : null;
        const activeIndex = activeId === null
            ? -1
            : items.findIndex(item => String(getChatListEntryId(item)) === String(activeId));
        let targetIndex = activeIndex;
        if (activeIndex === -1) {
            targetIndex = 0;
        } else {
            targetIndex = activeIndex + (direction === 'prev' ? -1 : 1);
        }
        loadChatByIndex(targetIndex);
    }

    function loadContent(item, liElement) {
        document.querySelectorAll('.chat-item').forEach(el => el.classList.remove('active'));
        if (liElement) liElement.classList.add('active');

        // Show header and reset search
        const header = document.getElementById('content-header');
        if (header) header.classList.remove('hidden');
        if (pageTitle) pageTitle.textContent = '';
        if (fixedPageTitle) {
            fixedPageTitle.textContent = item && item.title ? item.title : '대화 기록';
        }

        if (emptyState) emptyState.classList.add('hidden');
        if (postUploadPlaceholder) postUploadPlaceholder.classList.add('hidden');
        if (chatContent) {
            chatContent.innerHTML = item.contentHTML;
            insertMessageCount(item);
            attachContentDownload(item);
        }
        myPageView.classList.add('hidden');
        contentDisplay.classList.remove('hidden');
        if (mainContent) {
            // 즉시 최하단으로 이동 (채팅앱 UX)
            mainContent.scrollTop = mainContent.scrollHeight;
            // 이미지가 로드되면서 높이가 변할 수 있으므로 한 번 더 실행
            requestAnimationFrame(() => {
                mainContent.scrollTop = mainContent.scrollHeight;
            });
        }
        updateTitleNavButtons();
        // 채팅 내용을 볼 때는 사이드바를 다시 펼침
        setSidebarCollapsed(false, false);

        // Restore in-content search state when navigating between pages/chats.
        if (historySearchInput) {
            const keyword = historySearchInput.value.trim().toLowerCase();
            if (keyword) {
                setHistorySearchBarVisible(true);
                setHistorySearchExpanded(true);
                highlightChatContent(keyword);
            }
        }
    }

    function insertMessageCount(item) {
        if (!chatContent) return;
        const existing = chatContent.querySelector('.message-count');
        if (existing) existing.remove();
        const firstMsg = chatContent.querySelector('.msg');
        if (!firstMsg) return;
        const totalCount = typeof item?.userCount === 'number' && typeof item?.assistantCount === 'number'
            ? item.userCount + item.assistantCount
            : chatContent.querySelectorAll('.msg').length;
        const countEl = document.createElement('div');
        countEl.className = 'message-count';
        countEl.innerHTML = `
            <span class="message-count-text">메시지 ${totalCount}개</span>
            <button class="message-download-btn" type="button">다운로드</button>
        `;
        firstMsg.parentNode.insertBefore(countEl, firstMsg);
    }

    function attachContentDownload(item) {
        if (!chatContent) return;
        const downloadBtn = chatContent.querySelector('.message-download-btn');
        if (!downloadBtn) return;
        downloadBtn.addEventListener('click', () => {
            const messages = Array.from(chatContent.querySelectorAll('.msg'));
            if (!messages.length) return;
            const lines = messages.map(msg => {
                const role = msg.classList.contains('user-msg') ? 'User' : msg.classList.contains('assistant-msg') ? 'Assistant' : 'System';
                const textEl = msg.querySelector('div[style*="line-height"]') || msg;
                const text = (textEl.textContent || '').trim();
                return `[${role}]\n${text}`;
            });
            const content = lines.join('\n\n');
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            const rawTitle = (item?.title || 'chat').trim() || 'chat';
            const safeTitle = rawTitle.replace(/[\\/:*?"<>|]/g, '-').slice(0, 60);
            link.download = `${safeTitle}.txt`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        }, { once: true });
    }

    function getDayKeyFromMs(ms) {
        const d = new Date(ms);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }

    function buildStatsSummary(data) {
        const items = Array.isArray(data) ? data : [];
        let minMs = null;
        let maxMs = null;
        let totalMessages = 0;
        let hasMessageCounts = false;
        let totalChars = 0;
        const activeDayKeys = new Set();

        items.forEach(item => {
            const times = Array.isArray(item.messageTimes) ? item.messageTimes : [];
            if (times.length > 0) {
                times.forEach(ts => {
                    const n = Number(ts);
                    if (!Number.isFinite(n) || n <= 0) return;
                    const ms = n * 1000;
                    if (minMs === null || ms < minMs) minMs = ms;
                    if (maxMs === null || ms > maxMs) maxMs = ms;
                    activeDayKeys.add(getDayKeyFromMs(ms));
                });
            } else if (item && item.createTime) {
                const n = Number(item.createTime);
                if (Number.isFinite(n) && n > 0) {
                    const ms = n * 1000;
                    if (minMs === null || ms < minMs) minMs = ms;
                    if (maxMs === null || ms > maxMs) maxMs = ms;
                    activeDayKeys.add(getDayKeyFromMs(ms));
                }
            }

            const msgCount = (item.userCount || 0) + (item.assistantCount || 0);
            if (msgCount > 0) hasMessageCounts = true;
            totalMessages += msgCount;
            const text = `${item.userText || ''}${item.assistantText || ''}`;
            totalChars += text.length > 0 ? text.length : (item.searchText ? item.searchText.length : 0);
        });

        return {
            totalChats: items.length,
            minMs,
            maxMs,
            activeDays: activeDayKeys.size,
            totalMessages,
            hasMessageCounts,
            totalChars
        };
    }

    function getCachedStatsSummary(data) {
        if (!Array.isArray(data)) return buildStatsSummary(data);
        const cached = statsSummaryCache.get(data);
        if (cached) {
            return cached;
        }
        const result = buildStatsSummary(data);
        statsSummaryCache.set(data, result);
        return result;
    }

    function updateStats() {
        const activeAnalyticsView = getActiveAnalyticsView();
        const listData = getFilteredChatData();
        const analyticsData = getAnalyticsData();
        const statsData = activeAnalyticsView === 'dashboard' ? analyticsData : listData;
        const summary = getCachedStatsSummary(statsData);
        if (statTotalChats) statTotalChats.textContent = summary.totalChats;

        const getUiLanguage = () => {
            try {
                const stored = localStorage.getItem('chatbook-language');
                if (stored) return stored;
            } catch (e) { }
            const htmlLang = document && document.documentElement ? document.documentElement.lang : '';
            return htmlLang || 'en';
        };

        const translate = (key, fallback, vars = {}) => {
            try {
                const lang = getUiLanguage();
                const dict = typeof window.translations === 'object'
                    ? window.translations
                    : (typeof translations === 'object' ? translations : null);
                const raw = (dict && dict[lang] && dict[lang][key]) ? dict[lang][key] : fallback;
                return String(raw).replace(/\{(\w+)\}/g, (_, name) => (vars[name] !== undefined ? String(vars[name]) : `{${name}}`));
            } catch (e) {
                return fallback;
            }
        };

        const formatYmd = (ms) => {
            const d = new Date(ms);
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${day}`;
        };

        const getDayStartMs = (ms) => {
            const d = new Date(ms);
            return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
        };

        if (statFreshness || statDateRange || statActiveDays) {
            if (summary.minMs === null || summary.maxMs === null) {
                if (statFreshness) statFreshness.textContent = '-';
                if (statDateRange) statDateRange.textContent = '-';
                if (statActiveDays) statActiveDays.textContent = '-';
            } else {
                if (statDateRange) {
                    statDateRange.textContent = `${formatYmd(summary.minMs)} ~ ${formatYmd(summary.maxMs)}`;
                }

                const todayStart = new Date();
                todayStart.setHours(0, 0, 0, 0);
                const latestDayStart = getDayStartMs(summary.maxMs);
                const daysAgo = Math.max(0, Math.floor((todayStart.getTime() - latestDayStart) / 86400000));
                if (statFreshness) {
                    const lang = getUiLanguage();
                    const isKo = String(lang).toLowerCase().includes('ko');
                    if (daysAgo === 0) statFreshness.textContent = translate('freshness-today', 'Today');
                    else if (daysAgo === 1 && !isKo) statFreshness.textContent = translate('freshness-yesterday', 'Yesterday');
                    else statFreshness.textContent = translate('freshness-days-ago', `${daysAgo} days ago`, { n: daysAgo });
                }

                if (statActiveDays) {
                    const lang = getUiLanguage();
                    const isKo = String(lang).toLowerCase().includes('ko');
                    statActiveDays.textContent = isKo ? `${summary.activeDays}일` : `${summary.activeDays} days`;
                }
            }
        }

        if (mypageFilename) {
            if (currentFile && currentFile._isMulti) {
                mypageFilename.textContent = `${currentFile._count}개 파일 병합 (${currentFile.name})`;
            } else {
                mypageFilename.textContent = currentFile ? currentFile.name : '-';
            }
        }
        if (mypageFilesize) {
            const size = currentFile && currentFile.size ? `${Math.round(currentFile.size / 1024)} KB` : '-';
            mypageFilesize.textContent = size;
        }
        if (dashboardFileName) {
            if (currentFile && currentFile._isMulti) {
                dashboardFileName.textContent = `${currentFile._count}개 파일 병합`;
            } else {
                dashboardFileName.textContent = currentFile ? currentFile.name : '-';
            }
        }
        if (dashboardUploadSummary) {
            const count = chatData.length;
            dashboardUploadSummary.textContent = `업로드 완료 · 대화 ${count}개`;
        }
        updateUploadCard();
        if (mypageTotalChats) mypageTotalChats.textContent = chatData.length;
        const allDataSummary = statsData === chatData ? summary : getCachedStatsSummary(chatData);
        if (mypageTotalMessages) {
            mypageTotalMessages.textContent = allDataSummary.hasMessageCounts ? allDataSummary.totalMessages.toLocaleString() : '-';
        }
        if (mypageTotalChars) {
            mypageTotalChars.textContent = allDataSummary.totalChars > 0 ? allDataSummary.totalChars.toLocaleString() : '-';
        }
        if (mypageLastLoaded) {
            const lastLoaded = lastLoadedAt ? new Date(lastLoadedAt) : null;
            mypageLastLoaded.textContent = lastLoaded ? lastLoaded.toLocaleString() : '-';
        }
        updateTokenEstimates();
        if (chatData.length === 0 && chatListElement) {
            chatListElement.innerHTML = '';
        }
        const keywordChart = document.getElementById('keyword-chart');
        if (chatData.length === 0 && keywordChart) {
            keywordChart.innerHTML = '';
        }
        if (quickMode === 'all' && (!filterByDateToggle || !filterByDateToggle.checked)) {
            const rangeStamp = getKeywordDataStamp(chatData);
            if (fullRangeAppliedStamp !== rangeStamp) {
                setFullRangeInputsFromData();
                fullRangeAppliedStamp = rangeStamp;
            }
        }
        scheduleAnalyticsCharts();
    }

    function updateUploadCard() {
        if (!uploadIntro || !uploadStatus) return;
        const hasData = hasLoadedData || chatData.length > 0;

        // Normalize dropdown state when transitioning between intro/status.
        // This prevents "click does nothing" issues caused by stale expanded/hidden-height combos.
        if (lastUploadCardHasData !== hasData) {
            if (hasData) {
                if (uploadIntro) uploadIntro.classList.remove('expanded');
                if (uploadDropdownArea) uploadDropdownArea.classList.add('hidden-height');
                // Restore the last open/closed state of the File Management dropdown across refresh.
                applyUploadStatusExpanded(getUploadStatusExpandedPreference());
            } else {
                if (uploadStatus) uploadStatus.classList.remove('expanded');
                if (statusUploadDropdownArea) statusUploadDropdownArea.classList.add('hidden-height');
                setUploadStatusExpandedPreference(false);
                updateStatusUploadToggleLabel();
            }
            lastUploadCardHasData = hasData;
        }

        uploadIntro.classList.toggle('hidden', hasData);
        uploadStatus.classList.toggle('hidden', !hasData);
        if (placeholderMessage) {
            placeholderMessage.textContent = hasData
                ? '이제 왼쪽 목록에서 대화를 선택하거나, 아래 데이터를 확인해보세요.'
                : '파일을 업로드하고 나만의 채팅 기록을 관리해보세요.';
        }
    }

    function estimateTokensFromText(text) {
        if (!text) return 0;
        let cjkChars = 0;
        let otherChars = 0;
        const cjkRegex = /[\uAC00-\uD7A3\u3040-\u30FF\u4E00-\u9FFF]/;
        for (const ch of text) {
            if (cjkRegex.test(ch)) {
                cjkChars += 1;
            } else {
                otherChars += 1;
            }
        }
        return Math.max(0, Math.round(cjkChars / 2 + otherChars / 4));
    }

    function estimateTokensFromData(data) {
        let total = 0;
        data.forEach(item => {
            const primaryText = `${item.userText || ''} ${item.assistantText || ''}`.trim();
            const text = primaryText.length > 0 ? primaryText : (item.searchText || '');
            total += estimateTokensFromText(text);
        });
        return total;
    }

    function getRoleTextRaw(item, role) {
        if (!item) return '';
        if (role === 'user') {
            if (item.userText && item.userText.trim().length > 0) return item.userText;
            const extracted = extractRoleTextFromHtml(item.contentHTML, 'user');
            if (extracted) item.userText = extracted;
            return item.userText || '';
        }
        if (role === 'assistant') {
            if (item.assistantText && item.assistantText.trim().length > 0) return item.assistantText;
            const extracted = extractRoleTextFromHtml(item.contentHTML, 'assistant');
            if (extracted) item.assistantText = extracted;
            return item.assistantText || '';
        }
        return '';
    }

    function estimateTokensByRole(data) {
        let inputTokens = 0;
        let outputTokens = 0;
        (data || []).forEach(item => {
            const userText = getRoleTextRaw(item, 'user');
            const assistantText = getRoleTextRaw(item, 'assistant');
            if (userText) inputTokens += estimateTokensFromText(userText);
            if (assistantText) outputTokens += estimateTokensFromText(assistantText);
            if (!userText && !assistantText && item && item.searchText) {
                inputTokens += estimateTokensFromText(item.searchText);
            }
        });
        return { inputTokens, outputTokens, totalTokens: inputTokens + outputTokens };
    }

    function getCachedTokenEstimate(data) {
        if (tokenEstimateCache.source === data && tokenEstimateCache.result) {
            return tokenEstimateCache.result;
        }
        const result = estimateTokensByRole(data);
        tokenEstimateCache = {
            source: data,
            result
        };
        return result;
    }

    function getSelectedPricingModel() {
        const value = pricingModelSelect ? String(pricingModelSelect.value || '').trim() : '';
        return value || DEFAULT_PRICING_MODEL;
    }

    function getPricingRatesUsd(modelKey) {
        const preset = MODEL_PRICING_USD_PER_1M[modelKey];
        const input = preset ? preset.input : (MODEL_PRICING_USD_PER_1M[DEFAULT_PRICING_MODEL]?.input ?? 0);
        const output = preset ? preset.output : (MODEL_PRICING_USD_PER_1M[DEFAULT_PRICING_MODEL]?.output ?? 0);
        return { input, output };
    }

    function getPricingInputsUsd() {
        const modelKey = getSelectedPricingModel();
        const preset = getPricingRatesUsd(modelKey);

        let input = inputRateUsdInput ? parseFloat(inputRateUsdInput.value) : NaN;
        let output = outputRateUsdInput ? parseFloat(outputRateUsdInput.value) : NaN;

        if (!Number.isFinite(input) || input < 0) input = preset.input;
        if (!Number.isFinite(output) || output < 0) output = preset.output;

        return { modelKey, inputUsdPer1M: input, outputUsdPer1M: output };
    }

    function formatUsd(value) {
        if (!Number.isFinite(value)) return '--';
        return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD`;
    }

    function formatKrw(value) {
        if (!Number.isFinite(value)) return null;
        return `${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}원`;
    }

    function updateTokenEstimates() {
        if (!mypageEstimatedTokens && !mypageEstimatedInputTokens && !mypageEstimatedOutputTokens && !mypageEstimatedCost) return;

        const { inputTokens, outputTokens, totalTokens } = getCachedTokenEstimate(chatData);

        if (mypageEstimatedTokens) mypageEstimatedTokens.textContent = totalTokens.toLocaleString();
        if (mypageEstimatedInputTokens) mypageEstimatedInputTokens.textContent = inputTokens.toLocaleString();
        if (mypageEstimatedOutputTokens) mypageEstimatedOutputTokens.textContent = outputTokens.toLocaleString();

        const { inputUsdPer1M, outputUsdPer1M } = getPricingInputsUsd();
        const costUsd = (inputTokens / 1_000_000) * inputUsdPer1M + (outputTokens / 1_000_000) * outputUsdPer1M;

        let fx = fxKrwPerUsdInput ? parseFloat(fxKrwPerUsdInput.value) : NaN;
        if (!Number.isFinite(fx) || fx <= 0) fx = NaN;
        const costKrw = Number.isFinite(fx) ? costUsd * fx : NaN;

        if (mypageEstimatedCost) {
            const usdLabel = formatUsd(costUsd);
            const krwLabel = formatKrw(costKrw);
            mypageEstimatedCost.textContent = krwLabel ? `${usdLabel} (${krwLabel})` : usdLabel;
        }
    }

    function showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 200);
        }, 1800);
    }

    function escapeHtml(text) {
        if (!text) return text;
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    function createChartTooltip() {
        const tooltip = document.createElement('div');
        tooltip.id = 'chart-tooltip';
        tooltip.className = 'chart-tooltip hidden';
        document.body.appendChild(tooltip);
        return tooltip;
    }

    function showTooltip(text, x, y) {
        if (!chartTooltip) return;
        chartTooltip.textContent = text;
        chartTooltip.style.left = `${x + 12}px`;
        chartTooltip.style.top = `${y + 12}px`;
        chartTooltip.classList.remove('hidden');
    }

    function hideTooltip() {
        if (!chartTooltip) return;
        chartTooltip.classList.add('hidden');
    }

    function scheduleRenderCharts(sourceData, range) {
        if (!isAnalyticsVisible()) return;
        latestChartData = sourceData;
        latestChartRange = range;
        if (pendingChartRender) return;

        // 우선 차트 렌더링
        pendingChartRender = requestAnimationFrame(() => {
            pendingChartRender = null;
            renderChartsOptimized(latestChartData, latestChartRange);
        });
    }

    function isAnalyticsVisible() {
        const dashboardView = document.getElementById('dashboard-view');
        const mypageView = document.getElementById('mypage-view');
        return !!(
            (dashboardView && !dashboardView.classList.contains('hidden')) ||
            (mypageView && !mypageView.classList.contains('hidden'))
        );
    }

    function getActiveAnalyticsView() {
        const dashboardView = document.getElementById('dashboard-view');
        const mypageView = document.getElementById('mypage-view');
        if (dashboardView && !dashboardView.classList.contains('hidden')) return 'dashboard';
        if (mypageView && !mypageView.classList.contains('hidden')) return 'mypage';
        return null;
    }

    // 최적화된 렌더링: 우선순위별로 차트 렌더링
    function renderChartsOptimized(sourceData, range) {
        const visibleData = sourceData || getFilteredChatData();
        const activeView = getActiveAnalyticsView();

        if (deferredChartRender) {
            clearTimeout(deferredChartRender);
            deferredChartRender = null;
        }

        if (activeView === 'dashboard') {
            // 대시보드: 빠른 차트만 렌더링
            renderPriorityCharts(visibleData, range);
            return;
        }

        if (activeView === 'mypage') {
            // Let the My Page view paint first; text analysis can be expensive on large exports.
            deferredChartRender = setTimeout(() => {
                if (getActiveAnalyticsView() !== 'mypage') return;
                renderMyPagePriorityCharts(visibleData, range);
                deferredChartRender = setTimeout(() => {
                    if (getActiveAnalyticsView() !== 'mypage') return;
                    renderDeferredCharts(visibleData, range);
                    deferredChartRender = null;
                }, 120);
            }, 80);
        }
    }

    function getKeywordDataStamp(data) {
        if (!Array.isArray(data) || data.length === 0) return '0:0:0:0';
        let minSec = Infinity;
        let maxSec = 0;
        for (let index = 0; index < data.length; index += 1) {
            const ts = getChatTimestampFast(data[index]);
            if (ts > 0 && ts < minSec) minSec = ts;
            if (ts > maxSec) maxSec = ts;
        }
        const minValue = Number.isFinite(minSec) ? minSec : 0;
        return `${data.length}:${minValue}:${maxSec}:${lastLoadedAt || 0}`;
    }

    function getKeywordStatsCacheKey(data, limit, mode, language) {
        return `${mode}|${language}|${limit}|${getKeywordDataStamp(data)}`;
    }

    function rememberKeywordStats(cacheKey, value) {
        if (keywordStatsCache.size > 48) keywordStatsCache.clear();
        keywordStatsCache.set(cacheKey, value);
        return value;
    }

    function getCachedMyPageStat(type, data, compute) {
        const cacheKey = `${type}|${getKeywordDataStamp(data)}`;
        const cached = myPageStatsCache.get(cacheKey);
        if (cached) return cached;
        const value = compute();
        if (myPageStatsCache.size > 32) myPageStatsCache.clear();
        myPageStatsCache.set(cacheKey, value);
        return value;
    }

    function renderMyPagePriorityCharts(visibleData, range) {
        const keywordRecentSummary = document.getElementById('keyword-recent-summary');
        if (keywordRecentSummary) {
            const keywordMode = keywordModeSelect ? keywordModeSelect.value : 'all';
            const keywordLanguage = keywordLanguageSelect ? keywordLanguageSelect.value : 'all';
            keywordRecentSummary.innerHTML = buildRecentKeywordSummary(visibleData, keywordMode, keywordLanguage);
            keywordRecentSummary.classList.remove('is-calculating');
        }
    }

    // 우선순위 높은 차트들
    function renderPriorityCharts(visibleData, range) {
        const heatmapChart = document.getElementById('heatmap-chart');
        const areaChart = document.getElementById('area-chart');
        const radarChart = document.getElementById('radar-chart');
        const dailyPeakLabel = document.getElementById('daily-peak-date');
        const monthlyPeakLabel = document.getElementById('monthly-peak-month');

        const timeBuckets = buildTimeBuckets(visibleData, range);
        const heatmapData = buildHeatmapData(timeBuckets.daily, 420);
        const monthlyData = buildMonthlySeries(timeBuckets.monthly);
        const hourlyData = buildHourlyStats(timeBuckets.hourly);

        // Heatmap 렌더링
        if (heatmapChart) {
            const heatmapEmpty = document.getElementById('heatmap-empty');
            heatmapChart.innerHTML = '';
            if (!heatmapData.some(item => item.count > 0)) {
                if (heatmapEmpty) heatmapEmpty.classList.remove('hidden');
            } else {
                if (heatmapEmpty) heatmapEmpty.classList.add('hidden');
                renderHeatmap(heatmapChart, heatmapData);
            }
        }

        // Area Chart 렌더링
        if (areaChart) {
            const areaEmpty = document.getElementById('area-empty');
            areaChart.innerHTML = '';
            if (!monthlyData.some(item => item.value > 0)) {
                if (areaEmpty) areaEmpty.classList.remove('hidden');
            } else {
                if (areaEmpty) areaEmpty.classList.add('hidden');
                renderMonthlyBarChart(areaChart, monthlyData);
            }
        }

        // 레이더 차트 (시간대) - 빠르게 렌더링
        if (radarChart) {
            const radarEmpty = document.getElementById('radar-empty');
            const radarPeakHour = document.getElementById('radar-peak-hour');
            radarChart.innerHTML = '';
            if (hourlyData.length === 0) {
                if (radarEmpty) radarEmpty.classList.remove('hidden');
                if (radarPeakHour) radarPeakHour.textContent = '--';
            } else {
                if (radarEmpty) radarEmpty.classList.add('hidden');
                renderRadarChart(radarChart, hourlyData);
                if (radarPeakHour) {
                    const max = hourlyData.reduce((best, item) => (item.value > best.value ? item : best), hourlyData[0]);
                    const hourLabel = typeof max.hour === 'number' ? String(max.hour).padStart(2, '0') : max.label.replace('시', '');
                    radarPeakHour.textContent = hourLabel;
                }
            }
        }

        // 피크 레이블 업데이트
        if (dailyPeakLabel) {
            const peakDay = findPeakDay(heatmapData);
            dailyPeakLabel.textContent = peakDay ? formatDayLabel(peakDay) : '--';
        }
        if (monthlyPeakLabel) {
            const peakMonth = findPeakLabel(monthlyData);
            monthlyPeakLabel.textContent = peakMonth ? formatMonthLabel(peakMonth) : '--';
        }
    }

    // 지연 렌더링: 우선순위 낮은 차트들
    function renderDeferredCharts(visibleData, range) {
        const keywordChart = document.getElementById('keyword-chart');
        const topicMap = document.getElementById('topic-map');
        const peakTimeChart = document.getElementById('peak-time-chart');
        const longestList = document.getElementById('longest-list');

        setTimeout(() => {
            if (getActiveAnalyticsView() !== 'mypage' || !keywordChart) return;
            const keywordMode = keywordModeSelect ? keywordModeSelect.value : 'all';
            const keywordLanguage = keywordLanguageSelect ? keywordLanguageSelect.value : 'all';
            const keywordData = buildKeywordStats(visibleData, 80, keywordMode, keywordLanguage).slice(0, 30);
            const keywordEmpty = document.getElementById('keyword-empty');
            keywordChart.innerHTML = '';
            keywordChart.classList.remove('is-calculating');
            if (keywordData.length === 0) {
                if (keywordEmpty) {
                    keywordEmpty.classList.remove('hidden');
                    keywordEmpty.textContent = getKeywordEmptyMessage(visibleData, keywordMode);
                }
            } else {
                if (keywordEmpty) keywordEmpty.classList.add('hidden');
                renderKeywordList(keywordChart, keywordData);
            }
        }, 0);

        setTimeout(() => {
            if (getActiveAnalyticsView() !== 'mypage' || !topicMap) return;
            const topicEmpty = document.getElementById('topic-empty');
            const keywordMode = keywordModeSelect ? keywordModeSelect.value : 'all';
            const topicStats = buildTopicMapStats(visibleData, keywordMode);
            topicMap.innerHTML = '';
            topicMap.classList.remove('is-calculating');
            if (topicStats.total === 0) {
                topicEmpty.classList.remove('hidden');
            } else {
                topicEmpty.classList.add('hidden');
                const topicLabelAliases = {
                    lifestyle: '라이프',
                    career: '커리어',
                    social: '소셜',
                    growth: '성장',
                    planning: '기획',
                    other: '기타'
                };
                const visibleItems = topicStats.items.filter(item => item.id !== 'other' || item.pct > 5);
                topicMap.innerHTML = visibleItems.map(item => {
                    const displayLabel = topicLabelAliases[item.id] || item.label;
                    const tooltipParts = [item.label];
                    if (item.keywords && item.keywords.length) {
                        tooltipParts.push(item.keywords.join(', '));
                    }
                    const tooltip = tooltipParts.join('\n');
                    return `
                        <div class="topic-row">
                            <span class="topic-label" data-tooltip="${escapeHtml(tooltip)}">${escapeHtml(displayLabel)}</span>
                            <div class="topic-bar">
                                <div class="topic-bar-fill" style="width: ${item.pct}%"></div>
                            </div>
                            <span class="topic-value">${item.pct}%</span>
                        </div>
                    `;
                }).join('');
            }
        }, 90);

        setTimeout(() => {
            if (getActiveAnalyticsView() !== 'mypage' || !peakTimeChart) return;
            const peakTimeStats = getCachedMyPageStat('peak-time', visibleData, () => buildPeakTimeStats(visibleData));
            const peakTimeEmpty = document.getElementById('peak-time-empty');
            const peakTimeAxis = document.getElementById('peak-time-axis');
            const peakTimeSummary = document.getElementById('peak-time-hour');
            const focusStyleLabel = document.getElementById('focus-style-label');
            peakTimeChart.innerHTML = '';
            peakTimeChart.classList.remove('is-calculating');
            if (peakTimeSummary) peakTimeSummary.classList.remove('is-calculating');
            if (focusStyleLabel) focusStyleLabel.classList.remove('is-calculating');
            if (peakTimeStats.totalScore === 0) {
                peakTimeEmpty.classList.remove('hidden');
                peakTimeSummary.textContent = '--';
                if (focusStyleLabel) focusStyleLabel.textContent = '--';
                if (peakTimeAxis) peakTimeAxis.classList.add('hidden');
            } else {
                peakTimeEmpty.classList.add('hidden');
                peakTimeSummary.textContent = formatHourShort(peakTimeStats.peak.hour);
                if (focusStyleLabel) {
                    const lang = (typeof window.currentLanguage === 'string' && window.currentLanguage) ? window.currentLanguage : (localStorage.getItem('chatbook-language') || 'en');
                    const noun = getPeakStyleLabel(peakTimeStats.peak.hour, lang);
                    const adjective = getPeakTraitAdjective(peakTimeStats, lang);
                    focusStyleLabel.innerHTML = formatFocusStyleSentence(adjective, noun, lang);
                }
                if (peakTimeAxis) peakTimeAxis.classList.remove('hidden');
                renderPeakTimeChart(peakTimeChart, peakTimeAxis, peakTimeStats);
            }
        }, 180);

        setTimeout(() => {
            if (getActiveAnalyticsView() !== 'mypage' || !longestList) return;
            const longestEmpty = document.getElementById('longest-empty');
            longestList.innerHTML = '';
            const longestData = getCachedMyPageStat('longest-3', visibleData, () => buildLongestConversations(visibleData, 3));
            if (longestData.length === 0) {
                longestEmpty.classList.remove('hidden');
            } else {
                longestEmpty.classList.add('hidden');
                renderTimeline(longestList, longestData);
            }
        }, 270);

        setTimeout(() => {
            if (getActiveAnalyticsView() !== 'mypage') return;
            renderRemainingCharts(visibleData);
        }, 360);
    }

    // 나머지 통계 렌더링 (추가 지연)
    function renderRemainingCharts(visibleData) {
        // 대화 성향
        const attitudeAssistant = document.getElementById('attitude-assistant');
        if (attitudeAssistant) {
            const stats = getCachedMyPageStat('user-attitude', visibleData, () => buildUserAttitudeStats(visibleData));
            const attitudeEmpty = document.getElementById('attitude-empty');
            const attitudeDebate = document.getElementById('attitude-debate');
            const attitudeEmotional = document.getElementById('attitude-emotional');
            const attitudeAssistantPct = document.getElementById('attitude-assistant-pct');
            const attitudeDebatePct = document.getElementById('attitude-debate-pct');
            const attitudeEmotionalPct = document.getElementById('attitude-emotional-pct');
            const attitudeSummary = document.getElementById('attitude-summary');
            if (attitudeSummary) attitudeSummary.classList.remove('is-calculating');

            if (stats.total === 0) {
                attitudeEmpty.classList.remove('hidden');
                attitudeSummary.textContent = '--';
                attitudeAssistantPct.textContent = '--';
                attitudeDebatePct.textContent = '--';
                attitudeEmotionalPct.textContent = '--';
                attitudeAssistant.style.width = '33%';
                attitudeDebate.style.width = '33%';
                attitudeEmotional.style.width = '33%';
            } else {
                attitudeEmpty.classList.add('hidden');
                attitudeAssistant.style.width = `${stats.assistantPct}%`;
                attitudeDebate.style.width = `${stats.debatePct}%`;
                attitudeEmotional.style.width = `${stats.emotionalPct}%`;
                attitudeAssistantPct.textContent = stats.assistantPct;
                attitudeDebatePct.textContent = stats.debatePct;
                attitudeEmotionalPct.textContent = stats.emotionalPct;
                const lang = (typeof window.currentLanguage === 'string' && window.currentLanguage)
                    ? window.currentLanguage
                    : (localStorage.getItem('chatbook-language') || 'en');
                attitudeSummary.innerHTML = formatUserAttitudeSummary(stats, lang);
            }
        }
        if (myPageView) myPageView.setAttribute('aria-busy', 'false');

        // (removed) 새 주제 발견 카드
    }

    function renderCharts(sourceData, range) {
        const visibleData = sourceData || getFilteredChatData();
        const heatmapChart = document.getElementById('heatmap-chart');
        const areaChart = document.getElementById('area-chart');
        const keywordChart = document.getElementById('keyword-chart');
        const topicMap = document.getElementById('topic-map');
        const topicEmpty = document.getElementById('topic-empty');
        const radarChart = document.getElementById('radar-chart');
        const radarPeakHour = document.getElementById('radar-peak-hour');
        const dailyPeakLabel = document.getElementById('daily-peak-date');
        const monthlyPeakLabel = document.getElementById('monthly-peak-month');
        const monthAxis = document.getElementById('month-axis');
        const yearAxis = document.getElementById('year-axis');
        const heatmapEmpty = document.getElementById('heatmap-empty');
        const areaEmpty = document.getElementById('area-empty');
        const keywordEmpty = document.getElementById('keyword-empty');
        const keywordRecentSummary = document.getElementById('keyword-recent-summary');
        const radarEmpty = document.getElementById('radar-empty');
        const attitudeAssistant = document.getElementById('attitude-assistant');
        const attitudeDebate = document.getElementById('attitude-debate');
        const attitudeEmotional = document.getElementById('attitude-emotional');
        const attitudeAssistantPct = document.getElementById('attitude-assistant-pct');
        const attitudeDebatePct = document.getElementById('attitude-debate-pct');
        const attitudeEmotionalPct = document.getElementById('attitude-emotional-pct');
        const attitudeSummary = document.getElementById('attitude-summary');
        const attitudeEmpty = document.getElementById('attitude-empty');
        const focusStyleLabel = document.getElementById('focus-style-label');
        const longestList = document.getElementById('longest-list');
        const longestEmpty = document.getElementById('longest-empty');
        const peakTimeChart = document.getElementById('peak-time-chart');
        const peakTimeAxis = document.getElementById('peak-time-axis');
        const peakTimeEmpty = document.getElementById('peak-time-empty');
        const peakTimeSummary = document.getElementById('peak-time-hour');

        if (heatmapChart) heatmapChart.innerHTML = '';
        if (areaChart) areaChart.innerHTML = '';
        if (keywordChart) keywordChart.innerHTML = '';
        if (topicMap) topicMap.innerHTML = '';
        if (radarChart) radarChart.innerHTML = '';
        if (longestList) longestList.innerHTML = '';
        if (peakTimeChart) peakTimeChart.innerHTML = '';
        if (peakTimeAxis) peakTimeAxis.innerHTML = '';
        if (monthAxis) {
            monthAxis.innerHTML = '';
            monthAxis.classList.add('hidden');
        }
        if (yearAxis) {
            yearAxis.innerHTML = '';
            yearAxis.classList.add('hidden');
        }

        const timeBuckets = buildTimeBuckets(visibleData, range);
        const heatmapData = buildHeatmapData(timeBuckets.daily, 420);
        const monthlyData = buildMonthlySeries(timeBuckets.monthly);
        const hourlyData = buildHourlyStats(timeBuckets.hourly);
        if (dailyPeakLabel) {
            const peakDay = findPeakDay(heatmapData);
            dailyPeakLabel.textContent = peakDay ? formatDayLabel(peakDay) : '--';
        }
        if (monthlyPeakLabel) {
            const peakMonth = findPeakLabel(monthlyData);
            monthlyPeakLabel.textContent = peakMonth ? formatMonthLabel(peakMonth) : '--';
        }

        if (heatmapChart) {
            if (!heatmapData.some(item => item.count > 0)) {
                if (heatmapEmpty) heatmapEmpty.classList.remove('hidden');
            } else {
                if (heatmapEmpty) heatmapEmpty.classList.add('hidden');
                renderHeatmap(heatmapChart, heatmapData);
            }
        }

        if (areaChart) {
            if (!monthlyData.some(item => item.value > 0)) {
                if (areaEmpty) areaEmpty.classList.remove('hidden');
            } else {
                if (areaEmpty) areaEmpty.classList.add('hidden');
                renderMonthlyBarChart(areaChart, monthlyData);
            }
        }

        const keywordMode = keywordModeSelect ? keywordModeSelect.value : 'all';
        const keywordLanguage = keywordLanguageSelect ? keywordLanguageSelect.value : 'all';
        const keywordData = buildKeywordStats(visibleData, 30, keywordMode, keywordLanguage);
        if (keywordChart) {
            if (keywordData.length === 0) {
                if (keywordEmpty) {
                    keywordEmpty.classList.remove('hidden');
                    keywordEmpty.textContent = getKeywordEmptyMessage(visibleData, keywordMode);
                }
            } else {
                if (keywordEmpty) keywordEmpty.classList.add('hidden');
                renderKeywordList(keywordChart, keywordData);
            }
        }
        if (keywordRecentSummary) {
            keywordRecentSummary.innerHTML = buildRecentKeywordSummary(visibleData, keywordMode, keywordLanguage);
        }

        const topicLabelAliases = {
            lifestyle: '라이프',
            career: '커리어',
            social: '소셜',
            growth: '성장',
            planning: '기획',
            other: '기타'
        };

        if (topicMap && topicEmpty) {
            const topicStats = buildTopicMapStats(visibleData, keywordMode);
            if (topicStats.total === 0) {
                topicEmpty.classList.remove('hidden');
            } else {
                topicEmpty.classList.add('hidden');
                const visibleItems = topicStats.items.filter(item => item.id !== 'other' || item.pct > 5);
                topicMap.innerHTML = visibleItems.map(item => {
                    const displayLabel = topicLabelAliases[item.id] || item.label;
                    const tooltipParts = [item.label];
                    if (item.keywords && item.keywords.length) {
                        tooltipParts.push(item.keywords.join(', '));
                    }
                    const tooltip = tooltipParts.join('\n');
                    return `
                    <div class="topic-row">
                        <span class="topic-label" data-tooltip="${escapeHtml(tooltip)}">${escapeHtml(displayLabel)}</span>
                        <div class="topic-bar">
                            <div class="topic-bar-fill" style="width: ${item.pct}%"></div>
                        </div>
                        <span class="topic-value">${item.pct}%</span>
                    </div>
                `;
                }).join('');
            }
        }

        if (attitudeAssistant && attitudeDebate && attitudeEmotional && attitudeAssistantPct && attitudeDebatePct && attitudeEmotionalPct && attitudeSummary && attitudeEmpty) {
            const stats = buildUserAttitudeStats(visibleData);
            if (stats.total === 0) {
                attitudeEmpty.classList.remove('hidden');
                attitudeSummary.textContent = '--';
                attitudeAssistantPct.textContent = '--';
                attitudeDebatePct.textContent = '--';
                attitudeEmotionalPct.textContent = '--';
                attitudeAssistant.style.width = '33%';
                attitudeDebate.style.width = '33%';
                attitudeEmotional.style.width = '33%';
            } else {
                attitudeEmpty.classList.add('hidden');
                attitudeAssistant.style.width = `${stats.assistantPct}%`;
                attitudeDebate.style.width = `${stats.debatePct}%`;
                attitudeEmotional.style.width = `${stats.emotionalPct}%`;
                attitudeAssistantPct.textContent = stats.assistantPct;
                attitudeDebatePct.textContent = stats.debatePct;
                attitudeEmotionalPct.textContent = stats.emotionalPct;
                const lang = (typeof window.currentLanguage === 'string' && window.currentLanguage)
                    ? window.currentLanguage
                    : (localStorage.getItem('chatbook-language') || 'en');
                attitudeSummary.innerHTML = formatUserAttitudeSummary(stats, lang);
            }
        }

        const peakTimeStats = buildPeakTimeStats(visibleData);
        if (peakTimeChart && peakTimeEmpty && peakTimeSummary) {
            if (peakTimeStats.totalScore === 0) {
                peakTimeEmpty.classList.remove('hidden');
                peakTimeSummary.textContent = '--';
                if (focusStyleLabel) focusStyleLabel.textContent = '--';
                if (peakTimeAxis) peakTimeAxis.classList.add('hidden');
            } else {
                peakTimeEmpty.classList.add('hidden');
                peakTimeSummary.textContent = formatHourShort(peakTimeStats.peak.hour);
                if (focusStyleLabel) {
                    const lang = (typeof window.currentLanguage === 'string' && window.currentLanguage) ? window.currentLanguage : (localStorage.getItem('chatbook-language') || 'en');
                    const noun = getPeakStyleLabel(peakTimeStats.peak.hour, lang);
                    const adjective = getPeakTraitAdjective(peakTimeStats, lang);
                    focusStyleLabel.innerHTML = formatFocusStyleSentence(adjective, noun, lang);
                }
                if (peakTimeAxis) peakTimeAxis.classList.remove('hidden');
                renderPeakTimeChart(peakTimeChart, peakTimeAxis, peakTimeStats);
            }
        }

        if (longestList && longestEmpty) {
            const longestData = buildLongestConversations(visibleData, 3);
            if (longestData.length === 0) {
                longestEmpty.classList.remove('hidden');
            } else {
                longestEmpty.classList.add('hidden');
                renderTimeline(longestList, longestData);
            }
        }

        if (radarChart) {
            if (hourlyData.length === 0) {
                if (radarEmpty) radarEmpty.classList.remove('hidden');
                if (radarPeakHour) radarPeakHour.textContent = '--';
            } else {
                if (radarEmpty) radarEmpty.classList.add('hidden');
                renderRadarChart(radarChart, hourlyData);
                if (radarPeakHour) {
                    const max = hourlyData.reduce((best, item) => (item.value > best.value ? item : best), hourlyData[0]);
                    const hourLabel = typeof max.hour === 'number' ? String(max.hour).padStart(2, '0') : max.label.replace('시', '');
                    radarPeakHour.textContent = hourLabel;
                }
            }
        }
    }

    function findPeakLabel(data) {
        if (!Array.isArray(data) || data.length === 0) return null;
        let maxValue = 0;
        let peakLabel = null;
        data.forEach(item => {
            if (!item || typeof item.value !== 'number') return;
            if (item.value > maxValue) {
                maxValue = item.value;
                peakLabel = item.label || null;
            }
        });
        return maxValue > 0 ? peakLabel : null;
    }

    function findPeakDay(data) {
        if (!Array.isArray(data) || data.length === 0) return null;
        let maxValue = 0;
        let peakKey = null;
        data.forEach(item => {
            if (!item || typeof item.count !== 'number') return;
            if (item.count > maxValue) {
                maxValue = item.count;
                peakKey = item.key || null;
            }
        });
        return maxValue > 0 ? peakKey : null;
    }

    function formatMonthLabel(label) {
        if (!label) return label;
        const parts = String(label).split('-');
        if (parts.length !== 2) return label;
        const year = parts[0];
        const month = Number(parts[1]);
        if (!year || Number.isNaN(month)) return label;
        return `${year}년 ${month}월`;
    }

    function formatDayLabel(label) {
        if (!label) return label;
        const parts = String(label).split('-');
        if (parts.length !== 3) return label;
        const year = parts[0];
        const month = Number(parts[1]);
        const day = Number(parts[2]);
        if (!year || Number.isNaN(month) || Number.isNaN(day)) return label;
        return `${year}년 ${month}월 ${day}일`;
    }

    function buildTimeBuckets(sourceData, range) {
        const daily = {};
        const monthly = {};
        const hourly = new Array(24).fill(0);
        const data = sourceData || [];
        const useRange = filterByDateToggle && filterByDateToggle.checked;
        const start = range && range.start ? range.start : null;
        const end = range && range.end ? range.end : null;

        data.forEach(item => {
            const timestamps = Array.isArray(item.messageTimes) && item.messageTimes.length > 0
                ? item.messageTimes
                : (item.createTime ? [item.createTime] : []);
            if (timestamps.length === 0) return;
            timestamps.forEach(timestamp => {
                const date = new Date(timestamp * 1000);
                if (Number.isNaN(date.getTime())) return;
                if (useRange) {
                    if (start && date < start) return;
                    if (end && date > end) return;
                }
                const dayKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                daily[dayKey] = (daily[dayKey] || 0) + 1;
                monthly[monthKey] = (monthly[monthKey] || 0) + 1;
                hourly[date.getHours()] += 1;
            });
        });

        return { daily, monthly, hourly };
    }

    function buildHeatmapData(dailyMap, daysBack) {
        const today = new Date();
        const result = [];

        for (let i = daysBack - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            const count = dailyMap[key] || 0;
            result.push({ date, key, count });
        }

        return result;
    }

    function buildMonthlySeries(monthlyMap) {
        const keys = Object.keys(monthlyMap || {});
        if (keys.length === 0) {
            const now = new Date();
            const result = [];
            for (let i = 11; i >= 0; i--) {
                const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
                const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                result.push({ label: key, value: 0 });
            }
            return result;
        }

        const dates = keys.map(key => {
            const [year, month] = key.split('-').map(Number);
            return new Date(year, (month || 1) - 1, 1);
        }).filter(date => !Number.isNaN(date.getTime()));

        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));
        const cursor = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
        const end = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

        const result = [];
        while (cursor <= end) {
            const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}`;
            result.push({ label: key, value: monthlyMap[key] || 0 });
            cursor.setMonth(cursor.getMonth() + 1);
        }

        return result;
    }

    function buildHourlyStats(hourlyCounts) {
        if (!hourlyCounts || hourlyCounts.every(count => count === 0)) return [];
        return hourlyCounts.map((value, index) => ({
            label: `${index}시`,
            hour: index,
            value
        }));
    }

    function buildKeywordStats(sourceData, limit, mode = 'all', language = 'all') {
        const data = sourceData || [];
        const cacheKey = getKeywordStatsCacheKey(data, limit, mode, language);
        const cached = keywordStatsCache.get(cacheKey);
        if (cached) return cached;

        // Keyword filters (tune these lists to match the user's interest focus)
        const KEYWORD_EXCLUDE = new Set([
            // adverbs / conjunctions
            '진짜', '근데', '그냥', '혹시', '아마', '어쨌든', '매우', '그리고', '하지만', '그래서', '또', '또는', '혹은',
            '그래도', '그런데', '일단', '약간', '좀', '조금', '너무', '되게', '이미', '지금', '여기', '저기', '이제',
            '요즘', '자주', '다시', '자꾸', '계속', '대충', '대략',
            // generic dependent nouns
            '것', '수', '등', '분', '대', '거', '관련', '때문', '생각', '사용', '경우', '부분', '내용', '이유',
            '정도', '방법', '결과',
            // time / quantity
            '오늘', '어제', '이번', '다음', '지난', '내일', '방금', '금방', '이후', '이전', '처음', '마지막', '중간',
            '한번', '두번', '세번', '몇번', '하루', '이틀', '삼일', '일주일', '한달', '개월', '년', '월', '일',
            '시간', '분', '초', '개', '번', '동안',
            // interjections
            'ㅋㅋ', 'ㅎㅎ', '아', '음', '오', '어', '흠', '헉', '허', '엥', '응', '네', '예', '아니',
            '확인', '감사', '고마워', '알겠어', '알겠음', '됐어', '됐음', '그래', '그치', '맞아', '맞음',
            '인듯', '인것', '같아', '같음', '함께', '같이', '전혀', '별로', '그다지',
            '저희', '너희', '애들', '자기', '본인', '누구', '어디', '언제', '무엇', '어떤', '무슨', '어느',
            '이쪽', '저쪽', '그쪽', '일단은', '사실은', '실제로', '결국', '결국엔',
            '많이', '적게', '조금씩', '상당히', '굉장히', '엄청', '진짜로', '완전히', '거의', '전부',
            '모두', '다들', '대부분', '약', '최대', '최소', '충분히', '가득',
            '거예요', '거에요', '그렇게', '짧은', '작은', '한마디',
            '싶어', '있어요', '좋아', '순으', '할까', '뭐가', '돼요',
            '월수금', '화목', '초기', '짧게', '천천히',
            '파일', '사진', '이미지', '링크', '전송', '공유', '삭제', '메시지', '답장', '전화', '통화',
            '연락', '클릭', '버튼', '업로드', '다운',
            'ㅠㅠ', 'ㅜㅜ', 'ㅋㅋ', 'ㅎㅎ', 'ㄷㄷ', 'ㄴㄴ', 'ㅇㅇ', '헐', '대박', '앗', '어라', '우와',
            '아이고', '에고', '음', '어음', '휴',
            '너는', '너의', '너', '이건', '거야', '당신', '이야', '있음', '있는', '있어', '나는', '내가', '네가',
            '제안할게요', '그럼', '충분', '좋아요', '추천해줘', '들어', '이렇게',
            '아니라', '가능', '바로', '하지', '되는',
            '이게', '이게', '이걸', '아직', '같은', '가장', '이런', '하나', '아님',
            '이거야', '없음',
            // polite / formal endings that frequently leak into naive tokenization
            '있습니다', '없습니다', '됩니다', '됐습니다', '되었습니다', '하겠습니다', '되겠습니다',
            '사람', '제품', '중요', '어떻게',
            'the', 'a', 'an', 'this', 'that', 'these', 'those', 'it', 'its', 'they', 'them', 'their', 'my', 'your', 'his', 'her', 'our',
            'in', 'on', 'at', 'for', 'with', 'about', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down',
            'and', 'but', 'or', 'nor', 'so', 'yet',
            'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must',
            'actually', 'basically', 'literally', 'really', 'just', 'maybe', 'probably', 'definitely', 'quite', 'very', 'so', 'too', 'anyway', 'anyhow', 'well', 'okay', 'sure', 'right', 'yeah', 'yep', 'nope',
            'what', 'which', 'who', 'whom', 'whose', 'when', 'where', 'why', 'how', 'something', 'anything', 'nothing', 'someone', 'anyone', 'everything', 'everyone',
            'javascript', 'typescript', 'java', 'python', 'kotlin', 'swift', 'rust', 'golang', 'node', 'nodejs', 'runtime', 'browser', 'engine', 'php', 'ruby', 'html', 'css', 'sql',
            'react', 'vue', 'nextjs', 'angular', 'spring', 'boot', 'django', 'flask', 'express', 'tailwind', 'bootstrap', 'jquery', 'styled',
            'install', 'npm', 'yarn', 'pnpm', 'run', 'build', 'start', 'dev', 'config', 'docker', 'container',
            'git', 'commit', 'push', 'pull', 'merge', 'checkout', 'branch', 'sudo', 'mkdir', 'cd', 'ls',
            'code', 'data', 'value', 'error', 'debug', 'test', 'function', 'variable', 'const', 'let', 'var', 'return',
            'import', 'export', 'null', 'undefined', 'true', 'false', 'interface', 'type', 'params', 'param', 'array', 'object', 'string', 'number', 'console', 'log', 'package', 'json'
        ]);
        const ENGLISH_EXCLUDE = new Set([
            'class', 'div', 'span', 'caption', 'assets', 'src', 'href', 'title', 'slug', 'link',
            'flex', 'hidden', 'role', 'text', 'font', 'color', 'style', 'width', 'height',
            'converted', 'identity', 'summary', 'description', 'designer', 'client', 'project',
            'projects', 'gallery', 'image', 'images', 'jpg', 'png', 'svg', 'gif', 'tgz', 'bin',
            'the', 'this', 'that', 'these', 'those', 'its', 'they', 'them', 'their', 'your', 'ours',
            'with', 'from', 'about', 'between', 'into', 'through', 'during', 'before', 'after',
            'above', 'below', 'and', 'but', 'nor', 'yet',
            'was', 'were', 'been', 'being', 'have', 'has', 'had', 'does', 'did', 'can', 'could',
            'will', 'would', 'shall', 'should', 'might', 'must',
            'actually', 'basically', 'literally', 'really', 'just', 'maybe', 'probably',
            'definitely', 'quite', 'very', 'anyway', 'well', 'okay', 'sure', 'yeah', 'yep',
            'what', 'which', 'whom', 'whose', 'where', 'when', 'something', 'anything',
            'nothing', 'someone', 'anyone', 'everything', 'everyone'
        ]);

        function cleanEnglishWord(rawWord) {
            if (!rawWord) return null;
            let word = rawWord.toLowerCase().trim().replace(/[^\w\s]/g, '');
            word = word.replace(/\d+/g, '');
            if (word.length < 3) return null;
            const domNoisePattern = /(getelement|getelements|queryselector|addeventlistener|classlist|dataset|innerhtml|textcontent|getattribute|setattribute|localstorage|sessionstorage)/;
            if (domNoisePattern.test(word)) return null;
            const actionPrefixes = ['get', 'set', 'query', 'create', 'append', 'remove', 'update', 'render'];
            const domTokens = ['element', 'elements', 'document', 'selector', 'class', 'id', 'node'];
            if (word.length >= 10 && actionPrefixes.some(prefix => word.startsWith(prefix)) && domTokens.some(token => word.includes(token))) {
                return null;
            }
            const vowels = word.match(/[aeiouy]/g) || [];
            const vowelRatio = vowels.length / word.length;
            const hasLongConsonantRun = /[^aeiouy]{5,}/.test(word);
            if ((word.length >= 12 && vowelRatio < 0.2) || hasLongConsonantRun) return null;
            if (ENGLISH_EXCLUDE.has(word)) return null;
            return word;
        }
        const particleSuffixes = ['은', '는', '이', '가', '을', '를', '의', '과', '와', '도', '만', '까지', '부터', '에서', '으로', '로', '에', '에게', '께', '한테', '랑'];
        const counts = {};
        const docCounts = {};
        const totalDocs = data.length || 1;

        data.forEach(item => {
            const text = getKeywordText(item, mode);
            const tokens = text.split(/[^a-zA-Z0-9가-힣\u3040-\u30ff\u4e00-\u9faf]+/);
            const seenInDoc = new Set();
            tokens.forEach(token => {
                const normalized = normalizeToken(token);
                if (!normalized) return;
                let keywordToken = canonicalizeKeyword(normalized);
                if (/[a-zA-Z]/.test(keywordToken)) {
                    const cleaned = cleanEnglishWord(keywordToken);
                    if (!cleaned) return;
                    keywordToken = cleaned;
                }
                if (!matchesLanguage(keywordToken, language)) return;
                if (KEYWORD_EXCLUDE.has(normalized)) return;
                if (KEYWORD_EXCLUDE.has(keywordToken)) return;
                if (!isLikelyNoun(keywordToken)) return;
                counts[keywordToken] = (counts[keywordToken] || 0) + 1;
                if (!seenInDoc.has(keywordToken)) {
                    docCounts[keywordToken] = (docCounts[keywordToken] || 0) + 1;
                    seenInDoc.add(keywordToken);
                }
            });
        });

        const minCount = mode === 'all' ? 2 : 1;
        const scored = Object.entries(counts)
            .map(([label, value]) => {
                const df = docCounts[label] || 1;
                const idf = Math.log((totalDocs + 1) / (df + 1));
                const score = value * (0.75 + idf);
                return { label, value, score };
            })
            .filter(item => item.value >= minCount);

        const sorted = scored
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(({ label, value }) => ({ label, value }));

        return rememberKeywordStats(cacheKey, sorted);
    }

    function buildTopicMapStats(data, mode) {
        const categories = [
            {
                id: 'lifestyle',
                label: '라이프',
                roots: ['제주', '공항', '맛집', '여행지', '숙소', '이동수단', '로컬', '경험', '공간'],
                match: (word) => /(travel|trip|stay|food|local|experience|lounge|airport|hotel)/i.test(word)
            },
            {
                id: 'career',
                label: '커리어',
                roots: ['회사', '경제', '돈', '재테크', '채용', '퇴사', '실업급여', '프로젝트', '비즈니스', '전략', '시장', '성과'],
                match: (word) => /(career|job|biz|finance|market|project|company|strategy|team|business|entre)/i.test(word)
            },
            {
                id: 'social',
                label: '소셜',
                roots: ['가족', '친구', '감정', '심리', '대화', '공동체', '자아', '관계', 'MBTI', '마음'],
                match: (word) => /(emotion|feel|relationship|mind|social|friend|family|community|therapy)/i.test(word)
            },
            {
                id: 'growth',
                label: '성장',
                roots: ['공부', '운동', '언어', '독서', '습관', '교육', '자격증', '강의', '기술', '데이터', 'AI', '앱', '웹', '도구', '시스템', '플랫폼', '클라우드', '인프라', '디바이스'],
                match: (word) => /(study|learn|language|education|habit|growth|exercise|lecture|skill|tech|digital|ai|app|web|dev|tool|platform|system|data|cloud|infra|device)/i.test(word)
            },
            {
                id: 'planning',
                label: '기획',
                roots: ['논리', '설계', '기준', '정리', '프로세스', '아이디어', '요약', '단계', '핵심', '문제', '흐름', '브랜딩', '브랜드', '마케팅', '포지셔닝', '기획'],
                match: (word) => /(logic|idea|plan|summary|thought|strategy|process|analysis|brand|branding|marketing|positioning)/i.test(word)
            },
            {
                id: 'other',
                label: '기타',
                roots: []
            }
        ];

        const keywordStats = buildKeywordStats(data, 80, mode, 'all');
        if (keywordStats.length === 0) {
            return { total: 0, items: [], topKeywords: [], insight: '' };
        }

        const buckets = new Map(categories.map(cat => [cat.id, { count: 0, keywords: [] }]));
        let total = 0;

        const EXTRA_EXCLUDE = new Set([
            '으로', '그게', '그걸', '제가', '그건', '좋아', '있어요', '라는', '다른',
            '피터', 'not', 'neutral', 'rise', 'cover'
        ]);

        function classifyUnmatchedEnglish(word) {
            if (!/[a-z]/i.test(word)) return null;
            if (/(tech|digital|ai|app|web|dev|tool|platform|system|data|cloud|infra|service)/i.test(word)) return 'growth';
            if (/(travel|food|brand|style|fashion|cafe|trip|experience)/i.test(word)) return 'lifestyle';
            if (/(career|job|biz|finance|market|project|company|strategy|team)/i.test(word)) return 'career';
            if (/(emotion|feel|relationship|mind|social|friend|family|community)/i.test(word)) return 'social';
            if (/(study|learn|language|education|habit|growth|lecture|exercise)/i.test(word)) return 'growth';
            if (/(logic|plan|idea|strategy|process|summary|analysis)/i.test(word)) return 'planning';
            return null;
        }

        keywordStats.forEach(({ label, value }) => {
            const key = String(label).toLowerCase();
            if (EXTRA_EXCLUDE.has(key)) return;
            let matched = false;
            for (const category of categories) {
                if (category.id === 'other') continue;
                const roots = category.roots || [];
                if (roots.some(root => key.includes(root))) {
                    const bucket = buckets.get(category.id);
                    bucket.count += value;
                    if (!bucket.keywords.includes(label)) bucket.keywords.push(label);
                    total += value;
                    matched = true;
                    break;
                }
                if (category.match && category.match(key)) {
                    const bucket = buckets.get(category.id);
                    bucket.count += value;
                    if (!bucket.keywords.includes(label)) bucket.keywords.push(label);
                    total += value;
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                const fallbackId = classifyUnmatchedEnglish(key);
                if (fallbackId) {
                    const bucket = buckets.get(fallbackId);
                    bucket.count += value;
                    if (!bucket.keywords.includes(label)) bucket.keywords.push(label);
                    total += value;
                    return;
                }
                const bucket = buckets.get('other');
                bucket.count += value;
                if (!bucket.keywords.includes(label)) bucket.keywords.push(label);
                total += value;
            }
        });

        if (total === 0) {
            return { total: 0, items: [], topKeywords: [], insight: '' };
        }

        const items = categories
            .map(cat => {
                const bucket = buckets.get(cat.id);
                const pct = Math.round((bucket.count / total) * 100);
                return {
                    id: cat.id,
                    label: cat.label,
                    pct,
                    keywords: bucket.keywords.slice(0, 5)
                };
            })
            .filter(item => item.pct > 0)
            .sort((a, b) => b.pct - a.pct);

        const topKeywords = keywordStats.slice(0, 6).map(item => item.label);
        const lead = items[0];
        const insight = lead ? `${lead.label} 비중이 가장 높습니다.` : '';

        return { total, items, topKeywords, insight };
    }

    function escapeRegExp(value) {
        return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function getKeywordText(item, mode) {
        if (!item) return '';
        if (mode === 'user') {
            if (item.userText && item.userText.trim().length > 0) {
                return item.userText.toLowerCase();
            }
            const extracted = extractRoleTextFromHtml(item.contentHTML, 'user');
            if (extracted) {
                item.userText = extracted;
                return extracted.toLowerCase();
            }
            return '';
        }
        if (mode === 'assistant') {
            if (item.assistantText && item.assistantText.trim().length > 0) {
                return item.assistantText.toLowerCase();
            }
            const extracted = extractRoleTextFromHtml(item.contentHTML, 'assistant');
            if (extracted) {
                item.assistantText = extracted;
                return extracted.toLowerCase();
            }
            return '';
        }
        return (item.searchText || '').toLowerCase();
    }

    function extractRoleTextFromHtml(html, role) {
        if (!html) return '';
        const roleClass = role === 'user' ? 'user-msg' : 'assistant-msg';
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const nodes = Array.from(doc.querySelectorAll(`.msg.${roleClass}`));
        if (nodes.length === 0) return '';
        const texts = nodes.map(node => {
            const blocks = node.querySelectorAll(':scope > div');
            if (blocks.length > 0) {
                const lastBlock = blocks[blocks.length - 1];
                return lastBlock.textContent || '';
            }
            return node.textContent || '';
        }).filter(text => text.trim().length > 0);
        return texts.join(' ');
    }

    function getKeywordEmptyMessage(data, mode) {
        const hasData = Array.isArray(data) && data.length > 0;
        if (!hasData) return '데이터 파일이 없어 표시할 수 없습니다.';
        if (mode === 'user' && !hasKeywordSourceText(data, 'user')) {
            return '사용자 발화가 없어 표시할 수 없습니다.';
        }
        if (mode === 'assistant' && !hasKeywordSourceText(data, 'assistant')) {
            return 'ChatGPT 발화가 없어 표시할 수 없습니다.';
        }
        return '키워드가 부족합니다.';
    }

    function buildRecentKeywordSummary(data, mode, keywordLanguage, limit = 3) {
        const uiLanguage = (() => {
            try {
                return (typeof window.currentLanguage === 'string' && window.currentLanguage)
                    ? window.currentLanguage
                    : (localStorage.getItem('chatbook-language') || document.documentElement.lang || 'en');
            } catch (e) {
                return document.documentElement.lang || 'en';
            }
        })();
        const isKo = String(uiLanguage || '').toLowerCase().includes('ko');
        const emptyMsg = isKo ? '요즘 관심사를 표시할 수 없습니다.' : 'Unable to show recent topics.';
        if (!Array.isArray(data) || data.length === 0) return emptyMsg;
        const cacheKey = `${mode}|${keywordLanguage}|${data.length}|${getRecentKeywordStamp(data)}`;
        const cached = recentKeywordSummaryCache.get(cacheKey);
        if (cached) return cached;
        const recentKeywords = buildKeywordStats(data, limit, mode, keywordLanguage);
        if (recentKeywords.length === 0) return emptyMsg;
        const recentLabels = recentKeywords.map(item => item.label);
        const recentLabelHtml = recentLabels.map(label => escapeHtml(label)).join(' · ');
        const intro = isKo ? '요즘 키워드는' : 'Top keywords:';
        const html = `<span>${intro}</span><br><span class="peak-hour">${recentLabelHtml}</span>`;
        recentKeywordSummaryCache.set(cacheKey, html);
        if (recentKeywordSummaryCache.size > 24) recentKeywordSummaryCache.clear();
        return html;
    }

    function getChatTimestampFast(item) {
        if (!item) return 0;
        const times = Array.isArray(item.messageTimes) ? item.messageTimes : [];
        if (times.length > 0) {
            let max = 0;
            for (let i = 0; i < times.length; i++) {
                const n = Number(times[i]);
                if (Number.isFinite(n) && n > max) max = n;
            }
            return max;
        }
        const n = Number(item.createTime || 0);
        return Number.isFinite(n) ? n : 0;
    }

    function getRecentKeywordStamp(data) {
        let maxSec = 0;
        for (let i = 0; i < data.length; i++) {
            const ts = getChatTimestampFast(data[i]);
            if (ts > maxSec) maxSec = ts;
        }
        return maxSec || 0;
    }


    function buildUserAttitudeStats(data) {
        const totals = { assistant: 0, debate: 0, emotional: 0 };
        let hasText = false;
        (data || []).forEach(item => {
            const text = getUserText(item);
            if (!text) return;
            hasText = true;
            const stats = analyzeUserAttitudeText(text);
            totals.assistant += stats.assistant;
            totals.debate += stats.debate;
            totals.emotional += stats.emotional;
        });
        const total = totals.assistant + totals.debate + totals.emotional;
        if (!hasText || total === 0) {
            return { total: 0, assistantPct: 0, debatePct: 0, emotionalPct: 0 };
        }
        const [assistantPct, debatePct, emotionalPct] = normalizePercentages([
            totals.assistant,
            totals.debate,
            totals.emotional
        ]);
        const leadIndex = [assistantPct, debatePct, emotionalPct].indexOf(Math.max(assistantPct, debatePct, emotionalPct));
        const leadKey = ['assistant', 'debate', 'emotional'][leadIndex];
        const leadLabel = ['비서형', '토론형', '감성형'][leadIndex];
        const leadPct = [assistantPct, debatePct, emotionalPct][leadIndex];
        return {
            total,
            assistantPct,
            debatePct,
            emotionalPct,
            leadKey,
            leadLabel,
            leadPct
        };
    }

    function formatUserAttitudeSummary(stats, lang) {
        if (!stats || stats.total === 0) return '--';

        const safeLang = (typeof lang === 'string' && lang) ? lang : (localStorage.getItem('chatbook-language') || 'en');
        const isKo = safeLang.startsWith('ko');

        const assistantPct = Number(stats.assistantPct) || 0;
        const debatePct = Number(stats.debatePct) || 0;
        const emotionalPct = Number(stats.emotionalPct) || 0;
        const sorted = [assistantPct, debatePct, emotionalPct].slice().sort((a, b) => b - a);
        const lead = sorted[0] || 0;
        const second = sorted[1] || 0;
        const isBalanced = (lead - second) <= 6;

        const leadKey = stats.leadKey || null;
        const leadLabel = stats.leadLabel || (isKo ? '균형형' : 'Balanced');

        if (isKo) {
            const adjectiveByKey = {
                assistant: '정돈된',
                debate: '논리적인',
                emotional: '따뜻한'
            };
            const adjective = isBalanced ? '균형 잡힌' : (adjectiveByKey[leadKey] || '');
            return adjective ? `${adjective}<br>${leadLabel}` : leadLabel;
        }

        const labelByKey = {
            assistant: 'Assistant type',
            debate: 'Debate type',
            emotional: 'Emotional type'
        };
        const adjectiveByKey = {
            assistant: 'Structured',
            debate: 'Analytical',
            emotional: 'Warm'
        };
        const label = labelByKey[leadKey] || leadLabel;
        const adjective = isBalanced ? 'Balanced' : (adjectiveByKey[leadKey] || '');
        return adjective ? `${adjective} ${label}` : label;
    }

    function analyzeUserAttitudeText(rawText) {
        const text = String(rawText || '').toLowerCase();
        const assistantKeywords = [
            '해줘', '해줘요', '해주세요', '해줄래', '해주라', '정리해', '정리해줘', '요약해', '요약해줘',
            '찾아봐', '알려줘', '추천해', '만들어줘', '도와줘', '써줘'
        ];
        const debateKeywords = [
            '어떻게 생각해', '생각은', '내 생각은', '내 생각은 다른데', '어때', '어떤데',
            '토론', '근거', '반박', '비교해', '장단점'
        ];
        const emotionalKeywords = [
            '힘들어', '힘들다', '대박', '고마워', '감사', '감사해', '고맙', '좋아',
            '행복', '슬퍼', '짜증', '미안', '응원', '사랑'
        ];
        const assistantEndings = ['해줘', '해주세요', '해줄래', '해줘요', '해주라', '정리해', '요약해', '찾아봐', '알려줘', '추천해', '만들어줘', '도와줘', '써줘'];
        const debateEndings = ['어떻게 생각해', '어때', '어떤데', '내 생각은', '생각은'];
        const emotionalEndings = ['힘들어', '고마워', '감사해', '대박', '좋아', '미안해', '사랑해'];
        const sentences = text.split(/[.!?。！？\n]/).map(part => part.trim()).filter(Boolean);

        let assistant = countKeywordHits(text, assistantKeywords);
        let debate = countKeywordHits(text, debateKeywords);
        let emotional = countKeywordHits(text, emotionalKeywords);

        sentences.forEach(sentence => {
            if (assistantEndings.some(ending => sentence.endsWith(ending))) assistant += 1;
            if (debateEndings.some(ending => sentence.endsWith(ending))) debate += 1;
            if (emotionalEndings.some(ending => sentence.endsWith(ending))) emotional += 1;
        });

        const questionMarks = (text.match(/\?/g) || []).length;
        if (questionMarks > 0) debate += questionMarks;

        const emotiveMatches = text.match(/(ㅋㅋ+|ㅎㅎ+|ㅠ+|ㅜ+)/g);
        if (emotiveMatches) emotional += emotiveMatches.length;

        return { assistant, debate, emotional };
    }

    function countKeywordHits(text, keywords) {
        if (!text) return 0;
        return keywords.reduce((sum, keyword) => {
            if (!keyword) return sum;
            const regex = new RegExp(escapeRegExp(keyword), 'g');
            const matches = text.match(regex);
            return sum + (matches ? matches.length : 0);
        }, 0);
    }

    function normalizePercentages(values) {
        const total = values.reduce((sum, value) => sum + value, 0);
        if (!total) return values.map(() => 0);
        const raw = values.map(value => (value / total) * 100);
        const rounded = raw.map(value => Math.round(value));
        const diff = 100 - rounded.reduce((sum, value) => sum + value, 0);
        if (diff !== 0) {
            let maxIndex = 0;
            raw.forEach((value, index) => {
                if (value > raw[maxIndex]) maxIndex = index;
            });
            rounded[maxIndex] += diff;
        }
        return rounded;
    }

    function buildRoleRatio(data) {
        const totals = { user: 0, assistant: 0 };
        (data || []).forEach(item => {
            const counts = getRoleCountsFromItem(item);
            totals.user += counts.user;
            totals.assistant += counts.assistant;
        });
        const total = totals.user + totals.assistant;
        if (total === 0) return { total: 0, userPct: 0, assistantPct: 0 };
        const userPct = Math.round((totals.user / total) * 100);
        const assistantPct = 100 - userPct;
        return { total, userPct, assistantPct };
    }

    function getRoleCountsFromItem(item) {
        if (!item) return { user: 0, assistant: 0 };
        if (typeof item.userCount === 'number' || typeof item.assistantCount === 'number') {
            return { user: item.userCount || 0, assistant: item.assistantCount || 0 };
        }
        const extracted = extractRoleCountsFromHtml(item.contentHTML);
        item.userCount = extracted.user;
        item.assistantCount = extracted.assistant;
        return extracted;
    }

    function extractRoleCountsFromHtml(html) {
        if (!html) return { user: 0, assistant: 0 };
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return {
            user: doc.querySelectorAll('.msg.user-msg').length,
            assistant: doc.querySelectorAll('.msg.assistant-msg').length
        };
    }

    function getRecentChats(data, count) {
        const withTime = data.map((item, index) => ({
            item,
            index,
            time: getChatTimestamp(item)
        }));
        const hasTime = withTime.some(entry => entry.time > 0);
        if (hasTime) {
            withTime.sort((a, b) => b.time - a.time);
        } else {
            withTime.sort((a, b) => b.index - a.index);
        }
        return withTime.slice(0, count).map(entry => entry.item);
    }

    function getChatTimestamp(item) {
        if (!item) return 0;
        if (Array.isArray(item.messageTimes) && item.messageTimes.length > 0) {
            return Math.max(...item.messageTimes);
        }
        return item.createTime || 0;
    }

    function getUserText(item) {
        if (!item) return '';
        if (item.userText && item.userText.trim().length > 0) {
            return item.userText.toLowerCase();
        }
        const extracted = extractRoleTextFromHtml(item.contentHTML, 'user');
        if (extracted) {
            item.userText = extracted;
            return extracted.toLowerCase();
        }
        return '';
    }

    function buildLongestConversations(data, limit) {
        if (!Array.isArray(data) || data.length === 0) return [];
        const entries = data.map((item, index) => {
            const counts = getRoleCountsFromItem(item);
            const messageCount = counts.user + counts.assistant;
            const totalText = getConversationText(item);
            const charCount = totalText.replace(/\s+/g, '').length;
            return {
                title: item.title || '제목 없음',
                messageCount,
                charCount,
                index
            };
        }).filter(entry => entry.messageCount > 0 || entry.charCount > 0);
        entries.sort((a, b) => {
            if (b.messageCount !== a.messageCount) return b.messageCount - a.messageCount;
            if (b.charCount !== a.charCount) return b.charCount - a.charCount;
            return a.index - b.index;
        });
        return entries.slice(0, limit).map(entry => ({
            title: entry.title,
            timeLabel: `메시지 ${entry.messageCount}개 · 글자 ${entry.charCount}자`
        }));
    }

    function getConversationText(item) {
        if (!item) return '';
        let userText = item.userText || '';
        let assistantText = item.assistantText || '';
        if (!userText) {
            const extracted = extractRoleTextFromHtml(item.contentHTML, 'user');
            if (extracted) {
                item.userText = extracted;
                userText = extracted;
            }
        }
        if (!assistantText) {
            const extracted = extractRoleTextFromHtml(item.contentHTML, 'assistant');
            if (extracted) {
                item.assistantText = extracted;
                assistantText = extracted;
            }
        }
        if (!userText && !assistantText) {
            return item.searchText || '';
        }
        return `${userText} ${assistantText}`.trim();
    }

    function buildContextDepthStats(data) {
        const counts = { context: 0, simple: 0 };
        (data || []).forEach(item => {
            const text = getUserText(item);
            if (!text) return;
            const hasContext = isContextRich(text);
            if (hasContext) counts.context += 1;
            else counts.simple += 1;
        });
        const items = [
            { key: 'context', label: '맥락 포함', count: counts.context },
            { key: 'simple', label: '간단 질문', count: counts.simple }
        ];
        const total = items.reduce((sum, item) => sum + item.count, 0);
        const contextPct = total > 0 ? Math.round((counts.context / total) * 100) : 0;
        return { total, items, contextPct };
    }

    function isContextRich(text) {
        const normalized = text.toLowerCase();
        const hasKeyword = /배경|상황|맥락|조건|제약|전제|목표|상세|context|background|requirement/.test(normalized);
        const sentenceCount = (normalized.match(/[.!?。！？]/g) || []).length;
        const length = normalized.replace(/\s+/g, '').length;
        return hasKeyword || sentenceCount >= 2 || length >= 80 || normalized.includes('\n');
    }

    function buildQuestionLengthStats(data, mode) {
        let lengthSum = 0;
        let convoCount = 0;
        (data || []).forEach(item => {
            const roleCounts = getRoleCountsFromItem(item);
            if (roleCounts.user <= 0) return;
            const text = getUserText(item);
            if (!text) return;
            lengthSum += text.length;
            convoCount += 1;
        });
        if (convoCount === 0) return 0;
        return Math.round(lengthSum / convoCount);
    }

    function buildConversationFlowStats(data) {
        const counts = { followUp: 0, single: 0 };
        let convoCount = 0;
        let turnSum = 0;
        (data || []).forEach(item => {
            const roleCounts = getRoleCountsFromItem(item);
            const totalTurns = roleCounts.user + roleCounts.assistant;
            if (roleCounts.user <= 0) return;
            convoCount += 1;
            turnSum += totalTurns;
            if (roleCounts.user >= 2) counts.followUp += 1;
            else counts.single += 1;
        });
        const items = [
            { key: 'followUp', label: '후속 질문', count: counts.followUp },
            { key: 'single', label: '단일 질문', count: counts.single }
        ];
        const total = items.reduce((sum, item) => sum + item.count, 0);
        const followUpPct = total > 0 ? Math.round((counts.followUp / total) * 100) : 0;
        const avgTurns = convoCount > 0 ? turnSum / convoCount : 0;
        return { total, items, followUpPct, avgTurns };
    }

    function buildPeakTimeStats(data) {
        const hours = new Array(24).fill(null).map((_, hour) => ({
            hour,
            wordCount: 0,
            complexityWeighted: 0,
            sampleCount: 0
        }));

        (data || []).forEach(item => {
            const timestamps = Array.isArray(item.messageTimes) && item.messageTimes.length > 0
                ? item.messageTimes
                : (item.createTime ? [item.createTime] : []);
            if (timestamps.length === 0) return;
            const totalText = getConversationText(item);
            const totalWords = countWords(totalText);
            const userText = getUserText(item);
            const complexity = estimateComplexity(userText);
            const wordPerHit = timestamps.length > 0 ? totalWords / timestamps.length : totalWords;
            timestamps.forEach(timestamp => {
                const date = new Date(timestamp * 1000);
                if (Number.isNaN(date.getTime())) return;
                const hour = date.getHours();
                const bucket = hours[hour];
                bucket.wordCount += wordPerHit;
                bucket.complexityWeighted += complexity * wordPerHit;
                bucket.sampleCount += 1;
            });
        });

        const items = hours.map(item => {
            const avgComplexity = item.wordCount > 0 ? item.complexityWeighted / item.wordCount : 0;
            const score = item.wordCount * (0.6 + 0.4 * avgComplexity);
            return {
                hour: item.hour,
                wordCount: item.wordCount,
                avgComplexity,
                score
            };
        });

        const totalScore = items.reduce((sum, item) => sum + item.score, 0);
        const totalWords = items.reduce((sum, item) => sum + item.wordCount, 0);
        const activeHours = items.filter(item => item.wordCount > 0).length || 1;
        const avgWords = totalWords / activeHours;
        const peak = items.reduce((best, item) => (item.score > best.score ? item : best), items[0]);
        return { items, peak, totalScore, totalWords, avgWords };
    }

    function countWords(text) {
        if (!text) return 0;
        const matches = text.trim().match(/[A-Za-z0-9가-힣]+/g);
        return matches ? matches.length : 0;
    }

    function estimateComplexity(text) {
        if (!text) return 0;
        const normalized = text.trim();
        if (!normalized) return 0;
        const wordCount = countWords(normalized);
        const sentenceCount = (normalized.match(/[.!?。！？]/g) || []).length + (normalized.includes('\n') ? 1 : 0);
        const length = normalized.replace(/\s+/g, '').length;
        const wordScore = Math.min(wordCount / 40, 1);
        const sentenceScore = Math.min(sentenceCount / 4, 1);
        const lengthScore = Math.min(length / 160, 1);
        const contextBonus = isContextRich(normalized) ? 0.1 : 0;
        const score = (wordScore * 0.45) + (sentenceScore * 0.35) + (lengthScore * 0.1) + contextBonus;
        return Math.min(score, 1);
    }

    function formatHourShort(hour) {
        if (typeof hour !== 'number') return '--';
        return `${String(hour).padStart(2, '0')}시`;
    }

    function formatHourLabel(hour) {
        if (typeof hour !== 'number') return '--';
        if (hour === 0) return '자정';
        if (hour > 0 && hour < 6) return `새벽 ${hour}시`;
        if (hour < 12) return `오전 ${hour}시`;
        if (hour === 12) return '오후 12시';
        if (hour < 18) return `오후 ${hour - 12}시`;
        return `밤 ${hour - 12}시`;
    }

    function getPeakStyleLabel(hour, lang = 'ko') {
        const normalizedLang = String(lang || 'ko').toLowerCase().includes('ko') ? 'ko' : 'en';
        if (normalizedLang === 'en') {
            if (hour >= 0 && hour < 5) return 'Thinker';
            if (hour < 9) return 'Planner';
            if (hour < 12) return 'Focuser';
            if (hour < 15) return 'Explorer';
            if (hour < 19) return 'Doer';
            if (hour < 22) return 'Explorer';
            return 'Thinker';
        }
        if (hour >= 0 && hour < 5) return '사색가';
        if (hour < 9) return '설계자';
        if (hour < 12) return '집중가';
        if (hour < 15) return '탐구가';
        if (hour < 19) return '몰입가';
        if (hour < 22) return '탐구가';
        return '사색가';
    }

    function getPeakTraitAdjective(stats, lang = 'ko') {
        const normalizedLang = String(lang || 'ko').toLowerCase().includes('ko') ? 'ko' : 'en';
        if (!stats || !stats.peak || typeof stats.avgWords !== 'number') return '';
        if (typeof stats.totalScore === 'number' && stats.totalScore === 0) return '';

        const peak = stats.peak;
        const avgWords = stats.avgWords;
        const complexityTier = peak.avgComplexity >= 0.65 ? 'high' : peak.avgComplexity >= 0.45 ? 'mid' : 'low';
        const lengthTier = peak.wordCount >= avgWords * 1.2 ? 'long' : peak.wordCount <= avgWords * 0.7 ? 'short' : 'mid';

        if (normalizedLang === 'en') {
            if (complexityTier === 'high' && lengthTier === 'long') return 'Insightful';
            if (complexityTier === 'high' && lengthTier === 'short') return 'Sharp';
            if (complexityTier === 'high') return 'Reflective';
            if (complexityTier === 'mid' && lengthTier === 'long') return 'Thorough';
            if (complexityTier === 'mid' && lengthTier === 'short') return 'Clear';
            if (complexityTier === 'mid') return 'Logical';
            if (lengthTier === 'long') return 'Curious';
            if (lengthTier === 'short') return 'Light';
            return 'Flexible';
        }

        if (complexityTier === 'high' && lengthTier === 'long') return '통찰력 있는';
        if (complexityTier === 'high' && lengthTier === 'short') return '날카로운';
        if (complexityTier === 'high') return '사색적인';
        if (complexityTier === 'mid' && lengthTier === 'long') return '꼼꼼한';
        if (complexityTier === 'mid' && lengthTier === 'short') return '명쾌한';
        if (complexityTier === 'mid') return '논리적인';
        if (lengthTier === 'long') return '호기심 많은';
        if (lengthTier === 'short') return '가벼운';
        return '유연한';
    }

    function formatFocusStyleSentence(adjective, noun, lang = 'ko') {
        const normalizedLang = String(lang || 'ko').toLowerCase().includes('ko') ? 'ko' : 'en';
        if (!noun) return '--';
        if (normalizedLang === 'en') {
            if (adjective) {
                return `You are a <span class="focus-style-dynamic">${escapeHtml(adjective)}</span> <span class="focus-style-dynamic">${escapeHtml(noun)}</span>.`;
            }
            return `You are a <span class="focus-style-dynamic">${escapeHtml(noun)}</span>.`;
        }
        if (adjective) {
            return `당신은<br><span class="focus-style-dynamic">${escapeHtml(adjective)}</span><br><span class="focus-style-dynamic">${escapeHtml(noun)}</span><br>이시군요!`;
        }
        return `당신은<br><span class="focus-style-dynamic">${escapeHtml(noun)}</span><br>이시군요!`;
    }

    function getPeakDescriptor(peak, avgWords) {
        const complexityTone = peak.avgComplexity >= 0.65
            ? '철학적이고'
            : peak.avgComplexity >= 0.45
                ? '구체적인'
                : '가벼운';
        const lengthTone = peak.wordCount >= avgWords * 1.2
            ? '긴'
            : peak.wordCount <= avgWords * 0.7
                ? '간결한'
                : '균형 잡힌';
        if (complexityTone === '가벼운' && lengthTone === '간결한') return '가볍고 간결한';
        if (complexityTone === '구체적인' && lengthTone === '균형 잡힌') return '구체적이고 균형 잡힌';
        return `${complexityTone} ${lengthTone}`;
    }

    function hasKeywordSourceText(data, mode) {
        return data.some(item => {
            const text = getKeywordText(item, mode).trim();
            return text.length > 0;
        });
    }

    function normalizeToken(token) {
        if (!token) return '';
        let word = token.trim().toLowerCase();
        if (word.length < 2) return '';
        if (/^\d+$/.test(word)) return '';
        if (/^[가-힣]+$/.test(word)) {
            for (const suffix of ['입니다', '합니다', '했습니다', '했어요', '해요', '하지', '하게']) {
                if (word.endsWith(suffix) && word.length > suffix.length + 1) {
                    word = word.slice(0, -suffix.length);
                    break;
                }
            }
            for (const suffix of ['적인', '은', '는', '이', '가', '을', '를', '의', '과', '와', '도', '만', '까지', '부터', '에서', '으로', '로', '에', '에게', '께', '한테', '랑', '이나', '엔', '에는', '으로는', '로는']) {
                if (word.endsWith(suffix) && word.length > suffix.length) {
                    word = word.slice(0, -suffix.length);
                    break;
                }
            }
        }
        return word.length >= 2 ? word : '';
    }

    function canonicalizeKeyword(word) {
        if (!word) return '';
        const suffixes = [
            '으로부터', '에서는', '들까지', '한테', '까지', '부터', '에서', '으로', '로',
            '들에게', '들하고', '들이', '들을', '들과', '들은', '들만', '들에', '들로', '들',
            '적인', '은', '는', '이', '가', '을', '를', '의', '과', '와', '도', '만', '에', '이나', '엔', '에는', '으로는', '로는'
        ];
        for (const suffix of suffixes) {
            if (word.endsWith(suffix) && word.length > suffix.length) {
                return word.slice(0, -suffix.length);
            }
        }
        return word;
    }

    function matchesLanguage(token, language) {
        if (language === 'all') return true;
        if (language === 'ko') return /[가-힣]/.test(token);
        if (language === 'en') return /[a-zA-Z]/.test(token);
        return true;
    }
    function isLikelyNoun(word) {
        const hangulOnly = /^[가-힣]+$/.test(word);
        const nounBlockSuffixes = [
            '하다', '합니다', '했다', '하는', '한다', '된다', '됐다', '있다', '없다', '되다',
            '하면', '했습니다', '해요', '했다', '되어', '되면', '싶다', '같다', '이다', '아니다',
            '였', '이다', '된다', '됐다', '한다', '했다', '해도', '해서', '하며', '하고', '하며', '해서',
            '하면', '하면서', '하자', '하려', '하려고', '하려면', '한다면',
            '할까', '될까', '있을까', '좋을까', '할까요', '될까요', '있을까요', '좋을까요',
            '을까', '일까', '까', '나요', '니', '냐', '죠', '야', '겠지', '겠죠', '겠어요',
            '줘', '줄래', '줄래요', '해줘', '해줄래', '해줄래요', '해줄게', '해줄게요', '게요',
            '해야', '해야지', '해야죠', '해야해', '해야해요',
            '어요', '아요', '여요', '돼요', '되요', '돼', '되', '였지'
        ];
        if (hangulOnly) {
            // Block formal polite endings that are unlikely to be nouns (e.g., "있습니다", "됩니다").
            if (/습니다$/.test(word)) return false;
            if (nounBlockSuffixes.some(suffix => word.endsWith(suffix))) return false;
            return word.length >= 2;
        }
        return /^[a-zA-Z][a-zA-Z0-9]{2,}$/.test(word);
    }

    function renderHeatmap(container, data) {
        const maxValue = Math.max(...data.map(item => item.count), 1);
        data.forEach(item => {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            cell.dataset.level = getHeatmapLevel(item.count, maxValue);
            cell.dataset.tooltip = `${item.key}: ${item.count}`;
            container.appendChild(cell);
        });

        if (!container.dataset.tooltipBound) {
            container.dataset.tooltipBound = 'true';
            container.addEventListener('mousemove', (event) => {
                const target = event.target.closest('.heatmap-cell');
                if (!target) return;
                showTooltip(target.dataset.tooltip || '', event.pageX, event.pageY);
            });
            container.addEventListener('mouseleave', hideTooltip);
        }
    }

    function getHeatmapLevel(count, maxValue) {
        if (count === 0) return 0;
        const ratio = count / maxValue;
        if (ratio < 0.25) return 1;
        if (ratio < 0.5) return 2;
        if (ratio < 0.75) return 3;
        return 4;
    }

    function renderMonthlyBarChart(container, data) {
        const width = 640;
        const height = 230;
        const padding = 18;
        const axisSpace = 26;
        const maxValue = Math.max(...data.map(item => item.value), 1);
        const chartHeight = height - padding * 2 - axisSpace;
        const chartBottom = height - padding - axisSpace;
        const chartWidth = width - padding * 2;
        const slotWidth = chartWidth / data.length;
        const barWidth = Math.max(6, slotWidth * 0.7);
        const barOffset = (slotWidth - barWidth) / 2;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

        const gridLines = 4;
        for (let i = 0; i <= gridLines; i++) {
            const y = padding + (chartHeight * i) / gridLines;
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', padding);
            line.setAttribute('x2', width - padding);
            line.setAttribute('y1', y);
            line.setAttribute('y2', y);
            line.setAttribute('class', 'chart-grid');
            svg.appendChild(line);

            const value = Math.round(maxValue - (maxValue * i) / gridLines);
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', padding - 6);
            label.setAttribute('y', y + 4);
            label.setAttribute('text-anchor', 'end');
            label.setAttribute('class', 'chart-axis-label');
            label.textContent = value;
            svg.appendChild(label);
        }

        const hoverLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        hoverLabel.setAttribute('x', padding);
        hoverLabel.setAttribute('y', padding);
        hoverLabel.setAttribute('text-anchor', 'middle');
        hoverLabel.setAttribute('class', 'chart-value-label');
        hoverLabel.setAttribute('opacity', '0');
        svg.appendChild(hoverLabel);

        data.forEach((item, index) => {
            const barHeight = maxValue === 0 ? 0 : (item.value / maxValue) * chartHeight;
            const x = padding + index * slotWidth + barOffset;
            const y = chartBottom - barHeight;
            const label = item.label.replace('-', '.');

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('width', barWidth);
            rect.setAttribute('height', barHeight);
            rect.setAttribute('rx', '3');
            rect.setAttribute('class', 'bar-rect');
            rect.dataset.tooltip = `${item.value}건`;
            rect.dataset.label = label;
            rect.dataset.value = item.value;
            svg.appendChild(rect);
        });

        const monthY = height - padding - 10;
        const yearY = height - padding + 6;
        const yearRanges = [];
        let currentYear = null;
        let yearStartIndex = 0;

        data.forEach((item, index) => {
            const [year, month] = item.label.split('-');
            const xCenter = padding + index * slotWidth + slotWidth / 2;
            const monthText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            monthText.setAttribute('x', xCenter);
            monthText.setAttribute('y', monthY);
            monthText.setAttribute('text-anchor', 'middle');
            monthText.setAttribute('class', 'chart-axis-label');
            monthText.textContent = month || item.label;
            svg.appendChild(monthText);

            if (currentYear === null) {
                currentYear = year;
                yearStartIndex = index;
            } else if (year !== currentYear) {
                yearRanges.push({ year: currentYear, start: yearStartIndex, end: index - 1 });
                currentYear = year;
                yearStartIndex = index;
            }
        });

        if (currentYear !== null) {
            yearRanges.push({ year: currentYear, start: yearStartIndex, end: data.length - 1 });
        }

        yearRanges.forEach(range => {
            const startX = padding + range.start * slotWidth;
            const endX = padding + (range.end + 1) * slotWidth;
            const centerX = (startX + endX) / 2;
            const yearText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            yearText.setAttribute('x', centerX);
            yearText.setAttribute('y', yearY);
            yearText.setAttribute('text-anchor', 'middle');
            yearText.setAttribute('class', 'chart-axis-label');
            yearText.setAttribute('fill', '#999');
            yearText.textContent = range.year || '';
            svg.appendChild(yearText);
        });

        svg.addEventListener('mousemove', (event) => {
            const target = event.target.closest('.bar-rect');
            if (!target) return;
            const value = target.dataset.value || '';
            const x = Number(target.getAttribute('x')) + Number(target.getAttribute('width')) / 2;
            const y = Number(target.getAttribute('y')) - 6;
            hoverLabel.setAttribute('x', x);
            hoverLabel.setAttribute('y', Math.max(padding, y));
            hoverLabel.textContent = `${value}건`;
            hoverLabel.setAttribute('opacity', '1');
        });

        svg.addEventListener('mouseleave', () => {
            hoverLabel.setAttribute('opacity', '0');
            hideTooltip();
        });

        attachSvgTooltip(svg, '.bar-rect');
        container.appendChild(svg);
    }

    function renderKeywordList(container, data) {
        data.forEach(item => {
            const chip = document.createElement('span');
            chip.className = 'keyword-chip';
            chip.title = `${item.label}: ${item.value}`;
            chip.innerHTML = `<span>${item.label}</span><span class="count">${item.value}</span>`;
            container.appendChild(chip);
        });
    }

    function renderRadarChart(container, data) {
        const size = 220;
        const center = size / 2;
        const radius = 80;
        const maxValue = Math.max(...data.map(item => item.value), 1);
        const angleStep = (Math.PI * 2) / data.length;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

        const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ring.setAttribute('cx', center);
        ring.setAttribute('cy', center);
        ring.setAttribute('r', radius);
        ring.setAttribute('fill', 'none');
        ring.setAttribute('stroke', '#d1d1d6');
        ring.setAttribute('stroke-width', '1');
        svg.appendChild(ring);

        const points = data.map((item, index) => {
            const angle = angleStep * index - Math.PI / 2;
            const valueRadius = radius * (item.value / maxValue);
            const x = center + valueRadius * Math.cos(angle);
            const y = center + valueRadius * Math.sin(angle);
            return { x, y, item, angle };
        });

        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', points.map(point => `${point.x},${point.y}`).join(' '));
        polygon.setAttribute('fill', 'rgba(17, 24, 39, 0.12)');
        polygon.setAttribute('stroke', '#111827');
        polygon.setAttribute('stroke-width', '2');
        svg.appendChild(polygon);

        points.forEach(point => {
            const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            dot.setAttribute('cx', point.x);
            dot.setAttribute('cy', point.y);
            dot.setAttribute('r', 3);
            dot.setAttribute('class', 'radar-dot');
            dot.setAttribute('fill', '#111827');
            appendSvgTitle(dot, `${point.item.label}: ${point.item.value}`);
            dot.dataset.tooltip = `${point.item.label}: ${point.item.value}`;
            svg.appendChild(dot);
        });

        points.forEach(point => {
            const labelRadius = radius + 18;
            const labelX = center + labelRadius * Math.cos(point.angle);
            const labelY = center + labelRadius * Math.sin(point.angle);
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', labelX);
            label.setAttribute('y', labelY);
            label.setAttribute('class', 'radar-label');
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('dominant-baseline', 'middle');
            label.textContent = String(point.item.hour);
            svg.appendChild(label);
        });

        attachSvgTooltip(svg, '.radar-dot');
        container.appendChild(svg);
    }

    function renderPeakTimeChart(container, axisContainer, stats) {
        if (!container || !stats) return;
        container.innerHTML = '';
        if (axisContainer) axisContainer.innerHTML = '';
        const items = stats.items || [];
        const maxScore = Math.max(...items.map(item => item.score), 1);

        items.forEach(item => {
            const bar = document.createElement('div');
            bar.className = 'peaktime-bar';
            if (stats.peak && item.hour === stats.peak.hour) {
                bar.classList.add('is-peak');
            }
            const heightPct = maxScore === 0 ? 0 : Math.round((item.score / maxScore) * 100);
            const height = item.score > 0 ? Math.max(4, heightPct) : 0;
            bar.style.height = `${height}%`;
            const wordCount = Math.round(item.wordCount);
            const complexityPct = Math.round(item.avgComplexity * 100);
            const score = Math.round(item.score);
            bar.dataset.tooltip = `${formatHourShort(item.hour)} · 단어 ${wordCount} · 복잡도 ${complexityPct}% · 밀도 ${score}`;
            container.appendChild(bar);
        });

        if (axisContainer) {
            for (let hour = 0; hour < 24; hour += 1) {
                const label = document.createElement('span');
                label.textContent = hour % 6 === 0 || hour === 23 ? String(hour) : '';
                axisContainer.appendChild(label);
            }
        }

        if (!container.dataset.tooltipBound) {
            container.dataset.tooltipBound = 'true';
            container.addEventListener('mousemove', (event) => {
                const bar = event.target.closest('.peaktime-bar');
                if (!bar) return;
                showTooltip(bar.dataset.tooltip || '', event.pageX, event.pageY);
            });
            container.addEventListener('mouseleave', hideTooltip);
        }
    }

    function renderQuestionTypeChart(container, stats) {
        const max = Math.max(...stats.items.map(item => item.count), 1);
        stats.items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'type-row';
            const label = document.createElement('span');
            label.className = 'type-label';
            label.textContent = item.label;
            const bar = document.createElement('div');
            bar.className = 'type-bar';
            const fill = document.createElement('div');
            fill.className = 'type-bar-fill';
            fill.style.width = `${Math.round((item.count / max) * 100)}%`;
            bar.appendChild(fill);
            const count = document.createElement('span');
            count.className = 'type-count';
            count.textContent = item.count;
            row.appendChild(label);
            row.appendChild(bar);
            row.appendChild(count);
            container.appendChild(row);
        });
    }

    function renderTimeline(container, items) {
        items.forEach(item => {
            const entry = document.createElement('div');
            entry.className = 'timeline-item';
            const title = document.createElement('div');
            title.className = 'timeline-title';
            title.textContent = item.title || '제목 없음';
            const meta = document.createElement('div');
            meta.className = 'timeline-meta';
            meta.textContent = item.timeLabel || '';
            entry.appendChild(title);
            entry.appendChild(meta);
            container.appendChild(entry);
        });
    }

    function renderMonthYearAxis(monthContainer, yearContainer, data) {
        if (!monthContainer) return;
        monthContainer.innerHTML = '';
        if (yearContainer) yearContainer.innerHTML = '';

        const columns = data.length || 1;
        monthContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        if (yearContainer) yearContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

        data.forEach(item => {
            const parts = item.label.split('-');
            const month = parts[1] || item.label;
            const label = document.createElement('span');
            label.textContent = month;
            monthContainer.appendChild(label);
        });

        if (!yearContainer) return;
        let currentYear = null;
        let startIndex = 0;
        data.forEach((item, index) => {
            const year = item.label.split('-')[0] || '';
            if (currentYear === null) {
                currentYear = year;
                startIndex = index;
                return;
            }
            if (year !== currentYear) {
                const yearLabel = document.createElement('span');
                yearLabel.textContent = currentYear;
                yearLabel.style.gridColumn = `${startIndex + 1} / ${index + 1}`;
                yearContainer.appendChild(yearLabel);
                currentYear = year;
                startIndex = index;
            }
        });
        if (currentYear !== null) {
            const yearLabel = document.createElement('span');
            yearLabel.textContent = currentYear;
            yearLabel.style.gridColumn = `${startIndex + 1} / ${data.length + 1}`;
            yearContainer.appendChild(yearLabel);
        }
    }

    function appendSvgTitle(element, text) {
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = text;
        element.appendChild(title);
    }

    function attachSvgTooltip(svg, selector) {
        if (!svg || svg.dataset.tooltipBound) return;
        svg.dataset.tooltipBound = 'true';
        svg.addEventListener('mousemove', (event) => {
            const target = event.target.closest(selector);
            if (!target) return;
            const text = target.dataset.tooltip || '';
            showTooltip(text, event.pageX, event.pageY);
        });
        svg.addEventListener('mouseleave', hideTooltip);
    }

    function isHistoryView() {
        const dashboardView = document.getElementById('dashboard-view');
        const isDashboard = dashboardView && !dashboardView.classList.contains('hidden');
        const isMyPage = myPageView && !myPageView.classList.contains('hidden');
        const isSettings = settingsView && !settingsView.classList.contains('hidden');
        const isContentVisible = contentDisplay && !contentDisplay.classList.contains('hidden');
        return !isDashboard && !isMyPage && !isSettings && hasLoadedData && isContentVisible;
    }

    let searchMatches = [];
    let searchMatchIndex = -1;

    function clearSearchHighlights(container) {
        const highlights = container.querySelectorAll('mark.search-highlight');
        highlights.forEach(mark => {
            const textNode = document.createTextNode(mark.textContent);
            mark.replaceWith(textNode);
            if (textNode.parentNode) textNode.parentNode.normalize();
        });
        searchMatches = [];
        searchMatchIndex = -1;
        updateSearchCount();
    }

    function highlightChatContent(keyword) {
        if (!chatContent) return;
        const container = chatContent.querySelector('.view-content') || chatContent;
        clearSearchHighlights(container);
        if (!keyword) return;
        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'gi');
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                const parent = node.parentNode;
                if (!parent || parent.nodeName === 'MARK') return NodeFilter.FILTER_REJECT;
                if (parent.closest && parent.closest('script, style')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        const textNodes = [];
        let current;
        while ((current = walker.nextNode())) textNodes.push(current);
        textNodes.forEach(node => {
            const text = node.nodeValue;
            if (!regex.test(text)) return;
            regex.lastIndex = 0;
            const fragment = document.createDocumentFragment();
            let lastIndex = 0;
            let match;
            while ((match = regex.exec(text))) {
                const start = match.index;
                const end = start + match[0].length;
                if (start > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.slice(lastIndex, start)));
                }
                const mark = document.createElement('mark');
                mark.className = 'search-highlight';
                mark.textContent = text.slice(start, end);
                fragment.appendChild(mark);
                lastIndex = end;
            }
            if (lastIndex < text.length) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
            }
            node.replaceWith(fragment);
        });
        searchMatches = Array.from(container.querySelectorAll('mark.search-highlight'));
        searchMatchIndex = searchMatches.length ? 0 : -1;
        updateSearchCount();
        scrollToSearchMatch(searchMatchIndex);
    }

    function scrollToSearchMatch(index) {
        if (!searchMatches.length || index < 0 || index >= searchMatches.length) return;
        searchMatches.forEach(el => el.classList.remove('active'));
        const target = searchMatches[index];
        target.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        updateSearchCount();
    }

    function stepSearchMatch(direction) {
        if (!searchMatches.length) return;
        const total = searchMatches.length;
        const nextIndex = (searchMatchIndex + direction + total) % total;
        searchMatchIndex = nextIndex;
        scrollToSearchMatch(searchMatchIndex);
    }

    function updateSearchCount() {
        if (!historySearchCount) return;
        if (!searchMatches.length) {
            historySearchCount.textContent = '0/0';
        } else {
            historySearchCount.textContent = `${searchMatchIndex + 1}/${searchMatches.length}`;
        }
        if (historySearchPrev) historySearchPrev.disabled = searchMatches.length === 0;
        if (historySearchNext) historySearchNext.disabled = searchMatches.length === 0;
    }

    function applySearchFilter(keyword) {
        if (!isHistoryView()) return;
        const baseData = getFilteredChatData();
        const filtered = baseData.filter(item => {
            const title = item.title ? item.title.toLowerCase() : '';
            const subtitle = item.subtitle ? item.subtitle.toLowerCase() : '';
            const searchText = item.searchText ? item.searchText.toLowerCase() : '';
            return title.includes(keyword) || subtitle.includes(keyword) || searchText.includes(keyword);
        });
        renderList(filtered);
    }

    function setHistoryHeaderSecondaryVisible(isVisible) {
        document.querySelectorAll('.history-header-secondary').forEach(el => {
            el.classList.toggle('hidden', !isVisible);
        });
    }

    function setHistorySearchBarVisible(isVisible) {
        if (!historySearchBar) return;
        const shouldShow = isVisible && isHistoryView();
        historySearchBar.classList.toggle('hidden', !shouldShow);
        if (historySearchStack) {
            historySearchStack.classList.toggle('hidden', !shouldShow);
        }
        if (!shouldShow) {
            setHistorySearchExpanded(false);
        } else if (historySearchInput && historySearchInput.value) {
            setHistorySearchExpanded(true);
        }
    }

    function setHistoryFixedHeaderVisible(isVisible) {
        if (!fixedHistoryHeader) return;
        fixedHistoryHeader.classList.toggle('hidden', !isVisible);
    }

    function setHistorySearchExpanded(isExpanded, options = {}) {
        if (!historySearchBar) return;
        historySearchBar.classList.toggle('is-expanded', isExpanded);
        historySearchBar.classList.toggle('is-collapsed', !isExpanded);
        if (isExpanded && options.focus && historySearchInput) {
            historySearchInput.focus();
        }
    }

    // Common Listeners
    let searchDebounce = null;
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            if (!isHistoryView()) return;
            if (searchDebounce) clearTimeout(searchDebounce);
            searchDebounce = setTimeout(() => {
                applySearchFilter(keyword);
            }, 120);
        });
    }

    if (historySearchInput) {
        historySearchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            if (!isHistoryView()) return;
            if (keyword && historySearchBar && historySearchBar.classList.contains('is-collapsed')) {
                setHistorySearchExpanded(true);
            }
            if (searchDebounce) clearTimeout(searchDebounce);
            searchDebounce = setTimeout(() => {
                highlightChatContent(keyword);
            }, 120);
        });
        historySearchInput.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            stepSearchMatch(e.shiftKey ? -1 : 1);
        });
        historySearchInput.addEventListener('focus', () => setHistorySearchExpanded(true));
        historySearchInput.addEventListener('blur', () => {
            if (!historySearchInput.value) setHistorySearchExpanded(false);
        });
    }

    function handleSearchStep(direction) {
        if (!historySearchInput) return;
        const keyword = historySearchInput.value.trim().toLowerCase();
        if (!keyword) return;
        if (!searchMatches.length) {
            highlightChatContent(keyword);
            return;
        }
        stepSearchMatch(direction);
    }

    if (historySearchPrev) {
        historySearchPrev.addEventListener('click', () => handleSearchStep(-1));
    }

    if (historySearchNext) {
        historySearchNext.addEventListener('click', () => handleSearchStep(1));
    }

    if (historySearchToggle) {
        historySearchToggle.addEventListener('click', () => setHistorySearchExpanded(true, { focus: true }));
    }

    if (historySearchClose) {
        historySearchClose.addEventListener('click', () => {
            if (!historySearchInput) return;
            historySearchInput.value = '';
            highlightChatContent('');
            setHistorySearchExpanded(false);
        });
    }

    setHistorySearchExpanded(false);
    setHistorySearchBarVisible(false);

    if (mainContent && fixedHistoryHeader) {
        mainContent.addEventListener('scroll', () => {
            fixedHistoryHeader.classList.toggle('is-scrolled', mainContent.scrollTop > 8);
        });
    }

    if (historyTopBtn && mainContent) {
        historyTopBtn.addEventListener('click', () => {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (historyBottomBtn && mainContent) {
        historyBottomBtn.addEventListener('click', () => {
            mainContent.scrollTo({ top: mainContent.scrollHeight, behavior: 'smooth' });
        });
    }

    // Content Display Listeners (Code Toggle)
    contentDisplay.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-code-btn')) {
            const btn = e.target;
            const container = btn.closest('.code-container');
            if (!container) return;
            const content = container.querySelector('.code-content');
            if (!content) return;

            content.classList.toggle('expanded');

            if (content.classList.contains('expanded')) {
                btn.textContent = 'Collapse ⌃';
            } else {
                btn.textContent = 'Show Full Code ⌄';
            }
        }
    });

	    function handleReset(options = {}) {
	        const { skipConfirm = false, resetPreferences = false } = options;
	        if (skipConfirm || confirm("현재 데이터를 모두 지우고 초기화하시겠습니까? (저장된 데이터도 삭제됩니다)")) {
	            // Clear DB
	            clearChatDataFn();
	            lastSavedSessionAt = null;
	            if (resetPreferences) {
	                try {
	                    localStorage.removeItem(SETTINGS_KEY);
	                    localStorage.removeItem('chatbook-language');
	                    localStorage.removeItem(VIEW_STORAGE_KEY);
	                } catch (e) { }
	            }

	            // If we intentionally collapse due to empty state, persist it so the <head> prepaint
	            // logic matches on the next reload (prevents expanded flash after deletion).
	            saveSettings({ sidebarCollapsed: true });

	            // Clear Memory & UI
	            chatData = [];
	            chatListElement.innerHTML = '';
	            updateTitleNavButtons();
            if (chatContent) chatContent.innerHTML = '';
            hasLoadedData = false;
            updateEmptyState();
            searchInput.value = '';
            fileInput.value = '';
            currentFile = null;
            currentFileText = "";
            userSidebarOverride = false;
            didAutoRevealSidebar = false;
            setUploadStatusExpandedPreference(false);
            setSidebarCollapsedInstant(true);
            updateStats();
            showHistoryView();
            showToast("데이터가 초기화되었습니다. 분석할 파일을 다시 올려주세요.");
            updateRetentionStatus();
            const heatmapChart = document.getElementById('heatmap-chart');
            const areaChart = document.getElementById('area-chart');
            const keywordChart = document.getElementById('keyword-chart');
            const radarChart = document.getElementById('radar-chart');
            if (heatmapChart) heatmapChart.innerHTML = '';
            if (areaChart) areaChart.innerHTML = '';
            if (keywordChart) keywordChart.innerHTML = '';
            if (radarChart) radarChart.innerHTML = '';

            contentDisplay.classList.remove('hidden');
            const header = document.getElementById('content-header');
            if (header) header.classList.add('hidden');
            myPageView.classList.add('hidden');

            if (uploadScreen) {
                dashboard.classList.add('hidden');
                setTimeout(() => {
                    dashboard.style.display = 'none';
                    uploadScreen.style.display = 'flex';
                    setTimeout(() => {
                        uploadScreen.classList.remove('hidden');
                    }, 50);
                }, 500);
            }
        }
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', handleReset);
    }

    myPageBtn.addEventListener('click', () => {
        showMyPageView();
    });

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            showSettingsView();
            updateStats();
        });
    }

    if (globalSettingsBtn) {
        globalSettingsBtn.addEventListener('click', () => {
            showSettingsView();
            updateStats();
        });
    }

    // dashboardUploadBtn click behavior is handled earlier (toggles the status dropdown).

    if (dashboardRemoveBtn) {
        dashboardRemoveBtn.addEventListener('click', (e) => {
            // Defensive: prevent parent toggle handlers / overlay click delegation from interfering.
            e.preventDefault();
            e.stopPropagation();
            if (!currentFile && chatData.length === 0) {
                showToast("삭제할 파일이 없습니다.");
                return;
            }
            // Avoid `confirm()` flakiness on some browsers; reuse the modal-based flow used in Settings.
            if (clearDataModal) {
                if (clearDataResetPrefsToggle) clearDataResetPrefsToggle.checked = false;
                clearDataModal.classList.remove('hidden');
                return;
            }
            handleReset();
        });
    }

    if (dashboardViewCard) {
        dashboardViewCard.addEventListener('click', () => {
            showDashboardView();
            updateStats();
        });
    }

    if (dashboardMyPageCard) {
        dashboardMyPageCard.addEventListener('click', () => {
            showMyPageView();
        });
    }

    if (dashboardSettingsCard) {
        dashboardSettingsCard.addEventListener('click', () => {
            showSettingsView();
            updateStats();
        });
    }

    // Clear Data / Delete Logic
    const clearDataBtn = document.getElementById('clear-data-btn');
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', () => {
            if (!clearDataModal) {
                handleReset();
                return;
            }
            if (clearDataResetPrefsToggle) clearDataResetPrefsToggle.checked = false;
            clearDataModal.classList.remove('hidden');
        });
    }

    if (clearDataCancelBtn && clearDataModal) {
        clearDataCancelBtn.addEventListener('click', () => {
            clearDataModal.classList.add('hidden');
        });
    }

    if (clearDataConfirmBtn && clearDataModal) {
        clearDataConfirmBtn.addEventListener('click', () => {
            clearDataModal.classList.add('hidden');
            handleReset({ skipConfirm: true, resetPreferences: !!(clearDataResetPrefsToggle && clearDataResetPrefsToggle.checked) });
        });
    }

    if (clearDataModal) {
        clearDataModal.addEventListener('click', (e) => {
            if (e.target === clearDataModal) clearDataModal.classList.add('hidden');
        });
    }

    if (languageSettingSelect) {
        // Reflect current language on load
        const current = (typeof window.currentLanguage === 'string' && window.currentLanguage) ||
            localStorage.getItem('chatbook-language') || 'en';
        languageSettingSelect.value = current;
        languageSettingSelect.addEventListener('change', (e) => {
            const lang = e.target.value || 'en';
            if (typeof setLanguage === 'function') {
                setLanguage(lang);
            } else {
                // Fallback: store preference and reload to apply
                localStorage.setItem('chatbook-language', lang);
                window.location.reload();
            }
        });
    }

    if (chatListElement) {
        chatListElement.addEventListener('scroll', maybeAppendChatListOnScroll, { passive: true });
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            if (e.target.checked) document.body.classList.add('dark-mode');
            else document.body.classList.remove('dark-mode');
        });
    }

    chatListElement.addEventListener('click', (e) => {
        if (e.target.closest('.chat-item')) {
            myPageView.classList.add('hidden');
            contentDisplay.classList.remove('hidden');
            showHistoryView();
        }
    });

    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', () => {
            showDashboardView();
            updateStats();
        });
    }

    if (sidebarCollapseToggle) {
        sidebarCollapseToggle.addEventListener('click', () => {
            const isCollapsed = sidebar && sidebar.classList.contains('collapsed');
            userSidebarOverride = true;
            setSidebarCollapsed(!isCollapsed, true);
        });
    }

    // Keep dashboard top layout in sync with resizing.
    window.addEventListener('resize', () => {
        try {
            scheduleDashboardTopSync();
        } catch (e) { }
    });

    if (chatsTitle) {
        chatsTitle.addEventListener('click', () => {
            // Home button: clear selection and show start/history view
            const active = document.querySelector('.chat-item.active');
            if (active) active.classList.remove('active');
            if (chatContent) chatContent.innerHTML = '';
            setSidebarCollapsed(false, true);
            userSidebarOverride = true;
            showHistoryView();
            if (mainContent) {
                mainContent.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    document.querySelectorAll('.history-nav-btn').forEach(btn => {
        const direction = btn.dataset.direction || (btn.classList.contains('left') ? 'prev' : 'next');
        btn.addEventListener('click', () => handleTitleNav(direction));
        btn.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            handleTitleNav(direction);
        });
    });

    if (replaceFileBtn && fileInput) {
        replaceFileBtn.addEventListener('click', () => {
            fileInput.click();
        });
    }

    if (exportBackupBtn) {
        exportBackupBtn.addEventListener('click', () => {
            const payload = {
                savedAt: new Date().toISOString(),
                fileName: currentFile ? currentFile.name : null,
                fileSize: currentFile && typeof currentFile.size === 'number' ? currentFile.size : null,
                chatData: chatData
            };
            const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'chat-archive-backup.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        });
    }

    if (importBackupBtn && backupInput) {
        importBackupBtn.addEventListener('click', () => {
            backupInput.click();
        });
        backupInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const payload = JSON.parse(event.target.result);
                    if (!payload || !Array.isArray(payload.chatData)) {
                        alert('백업 파일 형식이 올바르지 않습니다.');
                        return;
                    }
                    chatData = payload.chatData;
                    currentFile = payload.fileName ? { name: payload.fileName, size: payload.fileSize ?? null } : null;
                    // Reset reveal flags so imported data can trigger auto-reveal
                    didAutoRevealSidebar = false;
                    userSidebarOverride = false;
                    renderList(getFilteredChatData());
                    updateStats();
                    showDashboard();
                    saveChatDataFn(chatData, currentFile || 'Restored Backup');
                } catch (error) {
                    alert('백업 파일을 읽는 중 오류가 발생했습니다.');
                }
            };
            reader.readAsText(file);
        });
    }

    const settingsHandlers = [
        { el: autoExpireToggle, key: 'autoExpire' },
        { el: persistLocalToggle, key: 'persistLocal' },
        { el: privacyModeToggle, key: 'privacyMode' },
        { el: filterByDateToggle, key: 'filterByDate' }
    ];

	            settingsHandlers.forEach(({ el, key }) => {
        if (!el) return;
        el.addEventListener('change', () => {
            saveSettings({ [key]: el.checked });
	            if (key === 'privacyMode') {
	                applyPrivacyModeUiState();
                if (el.checked) {
                    clearChatDataFn();
                    setHasDataFlag(false);
                    saveSettings({ sidebarCollapsed: true });
                    setSidebarCollapsedInstant(true);
                    setUploadStatusExpandedPreference(false);
                    lastSavedSessionAt = null;
                    const toastText = (() => {
                        try {
                            const lang = typeof window.currentLanguage === 'string' ? window.currentLanguage : 'en';
                            const dict = typeof window.translations === 'object' ? window.translations : (typeof translations === 'object' ? translations : null);
                            const t = dict && dict[lang] ? dict[lang] : null;
                            return (t && t['privacy-mode-enabled-toast']) ? t['privacy-mode-enabled-toast'] : 'Privacy mode enabled: local data will not be saved.';
                        } catch (e) {
                            return 'Privacy mode enabled: local data will not be saved.';
                        }
                    })();
                    showToast(toastText);
                }
	                updateRetentionStatus();
	            }
	            if (key === 'persistLocal' && !el.checked) {
                if (confirm("로컬 저장을 끄면 새로고침 시 복원되지 않습니다. 지금 이 기기에 저장된 로컬 데이터도 삭제할까요?")) {
                    clearChatDataFn();
                    setHasDataFlag(false);
                    saveSettings({ sidebarCollapsed: true });
                    setSidebarCollapsedInstant(true);
                    setUploadStatusExpandedPreference(false);
                    lastSavedSessionAt = null;
                }
            }
            if (key === 'filterByDate') applyDateFilter();
            if (key === 'filterByDate') syncFilterControls();
            updateRetentionStatus();
        });
    });

    if (sidebarFilterToggle && sidebarFilterToggle !== filterByDateToggle) {
        sidebarFilterToggle.addEventListener('change', () => {
            saveSettings({ filterByDate: sidebarFilterToggle.checked });
            applyDateFilter();
            syncFilterControls();
        });
    }

    if (filterStartInput) {
        filterStartInput.addEventListener('change', () => {
            setDateFilterEnabled(true);
            startWasManual = true;
            handleStartDateChange();
        });
    }

    if (filterEndInput) {
        filterEndInput.addEventListener('change', () => {
            setDateFilterEnabled(true);
            syncFilterControls();
            applyDateFilter();
        });
    }

    if (sidebarFilterStart) {
        sidebarFilterStart.addEventListener('change', () => {
            if (filterStartInput) filterStartInput.value = sidebarFilterStart.value;
            setDateFilterEnabled(true);
            startWasManual = true;
            handleStartDateChange();
        });
    }

    if (sidebarFilterEnd) {
        sidebarFilterEnd.addEventListener('change', () => {
            if (filterEndInput) filterEndInput.value = sidebarFilterEnd.value;
            setDateFilterEnabled(true);
            applyDateFilter();
        });
    }


    if (quickButtons.length > 0) {
        quickButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (!button.dataset.mode) return;
                const mode = button.dataset.mode || 'all';
                setQuickMode(mode);
            });
        });
    }

    if (keywordModeSelect) {
        keywordModeSelect.addEventListener('change', () => {
            scheduleAnalyticsCharts();
        });
    }

    if (keywordLanguageSelect) {
        keywordLanguageSelect.addEventListener('change', () => {
            scheduleAnalyticsCharts();
        });
    }

    if (chatSortSelect) {
        chatSortSelect.addEventListener('change', () => {
            currentSortMode = chatSortSelect.value || 'newest';
            saveSettings({ chatSortMode: currentSortMode });
            if (typeof CacheManager !== 'undefined') CacheManager.invalidate(null);
            recentKeywordSummaryCache.clear();
            renderList(getFilteredChatData());
        });
    }

    if (analysisPresetSelect) {
        analysisPresetSelect.addEventListener('change', () => {
            applyAnalyticsPreset(String(analysisPresetSelect.value || 'all'));
        });
    }

    if (analysisStartInput) {
        analysisStartInput.addEventListener('change', () => {
            if (!analysisPresetSelect) return;
            if (analysisPresetSelect.value !== 'custom') analysisPresetSelect.value = 'custom';
            syncAnalyticsControlsUi('custom');
            saveSettings({ analysisPreset: 'custom', analysisStart: analysisStartInput.value || '', analysisEnd: analysisEndInput ? (analysisEndInput.value || '') : '' });
            scheduleAnalyticsCharts();
            updateStats();
        });
    }

    if (analysisEndInput) {
        analysisEndInput.addEventListener('change', () => {
            if (!analysisPresetSelect) return;
            if (analysisPresetSelect.value !== 'custom') analysisPresetSelect.value = 'custom';
            syncAnalyticsControlsUi('custom');
            saveSettings({ analysisPreset: 'custom', analysisStart: analysisStartInput ? (analysisStartInput.value || '') : '', analysisEnd: analysisEndInput.value || '' });
            scheduleAnalyticsCharts();
            updateStats();
        });

        if (analysisMonthPrev) {
            analysisMonthPrev.addEventListener('click', () => {
                currentAnalysisMonth--;
                if (currentAnalysisMonth < 1) {
                    currentAnalysisMonth = 12;
                    currentAnalysisYear--;
                }
                updateMonthlyRange();
            });
        }

        if (analysisMonthNext) {
            analysisMonthNext.addEventListener('click', () => {
                currentAnalysisMonth++;
                if (currentAnalysisMonth > 12) {
                    currentAnalysisMonth = 1;
                    currentAnalysisYear++;
                }
                updateMonthlyRange();
            });
        }

    }

    function updateMonthlyRange() {
        if (!analysisStartInput || !analysisEndInput || !analysisMonthDisplay) return;
        const year = currentAnalysisYear;
        const month = currentAnalysisMonth;
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 0); // Last day of month

        analysisStartInput.value = formatDateForInput(start);
        analysisEndInput.value = formatDateForInput(end);
        analysisMonthDisplay.textContent = `${year}.${String(month).padStart(2, '0')}`;
        scheduleAnalyticsCharts();
        updateStats();
    }

    function formatDateForInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    if (analysisClearBtn) {
        analysisClearBtn.addEventListener('click', () => {
            applyAnalyticsPreset('all');
        });
    }

    if (estimatedCostToggle) {
        estimatedCostToggle.addEventListener('click', () => {
            const isExpanded = !estimatedCostSection?.classList.contains('is-collapsed');
            setEstimatedCostExpanded(!isExpanded);
        });
    }

    if (sidebarFilterReset) {
        sidebarFilterReset.addEventListener('click', () => {
            clearDateFilter();
        });
    }

    function applyPricingPreset(modelKey, { shouldPersist = true } = {}) {
        if (!inputRateUsdInput || !outputRateUsdInput) return;
        const preset = MODEL_PRICING_USD_PER_1M[modelKey];
        if (!preset) return;
        inputRateUsdInput.value = String(preset.input);
        outputRateUsdInput.value = String(preset.output);
        if (shouldPersist) {
            saveSettings({ pricingModel: modelKey, inputRateUsd: inputRateUsdInput.value, outputRateUsd: outputRateUsdInput.value });
        }
    }

    if (pricingModelSelect) {
        pricingModelSelect.addEventListener('change', () => {
            const modelKey = String(pricingModelSelect.value || DEFAULT_PRICING_MODEL);
            saveSettings({ pricingModel: modelKey });
            if (modelKey !== 'custom') {
                applyPricingPreset(modelKey);
            }
            updateTokenEstimates();
        });
    }

    if (inputRateUsdInput) {
        inputRateUsdInput.addEventListener('input', () => {
            if (pricingModelSelect && pricingModelSelect.value !== 'custom') {
                pricingModelSelect.value = 'custom';
                saveSettings({ pricingModel: 'custom' });
            }
            saveSettings({ inputRateUsd: inputRateUsdInput.value });
            updateTokenEstimates();
        });
    }

    if (outputRateUsdInput) {
        outputRateUsdInput.addEventListener('input', () => {
            if (pricingModelSelect && pricingModelSelect.value !== 'custom') {
                pricingModelSelect.value = 'custom';
                saveSettings({ pricingModel: 'custom' });
            }
            saveSettings({ outputRateUsd: outputRateUsdInput.value });
            updateTokenEstimates();
        });
    }

    if (fxKrwPerUsdInput) {
        fxKrwPerUsdInput.addEventListener('input', () => {
            saveSettings({ fxKrwPerUsd: fxKrwPerUsdInput.value });
            updateTokenEstimates();
        });
    }

    function setSidebarCollapsed(isCollapsed, shouldStore = false) {
        if (!sidebar) return;
        sidebar.classList.toggle('collapsed', isCollapsed);
        if (dashboard) {
            dashboard.classList.toggle('sidebar-collapsed', isCollapsed);
        }
        document.body.classList.toggle('sidebar-collapsed', isCollapsed);
        if (sidebarCollapseToggle) {
            sidebarCollapseToggle.setAttribute('aria-expanded', String(!isCollapsed));
            sidebarCollapseToggle.setAttribute('aria-label', isCollapsed ? '사이드바 펼치기' : '사이드바 접기');
        }
        if (shouldStore) saveSettings({ sidebarCollapsed: isCollapsed });
    }

    function setSidebarCollapsedInstant(isCollapsed) {
        if (!sidebar) return;
        sidebar.classList.add('no-transition');
        setSidebarCollapsed(isCollapsed, false);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (sidebar) sidebar.classList.remove('no-transition');
            });
        });
    }

    function setEstimatedCostExpanded(isExpanded, { shouldPersist = true } = {}) {
        if (!estimatedCostSection || !estimatedCostToggle) return;
        estimatedCostSection.classList.toggle('is-collapsed', !isExpanded);
        estimatedCostToggle.setAttribute('aria-expanded', String(!!isExpanded));
        if (shouldPersist) saveSettings({ estimatedCostExpanded: !!isExpanded });
    }

    function loadSettings() {
        const stored = localStorage.getItem(SETTINGS_KEY);
        // Robust check for data presence even before async restoration completes
        const hasAnyData = hasLoadedData ||
            (Array.isArray(chatData) && chatData.length > 0) ||
            localStorage.getItem('cav:hasData') === 'true';

        if (!stored) {
            syncFilterControls();
            quickMode = 'all';
            updateQuickButtons();
            if (analysisPresetSelect) analysisPresetSelect.value = 'all';
            setAnalysisRangeInputsFromData({ shouldPersist: false });
            syncAnalyticsControlsUi('all');
            if (persistLocalToggle) persistLocalToggle.checked = true;
            if (pricingModelSelect) pricingModelSelect.value = DEFAULT_PRICING_MODEL;
            applyPricingPreset(DEFAULT_PRICING_MODEL, { shouldPersist: false });
            if (autoExpireToggle) autoExpireToggle.checked = false;

            // No explicit saved preference: keep expanded to match prepaint behavior (no flash).
            setSidebarCollapsedInstant(false);

            // On page load, always prevent auto-reveal (only auto-reveal on new file upload)
            didAutoRevealSidebar = true;

            // Remove initial class and enable transitions
            requestAnimationFrame(() => {
                document.documentElement.classList.remove('sidebar-collapsed-init');
                document.documentElement.classList.remove('sidebar-collapsed-prepaint');
            });

            // Default: keep cost estimator collapsed (advanced section)
            setEstimatedCostExpanded(false, { shouldPersist: false });
            updateTokenEstimates();
            return;
        }

        try {
            const settings = JSON.parse(stored);
            if (autoExpireToggle) autoExpireToggle.checked = !!settings.autoExpire;
            if (persistLocalToggle) persistLocalToggle.checked = settings.persistLocal !== false;
            if (privacyModeToggle) privacyModeToggle.checked = !!settings.privacyMode;

            // Simple logic: Use explicit setting if exists, otherwise default based on data
            const shouldCollapse = settings.sidebarCollapsed === true;

            setSidebarCollapsedInstant(shouldCollapse);

            // On page load/refresh, always prevent auto-reveal
            // Only allow auto-reveal when a NEW file is uploaded
            didAutoRevealSidebar = true;

            // Remove initial class and enable transitions
            requestAnimationFrame(() => {
                document.documentElement.classList.remove('sidebar-collapsed-init');
                document.documentElement.classList.remove('sidebar-collapsed-prepaint');
            });

            if (analysisPresetSelect) analysisPresetSelect.value = String(settings.analysisPreset || 'all');
            setAnalyticsInputs(settings.analysisStart || '', settings.analysisEnd || '');
            syncAnalyticsControlsUi(settings.analysisPreset || 'all');
            const preset = String(settings.analysisPreset || 'all');
            if ((preset === '7d' || preset === '30d') && (!settings.analysisStart || !settings.analysisEnd)) {
                applyAnalyticsPreset(preset);
            }
            if (preset === 'all' && (!settings.analysisStart || !settings.analysisEnd)) {
                setAnalysisRangeInputsFromData({ shouldPersist: false });
            }
            applyPrivacyModeUiState();
            setDateFilterEnabled(!!settings.filterByDate);
            setStartValue(settings.filterStart || '');
            setEndValue(settings.filterEnd || '');
            const pricingModel = settings.pricingModel || DEFAULT_PRICING_MODEL;
            if (pricingModelSelect) pricingModelSelect.value = pricingModel;
            if (pricingModel !== 'custom') {
                applyPricingPreset(pricingModel, { shouldPersist: false });
            } else {
                if (inputRateUsdInput && settings.inputRateUsd !== undefined) inputRateUsdInput.value = settings.inputRateUsd;
                if (outputRateUsdInput && settings.outputRateUsd !== undefined) outputRateUsdInput.value = settings.outputRateUsd;
            }
            if (fxKrwPerUsdInput && settings.fxKrwPerUsd !== undefined) fxKrwPerUsdInput.value = settings.fxKrwPerUsd;
            if (!settings.filterByDate) quickMode = 'all';
            syncFilterControls();
            updateQuickButtons();
            updateTokenEstimates();
            updateRetentionStatus();
            // Default is collapsed; expand only if user opened it before.
            setEstimatedCostExpanded(!!settings.estimatedCostExpanded, { shouldPersist: false });
            // Restore sort mode
            if (settings.chatSortMode) {
                currentSortMode = settings.chatSortMode;
                if (chatSortSelect) chatSortSelect.value = currentSortMode;
            }
        } catch (error) {
            console.warn('Settings parse failed');
            didAutoRevealSidebar = true; // Prevent auto-reveal on error
            // Remove init class even on error
            requestAnimationFrame(() => {
                document.documentElement.classList.remove('sidebar-collapsed-init');
                document.documentElement.classList.remove('sidebar-collapsed-prepaint');
            });
        }
    }

    window.addEventListener('pagehide', () => {
        if (!isPrivacyModeEnabled()) return;
        try {
            clearChatDataFn();
            setHasDataFlag(false);
        } catch (e) { }
    });

    function saveSettings(partial) {
        const current = loadSettingsSnapshot();
        const merged = { ...current, ...partial };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged));
    }

    function loadSettingsSnapshot() {
        const stored = localStorage.getItem(SETTINGS_KEY);
        if (!stored) return {};
        try {
            return JSON.parse(stored);
        } catch (error) {
            return {};
        }
    }

    function syncFilterControls() {
        const isEnabled = isDateFilterEnabled();
        const startValue = getStartValue();
        const endValue = getEndValue();
        setDateFilterEnabled(isEnabled);
        setStartValue(startValue);
        setEndValue(endValue);
        updateQuickButtons();
    }

    function updateQuickButtons() {
        if (quickButtons.length === 0) return;
        quickButtons.forEach(button => {
            if (!button.dataset.mode) return;
            const mode = button.dataset.mode || 'all';
            button.classList.toggle('is-active', mode === quickMode);
        });
    }

    function setQuickMode(mode) {
        quickMode = mode;
        if (quickMode === 'all') {
            clearDateFilter();
            updateQuickButtons();
            return;
        }
        setDateFilterEnabled(true);
        saveSettings({ filterByDate: true });
        applyQuickRangeFromStart();
        updateQuickButtons();
    }

    function getFilterRange() {
        const startValue = getStartValue();
        const endValue = getEndValue();
        const start = startValue ? new Date(startValue) : null;
        const end = endValue ? new Date(endValue) : null;
        if (start) start.setHours(0, 0, 0, 0);
        if (end) end.setHours(23, 59, 59, 999);
        return { start, end, startValue, endValue };
    }

    function getAnalyticsPresetValue() {
        if (analysisPresetSelect && analysisPresetSelect.value) return String(analysisPresetSelect.value);
        const settings = loadSettingsSnapshot();
        return settings.analysisPreset ? String(settings.analysisPreset) : 'all';
    }

    function getAnalyticsRange() {
        const preset = getAnalyticsPresetValue();
        const settings = loadSettingsSnapshot();
        const fallbackStartValue = settings.analysisStart ? String(settings.analysisStart) : '';
        const fallbackEndValue = settings.analysisEnd ? String(settings.analysisEnd) : '';
        const startValue = analysisStartInput && analysisStartInput.value ? analysisStartInput.value : fallbackStartValue;
        const endValue = analysisEndInput && analysisEndInput.value ? analysisEndInput.value : fallbackEndValue;

        if (preset === 'all') {
            return { start: null, end: null, startValue: '', endValue: '', preset };
        }

        const start = startValue ? new Date(startValue) : null;
        const end = endValue ? new Date(endValue) : null;
        if (start) start.setHours(0, 0, 0, 0);
        if (end) end.setHours(23, 59, 59, 999);
        return { start, end, startValue, endValue, preset };
    }

    function getEffectiveAnalyticsRange() {
        const analysisRange = getAnalyticsRange();
        if (analysisRange.preset !== 'all') return analysisRange;

        // If the sidebar date filter is enabled, analytics should follow it by default.
        if (isDateFilterEnabled()) {
            const sidebarRange = getFilterRange();
            if (sidebarRange.start || sidebarRange.end) {
                return { ...sidebarRange, preset: 'sidebar' };
            }
        }

        return analysisRange;
    }

    function filterChatDataByRange(source, range) {
        if (!Array.isArray(source) || source.length === 0) return [];
        const start = range && range.start ? range.start : null;
        const end = range && range.end ? range.end : null;
        if (!start && !end) return source;
        return source.filter(item => {
            const timestamps = Array.isArray(item.messageTimes) && item.messageTimes.length > 0
                ? item.messageTimes
                : (item.createTime ? [item.createTime] : []);
            if (timestamps.length === 0) return false;
            return timestamps.some(ts => {
                const date = new Date(ts * 1000);
                if (Number.isNaN(date.getTime())) return false;
                if (start && date < start) return false;
                if (end && date > end) return false;
                return true;
            });
        });
    }

    function getAnalyticsData() {
        const range = getEffectiveAnalyticsRange();
        return filterChatDataByRange(chatData, range);
    }

    function setAnalyticsInputs(startValue, endValue) {
        if (analysisStartInput) analysisStartInput.value = startValue || '';
        if (analysisEndInput) analysisEndInput.value = endValue || '';
    }

    function setAnalysisRangeInputsFromData({ shouldPersist = true } = {}) {
        if (!analysisStartInput || !analysisEndInput) return;
        const range = getChatDateRange();
        if (!range) return;
        const startValue = formatDateInput(new Date(range.min));
        const endValue = formatDateInput(new Date(range.max));
        setAnalyticsInputs(startValue, endValue);
        if (shouldPersist) {
            saveSettings({ analysisStart: startValue, analysisEnd: endValue });
        }
    }

    function syncAnalyticsControlsUi(preset) {
        const nextPreset = preset || getAnalyticsPresetValue();
        const isAll = nextPreset === 'all';
        if (analysisClearBtn) analysisClearBtn.disabled = isAll;
        if (analysisMonthlyNav) {
            analysisMonthlyNav.style.display = (nextPreset === 'monthly') ? 'flex' : 'none';
        }
    }

    function applyAnalyticsPreset(preset) {
        const nextPreset = preset || 'all';
        if (analysisPresetSelect) analysisPresetSelect.value = nextPreset;
        syncAnalyticsControlsUi(nextPreset);

        if (nextPreset === 'monthly') {
            updateMonthlyRange();
            return;
        }

        if (nextPreset === 'all') {
            setAnalysisRangeInputsFromData({ shouldPersist: false });
            saveSettings({ analysisPreset: 'all', analysisStart: '', analysisEnd: '' });
            scheduleAnalyticsCharts();
            updateStats();
            return;
        }

        const dataRange = getChatDateRange();
        const endBase = dataRange && typeof dataRange.max === 'number' ? new Date(dataRange.max) : new Date();
        endBase.setHours(0, 0, 0, 0);
        const endValue = formatDateInput(endBase);

        let startDate = new Date(endBase);
        if (nextPreset === '7d') {
            startDate.setDate(startDate.getDate() - 6);
        } else if (nextPreset === '30d') {
            startDate.setDate(startDate.getDate() - 29);
        } else if (nextPreset === 'custom') {
            // keep current values
            const current = getAnalyticsRange();
            if (current.startValue && current.endValue) {
                saveSettings({ analysisPreset: 'custom', analysisStart: current.startValue, analysisEnd: current.endValue });
            } else {
                setAnalyticsInputs('', endValue);
                saveSettings({ analysisPreset: 'custom', analysisStart: '', analysisEnd: endValue });
            }
            syncAnalyticsControlsUi('custom');
            scheduleAnalyticsCharts();
            updateStats();
            return;
        }

        const startValue = formatDateInput(startDate);
        setAnalyticsInputs(startValue, endValue);
        saveSettings({ analysisPreset: nextPreset, analysisStart: startValue, analysisEnd: endValue });
        scheduleAnalyticsCharts();
        updateStats();
    }

    function scheduleAnalyticsCharts() {
        if (!isAnalyticsVisible()) return;
        const range = getEffectiveAnalyticsRange();
        scheduleRenderCharts(getAnalyticsData(), range);
    }

    // --- Sort Logic ---
    function getLastActiveTime(item) {
        if (Array.isArray(item.messageTimes) && item.messageTimes.length > 0) {
            return Math.max(...item.messageTimes);
        }
        return item.createTime || 0;
    }

    function getSortedChatData(data) {
        const arr = data.slice(); // shallow copy — never mutate chatData
        if (currentSortMode === 'oldest') {
            arr.sort((a, b) => (a.createTime || 0) - (b.createTime || 0));
        } else if (currentSortMode === 'active') {
            arr.sort((a, b) => getLastActiveTime(b) - getLastActiveTime(a));
        } else {
            // 'newest' — default
            arr.sort((a, b) => (b.createTime || 0) - (a.createTime || 0));
        }
        return arr;
    }

    function getFilteredChatData() {
        const { start, end } = getFilterRange();

        // 폴백: 캐시 없이 직접 필터링
        if (!isDateFilterEnabled() && !start && !end) {
            return getSortedChatData(chatData);
        }
        if (!start && !end) {
            return getSortedChatData(chatData);
        }
        const filtered = chatData.filter(item => {
            const timestamps = Array.isArray(item.messageTimes) && item.messageTimes.length > 0
                ? item.messageTimes
                : (item.createTime ? [item.createTime] : []);
            if (timestamps.length === 0) return false;
            return timestamps.some(ts => {
                const date = new Date(ts * 1000);
                if (Number.isNaN(date.getTime())) return false;
                if (start && date < start) return false;
                if (end && date > end) return false;
                return true;
            });
        });
        return getSortedChatData(filtered);
    }

    function applyDateFilter() {
        // 캐시 무효화 (필터 변경 시)
        if (typeof CacheManager !== 'undefined') {
            CacheManager.invalidate(null);
        }
        recentKeywordSummaryCache.clear();

        const { startValue, endValue } = getFilterRange();
        saveSettings({ filterByDate: isDateFilterEnabled(), filterStart: startValue, filterEnd: endValue });
        const visibleData = getFilteredChatData();
        renderList(visibleData);
        updateStats();
        // Keep analytics (dashboard/mypage) in sync with sidebar date filter.
        scheduleAnalyticsCharts();
        document.querySelectorAll('.chat-item').forEach(el => el.classList.remove('active'));
        if (chatContent) chatContent.innerHTML = '';
        updateEmptyState();
    }

    function formatDateInput(value) {
        return value.toISOString().split('T')[0];
    }

    function getChatDateRange() {
        if (!Array.isArray(chatData) || chatData.length === 0) return null;
        let min = null;
        let max = null;
        chatData.forEach(item => {
            const times = Array.isArray(item.messageTimes) ? item.messageTimes : [];
            const seed = times.length > 0 ? times : (item.createTime ? [item.createTime] : []);
            seed.forEach(ts => {
                const num = Number(ts);
                if (!Number.isFinite(num)) return;
                const ms = num > 1e12 ? num : num * 1000;
                if (min === null || ms < min) min = ms;
                if (max === null || ms > max) max = ms;
            });
        });
        if (min === null || max === null) return null;
        return { min, max };
    }

    function setFullRangeInputsFromData() {
        const range = getChatDateRange();
        if (!range) return;
        const startValue = formatDateInput(new Date(range.min));
        const endValue = formatDateInput(new Date(range.max));
        setStartValue(startValue);
        setEndValue(endValue);
        saveSettings({ filterStart: startValue, filterEnd: endValue });
    }

    function getStartValue() {
        if (sidebarFilterStart && sidebarFilterStart.value) return sidebarFilterStart.value;
        if (filterStartInput && filterStartInput.value) return filterStartInput.value;
        return '';
    }

    function getEndValue() {
        if (sidebarFilterEnd && sidebarFilterEnd.value) return sidebarFilterEnd.value;
        if (filterEndInput && filterEndInput.value) return filterEndInput.value;
        return '';
    }

    function setStartValue(value) {
        if (filterStartInput) filterStartInput.value = value;
        if (sidebarFilterStart) sidebarFilterStart.value = value;
    }

    function setEndValue(value) {
        if (filterEndInput) filterEndInput.value = value;
        if (sidebarFilterEnd) sidebarFilterEnd.value = value;
    }

    function applyQuickRangeFromStart() {
        if (quickMode !== 'week' && quickMode !== 'month') return;
        const startValue = getStartValue();
        if (!startValue || !startWasManual) {
            const end = new Date();
            const start = new Date(end);
            if (quickMode === 'week') {
                start.setDate(start.getDate() - 7);
            } else {
                start.setMonth(start.getMonth() - 1);
            }
            const fallbackStart = formatDateInput(start);
            const fallbackEnd = formatDateInput(end);
            startWasManual = false;
            setStartValue(fallbackStart);
            setEndValue(fallbackEnd);
            saveSettings({ filterByDate: true, filterStart: fallbackStart, filterEnd: fallbackEnd });
            applyDateFilter();
            return;
        }
        const start = new Date(startValue);
        if (Number.isNaN(start.getTime())) return;
        const end = new Date(start);
        if (quickMode === 'week') {
            end.setDate(end.getDate() + 7);
        } else {
            end.setMonth(end.getMonth() + 1);
        }
        const endValue = formatDateInput(end);
        setStartValue(startValue);
        setEndValue(endValue);
        startWasManual = true;
        saveSettings({ filterByDate: true, filterStart: startValue, filterEnd: endValue });
        applyDateFilter();
    }

    function handleStartDateChange() {
        syncFilterControls();
        if (quickMode === 'week' || quickMode === 'month') {
            applyQuickRangeFromStart();
            return;
        }
        applyDateFilter();
    }

    function clearDateFilter() {
        setDateFilterEnabled(false);
        setStartValue('');
        setEndValue('');
        saveSettings({ filterByDate: false, filterStart: '', filterEnd: '' });
        applyDateFilter();
        quickMode = 'all';
        startWasManual = false;
        updateQuickButtons();
    }


    // Auto-delete is enforced on startup restore via session timestamp (see shouldAutoDeleteSession).

});
