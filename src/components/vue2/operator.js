export default {
    data () {
        return {
            formValue: ''
        }
    },
    mounted () {
        console.log('我是operator.js');
    },
    methods: {
        onAdd () {
            this.formValue = prompt('请输入内容');
        }
    }
}
