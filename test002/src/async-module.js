function getComponent() {
    // 动态导入
    /*
    * 优点：按需加载，节省流量
    */
    return import('lodash').then(({ default: _ }) => {
        const ele = document.createElement('div')

        ele.innerHTML = _.join(['Hello', 'webpack'], ' ')

        return ele
    })
}


getComponent().then(ele => {
    document.body.appendChild(ele)
})
