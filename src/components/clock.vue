<template>
    <h2 class="clock">
            <span class="clock-time">{{hours}}:{{minutes}}:{{seconds}}</span>
        </h2>
</template>

<script>

export default {
    name: 'Clock',
    data() {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    methods: {
        setTime() {
            setInterval(() => {
                const date = new Date();
                this.hours = date.getHours();
                this.minutes = date.getMinutes();
                this.seconds = date.getSeconds();
            }, 1000)
        },
        checkSingleDigit(digit) {
            return ('0' + digit).slice(-2)
        }
    },
    mounted() {
        this.setTime();
    }
}

</script>

<style scoped>

.clock {
    width: 100%;
    height: 81%;
    text-align: center;
}

.clock-time {
    font-size: 36pt;
    border: 0.3rem #fff solid;
    border-radius: 20%;
    padding: 0 0.8rem;
    color: #fff;
}

.clock-time:hover {
    border-color: darkred;
    transition-duration: 1.5s;
}

</style>

