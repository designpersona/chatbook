// Language Translation System for ChatBook
// Manages UI text translations between English and Korean

const translations = {
    en: {
        // Sidebar & Navigation
        'search-placeholder': 'Search conversations...',
        'filter-all': 'All',
        'filter-week': '1 Week',
        'filter-month': '1 Month',
        'filter-reset': 'Reset',
        'sidebar-collapse': 'Collapse sidebar',

        // Header Icons
        'dashboard-title': 'Dashboard',
        'mypage-title': 'My Page',
        'settings-title': 'Settings',
        'language-title': 'Language / 언어',

        // History Navigation
        'history-title': 'Conversation History',
        'prev-chat': 'Previous chat',
        'next-chat': 'Next chat',
        'back-to-top': 'Back to top',
        'search-toggle': 'Open search',
        'search-placeholder-history': 'Search in conversation...',
        'search-prev': 'Previous result',
        'search-next': 'Next result',
        'search-close': 'Close search',
        'search-text': 'Search',

        // Main Placeholder
        'placeholder-message': 'The ultimate environment to conveniently view, search, and manage your ChatGPT conversation history.',
        'brand-title': 'How to Use',
        'upload-title': 'File Upload',
        'upload-subtitle': 'Upload your chat.html or conversations.json file.',
        'upload-drag': 'You can also drag and drop files into this area.',
        'choose-file': 'Choose File',

        // Upload Status
        'file-management': 'Chat File Management',
        'status-label': 'Status:',
        'upload-complete': 'Upload complete · - conversations',
        'filename-label': 'Filename:',
        'replace-file': 'Replace File',
        'remove-file': 'Remove File',
        'file-toggle-open': 'Open',
        'file-toggle-close': 'Close',

        // Action Cards
        'dashboard-card-title': 'Dashboard',
        'dashboard-card-subtitle': 'View analytics',
        'dashboard-card-cta': 'View statistics →',
        'mypage-card-title': 'My Page',
        'mypage-card-subtitle': 'View personal insights',
        'mypage-card-cta': 'View analysis →',
        'settings-card-title': 'Settings',
        'settings-card-subtitle': 'Manage preferences',
        'settings-card-cta': 'Manage settings →',

        // Dashboard
        'dashboard-page-title': 'Dashboard',
        'stat-total': 'Total Conversations',
        'stat-freshness': 'Recent Activity',
        'stat-range': 'Conversation Range',
        'stat-active-days': 'Days Chatted',
        'freshness-today': 'Today',
        'freshness-yesterday': 'Yesterday',
        'freshness-days-ago': '{n} days ago',
        'daily-activity': 'Daily Activity',
        'daily-peak': ' is your most active day.',
        'daily-note': 'Shows daily message count for the recent period.',
        'monthly-activity': 'Monthly Activity',
        'monthly-peak': ' is your most active month.',
        'monthly-note': 'Total message count by month.',
        'hourly-activity': 'Activity by Hour',
        'hourly-peak': ' is your most active hour.',
        'hourly-note': 'Message count by hour for the selected period.',
        'longest-conversations': 'Longest Conversations',
        'longest-note': 'Top 3 by message count and character count.',
        'no-data': 'No data available to display.',
        'insufficient-data': 'Insufficient conversation length data.',
        'analysis-period': 'Analysis Period',
        'analysis-all': 'All Time',
        'analysis-7d': 'Last 7 Days',
        'analysis-30d': 'Last 30 Days',
        'analysis-custom': 'Custom',
        'analysis-reset': 'Reset',
        'analysis-note': 'Applies to Dashboard/My Page only.',

        // My Page
        'mypage-page-title': 'My Page',
        'recent-keywords': 'Recent Keywords',
        'period-label': 'Period',
        'period-all': 'All Time',
        'period-week': 'Past Week',
        'period-month': 'Past Month',
        'period-year': 'Past Year',
        'recent-note': 'Top 3 noun keywords for the selected period.',
        'interest-map': 'Interest Map',
        'interest-empty': 'Unable to display interest data.',
        'frequent-keywords': 'Frequently Used Keywords',
        'speaker-label': 'Speaker',
        'speaker-all': 'Combined',
        'speaker-user': 'User',
        'speaker-assistant': 'ChatGPT',
        'language-label': 'Language',
        'language-all': 'All',
        'language-ko': 'Korean',
        'language-en': 'English',
        'keywords-empty': 'Insufficient keywords.',
        'conversation-style': 'Conversation Style',
        'my-approach': 'My Approach to AI',
        'style-task': 'Task-Oriented',
        'style-conversational': 'Conversational',
        'style-expressive': 'Expressive',
        'style-empty': 'Insufficient data to analyze conversation style.',
        'style-note': 'Analyzes style based on sentence endings and keywords.',
        'focus-style': 'Focus Style',
        'focus-style-note': 'Based on your productivity peak hour.',
        'peak-productivity': 'Peak Productivity Hours',
        'productivity-text': ' is when I\'m most productive.',
        'productivity-empty': 'Insufficient productivity data.',
        'productivity-note': 'Density metric combining word count and complexity by hour.',

        // Settings
        'settings-page-title': 'Settings',
        'archive-metadata': 'Archive Metadata',
        'current-file': 'Current File',
        'file-size': 'Original File Size',
        'conversation-threads': 'Conversation Threads',
        'total-messages': 'Total Messages',
        'approx-chars': 'Approximate Characters',
        'last-loaded': 'Last Loaded',
        'file-replacement': 'File Replacement & Reset',
        'load-archive': 'Load New Archive',
        'clear-data': 'Clear Local Data',
        'backup-restore': 'Local Backup & Restore',
        'file-management-backup': 'File Management & Backup',
        'settings-language': 'Language',
        'interface-language': 'Interface Language',
        'export-backup': 'Export Backup',
        'import-backup': 'Import Backup',
        'estimated-cost': 'Estimated Cost for This Chat File',
        'estimated-tokens': 'Total Estimated Tokens',
        'estimated-input-tokens': 'Estimated Input Tokens (User)',
        'estimated-output-tokens': 'Estimated Output Tokens (Assistant)',
        'estimated-cost-total': 'Total Estimated Cost',
        'model-preset': 'Model Preset',
        'input-rate-usd': 'Input Rate (USD, per 1M tokens)',
        'output-rate-usd': 'Output Rate (USD, per 1M tokens)',
        'fx-rate': 'FX Rate (KRW per 1 USD, optional)',
        'input-rate-placeholder': 'e.g., 0.15',
        'output-rate-placeholder': 'e.g., 0.60',
        'fx-placeholder': 'e.g., 1350',
        'cost-note': 'Estimates are approximate. This uses a heuristic token estimate; system prompts, tool calls, caching, and retries are not included. (Input=user, Output=assistant)',
        'retention-policy': 'Local Storage & Privacy',
        'file-management': 'File Management',
        'remember-uploads': 'Remember uploads on this device',
        'privacy-mode': 'Privacy mode (do not store; delete on close)',
        'auto-cleanup': 'Auto-delete saved data after 7 days',
        'local-storage-status': 'Local Storage Status',
        'auto-delete-date': 'Auto-delete Date',
        'cleanup-note': 'Applies to data saved locally in your browser (IndexedDB). Cleanup runs only when the app is opened; use “Clear Local Data” to delete immediately.',
        'security-principles': 'Local Processing & Security Principles',
        'security-text': 'Chat files are read and analyzed locally in your browser. If “Remember uploads” is enabled, parsed data is stored locally (IndexedDB) to restore on refresh. This viewer does not intentionally upload chat content, but your deployment may load external scripts (e.g., analytics) depending on your HTML setup.',
        'security-rules-title': 'Security & Privacy Rules (v1.0)',
        'security-rules-html': '<h4>Security & Privacy Rules (v1.0)</h4><ol><li><b>Local-only processing:</b> Chat file contents MUST be processed locally in the browser.</li><li><b>No intentional upload:</b> The app MUST NOT transmit chat contents to any server.</li><li><b>Optional local persistence:</b> If “Remember uploads” is enabled, parsed data MAY be stored in IndexedDB on this device.</li><li><b>Deletion:</b> “Clear Local Data” MUST delete the locally saved session immediately.</li><li><b>Auto-delete:</b> If enabled, saved session data MUST be deleted on app open when older than 7 days (based on last saved timestamp).</li><li><b>Third-party scripts:</b> Deployments SHOULD avoid loading analytics/recording scripts on pages that process sensitive chat files.</li></ol>',
        'help-title': 'Help',
        'help-1': '1) Upload your chat.html or conversations.json file.',
        'help-2': '2) Select a conversation from the left sidebar to view it in the main area.',
        'help-3': '3) Click the Dashboard icon to view analytics.',
        'help-4': '4) Check personal insights on My Page, and manage local settings and backups on the Settings page.',

        // Parsing Modal
        'parsing-title': 'File Structure Analysis Settings',
        'parsing-desc': 'The file has been loaded but its content structure is unclear.<br>Please select one of the options below.',
        'preview-title': 'File Preview (First 500 characters)',
        'encoding-warning': '⚠️ Is the text garbled? Try changing the encoding.',
        'encoding-label': 'Document Encoding',
        'encoding-utf8': 'UTF-8 (Default)',
        'encoding-euckr': 'EUC-KR (Legacy Korean Windows files)',
        'reload-encoding': 'Reload with this encoding',
        'separator-label': 'Conversation Separator (Selector)',
        'auto-detect': 'Auto-detect',
        'manual-selector': 'Enter CSS selector manually',
        'selector-placeholder': 'e.g., .message or h3',
        'suggested-candidates': '💡 Detected candidates (click to apply):',
        'selector-tip': 'Tip: For &lt;div class="msg"&gt;, enter <b>.msg</b>.',
        'apply-btn': 'Apply',
        'cancel-btn': 'Cancel',

        // Toast & Loading
        'toast-notification': 'Notification',
        'loading-text': 'Loading...',

        // Privacy / Retention (dynamic labels)
        'storage-status-privacy': 'Privacy mode (no local storage)',
        'storage-status-not-saved': 'Not saved locally',
        'storage-status-not-saved-yet': 'Not saved yet',
        'storage-status-saved-locally': 'Saved locally',
        'privacy-mode-enabled-toast': 'Privacy mode enabled: local data will not be saved.',
        'auto-deleted-toast': 'Local data was auto-deleted by security settings.',

        // Clear Data Modal
        'clear-data-desc': 'This will delete locally stored chat data from this browser on this device.',
        'clear-data-checklist-title': 'What will be deleted',
        'clear-data-item-1': 'Saved session in IndexedDB (ChatArchiveDB)',
        'clear-data-item-2': 'In-memory loaded chat data in this tab',
        'clear-data-item-3': 'Data restore flag (so refresh won’t restore)',
        'clear-data-reset-label': 'Also reset preferences (optional)',
        'clear-data-reset-note': 'Resets stored settings (filters, pricing, privacy toggles) and language preference.',
        'delete-btn': 'Delete',

        // System Info
        'system-info': 'System Information',
        'version-label': 'Version',
        'dev-label': 'Developer'
    },
    ko: {
        // 사이드바 & 네비게이션
        'search-placeholder': '대화 검색...',
        'filter-all': '전체',
        'filter-week': '1주일',
        'filter-month': '1개월',
        'filter-reset': '재설정',
        'sidebar-collapse': '사이드바 접기',

        // 헤더 아이콘
        'dashboard-title': '대시보드',
        'mypage-title': '마이페이지',
        'settings-title': '설정',
        'language-title': 'Language / 언어',

        // 히스토리 네비게이션
        'history-title': '대화 기록',
        'prev-chat': '이전 채팅',
        'next-chat': '다음 채팅',
        'back-to-top': '맨 위로',
        'search-toggle': '본문 검색 열기',
        'search-placeholder-history': '본문 검색...',
        'search-prev': '이전 결과',
        'search-next': '다음 결과',
        'search-close': '본문 검색 닫기',
        'search-text': '검색',

        // 메인 플레이스홀더
        'placeholder-message': 'ChatGPT와의 대화 기록을 편리한 환경에서 확인하고 검색하고 관리해보세요. 나만의 일상 기록을 위한 완벽한 공간입니다.',
        'brand-title': '사용방법',
        'upload-title': '파일 올리기',
        'upload-subtitle': 'chat.html 또는 conversations.json 파일을 업로드하세요.',
        'upload-drag': '파일을 이 영역에 드래그 앤 드롭해도 업로드됩니다.',
        'choose-file': '파일 추가하기',

        // 업로드 상태
        'file-management': '채팅 파일 관리',
        'status-label': '상태:',
        'upload-complete': '업로드 완료 · 대화 -개',
        'filename-label': '파일명:',
        'replace-file': '파일 교체',
        'remove-file': '파일 제거',
        'file-toggle-open': '열기',
        'file-toggle-close': '닫기',

        // 액션 카드
        'dashboard-card-title': '대시보드',
        'dashboard-card-subtitle': '분석 화면으로 이동',
        'dashboard-card-cta': '통계 확인하기 →',
        'mypage-card-title': '마이페이지',
        'mypage-card-subtitle': '개인 분석으로 이동',
        'mypage-card-cta': '분석 카드 보기 →',
        'settings-card-title': '설정',
        'settings-card-subtitle': '설정으로 이동',
        'settings-card-cta': '설정 관리하기 →',

        // 대시보드
        'dashboard-page-title': '대시보드',
        'stat-total': '총 대화',
        'stat-freshness': '최근 대화',
        'stat-range': '대화 기간',
        'stat-active-days': '대화한 날',
        'freshness-today': '오늘',
        'freshness-yesterday': '어제',
        'freshness-days-ago': '{n}일전',
        'daily-activity': '일별 대화 빈도',
        'daily-peak': '에 집중력 최고였네요.',
        'daily-note': '최근 기간의 일별 메시지 수를 표시합니다.',
        'monthly-activity': '월별 대화 빈도',
        'monthly-peak': '에 많은 이야기를 했어요.',
        'monthly-note': '월별 대화 메시지 수 합계입니다.',
        'hourly-activity': '대화 시간대',
        'hourly-peak': '시에 활동적이예요.',
        'hourly-note': '선택된 기간의 시간대별 메시지 수입니다.',
        'longest-conversations': '가장 긴 대화',
        'longest-note': '메시지 수와 글자 수 기준 상위 3개입니다.',
        'no-data': '데이터 파일이 없어 표시할 수 없습니다.',
        'insufficient-data': '대화 길이 데이터가 부족합니다.',
        'analysis-period': '분석 기간',
        'analysis-all': '전체',
        'analysis-7d': '최근 7일',
        'analysis-30d': '최근 30일',
        'analysis-custom': '직접 선택',
        'analysis-reset': '초기화',
        'analysis-note': '대시보드/마이페이지 분석에만 적용됩니다.',

        // 마이페이지
        'mypage-page-title': '마이페이지',
        'recent-keywords': '최근 대화 키워드',
        'period-label': '기간',
        'period-all': '전체',
        'period-week': '1주일전',
        'period-month': '1개월전',
        'period-year': '1년전',
        'recent-note': '선택한 기간의 명사 키워드 상위 3개입니다.',
        'interest-map': '관심사 지도',
        'interest-empty': '관심사 데이터를 표시할 수 없습니다.',
        'frequent-keywords': '자주 사용하는 키워드',
        'speaker-label': '발화자',
        'speaker-all': '통합',
        'speaker-user': '사용자',
        'speaker-assistant': 'ChatGPT',
        'language-label': '언어',
        'language-all': '전체',
        'language-ko': '한국어',
        'language-en': '영어',
        'keywords-empty': '키워드가 부족합니다.',
        'conversation-style': '대화 성향',
        'my-approach': '나는야',
        'style-task': '비서형',
        'style-conversational': '토론형',
        'style-expressive': '감성형',
        'style-empty': '대화 성향을 분석할 표현이 부족합니다.',
        'style-note': '문장 끝맺음과 키워드로 성향을 분석.',
        'focus-style': '집중 스타일',
        'focus-style-note': '생산성 피크타임(시간대) 기준으로 요약합니다.',
        'peak-productivity': '생산성 피크타임',
        'productivity-text': '에 내 머리가 가장 잘 돌아갑니다.',
        'productivity-empty': '생산성 피크타임 데이터가 부족합니다.',
        'productivity-note': '시간대별 단어 수와 복잡도를 합산한 밀도 지표.',

        // 설정
        'settings-page-title': '설정',
        'archive-metadata': '아카이브 메타데이터',
        'current-file': '현재 파일',
        'file-size': '원본 파일 크기',
        'conversation-threads': '대화 스레드 수',
        'total-messages': '총 메시지 수',
        'approx-chars': '대략 글자 수',
        'last-loaded': '마지막 로드 시각',
        'file-replacement': '파일 교체 및 초기화',
        'load-archive': '새 아카이브 불러오기',
        'clear-data': '로컬 데이터 삭제',
        'backup-restore': '로컬 백업 및 복구',
        'file-management-backup': '파일 관리 및 백업',
        'settings-language': '언어',
        'interface-language': '인터페이스 언어',
        'export-backup': '백업 저장',
        'import-backup': '백업 불러오기',
        'estimated-cost': '이 채팅 파일의 추정 비용',
        'estimated-tokens': '총 추정 토큰',
        'estimated-input-tokens': '입력 토큰 추정 (사용자)',
        'estimated-output-tokens': '출력 토큰 추정 (어시스턴트)',
        'estimated-cost-total': '총 추정 비용',
        'model-preset': '모델 프리셋',
        'input-rate-usd': '입력 단가 (USD, 1M 토큰당)',
        'output-rate-usd': '출력 단가 (USD, 1M 토큰당)',
        'fx-rate': '환율 (원/달러, 선택)',
        'input-rate-placeholder': '예: 0.15',
        'output-rate-placeholder': '예: 0.60',
        'fx-placeholder': '예: 1350',
        'cost-note': '추정치이며 실제 토큰/비용과 차이가 있을 수 있습니다. 시스템 프롬프트/툴 호출/캐시/재시도 등은 포함하지 않습니다. (입력=사용자, 출력=어시스턴트)',
        'retention-policy': '로컬 저장 및 개인정보',
        'file-management': '파일 관리',
        'remember-uploads': '이 기기에 업로드 기록 저장',
        'privacy-mode': '민감모드 (저장 안 함 · 닫으면 삭제)',
        'auto-cleanup': '7일 후 로컬 저장 데이터 자동 삭제',
        'local-storage-status': '로컬 저장 상태',
        'auto-delete-date': '자동 삭제 예정일',
        'cleanup-note': '브라우저에 로컬로 저장된 데이터(IndexedDB)에만 적용됩니다. 정리는 앱을 열 때만 실행되며, 즉시 삭제는 “로컬 데이터 삭제”를 사용하세요.',
        'security-principles': '로컬 처리 및 보안 원칙',
        'security-text': '채팅 파일은 브라우저에서 로컬로만 읽고 분석합니다. “업로드 기록 저장”을 켜면 새로고침 복원을 위해 파싱된 데이터가 로컬(IndexedDB)에 저장됩니다. 이 뷰어는 채팅 내용을 의도적으로 업로드하지 않지만, 배포 환경의 HTML 설정(예: 분석 스크립트)에 따라 외부 스크립트가 로드될 수 있습니다.',
        'security-rules-title': '보안 및 개인정보 규칙 (v1.0)',
        'security-rules-html': '<h4>보안 및 개인정보 규칙 (v1.0)</h4><ol><li><b>로컬 처리:</b> 채팅 파일 내용은 브라우저 로컬에서만 처리되어야 합니다.</li><li><b>의도적 업로드 금지:</b> 앱은 채팅 내용을 서버로 전송하지 않아야 합니다.</li><li><b>로컬 저장(선택):</b> “이 기기에 업로드 기록 저장”을 켜면 파싱된 데이터가 이 기기 IndexedDB에 저장될 수 있습니다.</li><li><b>즉시 삭제:</b> “로컬 데이터 삭제”는 저장된 로컬 세션을 즉시 삭제해야 합니다.</li><li><b>자동 삭제:</b> 설정 시, 마지막 저장 시각 기준 7일이 지난 세션은 앱 실행 시 삭제되어야 합니다.</li><li><b>외부 스크립트:</b> 민감한 파일을 다루는 배포 환경에서는 분석/녹화 성격의 외부 스크립트를 로드하지 않는 것을 권장합니다.</li></ol>',
        'help-title': '도움말',
        'help-1': '1) chat.html 또는 conversations.json 파일을 업로드합니다.',
        'help-2': '2) 좌측 목록에서 대화를 선택하면 본문에 표시됩니다.',
        'help-3': '3) 대시보드 아이콘으로 분석 화면을 확인합니다.',
        'help-4': '4) 마이페이지에서 개인 분석을 확인하고, 설정 페이지에서 로컬 설정과 백업을 관리합니다.',

        // 파싱 모달
        'parsing-title': '파일 구조 분석 설정',
        'parsing-desc': '파일을 불러왔으나 내용을 명확히 구분하기 어렵습니다.<br>아래 옵션 중 하나를 선택해 주세요.',
        'preview-title': '파일 미리보기 (첫 500자)',
        'encoding-warning': '⚠️ 한글이 깨져 보이나요? 인코딩을 변경해 보세요.',
        'encoding-label': '문서 인코딩',
        'encoding-utf8': 'UTF-8 (기본)',
        'encoding-euckr': 'EUC-KR (오래된 한글 윈도우 파일)',
        'reload-encoding': '이 인코딩으로 다시 읽기',
        'separator-label': '대화 구분 기준 (Selector)',
        'auto-detect': '자동 감지',
        'manual-selector': 'CSS 선택자 직접 입력',
        'selector-placeholder': '예: .message 또는 h3',
        'suggested-candidates': '💡 감지된 유력한 후보 (클릭하여 적용):',
        'selector-tip': '팁: &lt;div class="msg"&gt;라면 <b>.msg</b>라고 입력하세요.',
        'apply-btn': '적용하기',
        'cancel-btn': '취소',

        // 토스트 & 로딩
        'toast-notification': '알림',
        'loading-text': '로딩중...',

        // Privacy / Retention (dynamic labels)
        'storage-status-privacy': '민감모드 (로컬 저장 없음)',
        'storage-status-not-saved': '로컬에 저장되지 않음',
        'storage-status-not-saved-yet': '아직 저장되지 않음',
        'storage-status-saved-locally': '로컬에 저장됨',
        'privacy-mode-enabled-toast': '민감모드가 켜졌습니다: 로컬에 저장하지 않습니다.',
        'auto-deleted-toast': '보안 설정에 따라 저장된 로컬 데이터가 자동 삭제되었습니다.',

        // 로컬 데이터 삭제 모달
        'clear-data-desc': '이 기기의 브라우저에 로컬로 저장된 채팅 데이터를 삭제합니다.',
        'clear-data-checklist-title': '삭제되는 항목',
        'clear-data-item-1': 'IndexedDB에 저장된 세션 (ChatArchiveDB)',
        'clear-data-item-2': '현재 탭에서 메모리에 로드된 대화 데이터',
        'clear-data-item-3': '복원 플래그 (새로고침해도 자동 복원되지 않음)',
        'clear-data-reset-label': '설정도 함께 초기화 (선택)',
        'clear-data-reset-note': '저장된 설정(필터, 가격, 개인정보 토글)과 언어 선택을 초기화합니다.',
        'delete-btn': '삭제',

        // 시스템 정보
        'system-info': '시스템 정보',
        'version-label': '버전',
        'dev-label': '개발자'
    }
};

// Current language state
let currentLanguage = 'en';

// Detect language based on browser/location
function detectLanguage() {
    const normalize = (value) => {
        const v = String(value || '').toLowerCase();
        if (v === 'ko' || v.startsWith('ko')) return 'ko';
        if (v === 'en' || v.startsWith('en')) return 'en';
        return null;
    };

    const fromUrl = (() => {
        try {
            const params = new URLSearchParams(location.search || '');
            return normalize(params.get('lang'));
        } catch (e) {
            return null;
        }
    })();
    if (fromUrl) return fromUrl;

    // Keep alignment with the prepaint decision to avoid class flipping.
    const prepaint = (typeof window.__chatbookPrepaintLanguage === 'string')
        ? normalize(window.__chatbookPrepaintLanguage)
        : null;
    if (prepaint) return prepaint;

    try {
        const saved = normalize(localStorage.getItem('chatbook-language'));
        if (saved) return saved;
    } catch (e) { }

    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().includes('ko')) {
        return 'ko';
    }
    return 'en';
}

// Initialize language system
function initLanguageSystem() {
    currentLanguage = detectLanguage();
    try {
        applyLanguage(currentLanguage);
        updateDropdownUI(currentLanguage);
    } finally {
        // Never keep the UI invisible forever.
        document.documentElement.classList.remove('i18n-pending');
    }

    // Dropdown events
    const container = document.getElementById('language-selector');
    const btn = document.getElementById('language-dropdown-btn');
    const menu = document.getElementById('language-dropdown-menu');

    const setExpanded = (expanded) => {
        if (!container || !btn || !menu) return;
        // Keep the selector visually expanded (show language text) at all times.
        container.classList.add('is-expanded');
        menu.classList.toggle('hidden', !expanded);
        btn.setAttribute('aria-expanded', String(expanded));
    };

    if (btn && menu && container) {
        btn.setAttribute('aria-haspopup', 'menu');
        btn.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = !menu.classList.contains('hidden');
            setExpanded(!expanded);
        });

        menu.addEventListener('click', (e) => e.stopPropagation());

        document.addEventListener('click', () => {
            setExpanded(false);
        });

        const options = menu.querySelectorAll('.lang-option');
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.getAttribute('data-lang');
                setLanguage(lang);
                setExpanded(false);
            });
        });

        // Ensure correct initial expanded state (no collapse animation).
        setExpanded(false);
    }
}

// Set specific language
function setLanguage(lang) {
    currentLanguage = lang;
    try {
        localStorage.setItem('chatbook-language', lang);
    } catch (e) { }
    applyLanguage(lang);
    updateDropdownUI(lang);
}

// Update Dropdown UI
function updateDropdownUI(lang) {
    const textEl = document.getElementById('current-lang-text');
    if (textEl) {
        textEl.textContent = lang === 'ko' ? '한국어' : 'English';
    }

    const options = document.querySelectorAll('.lang-option');
    options.forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
}

// Apply language to all UI elements
function applyLanguage(lang) {
    const normalized = String(lang || '').toLowerCase().includes('ko') ? 'ko' : 'en';
    const t = translations[normalized];
    if (!t) return;

    // Update HTML lang attribute
    document.documentElement.lang = normalized;
    document.documentElement.classList.toggle('lang-ko', normalized === 'ko');
    document.documentElement.classList.toggle('lang-en', normalized === 'en');
    document.documentElement.classList.remove('i18n-pending');
    window.__chatbookPrepaintLanguage = normalized;

    // Sidebar & Navigation
    updateElement('#search-input', 'placeholder', t['search-placeholder']);
    updateText('[data-mode="all"]', t['filter-all']);
    updateText('[data-mode="week"]', t['filter-week']);
    updateText('[data-mode="month"]', t['filter-month']);
    updateText('#sidebar-filter-reset', t['filter-reset']);
    updateAttr('#sidebar-collapse-toggle', 'aria-label', t['sidebar-collapse']);
    updateText('#analysis-bar-title', t['analysis-period']);
    updateText('#analysis-clear', t['analysis-reset']);
    updateSelectOptions('#analysis-preset', [
        { value: 'all', text: t['analysis-all'] },
        { value: '7d', text: t['analysis-7d'] },
        { value: '30d', text: t['analysis-30d'] },
        { value: 'custom', text: t['analysis-custom'] }
    ]);

    // Header Icons
    updateAttr('#dashboard-btn', 'title', t['dashboard-title']);
    updateAttr('#mypage-btn', 'title', t['mypage-title']);
    updateAttr('#settings-btn', 'title', t['settings-title']);
    updateAttr('#language-dropdown-btn', 'aria-label', t['language-title']);
    updateAttr('#language-dropdown-btn', 'title', t['language-title']);

    // History Navigation
    updateText('#fixed-page-title', t['history-title']);
    updateAttr('.history-nav-btn.left', 'aria-label', t['prev-chat']);
    updateAttr('.history-nav-btn.right', 'aria-label', t['next-chat']);
    updateAttr('#history-top-btn', 'aria-label', t['back-to-top']);
    updateAttr('#history-search-toggle', 'aria-label', t['search-toggle']);
    updateText('.history-search-toggle-text', t['search-text']);
    updateElement('#history-search-input', 'placeholder', t['search-placeholder-history']);
    updateAttr('#history-search-prev', 'aria-label', t['search-prev']);
    updateAttr('#history-search-next', 'aria-label', t['search-next']);
    updateAttr('#history-search-close', 'aria-label', t['search-close']);

    // Main Placeholder
    updateText('#brand-header', t['brand-title']);
    updateText('#placeholder-message', t['placeholder-message']);
    updateText('.upload-status-title', t['upload-title'], 0);
    updateText('.instruction-1', t['upload-subtitle']);
    updateText('.instruction-2', t['upload-drag']);
    updateText('#visible-upload-btn .btn-text', t['choose-file']);

    // Upload Status
    updateText('.upload-status-title', t['file-management'], 1);
    updateText('.upload-status-label', t['status-label'], 0);
    updateText('.upload-status-label', t['filename-label'], 1);
    updateText('#dashboard-remove-btn', t['remove-file']);

    // Action Cards (Rows)
    updateTextByParent('#dashboard-view-card h3', t['dashboard-card-title']);
    updateTextByParent('#dashboard-mypage-card h3', t['mypage-card-title']);
    updateTextByParent('#dashboard-settings-card h3', t['settings-card-title']);

    // Dashboard
    updateText('#dashboard-view .page-section-title', t['dashboard-page-title']);
    updateTextByParent('#dashboard-view .stat-card h3', t['stat-total'], 0);
    updateTextByParent('#dashboard-view .stat-card h3', t['stat-freshness'], 1);
    updateTextByParent('#dashboard-view .stat-card h3', t['stat-active-days'], 2);

    // Dashboard Charts
    const dailyCard = document.getElementById('dashboard-daily-card');
    if (dailyCard) {
        updateTextInElement(dailyCard, 'h3', t['daily-activity']);
        const peakSpan = dailyCard.querySelector('.chart-peak span:last-child');
        if (peakSpan) peakSpan.textContent = t['daily-peak'];
        updateTextInElement(dailyCard, '.chart-note', t['daily-note']);
    }

    const monthlyCard = document.getElementById('dashboard-monthly-card');
    if (monthlyCard) {
        updateTextInElement(monthlyCard, 'h3', t['monthly-activity']);
        const peakSpan = monthlyCard.querySelector('.chart-peak span:last-child');
        if (peakSpan) peakSpan.textContent = t['monthly-peak'];
        updateTextInElement(monthlyCard, '.chart-note', t['monthly-note']);
    }

    const hourlyCard = document.getElementById('dashboard-hourly-card');
    if (hourlyCard) {
        updateTextInElement(hourlyCard, 'h3', t['hourly-activity']);
        const peakSpan = hourlyCard.querySelector('.chart-peak span:last-child');
        if (peakSpan) peakSpan.textContent = t['hourly-peak'];
        updateTextInElement(hourlyCard, '.chart-note', t['hourly-note']);
    }

    updateText('#heatmap-empty', t['no-data']);
    updateText('#area-empty', t['no-data']);
    updateText('#radar-empty', t['no-data']);
    updateText('#longest-empty', t['insufficient-data']);

    // My Page
    updateText('#mypage-view .page-section-title', t['mypage-page-title']);

    // My Page - Recent Keywords
    const recentKeywordsCard = document.querySelectorAll('#mypage-view .chart-card')[0];
    if (recentKeywordsCard) {
        updateTextInElement(recentKeywordsCard, 'h3', t['recent-keywords']);
        const noteEl = recentKeywordsCard.querySelector('.chart-note');
        if (noteEl) noteEl.innerHTML = t['recent-note'];
    }

    // My Page - Interest Map
    const interestCard = document.querySelectorAll('#mypage-view .chart-card')[1];
    if (interestCard) {
        updateTextInElement(interestCard, 'h3', t['interest-map']);
    }
    updateText('#topic-empty', t['interest-empty']);

    // My Page - Frequent Keywords
    const keywordsCard = document.querySelectorAll('#mypage-view .chart-card')[2];
    if (keywordsCard) {
        updateTextInElement(keywordsCard, 'h3', t['frequent-keywords']);
        const labels = keywordsCard.querySelectorAll('.keyword-label');
        if (labels[0]) labels[0].textContent = t['speaker-label'];
        if (labels[1]) labels[1].textContent = t['language-label'];
    }

    updateSelectOptions('#keyword-mode', [
        { value: 'all', text: t['speaker-all'] },
        { value: 'user', text: t['speaker-user'] },
        { value: 'assistant', text: t['speaker-assistant'] }
    ]);

    updateSelectOptions('#keyword-language', [
        { value: 'all', text: t['language-all'] },
        { value: 'ko', text: t['language-ko'] },
        { value: 'en', text: t['language-en'] }
    ]);

    updateText('#keyword-empty', t['keywords-empty']);

    // My Page - Conversation Style
    const styleCards = document.querySelectorAll('#mypage-view .chart-row-3 .chart-card');
    if (styleCards[0]) {
        updateTextInElement(styleCards[0], 'h3', t['conversation-style']);
        updateTextInElement(styleCards[0], '.chart-peak-text', t['my-approach']);
        const typeLabels = styleCards[0].querySelectorAll('.type-label');
        if (typeLabels[0]) typeLabels[0].textContent = t['style-task'];
        if (typeLabels[1]) typeLabels[1].textContent = t['style-conversational'];
        if (typeLabels[2]) typeLabels[2].textContent = t['style-expressive'];
        updateTextInElement(styleCards[0], '#attitude-empty', t['style-empty']);
        updateTextInElement(styleCards[0], '.chart-note', t['style-note']);
    }

    // My Page - Focus Style
    if (styleCards[1]) {
        updateTextInElement(styleCards[1], 'h3', t['focus-style']);
        updateTextInElement(styleCards[1], '#focus-style-note', t['focus-style-note']);
    }

    // My Page - Peak Productivity
    if (styleCards[2]) {
        updateTextInElement(styleCards[2], 'h3', t['peak-productivity']);
        const peakText = styleCards[2].querySelector('.chart-peak-text');
        if (peakText) peakText.textContent = t['productivity-text'];
        updateTextInElement(styleCards[2], '#peak-time-empty', t['productivity-empty']);
        updateTextInElement(styleCards[2], '.chart-note', t['productivity-note']);
    }

    // Settings
    updateText('#settings-view .page-section-title', t['settings-page-title']);

    const archiveMetaSection = document.getElementById('settings-archive-metadata');
    const retentionSection = document.getElementById('settings-retention');
    const fileBackupSection = document.getElementById('settings-file-backup');
    const languageSection = document.getElementById('settings-language');
    const estimatedCostSection = document.getElementById('settings-estimated-cost');
    const securitySection = document.getElementById('settings-security');
    const systemSection = document.getElementById('settings-system');

    // Archive Metadata
    if (archiveMetaSection) {
        updateTextInElement(archiveMetaSection, 'h3', t['archive-metadata']);
        const labels = archiveMetaSection.querySelectorAll('.label');
        if (labels[0]) labels[0].textContent = t['current-file'];
        if (labels[1]) labels[1].textContent = t['file-size'];
        if (labels[2]) labels[2].textContent = t['conversation-threads'];
        if (labels[3]) labels[3].textContent = t['total-messages'];
        if (labels[4]) labels[4].textContent = t['approx-chars'];
        if (labels[5]) labels[5].textContent = t['last-loaded'];
    }

    // Local Storage & Privacy (Retention)
    if (retentionSection) {
        updateTextInElement(retentionSection, 'h3', t['retention-policy']);
        updateText('#label-persist-local', t['remember-uploads']);
        updateText('#label-privacy-mode', t['privacy-mode']);
        updateText('#label-auto-expire', t['auto-cleanup']);
        updateText('#label-local-storage-status', t['local-storage-status']);
        updateText('#label-auto-delete-date', t['auto-delete-date']);
    }

    // File Management & Backup
    if (fileBackupSection) {
        updateTextInElement(fileBackupSection, 'h3', t['file-management-backup']);
        updateText('#label-load-archive', t['load-archive']);
        updateText('#label-export-backup', t['export-backup']);
        updateText('#label-import-backup', t['import-backup']);
        updateText('#label-clear-data', t['clear-data']);
        updateText('#replace-file-btn', t['load-archive']);
        updateText('#export-backup-btn', t['export-backup']);
        updateText('#import-backup-btn', t['import-backup']);
        updateText('#clear-data-btn', t['clear-data']);
        updateText('#retention-note', t['cleanup-note']);
    }

    // Language
    if (languageSection) {
        updateTextInElement(languageSection, 'h3', t['settings-language']);
        updateText('#label-interface-language', t['interface-language']);
    }

    // Estimated Cost
    if (estimatedCostSection) {
        updateTextInElement(estimatedCostSection, 'h3', t['estimated-cost']);
        const labels = estimatedCostSection.querySelectorAll('.label');
        if (labels[0]) labels[0].textContent = t['estimated-tokens'];
        if (labels[1]) labels[1].textContent = t['estimated-input-tokens'];
        if (labels[2]) labels[2].textContent = t['estimated-output-tokens'];
        if (labels[3]) labels[3].textContent = t['estimated-cost-total'];
        if (labels[4]) labels[4].textContent = t['model-preset'];
        if (labels[5]) labels[5].textContent = t['input-rate-usd'];
        if (labels[6]) labels[6].textContent = t['output-rate-usd'];
        if (labels[7]) labels[7].textContent = t['fx-rate'];
        updateElement('#input-rate-usd-input', 'placeholder', t['input-rate-placeholder']);
        updateElement('#output-rate-usd-input', 'placeholder', t['output-rate-placeholder']);
        updateElement('#fx-krw-per-usd-input', 'placeholder', t['fx-placeholder']);
        updateTextInElement(estimatedCostSection, '.settings-note', t['cost-note']);
    }

    // Security Principles
    if (securitySection) {
        updateTextInElement(securitySection, 'h3', t['security-principles']);
        updateText('#security-principles-text', t['security-text']);
        const rules = document.getElementById('security-rules');
        if (rules) rules.innerHTML = t['security-rules-html'] || '';
    }

    // System Info
    if (systemSection) {
        updateTextInElement(systemSection, 'h3', t['system-info']);
        const labels = systemSection.querySelectorAll('.label');
        if (labels[0]) labels[0].textContent = t['version-label'];
        if (labels[1]) labels[1].textContent = t['dev-label'];
    }

    // Parsing Modal
    updateText('#parsing-modal h2', t['parsing-title']);
    const modalDesc = document.querySelector('#parsing-modal .modal-desc');
    if (modalDesc) modalDesc.innerHTML = t['parsing-desc'];
    updateText('.preview-box h4', t['preview-title']);
    updateText('#encoding-warning', t['encoding-warning']);

    const encodingGroup = document.querySelectorAll('.option-group')[0];
    if (encodingGroup) {
        updateTextInElement(encodingGroup, 'label', t['encoding-label'], 0);
    }

    updateSelectOptions('#encoding-select', [
        { value: 'UTF-8', text: t['encoding-utf8'] },
        { value: 'EUC-KR', text: t['encoding-euckr'] }
    ]);

    updateText('#reload-file-btn', t['reload-encoding']);

    // Clear Data Modal (kept simple; uses the same language as Settings)
    updateText('#clear-data-title', t['clear-data']);
    updateText('#clear-data-desc', t['clear-data-desc']);
    updateText('#clear-data-checklist-title', t['clear-data-checklist-title']);
    updateText('#clear-data-item-1', t['clear-data-item-1']);
    updateText('#clear-data-item-2', t['clear-data-item-2']);
    updateText('#clear-data-item-3', t['clear-data-item-3']);
    updateText('#clear-data-reset-label', t['clear-data-reset-label']);
    updateText('#clear-data-reset-note', t['clear-data-reset-note']);
    updateText('#clear-data-confirm-btn', t['delete-btn']);
    updateText('#clear-data-cancel-btn', t['cancel-btn']);

    const separatorGroup = document.querySelectorAll('.option-group')[1];
    if (separatorGroup) {
        updateTextInElement(separatorGroup, 'label', t['separator-label'], 0);
        const radioLabels = separatorGroup.querySelectorAll('.radio-label');
        if (radioLabels[0]) {
            const text = radioLabels[0].childNodes;
            text[text.length - 1].textContent = ' ' + t['auto-detect'];
        }
        if (radioLabels[1]) {
            const text = radioLabels[1].childNodes;
            text[text.length - 1].textContent = ' ' + t['manual-selector'];
        }
        updateElement('#custom-selector', 'placeholder', t['selector-placeholder']);
        const hintTexts = separatorGroup.querySelectorAll('.hint-text');
        if (hintTexts[1]) hintTexts[1].innerHTML = t['selector-tip'];
    }

    const suggestedContainer = document.getElementById('suggested-selectors-container');
    if (suggestedContainer) {
        const hintText = suggestedContainer.querySelector('.hint-text');
        if (hintText) hintText.innerHTML = t['suggested-candidates'];
    }

    updateText('#apply-parsing-btn', t['apply-btn']);
    updateText('#cancel-modal-btn', t['cancel-btn']);

    // Toast & Loading
    updateText('#toast', t['toast-notification']);
    updateText('.loading-card p', t['loading-text']);

    if (typeof window.ChatBookOnLanguageChange === 'function') {
        window.ChatBookOnLanguageChange(normalized);
    }
}

// Helper functions
function updateElement(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) el[attr] = value;
}

function updateText(selector, text, index = 0) {
    const els = document.querySelectorAll(selector);
    if (els[index]) els[index].textContent = text;
}

function updateHTML(parent, selector, html, index = 0) {
    const container = typeof parent === 'string' ? document.querySelector(parent) : parent;
    if (!container) return;
    const els = container.querySelectorAll(selector);
    if (els[index]) els[index].innerHTML = html;
}

function updateAttr(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
}

function updateTextByParent(selector, text, index = 0) {
    const els = document.querySelectorAll(selector);
    if (els[index]) els[index].textContent = text;
}

function updateTextInElement(parent, selector, text, index = 0) {
    const els = parent.querySelectorAll(selector);
    if (els[index]) els[index].textContent = text;
}

function updateSelectOptions(selector, options) {
    const select = document.querySelector(selector);
    if (!select) return;

    options.forEach((opt, i) => {
        if (select.options[i]) {
            select.options[i].text = opt.text;
        }
    });
}

function updateChartText(parentSelector, cardIndex, title, peak, note) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;

    const cards = parent.querySelectorAll('.chart-card');
    if (!cards[cardIndex]) return;

    const card = cards[cardIndex];
    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = title;

    if (peak) {
        const peakSpan = card.querySelector('.chart-peak span:last-child');
        if (peakSpan) peakSpan.textContent = peak;
    }

    const noteP = card.querySelector('.chart-note');
    if (noteP) noteP.textContent = note;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSystem);
} else {
    initLanguageSystem();
}

// Expose setter for other modules (e.g., settings page)
window.setLanguage = setLanguage;
