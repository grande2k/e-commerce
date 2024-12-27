<template>
    <div class="section-header">
        <div class="section-header__left">
            <div>
                <span v-if="label" class="section-header__label" v-text="label"/>
                <h2 v-if="title" class="section-header__title" v-text="title"/>
            </div>

            <slot name="additional"></slot>
        </div>

        <div class="section-header__controls">
            <slot name="controls"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .section-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 3rem;
        &__left {
            display: flex;
            align-items: flex-end;
            gap: 4rem;
        }
        &__label {
            @include flex-center-vert;
            gap: 0.75rem;
            color: $primary;
            font-size: 1rem;
            font-weight: 600;
            position: relative;
            &::before {
                content: "";
                display: block;
                width: 20px;
                height: 35px;
                background-color: $primary;
                border-radius: 0.25rem;
            }
        }
        &__title {
            font-family: $accentFontFamily;
            font-size: 2rem;
            margin: 1.5rem 0 0 0;
            font-weight: 600;
        }
    }
</style>