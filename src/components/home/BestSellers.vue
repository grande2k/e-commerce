<template>
    <section class="best-sellers">
        <div class="container">
            <section-header label="This Month" title="Best Selling Products">
                <template #controls>
                    <custom-button class="best-sellers__btn">View All</custom-button>
                </template>
            </section-header>

            <div v-if="products && products.length" class="best-sellers__products">
                <product v-for="product in products" :key="product.id" :product="product"/>
            </div>

            <p v-else class="empty-message">No products on sales found.</p>
        </div>
    </section>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    import Product from '@/components/Product.vue';
    import CustomButton from '@/components/ui/CustomButton.vue';

    export default {
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        components: {
            SectionHeader,
            Product,
            CustomButton
        },
    }
</script>

<style lang="scss" scoped>
    .best-sellers {
        padding: 75px 0;
        &__products {
            @include grid(2, 1.25rem 00.75rem);
            grid-gap: 0.75rem;
            @media (min-width: 700px) {
                grid-template-columns: repeat(3, 1fr);
            }
            @media (min-width: 920px) {
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 1.5rem;
            }
        }
    }
</style>