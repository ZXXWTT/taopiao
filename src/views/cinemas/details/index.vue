<template>
    <!-- 只是一个未进行组件拆分的静态页面 -->
    <div>
        <div class="detail_nav">
            <div class="detail_left" @click="exit_detail_cinema('/cinemas')">
                <i class="iconfont icon-jiantou2"></i>
            </div>
            <div class="detail_center">
                <span>佳影国际影城</span>
                <i>(沙溪巨幕店)</i>
            </div>
            <div class="detail_right"></div>
        </div>

        <div class="detail_cinema">
            <van-cell
                title="佳影国际影城  (沙溪巨幕店)"
                label="番禺区洛浦街沙溪村丽江明珠酒店旁边门口电梯4楼"
            />
            <div class="map">
                <i class="iconfont icon-dizhi"></i>
            </div>
        </div>

        <div class="detail_movie">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div
                        :class="{
                            'swiper-slide': true,
                            'swiper-slide-active': false,
                        }"
                    >
                        <img
                            src="//p1.meituan.net/148.208/movie/63cb3dbbaff624b236b2e22b2ee59cff1553093.jpg@1l_1e_1c"
                            alt=""
                        />
                    </div>
                    <div
                        :class="{
                            'swiper-slide': true,
                            'swiper-slide-active': false,
                        }"
                    >
                        <img
                            src="//p0.meituan.net/148.208/movie/dd43ef1ec9cc590a6f0a70fd6c3dada92170902.jpg@1l_1e_1c"
                            alt=""
                        />
                    </div>
                    <div
                        :class="{
                            'swiper-slide': true,
                            'swiper-slide-active': false,
                        }"
                    >
                        <img
                            src="//p1.meituan.net/148.208/movie/6876f0a4db61cab652fdc3d3ed14e94c4924473.jpg@1l_1e_1c"
                            alt=""
                        />
                    </div>
                    <div
                        :class="{
                            'swiper-slide': true,
                            'swiper-slide-active': false,
                        }"
                    >
                        <img
                            src="//p0.meituan.net/148.208/movie/57917609b106b561b5dba984a0f376035045141.jpg@1l_1e_1c"
                            alt=""
                        />
                    </div>
                    <div
                        :class="{
                            'swiper-slide': true,
                            'swiper-slide-active': false,
                        }"
                    >
                        <img
                            src="//p0.meituan.net/148.208/movie/72c7a8e55d97a8502c64495399fc3fb12010824.jpg@1l_1e_1c"
                            alt=""
                        />
                    </div>
                    <div
                        :class="{
                            'swiper-slide': true,
                            'swiper-slide-active': false,
                        }"
                    >
                        <img
                            src="//p0.meituan.net/148.208/movie/49b453507a60d99a9b9d42755950029994987.jpg@1l_1e_1c"
                            alt=""
                        />
                    </div>
                    <div
                        :class="{
                            'swiper-slide': true,
                            'swiper-slide-active': false,
                        }"
                    >
                        <img
                            src="//p0.meituan.net/148.208/movie/69b9d96e28c76e3b26d8765a7a74225c3439720.jpg@1l_1e_1c"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="movieName">
            <div class="name">
                <span>革命者</span>
                <span>9.4</span>
                <span>分</span>
            </div>
            <div class="actor">
                <span>121分钟 |</span>
                <span> 剧情 |</span>
                <span> 张颂文,李易峰,佟丽娅</span>
            </div>
        </div>

        <div class="movieTime">
            <van-tabs>
                <van-tab v-for="(item, index) in arr" :title="item" :key="index">
                    <vip></vip>
                    <show v-if="index != 0"></show>
                    <showed v-else></showed>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/swiper.min.css"
import vip from "./ui/vip.vue"
import show from "./ui/show.vue"
import showed from "./ui/showed.vue"
export default {
    components: {
        vip,
        show,
        showed,
    },
    data() {
        return {
            arr: [
                "今天7月7日",
                "明天7月8日",
                "后天7月9日",
                "周六7月10日",
                "周日7月11日",
                "周一7月12日",
            ],
        }
    },
    created() {
        this.$root.$children[0].isShow = false
    },
    mounted() {
        var swiper = new Swiper(".swiper-container", {
            slidesPerView: 5,
            spaceBetween: 6,
            centeredSlides: true,
        })
    },
    beforeDestroy() {
        this.$root.$children[0].isShow = true
    },
    methods: {
        exit_detail_cinema(url) {
            this.$router.push({ path: url, query: { nm: "北京", id: 1 } })
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    .detail_nav {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        color: #fff;
        background: #e54848;
        .detail_left {
            width: 50px;
            height: 100%;
            line-height: 50px;
            i {
                font-size: 28px;
            }
        }
        .detail_right {
            width: 50px;
            height: 100%;
        }
        .detail_center {
            height: 100%;
            font-size: 18px;
            line-height: 50px;
            span {
                margin: 0 8px 0 0;
            }
        }
    }
    .detail_cinema {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .van-cell {
            .van-cell__title {
                span {
                    font-size: 17px;
                    font-weight: bolder;
                }
                .van-cell__label {
                    width: 260px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 13px;
                }
            }
        }
        .map {
            width: 70px;
            height: 36px;
            text-align: center;
            line-height: 36px;
            border-left: 1px solid #666;
            i {
                font-size: 24px;
                color: blue;
            }
        }
    }
    .detail_movie {
        width: 100%;
        height: 95px;
        padding: 20px 0;
        background: #fae5e5;
        .swiper-container {
            .swiper-wrapper {
                .swiper-slide {
                    img {
                        width: 65px;
                        height: 95px;
                    }
                }
                // .swiper-slide-active {
                //     transform: scale(1.15);
                //     border: 2px solid #fff;
                // }
            }
        }
    }
    .movieName {
        width: 100vw;
        height: 66.5px;
        padding: 11px 15px;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        .name {
            height: 24px;
            font-weight: bolder;
            span:nth-of-type(1) {
                font-size: 17px;
                margin: 0 10px 0 0;
            }
            span:nth-of-type(2) {
                color: #ffb400;
                font-size: 16px;
            }
            span:nth-of-type(3) {
                color: #ffb400;
                font-size: 12px;
            }
        }
        .actor {
            height: 18.5px;
            line-height: 18.5px;
            margin: 2px 0 0 0;
            font-size: 13px;
            color: #999;
        }
    }
    .movieName:after {
        content: "";
        width: 100vw;
        height: 1px;
        background: #999;
        transform: scaleY(0.5);
        position: absolute;
        left: 0;
        bottom: 0;
    }
}
</style>
