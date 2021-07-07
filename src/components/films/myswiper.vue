<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <template v-for="item in filmInfo">
                <div class="swiper-slide" :key="item.filmId">
                    <slot name="actor" :item="item"> </slot>
                    <slot name="photo" :item="item"> </slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/swiper-bundle.min.css"
export default {
    props: {
        filmInfo: {
            type: Array,
            required: true,
        },
        slide: {
            type: Number,
            default: 4,
        },
        spaceBetween: {
            type: Number,
            default: 10,
        },
    },

    mounted() {
        this.$nextTick(() => {
            var swiper = new Swiper(".swiper-container", {
                slidesPerView: this.slide,
                spaceBetween: this.spaceBetween,
            })
        })
    },
}
</script>

<style lang="scss" scoped>
.swiper-container {
    padding: 0 0 0 15px;
    box-sizing: border-box;
}
.swiper-slide {
    min-width: 85px;
    text-align: center;
}
</style>
