<template>
  <div class="star-rating">
    <span
        v-for="i in maxStars"
        :key="i"
        @mouseover="hoverRating(i)"
        @mouseleave="resetHover"
        :class="['star', i <= (isHovered ? hoverValue : rating) ? 'star--filled' : '']">
        ★
    </span>
  </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
    props: {
        value: {
            type: Number,
            default: 0,
        },
        maxStars: {
            type: Number,
            default: 5,
        },
    },
    setup(props) {
        const rating = ref(props.value);
        const isHovered = ref(false);
        const hoverValue = ref(0);

        const hoverRating = (value) => {
            if (isHovered.value) {
                hoverValue.value = value;
            }
        };

        const resetHover = () => {
            hoverValue.value = 0;
        };

        return {
            rating,
            isHovered,
            hoverRating,
            resetHover,
        };
    },
    };
</script>

<style lang="scss" scoped>
    .star-rating {
        display: flex;
    }

    .star {
        font-size: 1.25rem;
        margin: 0 2px;
        color: rgba($color: $black, $alpha: 0.25);
        line-height: 1;
        &--filled {
            color: #FFAD33;
        }
    }
</style>