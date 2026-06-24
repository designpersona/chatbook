/**
 * UI 상태 관리 모듈
 */

const UIManager = (() => {
    const views = {
        dashboard: null,
        mypage: null,
        settings: null,
        contentDisplay: null,
    };

    const buttons = {
        dashboardBtn: null,
        myPageBtn: null,
        settingsBtn: null,
    };

    const init = (domElements) => {
        Object.assign(views, domElements.views);
        Object.assign(buttons, domElements.buttons);
    };

    // 대시보드 뷰 표시
    const showDashboardView = (options = {}) => {
        hideAllViews();
        if (views.dashboard) views.dashboard.classList.remove('hidden');
        updateActiveButton('dashboard');
        if (options.onShow) options.onShow();
    };

    // 마이페이지 뷰 표시
    const showMyPageView = (options = {}) => {
        hideAllViews();
        if (views.mypage) views.mypage.classList.remove('hidden');
        updateActiveButton('mypage');
        if (options.onShow) options.onShow();
    };

    // 설정 뷰 표시
    const showSettingsView = (options = {}) => {
        hideAllViews();
        if (views.settings) views.settings.classList.remove('hidden');
        updateActiveButton('settings');
        if (options.onShow) options.onShow();
    };

    // 콘텐츠 뷰 표시
    const showContentView = (options = {}) => {
        hideAllViews();
        if (views.contentDisplay) {
            views.contentDisplay.classList.remove('hidden');
            views.contentDisplay.classList.add('visible');
        }
        updateActiveButton(null);
        if (options.onShow) options.onShow();
    };

    // 모든 뷰 숨기기
    const hideAllViews = () => {
        if (views.dashboard) views.dashboard.classList.add('hidden');
        if (views.mypage) views.mypage.classList.add('hidden');
        if (views.settings) views.settings.classList.add('hidden');
        if (views.contentDisplay) views.contentDisplay.classList.add('hidden');
    };

    // 활성 버튼 업데이트
    const updateActiveButton = (activeView) => {
        if (buttons.dashboardBtn) {
            buttons.dashboardBtn.classList.toggle('active', activeView === 'dashboard');
        }
        if (buttons.myPageBtn) {
            buttons.myPageBtn.classList.toggle('active', activeView === 'mypage');
        }
        if (buttons.settingsBtn) {
            buttons.settingsBtn.classList.toggle('active', activeView === 'settings');
        }
    };

    // 현재 활성 뷰 반환
    const getActiveView = () => {
        if (views.dashboard && !views.dashboard.classList.contains('hidden')) return 'dashboard';
        if (views.mypage && !views.mypage.classList.contains('hidden')) return 'mypage';
        if (views.settings && !views.settings.classList.contains('hidden')) return 'settings';
        if (views.contentDisplay && !views.contentDisplay.classList.contains('hidden')) return 'content';
        return null;
    };

    return {
        init,
        showDashboardView,
        showMyPageView,
        showSettingsView,
        showContentView,
        hideAllViews,
        updateActiveButton,
        getActiveView,
    };
})();
