<template>
    <div class="home__slider">
        <swiper
            :modules="modules"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }">
            <swiper-slide v-for="slide in slides" :key="slide.id" class="home__slide">
                <div class="home__slide-left">
                    <div class="home__slide-product">
                        <img :src="icons[slide.product.icon]" alt="">
                        {{ slide.product.name }}
                    </div>

                    <h3 class="home__slide-title">{{ slide.title }}</h3>

                    <a class="home__slide-link" :href="slide.path">
                        <span>Shop Now</span>
                        <img src="@/assets/images/icons/arrow-right-alt.svg" alt="arrow-right">
                    </a>
                </div>

                <div class="home__slide-right">
                    <img :src="images[slide.image_url]" :alt="slide.product.name">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { filename } from 'pathe/utils';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {  Autoplay, Pagination } from 'swiper/modules';

    import 'swiper/css';
    
    export default {
        data() {
            return {
                slides: [
                    {
                        id: 0,
                        product: { icon: "apple-icon", name: "iPhone 14 Series" },
                        title: "Up to 10% off Voucher",
                        path: "/electronics/iphone-14",
                        image_url: "iphone-14"
                    },
                    {
                        id: 1,
                        product: { icon: "apple-icon", name: "iPhone 14 Series" },
                        title: "Up to 20% off Voucher",
                        path: "/electronics/iphone-14",
                        image_url: "iphone-14"
                    },
                    {
                        id: 2,
                        product: { icon: "apple-icon", name: "iPhone 14 Series" },
                        title: "Up to 30% off Voucher",
                        path: "/electronics/iphone-14",
                        image_url: "iphone-14"
                    },
                    {
                        id: 3,
                        product: { icon: "apple-icon", name: "iPhone 14 Series" },
                        title: "Up to 40% off Voucher",
                        path: "/electronics/iphone-14",
                        image_url: "iphone-14"
                    },
                    {
                        id: 4,
                        product: { icon: "apple-icon", name: "iPhone 14 Series" },
                        title: "Up to 50% off Voucher",
                        path: "/electronics/iphone-14",
                        image_url: "iphone-14"
                    },
                ]
            }
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const globImages = import.meta.glob('@/assets/images/*.png', { eager: true });
            const images = Object.fromEntries(
                Object.entries(globImages).map(([key, value]) => [filename(key), value.default])
            );

            const globIcons = import.meta.glob('@/assets/images/icons/*.svg', { eager: true });
            const icons = Object.fromEntries(
                Object.entries(globIcons).map(([key, value]) => [filename(key), value.default])
            );

            return {
                modules: [Autoplay, Pagination],
                icons,
                images
            };
        },
    };
</script>

<style lang="scss" scoped>
    .home__slider {
        position: relative;
        width: calc(100% - 240px);
        margin-left: 3rem;
        padding-top: 2.5rem;
        .home__slide {
            @include grid(2, 3rem);
            align-items: center;
            background-color: $black;
            color: $white;
            padding: 2rem 3rem;
            max-width: 100%;
            &-right {
                img {
                    margin: 0 auto;
                }
            }
            &-product {
                @include flex-center-vert;
                gap: 1.5rem;
            }
            &-title {
                font-family: $accentFontFamily;
                font-size: 3rem;
                font-weight: 600;
                line-height: 1.325;
                margin: 1rem 0 1.25rem 0;
            }
            &-link {
                display: flex;
                align-items: flex-start;
                gap: 0.5rem;
                text-decoration: none;
                color: $white;
                font-size: 1rem;
                font-weight: 500;
                span {
                    border-bottom: 1px solid $white;
                    padding-bottom: 0.325rem;
                }
            }
        }
    }
</style>