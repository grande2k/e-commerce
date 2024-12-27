<template>
    <section class="top-block">
        <div class="container">
            <div class="top-block__content">
                <home-sidebar />
                <home-slider />
            </div>
        </div>
    </section>

    <flash-sales v-if="productsOnSale" :products="productsOnSale"/>

    <categories />

    <best-sellers v-if="bestSellingProducts" :products="bestSellingProducts"/>

    <special-offer v-if="special_offer" :offer="special_offer"/>

    <our-products v-if="otherProducts" :products="otherProducts"/>

    <new-arrival v-if="arrivals" :arrivals="arrivals"/>
    
    <our-features />
</template>

<script>
    import productsJSON from "@/backend/products.json";
    import arrivalsJSON from "@/backend/arrivals.json";
    import HomeSidebar from "@/components/home/HomeSidebar.vue";
    import HomeSlider from "@/components/home/HomeSlider.vue";
    import FlashSales from "@/components/home/FlashSales.vue";
    import BestSellers from "@/components/home/BestSellers.vue";
    import OurProducts from "@/components/home/OurProducts.vue";
    import Categories from "@/components/home/Categories.vue";
    import SpecialOffer from "@/components/home/SpecialOffer.vue";
    import NewArrival from "@/components/home/NewArrival.vue";
    import OurFeatures from "@/components/home/OurFeatures.vue";

    export default {
        name: "HomeView",
        data() {
            return {
                products: productsJSON,
                arrivals: arrivalsJSON,
                special_offer: {
                    category: "Electronics",
                    title: "Enhance Your Music Experience",
                    endDate: "2024-12-31T23:59:59",
                    path: "/electronics/jbl",
                    image: "/src/assets/images/jbl.png"
                }
            }
        },
        computed: {
            productsOnSale() {
                return this.products.filter(product => product.type === "on-sale" && product.discount);
            },
            bestSellingProducts() {
                return this.products.filter(product => product.type === "best-seller");
            },
            otherProducts() {
                return this.products.filter(product => !product.type);
            },
        },
        components: {
            HomeSidebar,
            HomeSlider,
            FlashSales,
            BestSellers,
            OurProducts,
            Categories,
            SpecialOffer,
            NewArrival,
            OurFeatures
        }
    }
</script>

<style lang="scss" scoped>
    .top-block {
        margin-bottom: 25px;
        &__content {
            display: flex;
        }
    }
</style>