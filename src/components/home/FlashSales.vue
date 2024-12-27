<template>
    <section class="flash-sales">
        <div class="container">
            <section-header
                label="Today's"
                title="Flash Sales">
                <template #additional>
                    <countdown-timer :targetTime="saleEndsDate"/>
                </template>

                <template #controls>
                    <navigation-arrows @prev="swiperPrevSlide" @next="swiperNextSlide"/>
                </template>
            </section-header>

            <div v-if="products && products.length">
                <swiper
                    class="flash-sales__products products-grid"
                    @swiper="onSwiper"
                    :navigation="true"
                    :modules="modules"
                    :slidesPerView="2"
                    :spaceBetween="12"
                    :enabled="false"
                    :breakpoints="{
                        '700': {
                            enabled: true,
                            slidesPerView: 3,
                        },
                        '920': {
                            enabled: true,
                            slidesPerView: 4,
                            spaceBetween: 24
                        }
                    }">
                    <swiper-slide v-for="product in products" :key="product.id" class="flash-sales-product-wrapper">
                        <product :product="product"/>
                    </swiper-slide>
                </swiper>
            </div>

            <p v-else class="empty-message">No products found.</p>

            <custom-button class="flash-sales__btn">View All Products</custom-button>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation } from 'swiper/modules';
    import SectionHeader from '@/components/SectionHeader.vue';
    import CountdownTimer from '@/components/CountdownTimer.vue';
    import NavigationArrows from '@/components/ui/NavigationArrows.vue';
    import Product from '@/components/Product.vue';
    import CustomButton from '@/components/ui/CustomButton.vue';

    import 'swiper/css';

    export default {
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                saleEndsDate: "2024-12-31T23:59:59",
                swiperInstance: null,
            }
        },
        methods: {
            onSwiper(swiper) {
                this.swiperInstance = swiper;
            },
            swiperNextSlide() {
                this.swiperInstance.slideNext();
            },
            swiperPrevSlide() {
                this.swiperInstance.slidePrev();
            }
        },
        components: {
            SectionHeader,
            CountdownTimer,
            NavigationArrows,
            Product,
            Swiper,
            SwiperSlide,
            CustomButton
        },
        setup() {
            return {
                modules: [Navigation],
            };
        },
    }
</script>

<style lang="scss" scoped>
    .flash-sales {
        padding-top: 75px;
        .container {
            padding-bottom: 75px;
            border-bottom: 0.5px solid rgba($color: $black, $alpha: 0.3);
        }
        &__products {
            margin-bottom: 50px;
        }
        &__btn {
            // width: 250px;
            margin: 0 auto;
        }
    }
</style>