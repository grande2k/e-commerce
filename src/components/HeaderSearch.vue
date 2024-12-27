<template>
    <form action="#" role="search" class="header__search">
        <input
            type="search"
            class="header__search-input"
            v-model="searchQuery"
            placeholder="What are you looking for?"
            @input="debouncedSearch">

        <img v-if="!searchQuery" src="@/assets/images/icons/search.svg" class="header__search-icon header__search-glass" alt="search">
        <img v-else src="@/assets/images/icons/x-mark.svg" class="header__search-icon header__search-clear" alt="clear" @click="searchQuery = ''">
    </form>
</template>

<script>
    import { debounce } from "@/utils/debounce";

    export default {
        data() {
            return {
                searchQuery: "",
                debouncedSearch: null
            }
        },  
        methods: {
            handleSearch() {
                console.log(this.searchQuery);
            }
        },
        created() {
            this.debouncedSearch = debounce(this.handleSearch, 250);
        }
    }    
</script>

<style lang="scss" scoped>
    .header__search {
        position: relative;
        display: block;
        width: 240px;
        height: 38px;
        &-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            border-radius: 0.25rem;
            background-color: #f5f5f5;
            padding: 0.75rem 2.75rem 0.75rem 1.25rem;
            font-size: 0.75rem;
            color: $black;
            outline: none;
            border: none;
            appearance: none;
            &::placeholder {
                color: rgba($color: $black, $alpha: 0.5);
            }
        }
        &-icon {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            z-index: 2;
        }
        &-clear {
            cursor: pointer;
        }
    }
</style>