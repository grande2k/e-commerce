<template>
    <section class="categories">
        <div class="container">
            <section-header label="Categories" title="Browse By Category">
                <template #controls>
                    <navigation-arrows @prev="swiperPrevSlide" @next="swiperNextSlide" />
                </template>
            </section-header>

            <div v-if="categories && categories.length">
                <swiper
                    class="categories__row"
                    @swiper="onSwiper"
                    :navigation="true"
                    :modules="modules"
                    :slidesPerView="3"
                    :spaceBetween="12"
                    :enabled="false"
                    :breakpoints="{
                        '700': {
                            enabled: true,
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                        '920': {
                            enabled: true,
                            slidesPerView: 6,
                            spaceBetween: 24,
                        },
                    }">
                    <swiper-slide v-for="(category, index) in categories" :key="index" class="category">
                        <img :src="images[category.toLowerCase()]" alt="icon" class="category__icon">
                        <p class="category__name" v-text="category"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
    import { filename } from 'pathe/utils';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation } from 'swiper/modules';
    import SectionHeader from '@/components/SectionHeader.vue';
    import NavigationArrows from '@/components/ui/NavigationArrows.vue';

    import 'swiper/css';

    export default {
        data() {
            return {
                swiperInstance: null,
                categories: ["Phones", "Computers", "SmartWatch", "Camera", "HeadPhones", "Gaming", "Clothes"]
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
            Swiper,
            SwiperSlide
        },
        setup() {
            const glob = import.meta.glob('@/assets/images/categories/*.svg', { eager: true });
            const images = Object.fromEntries(
                Object.entries(glob).map(([key, value]) => [filename(key), value.default])
            );

            return {
                images,
                modules: [Navigation],
            };
        },
    }
</script>

<style lang="scss" scoped>
    .categories {
        padding-top: 75px;
        .container {
            padding-bottom: 75px;
            border-bottom: 0.5px solid rgba($color: $black, $alpha: 0.3);
        }
        .category {
            @include flex-center-column;
            aspect-ratio: 1;
            border: 0.5px solid rgba($color: $black, $alpha: 0.3);
            border-radius: 0.5rem;
            text-decoration: none;
            transition: $transition;
            cursor: pointer;
            &__icon {
                width: 3.5rem;
                height: 3.5rem;
                object-fit: contain;
                object-position: center;
                transition: $transition;
            }
            &__name {
                font-weight: normal;
                font-size: 1rem;
                margin: 1.5rem 0 0 0;
                line-height: 1;
            }
            @media (hover: hover) {
                &:hover {
                    box-shadow: inset 0 -12rem 0 0 $primary;
                    border-color: $primary;
                    color: $white;
                    img {
                        filter: invert(1);
                    }
                }
            }
        }
    }
</style>