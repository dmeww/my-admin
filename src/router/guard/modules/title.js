/**
 * 设置网页标题
 * @param router
 */
export default function setPageTitle(router){
    router.beforeEach((to)=>{
        if (to.meta && to.meta.title){
            document.title = to.meta.title
        }
        else document.title = to.name
    })
}
