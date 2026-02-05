/**
 * Playground Settings Engine
 * 전역 설정을 관리하고 사이트 전반에 반영합니다.
 */

const SettingsEngine = {
    // 기본값
    defaults: {
        darkMode: 'always',
        useSound: true,
        enhancedFX: true
    },

    // 설정값 로드
    getSettings() {
        const saved = localStorage.getItem('playground_settings');
        return saved ? JSON.parse(saved) : this.defaults;
    },

    // 설정값 저장 및 반영
    saveSettings(newSettings) {
        localStorage.setItem('playground_settings', JSON.stringify(newSettings));
        this.applySettings();
    },

    // 실제 사이트에 설정 반영
    applySettings() {
        const settings = this.getSettings();

        // 1. 다크모드/라이트모드 제어 (현재는 다크 전용이지만 구조 설계)
        if (settings.darkMode === 'always') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        // 2. 시각 효과 (Aurora 배경) 제어
        if (settings.enhancedFX) {
            document.body.classList.remove('no-fx');
        } else {
            document.body.classList.add('no-fx');
        }
        
        // 3. 글로벌 효과음 설정은 각 도구에서 check 하여 사용
    },

    // 초기화
    init() {
        this.applySettings();
    }
};

// 페이지 로드 시 즉시 적용
document.addEventListener('DOMContentLoaded', () => SettingsEngine.init());
