<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__logo logo">
                    <p>Exclusive</p>
                </div>
        
                <nav class="header__nav" :class="{ 'header__nav--active': isBurgerActive }">
                    <div class="header__nav-logo logo">
                        <p>Exclusive</p>
                    </div>

                    <header-search/>

                    <ul class="header__links">
                        <li v-for="(link, index) in links" :key="index" class="header__link">
                            <router-link :to="link.path">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </nav>

                <div class="header__controls">
                    <header-search/>

                    <a href="#" class="header__btn header__wishlist" title="Wishlist">
                        <img src="@/assets/images/icons/wishlist.svg" alt="heart">
                    </a>

                    <a href="#" class="header__btn header__cart" title="Cart">
                        <img src="@/assets/images/icons/cart.svg" alt="cart">
                    </a>

                    <div
                        class="header__burger"
                        :class="{ 'header__burger--active': isBurgerActive }"
                        @click="toggleBurger">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import HeaderSearch from "./HeaderSearch.vue";

    export default {
        data() {
            return {
                isBurgerActive: false,
                links: [
                    { name: "home", path: "/" },
                    { name: "contact", path: "/contact" },
                    { name: "about", path: "/about" },
                    { name: "sign up", path: "/signup" },
                ]
            }
        },
        methods: {
            toggleBurger() {
                this.isBurgerActive = !this.isBurgerActive;
                this.isBurgerActive ? document.body.classList.add("lock") : document.body.classList.remove("lock");
            }
        },
        components: {
            HeaderSearch
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        background-color: $white;
        padding: 1rem 0;
        border-bottom: 0.5px solid rgba($color: $black, $alpha: 0.3);
        &__content {
            @include flex-center-sb;
        }
        &__nav {
            &-logo {
                display: none;
            }
            .header__search {
                display: none;
            }
        }
        &__links {
            @include flex-center-vert;
            gap: 3rem;
        }
        &__link {
            a {
                position: relative;
                display: block;
                text-decoration: none;
                font-weight: normal;
                color: $black;
                text-transform: capitalize;
                font-size: 1rem;
                padding-bottom: 0.25rem;
                line-height: 1;
                &::after {
                    content: "";
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 0;
                    background-color: rgba($color: $black, $alpha: 0.5);
                    height: 1px;
                    transition: $transition;
                }
                &.router-link-exact-active::after,
                &:hover::after {
                    width: 100%;
                }
            }
        }
        &__controls {
            @include flex-center-vert;
        }
        &__btn {
            @include flex-center;
            width: 1.75rem;
            height: 1.75rem;
        }
        &__wishlist {
            margin: 0 1rem 0 1.875rem;
        }
        &__burger {
            display: none;
        }
    }
</style>