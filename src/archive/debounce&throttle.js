// debounce
//防抖：动作绑定事件，动作发生后一定时间后触发事件，在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。
function debounce(fn, time = 500) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            // keep this
            fn.apply(this, arguments)
        }, time)
    }
}

//节流： 动作绑定事件，动作发生后一段时间后触发事件，在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发。

function throttle(fn, time = 5000) {
    let canRun = true;
    return function () {
        if (canRun) {
            canRun = false;
            fn.apply(this, arguments)
            setTimeout(() => {
                canRun = true
            }, time)
        }
    }
}

function sayHi(e) {
    console.log(e)
}
window.addEventListener('scroll', throttle(sayHi));