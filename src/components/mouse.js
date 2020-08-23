import {ref, reactive, onMounted} from 'vue'

export function useMouseLog() {
    const pos = reactive({
        x: 0,
        y: 0
    })

    let timer = ref(0)

    // watchEffect(() => {
    //     console.log(timer.value);
    // })

    function initDownFn () {
        window.addEventListener('mousedown', (e) => {
            pos.x = e.clientX;
            pos.y = e.clientY;
        })
    }

    function initUpFn () {
        window.addEventListener('mouseup', () => {
            timer.value = new Date().getTime()
        })
    }

    function initEvent () {
        initDownFn()
        initUpFn()
    }

    function onLog () {
        console.log(this);
    }

    onMounted(() => {
        initEvent()
    })

    return {
        pos,
        timer,
        onLog
    }
}
