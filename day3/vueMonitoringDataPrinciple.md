#Vue数据监测原理

    1.Vue会监视data中所有层次的数据。


    2.如何监测对象中的数据？

        通过setter实现监视，且要在new Vue时就传入要监测的数据。

        （1）对象中后追加的属性，Vue默认不做响应式处理

        （2）如需给后添加的属性做响应式，需使用：Vue.set(target, propertyName/index, value) 或 vm.$set(target, propertyName/index, value)


    3.如何监测数组中的数据

        通过包裹数组更新元素的方法实现，本质上做了两件事：

        （1）调用原生对应的方法对数组进行更新
        （2）重新解析模板，进而更新页面


    4.在Vue修改数组中的某个元素一定要用如下方法：
        
        (1).push()、pop()、shift()、unshift()、splice()、sort()、reverse()
        
        (2).Vue.set() 或 vm.$set
    

    注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象添加属性

