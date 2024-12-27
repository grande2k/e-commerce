<template>
    <button :class="`btn btn-${type}`" :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: "primary"
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick() {
                if(!this.disabled) this.$emit("click");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        @include flex-center;
        font-family: $mainFontFamily;
        position: relative;
        width: fit-content;
        border-radius: 0.375rem;
        outline: none;
        line-height: 1;
        padding: 1rem 3rem;
        height: 3.5rem;
        border: 2px solid transparent;
        font-weight: 500;
        color: #fafafa;
        transition: $transition;
        cursor: pointer;
        &-primary {
            background-color: $primary;
            border-color: $primary;
            @media(hover: hover) {
                &:hover {
                    background-color: transparent;
                    color: $primary;
                    border-color: $primary;
                }
            }
            @media(hover: none) {
                &:active {
                    background-color: transparent;
                    color: $primary;
                    border-color: $primary;
                }
            }
        }
        &-lightgreen {
            background-color: $lightgreen;
            border-color: $lightgreen;
            @media(hover: hover) {
                &:hover {
                    background-color: transparent;
                    color: $lightgreen;
                    border-color: $lightgreen;
                }
            }
            @media(hover: none) {
                &:active {
                    background-color: transparent;
                    color: $lightgreen;
                    border-color: $lightgreen;
                }
            }
        }
        &.rotate-icon {
            i {
                transform: rotate(180deg);
            }
        }
        
        @media (max-width: 920px) {
            padding: 0.75rem 2.5rem;
            height: 3rem;
            font-size: 0.875rem;
        }
    }
</style>