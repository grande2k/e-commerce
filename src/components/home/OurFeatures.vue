<template>
    <section class="our-features">
        <div class="container">
            <div class="our-features__grid">
                <div v-for="feature in features" :key="feature.id" class="our-features__item">
                    <img :src="images[feature.icon]" alt="">
                    <h4 v-text="feature.title"/>
                    <p v-text="feature.caption"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { filename } from 'pathe/utils';

    export default {
        data() {
            return {
                features: [
                    {
                        id: 0,
                        title: "FREE AND FAST DELIVERY",
                        caption: "Free delivery for all orders over $140",
                        icon: "features-delivery"
                    },
                    {
                        id: 1,
                        title: "24/7 CUSTOMER SERVICE",
                        caption: "Friendly 24/7 customer support",
                        icon: "features-service"
                    },
                    {
                        id: 0,
                        title: "MONEY BACK GUARANTEE",
                        caption: "We reurn money within 30 days",
                        icon: "features-guarantee"
                    }
                ]
            }
        },
        setup() {
            const glob = import.meta.glob('@/assets/images/icons/*.svg', { eager: true });
            const images = Object.fromEntries(
                Object.entries(glob).map(([key, value]) => [filename(key), value.default])
            );

            return {
                images
            }
        },
    }
</script>

<style lang="scss" scoped>
    .our-features {
        padding: 50px 0 100px 0;
        &__grid {
            @include grid(3, 1rem);
            justify-content: center;
        }
        &__item {
            text-align: center;
            img {
                margin: 0 auto;
            }
            h4 {
                font-size: 1.25rem;
                font-weight: 600;
                margin: 1rem 0 0.75rem 0;
            }
            p {
                font-size: 0.875rem;
                margin: 0;
                font-weight: normal;
            }
        }
    }
</style>