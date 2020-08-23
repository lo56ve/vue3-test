<template>
    <div>
        <button @click="increment">
            {{state.count}}
        </button>
        <div>{{double}}</div>
    </div>
</template>

<script>
    import { reactive, computed } from 'vue'

    export default {
        setup () {                          // composition api的入口点
            const state = reactive({        // 给对象双向绑定
                count: 0,
            })

            const double = computed(() => state.count * 2);

            function increment() {          // 方法
                state.count++
            }

            return {                        // 返回一个对象，对象属性将会被合并到组件模板的渲染上下文
                state,
                double,
                increment
            }
        }
    }
</script>
