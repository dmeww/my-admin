import NProgress from "nprogress";

NProgress.configure({
    showSpinner: false,
})

/**
 * 配置网页加载进度条
 *
 */
export default function setLoadingProgress(router) {
    router.beforeEach(() => {
        NProgress.start()
    })
    router.afterEach(() => {
        NProgress.done()
    })
}




