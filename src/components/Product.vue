<template>
    <article class="product">
        <div class="product__top">
            <span v-if="product.discount" class="product__sticker product__sticker--discount">-{{ product.discount }}%</span>
            <span v-if="product.new" class="product__sticker product__sticker--new">NEW</span>

            <div class="product__image">
                <img :src="images[product.image_url]" alt="product picture">
            </div>

            <div class="product__actions">
                <button class="product__action">
                    <img src="@/assets/images/icons/wishlist.svg" alt="heart">
                </button>

                <button class="product__action">
                    <img src="@/assets/images/icons/eye.svg" alt="eye">
                </button>
            </div>

            <button class="product__add" @click="addToCart">Add To Cart</button>
        </div>

        <div class="product__info">
            <p class="product__title" v-text="product.title"/>

            <div class="product__info-wrapper" :class="starsInline ? 'row' : 'column'">
                <span v-if="!product.discount" class="product__price">${{ product.price }}</span>

                <div v-else class="product__price-wrapper">
                    <span class="product__price">${{ calculatedPrices.newPrice }}</span>
                    <del class="product__price product__price--old">${{ calculatedPrices.oldPrice }}</del>
                </div>

                <div class="product__rating">
                    <star-rating :value="product.rating" :max-stars="5"/>
                    ({{ product.reviewsCount }})
                </div>

                <button class="product__add" @click="addToCart">Add To Cart</button>
            </div>
        </div>
    </article>
</template>

<script>
    import { filename } from 'pathe/utils';
    import StarRating from './StarRating.vue';
    import { useToast } from 'vue-toastification';
    
    export default {
        props: {
            product: {
                type: Object,
                required: true
            },
            starsInline: Boolean
        },
        computed: {
            calculatedPrices() {
                if(!this.product.discount) return null;

                const oldPrice = this.product.price;
                const newPrice = this.product.price - this.product.price * (this.product.discount / 100);

                return { newPrice, oldPrice };
            }
        },
        methods: {
            addToCart() {
                this.toast.success("Product added to cart");
            }
        },
        setup() {
            const toast = useToast();

            const glob = import.meta.glob('@/assets/images/products/*.png', { eager: true });
            const images = Object.fromEntries(
                Object.entries(glob).map(([key, value]) => [filename(key), value.default])
            );

            return {
                images,
                toast
            }
        },
        components: {
            StarRating
        }
    }
</script>

<style lang="scss" scoped>
    .product {
        display: block;
        & > a {
            text-decoration: none;
            color: $black;
        }
        &__top {
            @include flex-center;
            position: relative;
            background-color: #f5f5f5;
            padding: 0.5rem;
            border-radius: 0.375rem;
            height: 250px;
            overflow: hidden;
            @media (hover: hover) {
                &:hover {
                    .product__add {
                        bottom: 0;
                    }
                    .product__image {
                        transform: translateY(-1rem) scale(1.025);
                    }
                }
            }
        }
        &__image {
            position: relative;
            transition: $transition;
            z-index: 1;
            img {
                margin: 0 auto;
                width: 180px;
                height: 180px;
                object-fit: contain;
                // max-width: 75%;
            }
        }
        &__sticker {
            display: block;
            position: absolute;
            top: 0.75rem;
            left: 0.75rem;
            color: $white;
            font-size: 0.875rem;
            border-radius: 0.325rem;
            text-align: center;
            padding: 0.5rem 0.875rem;
            line-height: 1;
            z-index: 2;
            &--discount {
                background-color: $primary;
            }
            &--new {
                background-color: $lightgreen;
            }
        }
        &__actions {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            z-index: 2;
        }
        &__action {
            @include flex-center;
            width: 2.25rem;
            height: 2.25rem;
            background-color: $white;
            border-radius: 50%;
            cursor: pointer;
            &:not(:last-child) {
                margin-bottom: 0.5rem;
            }
            img {
                width: 1.25rem;
            }
        }
        &__add {
            @include flex-center;
            position: absolute;
            bottom: -2.75rem;
            left: 0;
            width: 100%;
            height: 2.75rem;
            background-color: $black;
            color: $white;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1;
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
            transition: $transition;
            cursor: pointer;
        }
        &__info {
            margin-top: 1rem;
            &-wrapper {
                display: flex;
                &.column {
                    flex-direction: column;
                }
                &.row {
                    flex-direction: row;
                    align-items: flex-end;
                    gap: 0.75rem;
                    .product__rating {
                        margin: 0;
                    }
                }
            }
            .product__add {
                display: none;
            }
        }
        &__title {
            font-weight: 500;
            margin: 0 0 0.75rem;
        }
        &__price {
            display: block;
            font-weight: 500;
            font-size: 1rem;
            color: $primary;
            line-height: 1;
            &-wrapper {
                @include flex-center-vert;
                gap: 0.5rem;
            }
            &--old {
                color: rgba($color: $black, $alpha: 0.5);

            }
        }
        &__rating {
            @include flex-center-vert;
            margin-top: 0.5rem;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: rgba($color: $black, $alpha: 0.5);
            font-weight: 600;
            line-height: 1;
        }
    }
</style>