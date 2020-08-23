<template>
    <button @click="onAdd">新增</button>
</template>
<script>
    import $_operator from './operator';

    export default {
        mixins: [$_operator],

        data () {
            return {
                formValue: ''
            }
        },

        watch: {
            formValue (val) {
                alert(`输入了${val}`)
            }
        },

        mounted () {
            console.log('我是index.vue');
        }
    }
</script>
