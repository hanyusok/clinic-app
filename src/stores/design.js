import { defineStore } from 'pinia'

export const useDesignStore = defineStore('design',{
    state: () => ({        
            isNavFixed: false,
            isDarkMode: false,
            isSidebarMini: false,
            hideConfigButton: false,
            isTransparent: true,
            isPinned: true,
            isRTL: false,
            showConfig: false,
            showMenu: false,
            sidebarColor: "success",
            isAbsolute: false,
            showNavs: true,
            showSidenav: true,
            showNavbar: true,
            showFooter: true,
            showMain: true,
            isLargeScreen: true,  
            currentRouteName: ''      
    }),
    actions:{
        setNavbarFixed() {
            this.isNavFixed = false
          },
        //   setDarkMode({ commit }, payload) {
        //     commit("SET_DARK_MODE", !!payload)
        //   },
        //   setShowSidebar({ commit }, payload) {
        //     commit("SET_SHOW_SIDEBAR", !!payload)
        //   },
        //   setSidebarPinned({ commit }, payload) {
        //     commit("SET_SIDEBAR_PINNED", !!payload)
        //   },
          toggleSidebarPinned() {
            this.isPinned = !this.isPinned            
          },
          showConfigurator() {
            this.showConfig = true
          },
        //   closeConfigurator({ commit }) {
        //     commit("SET_SHOW_CONFIGURATOR", false)
        //   },
        //   setShowConfigurator({ commit }, payload) {
        //     commit("SET_SHOW_CONFIGURATOR", !!payload)
        //   },
        //   setSidebarTransparent({ commit }, payload) {
        //     commit("sidebarType", !!payload);
        //   },
        //   setSidebarColor({ commit }, payload) {
        //     commit("SET_SIDEBAR_COLOR", payload);
        //   },
        //   enableRTL({ commit }) {
        //     commit("SET_IS_RTL", true);
        //   },
        //   disableRTL({ commit }) {
        //     commit("SET_IS_RTL", false);
        //   },
        //   setIsLargeScreen({ commit }, payload) {
        //     commit("SET_IS_LARGE_SCREEN", !!payload)
        //   }
    }
})