<template>
    <div id="app" ref="app">
        <!--    {{pos.x}} === {{pos.y}}-->
<!--        <hello-world></hello-world>-->
        <example></example>
<!--            <mixin-test></mixin-test>-->
    </div>
</template>

<script>
    import {useMouseLog} from './components/mouse.js'
    // import MixinTest from './components/vue2/index'
    import Example from './components/vue3/pre'
    // import HelloWorld from "./components/HelloWorld";

    import {watchEffect} from 'vue'

    export default {
        components: {
            Example,
            // HelloWorld
            //   MixinTest
        },

      // beforeCreate () {
      //     console.log('app.vue的beforeCreated');
      // },

        mounted () {     // 保留了vue2.*api
          // this.onLog();
          this.onShow('我是App.vue');
        },

        methods: {
          onShow (str) {
            console.log(str);
          }
        },

        setup() {
            console.log('我是app.vue的setup()')
            // debugger;    // setup是没有this上下文的
            let {pos, timer, onLog} = useMouseLog();

            // const appInstance = ref(null)    refs和ref已经是一个概念

            watchEffect(() => {
                console.log(timer);
            })

          // onMounted (() => {
          //   console.log(appInstance);
          // })

            return {
              // app: appInstance,
                pos,
                timer,
                onLog
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
