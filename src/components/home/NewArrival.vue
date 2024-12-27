<template>
    <section class="new-arrival">
        <div class="container">
            <section-header label="Featured" title="New Arrival"/>
            
            <div v-if="arrivals && arrivals.length" class="new-arrival__grid">
                <article v-for="arrival in arrivals" :key="arrival.id" class="new-arrival__item">
                    <a :href="arrival.path">
                        <div class="new-arrival__image">
                            <img :src="images[arrival.image]" alt="picture">
                        </div>

                        <div class="new-arrival__info">
                            <h4 class="new-arrival__title" v-text="arrival.title"/>
                            <p class="new-arrival__description" v-text="arrival.description"/>
                            <a href="#" class="new-arrival__link">Shop Now</a>
                        </div>
                    </a>
                </article>
            </div>

            <p v-else class="empty-message">No arrivals found.</p>
        </div>
    </section>
</template>

<script>
    import { filename } from 'pathe/utils';
    import SectionHeader from '@/components/SectionHeader.vue';

    export default {
        props: {
            arrivals: {
                type: Array,
                required: true
            }
        },
        components: {
            SectionHeader
        },  
        setup() {
            const glob = import.meta.glob('@/assets/images/arrivals/*.png', { eager: true });
            const images = Object.fromEntries(
                Object.entries(glob).map(([key, value]) => [filename(key), value.default])
            );

            return {
                images
            }
        },
    }
</script>

<style lang="scss" scoped>
    .new-arrival {
        padding: 50px 0;
        &__grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 1.25rem;
        }
        &__item {
            background-color: #0D0D0D;
            border-radius: 0.25rem;
            min-height: 300px;
            & > a {
                display: block;
                text-decoration: none;
                color: #fafafa;
                position: relative;
                height: 100%;
            }
            &:first-child {
                grid-column: 1/3;
                grid-row: 1/3;
                .new-arrival__image {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                }
            }
            &:nth-child(2) {
                grid-column: 3/5;
                .new-arrival__image {
                    padding-right: 1rem;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                }
            }
            &:nth-child(3),
            &:nth-child(4) {
                .new-arrival {
                    &__image {
                        @include flex-center;
                    }
                    &__title{
                        margin-bottom: 0.5rem;
                    }
                }
            }
        }
        &__info {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            z-index: 2;
            width: 50%;
        }
        &__image {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
        }
        &__title {
            font-family: $accentFontFamily;
            font-weight: 500;
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            line-height: 1;
        }
        &__description {
            font-size: 0.875rem;
            margin: 0 0 1rem 0;
            font-weight: normal;
            line-height: 1.375;
        }
        &__link {
            display: inline-block;
            text-decoration: none;
            color: #fafafa;
            font-weight: 500;
            padding-bottom: 2px;
            border-bottom: 1px solid rgba($color: $white, $alpha: 0.5);
        }
    }
</style>