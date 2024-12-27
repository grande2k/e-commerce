<template>
    <section class="special-offer">
        <div class="container">
            <div class="special-offer__content">
                <div class="special-offer__info">
                    <span class="special-offer__category" v-text="offer.category"/>
                    <h2 class="special-offer__title" v-text="offer.title"/>
                    <countdown-timer class="special-offer__timer" :targetTime="offer.endDate"/>
                    <custom-button type="lightgreen" class="special-offer__link" @click="$router.push(offer.path)">Buy Now!</custom-button>
                </div>

                <div class="special-offer__image">
                    <img :src="offer.image" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CountdownTimer from '@/components/CountdownTimer.vue';
    import CustomButton from '@/components/ui/CustomButton.vue';

    export default {
        props: {
            offer: {
                type: Object,
                required: true
            }
        },
        components: {
            CountdownTimer,
            CustomButton
        }
    }
</script>

<style lang="scss">
    .special-offer {
        padding: 50px 0;
        &__content {
            display: flex;
            padding: 3rem;
            background-color: $black;
        }
        &__info {
            width: 45%;
            margin-right: 2rem;
        }
        &__image {
            width: 55%;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        &__category {
            display: block;
            color: $lightgreen;
            font-weight: 600;
        }
        &__title {
            font-family: $accentFontFamily;
            color: $white;
            font-size: 3rem;
            margin: 1.5rem 0;
            font-weight: 600;
            line-height: 1.375;
        }
        &__timer {
            gap: 2rem;
            margin-bottom: 2rem;
            .countdown-timer__unit {
                @include flex-center-column;
                flex-direction: column-reverse;
                background-color: #fff;
                border-radius: 50%;
                width: 4.75rem;
                height: 4.75rem;
                span {
                    font-family: $mainFontFamily;
                    font-weight: 600;
                    font-size: 1.375rem;
                }
                p {
                    margin: 0;
                }
            }
            .countdown-timer__separator {
                display: none;
            }
        }
    }
</style>