<template>
    <aside class="home__sidebar">
        <ul class="home__sidebar-menu">
            <li v-for="(category, index) in categories" :key="index" class="home__sidebar-link">
                <a :href="category.path">
                    {{ category.name }}

                    <img v-if="category.submenu" src="@/assets/images/icons/arrow-right.svg" alt="arrow">
                </a>

                <ul v-if="category.submenu" class="home__sidebar-submenu">
                    <h4 class="home__sidebar-submenu-title">{{ category.name }}</h4>

                    <li v-for="(subcategory, i) in category.submenu" :key="i" class="home__sidebar-link">
                        <a :href="subcategory.path">{{ subcategory.name }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    { 
                        name: "Woman’s Fashion",
                        path: "/womans-fashion",
                        submenu: [
                            { name: "Dresses", path: "/womans-fashion/dresses" },
                            { name: "T-shirts", path: "/womans-fashion/t-shirts" },
                            { name: "Shoes", path: "/womans-fashion/shoes" },
                        ]
                    },
                    { 
                        name: "Men’s Fashion",
                        path: "/mens-fashion",
                        submenu: [
                            { name: "Jeans", path: "/mens-fashion/jeans" },
                            { name: "T-shirts", path: "/mens-fashion/t-shirts" },
                            { name: "Jackets", path: "/mens-fashion/jackets" },
                        ]
                    },
                    { name: "Electronics", path: "/electronics" },
                    { name: "Home & Lifestyle", path: "/home-and-lifestyle" },
                    { name: "Medicine", path: "/medicine" },
                    { name: "Sports & Outdoor", path: "/sports" },
                    { name: "Baby’s & Toys", path: "/toys" },
                    { name: "Groceries & Pets", path: "/groceries" },
                    { name: "Health & Beauty", path: "/health" }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home__sidebar {
        width: 240px;
        padding: 2.5rem 0 1rem 0;
        border-right: 0.5px solid rgba($color: $black, $alpha: 0.3);
        &-link {
            position: relative;
            padding-right: 1rem;
            &:not(:last-child) {
                margin-bottom: 1.25rem;
            }
            &:hover {
                .home__sidebar-submenu {
                    z-index: 2;
                    opacity: 1;
                    visibility: visible;
                }
            }
            a {
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-decoration: none;
                font-weight: normal;
                font-size: 1rem;
                color: $black;
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    background-color: rgba($color: $black, $alpha: 0.5);
                    height: 1px;
                    transition: $transition;
                }
                &:hover::after {
                    width: 100%;
                }
            }
        }
        &-submenu {
            position: absolute;
            top: 0;
            left: 100%;
            width: 300px;
            background-color: $white;
            box-shadow: 1px 0 6px rgba($color: $black, $alpha: 0.25);
            padding: 1rem 1rem 1rem 1.5rem;
            border-left: 2px solid $primary;
            transition: opacity 0.3s ease;
            z-index: -1;
            opacity: 0;
            visibility: hidden;
            li {
                &:not(:last-child) {
                    margin-bottom: 0.875rem;
                }
                a {
                    display: inline-block;
                    font-size: 0.875rem;
                }
            }
            &-title {
                font-size: 1rem;
                font-weight: bold;
                margin: 0 0 1rem 0;
            }
        }
    }
</style>