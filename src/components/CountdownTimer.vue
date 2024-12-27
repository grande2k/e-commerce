<template>
    <div class="countdown-timer">
        <div class="countdown-timer__unit">
            <p>Days</p>
            <span v-text="timeLeft.days"/>
        </div>

        <div class="countdown-timer__separator">:</div>

        <div class="countdown-timer__unit">
            <p>Hours</p>
            <span v-text="timeLeft.hours"/>
        </div>

        <div class="countdown-timer__separator">:</div>

        <div class="countdown-timer__unit">
            <p>Minutes</p>
            <span v-text="timeLeft.minutes"/>
        </div>

        <div class="countdown-timer__separator">:</div>

        <div class="countdown-timer__unit">
            <p>Seconds</p>
            <span v-text="timeLeft.seconds"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            targetTime: {
                type: String, // 'YYYY-MM-DDTHH:mm:ss'
                required: true,
            }
        },
        data() {
            return {
                timeLeft: {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                },
                intervalId: null,
            };
        },
        methods: {
            calculateTimeLeft() {
                const now = new Date();
                const target = new Date(this.targetTime);
                const difference = target - now;

                if (difference > 0) {
                    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((difference / (1000 * 60)) % 60);
                    const seconds = Math.floor((difference / 1000) % 60);

                    this.timeLeft = {
                        days: String(days).padStart(2, '0'),
                        hours: String(hours).padStart(2, '0'),
                        minutes: String(minutes).padStart(2, '0'),
                        seconds: String(seconds).padStart(2, '0'),
                    };
                } else {
                    this.timeLeft = {
                        days: '00',
                        hours: '00',
                        minutes: '00',
                        seconds: '00',
                    };

                    this.stopTimer();
                }
            },
            startTimer() {
                this.calculateTimeLeft();
                this.intervalId = setInterval(this.calculateTimeLeft, 1000);
            },
            stopTimer() {
                if (this.intervalId) {
                    clearInterval(this.intervalId);
                    this.intervalId = null;
                }
            },
        },
        mounted() {
            this.startTimer();
        },
        beforeDestroy() {
            this.stopTimer();
        },
    };
</script>

<style lang="scss" scoped>
    .countdown-timer {
        @include flex-center-vert;
        gap: 0.875rem;
        &__unit {
            p {
                font-size: 0.875rem;
                margin: 0 0 4px 0;
                font-weight: 400;
            }
            span {
                font-family: $accentFontFamily;
                display: block;
                font-weight: bold;
                font-size: 2rem;
                line-height: 1;
            }
        }
        &__separator {
            color: #E07575;
            font-size: 1.75rem;
            align-self: flex-end;
        }
    }
</style>