<template>
    <div>
        <!-- 电影海报 -->
        <div class="imgBox">
            <img :src="filmInfo.poster" alt="" />
        </div>

        <!-- 返回 -->
        <div class="btn_return">
            <i
                class="iconfont icon-jiantou2"
                style="font-size:24px"
                @click="goRet('/film')"
            ></i>
        </div>
        <!-- 电影标题 -->
        <div
            :class="{ nameNone: true, nameTop: showNameTop }"
            v-show="showNameTop"
        >
            {{ filmInfo.name }}
        </div>

        <!-- 电影详情内容 -->
        <div class="textBox">
            <b>
                {{ filmInfo.name }}<span>{{ filmInfo.filmType.name }}</span>
            </b>
            <p>
                <span>{{ filmInfo.category }}</span>
            </p>
            <p>上映时间</p>
            <p>
                <span>{{ filmInfo.nation }}</span> |
                <span>{{ filmInfo.runtime }}分钟</span>
            </p>
            <div :class="{ descript: true, active: active }">
                {{ filmInfo.synopsis }}
            </div>
            <div class="jiantou" ref="refJiantou">
                <i class="iconfont icon-arrow-down" @click="pullAll"></i>
            </div>
        </div>

        <!-- 演职人员 -->
        <div class="actor">
            <div class="actorBox">
                <div class="actorTitle">演职人员</div>
                <myswiper
                    :filmInfo="filmInfo.actors"
                    :key="filmInfo.filmId"
                    :slide="4"
                    :spaceBetween="10"
                >
                    <template #actor="row">
                        <img
                            v-lazy="row.item.avatarAddress"
                            alt=""
                            style="width:80px"
                        />
                        <h2
                            style="margin-top: 10px; font-size: 12px; min-width: 85px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                        >
                            {{ row.item.name }}
                        </h2>
                        <h3
                            style="margin-top: 10px;font-size: 12px; line-height: 16px; color: #797d82; min-width: 85px; height:32px; overflow: hidden"
                        >
                            {{ row.item.role }}
                        </h3>
                    </template>
                </myswiper>
            </div>
        </div>

        <!-- 剧照 -->
        <div class="photo">
            <div class="photoBox">
                <div class="photoTitle">
                    <h1>剧照</h1>
                    <span @click="goPhotos('/photo')">
                        全部({{ filmInfo.photos.length }})
                        <i class="iconfont icon-arrow-right"></i>
                    </span>
                </div>
                <myswiper
                    :filmInfo="filmInfo.photos"
                    :key="filmInfo.filmId"
                    :slide="2"
                    :spaceBetween="10"
                >
                    <template #photo="row">
                        <template v-for="(item, index) in row">
                            <img
                                class="pic"
                                v-lazy="item"
                                :key="index"
                                alt=""
                                style="width:150px;height:100px;"
                            />
                        </template>
                    </template>
                </myswiper>
            </div>
        </div>
    </div>
</template>

<script>
import myswiper from "../../../../components/films/myswiper.vue"
import _ from "lodash"
export default {
    components: {
        myswiper,
    },
    data() {
        return {
            // 出现电影标题
            showNameTop: false,
            // 电影描述是否全部显示
            active: true,
            // 需要的演员信息
            // filmInfo: {},
        }
    },

    computed: {
        filmInfo() {
            return this.$store.getters.filmInfo
        },
    },
    mounted() {
        // vuex获取数据
        this.$store.dispatch("films/getDetail", this.$route.params.id)
        // 滚动监听 --- scroll --- onScroll
        window.addEventListener("scroll", _.throttle(this.onScroll, 300))
    },

    methods: {
        // 滚动监听 --- 出现电影标题
        onScroll() {
            let top = document.documentElement.scrollTop
            if (top > 100) {
                this.showNameTop = true
            } else {
                this.showNameTop = false
            }
        },
        // 下拉加载电影描述全部内容
        pullAll() {
            if (this.active) {
                this.active = false
                this.$refs.refJiantou.style.transform = "rotateX(180deg)"
            } else {
                this.active = true
                this.$refs.refJiantou.style.transform = "rotateX(360deg)"
            }
        },
        // 点击退出电影详情
        goRet(url) {
            this.$router.push(url)
        },
        // 点击进入剧照页面
        goPhotos(url) {
            this.$router.push(url)
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    position: relative;
    .imgBox {
        width: 100%;
        height: 60vw;
        overflow: hidden;
        display: flex;
        align-items: center;
        img {
            width: 100%;
        }
    }
    .textBox {
        box-sizing: border-box;
        padding: 15px;
        b {
            font-size: 16px;
            span {
                color: #fff;
                font-size: 10px;
                padding: 0 5px;
                margin-left: 5px;
                background: #d2d6dc;
                border-radius: 2px;
            }
        }
        p {
            color: #797d82;
            margin-top: 10px;
            font-size: 14px;
        }
        p:nth-of-type(3) {
            margin-bottom: 16px;
        }

        .descript {
            width: 100%;
            line-height: 20px;
            min-height: 38px;
            font-size: 13px;

            color: #797d82;
        }
        .active {
            height: 38px;
            overflow: hidden;
        }
        .jiantou {
            width: 100%;
            color: #d2d6dc;
            text-align: center;
            margin-top: 8px;
        }
    }

    .btn_return {
        width: 30px;
        height: 30px;
        position: fixed;
        top: 7px;
        left: 7px;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
        background: #fff;
        opacity: 0.6;
        z-index: 999;
    }

    .nameNone {
        display: none;
    }
    .nameTop {
        display: block;
        width: 100vw;
        font-size: 18px;
        line-height: 44px;
        text-align: center;
        height: 44px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
    }

    .actor {
        width: 100%;
        background: #f8f6f6;
        padding: 10px 0;
        .actorBox {
            background: #fff;
            .actorTitle {
                padding: 15px;
                box-sizing: border-box;
                font-size: 16px;
            }
        }
    }
    .photo {
        width: 100%;
        background: #f8f6f6;
        padding: 0 0 10px 0;
        margin-bottom: 50px;
        .photoBox {
            background: #fff;
            .photoTitle {
                padding: 15px;
                box-sizing: border-box;
                font-size: 16px;
                display: flex;
                justify-content: space-between;
                span {
                    font-size: 12px;
                    color: #797d82;
                }
            }
            .swiper-container {
                .swiper-container .swiper-slide {
                    // height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    // .pic {
                    // width: 150px;
                    // height: 100px;
                    // }
                }
            }
        }
    }
}
</style>
