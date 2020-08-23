<template>
    <div>
        <button @click="increment">
            {{state.count}}
        </button>
        <div>{{double}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                state: { count: 0 }
            }
        },

        computed: {
            double () {
                return this.state.count * 2;
            }
        },

        methods: {
            increment () {
                this.state.count++;
            }
        }
    }


</script>
