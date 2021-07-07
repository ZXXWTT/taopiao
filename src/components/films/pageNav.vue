<template>
    <div :class="{ navFixed: fixed, navTop: true }">
        <div class="logo">
            <img
                src="http://gw.alicdn.com/tfs/TB1ielmpoT1gK0jSZFrXXcNCXXa-128-128.ico"
                alt=""
                style="width:30px"
            />
            <span @click="goCity('/city')">
                {{ cityName }}
                <i
                    class="iconfont icon-below-s"
                    style="font-size:12px;margin-left:4px"
                >
                </i>
            </span>
        </div>
        <div class="tab">
            <!-- tab标签页 --- nowplaying&comingsoon -->
            <van-tabs v-model="activeName" title-active-color="red">
                <van-tab
                    title="正在热映"
                    title-style="font-size: 18px;font-weight:bolder"
                    to="/films/nowPlaying"
                    name="a"
                ></van-tab>
                <van-tab
                    title="即将上映"
                    title-style="font-size: 18px;font-weight:bolder"
                    to="/films/comingSoon"
                    name="b"
                ></van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import _ from "lodash"
export default {
    data() {
        return {
            // 上卷高度
            scrollHeight: 100,
            // 固定
            fixed: false,
            // van-tabs 路由
            activeName: "a",
            cityName: "北京",
        }
    },
    methods: {
        //监听窗口滚动
        getScroll() {
            let scrollTop = document.documentElement.scrollTop
            if (scrollTop > this.scrollHeight) {
                this.fixed = true
            } else {
                this.fixed = false
            }
        },
        goCity(url) {
            this.$router.push(url)
        },
    },

    mounted() {
        this.cityName =
            this.$route.query.name == undefined
                ? "北京"
                : this.$route.query.name

        // 监听窗口滚动 --- 节流
        window.addEventListener("scroll", _.throttle(this.getScroll, 500))
    },

    created() {
        // 路由回退问题
        if (this.$route.path == "/films/comingSoon") {
            this.activeName = "b"
        } else {
            this.activeName = "a"
        }
    },
}
</script>

<style lang="scss" scoped>
.navTop {
    background: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    .logo {
        width: 157px;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        img {
            position: absolute;
            top: 10px;
            left: 10px;
        }
        span {
            padding-left: 40px;
            font-size: 20px;
            font-weight: bolder;
            margin-left: 10px;
        }
    }

    .tab {
        width: 240px;
        margin: 0 10px 0 0;
    }
}

.navFixed {
    position: fixed;
    top: 0px;
    z-index: 9999;
}
</style>
