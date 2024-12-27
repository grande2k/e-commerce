<template>
    <section class="our-products">
        <div class="container">
            <section-header label="Our Products" title="Explore Our Products">
                <template #controls>
                    <navigation-arrows @prev="swiperPrevSlide" @next="swiperNextSlide" />
                </template>
            </section-header>

            <div v-if="products && products.length">
                <swiper
                    class="our-products__grid products-grid"
                    @swiper="onSwiper"
                    :slidesPerView="2"
                    :grid="{
                        rows: 2,
                        fill: 'row'
                    }"
                    :navigation="true"
                    :modules="modules"
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
                    <swiper-slide v-for="product in products" :key="product.id" >
                        <product :product="product" starsInline />
                    </swiper-slide>
                </swiper>
            </div>

            <p v-else class="empty-message">No products found.</p>

            <custom-button class="our-products__btn">View All Products</custom-button>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Grid, Navigation } from 'swiper/modules';
    import SectionHeader from '@/components/SectionHeader.vue';
    import NavigationArrows from '@/components/ui/NavigationArrows.vue';
    import Product from '@/components/Product.vue';
    import CustomButton from '@/components/ui/CustomButton.vue';

    import 'swiper/css';
    import 'swiper/css/grid';

    export default {
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
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
            NavigationArrows,
            Product,
            Swiper,
            SwiperSlide,
            CustomButton
        },
        setup() {
            return {
                modules: [Grid, Navigation],
            };
        },
    }
</script>

<style lang="scss" scoped>
    .our-products {
        padding: 50px 0;
        &__grid {
            margin-bottom: 50px;
        }
        &__btn {
            // width: 250px;
            margin: 0 auto;
        }
    }
</style>