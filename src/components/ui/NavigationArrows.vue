<template>
    <div class="navigation-arrows">
        <button class="navigation-arrows__button" :id="prevId" title="Previous" @click="$emit('prev')">
            <img src="@/assets/images/icons/arrow-left-control.svg" alt="left">
        </button>

        <button class="navigation-arrows__button" :id="nextId" title="Next" @click="$emit('next')">
            <img src="@/assets/images/icons/arrow-right-control.svg" alt="right">
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            prevId: String,
            nextId: String
        }
    }
</script>

<style lang="scss" scoped>
    .navigation-arrows {
        display: flex;
        gap: 0.75rem;
        &__button {
            @include flex-center;
            background-color: #f5f5f5;
            border-radius: 50%;
            width: 2.75rem;
            height: 2.75rem;
            cursor: pointer;
            &,
            img {
                transition: $transition;
            }
            @media (hover: hover) {
                &:hover {
                    box-shadow: inset 0 0 0 2.75rem $primary;
                    img {
                        filter: invert(1);
                    }
                }
            }
            @media (hover: none) {
                &:active {
                    box-shadow: inset 0 0 0 2.75rem $primary;
                    img {
                        filter: invert(1);
                    }
                }
            }
        }
    }
</style>