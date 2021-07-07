<template>
    <div>
        <div class="exit">
            <i
                class="iconfont icon-jiantou2"
                style="font-size:24px"
                @click="Exit('/details/')"
            ></i>
        </div>
        <div class="total">
            <b>
                剧照（ <span>{{ this.filmInfo.photos.length }}</span> ）
            </b>
        </div>
        <ul>
            <li v-for="item in filmInfo.photos" :key="item">
                <img :src="item" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filmInfo: [],
        }
    },

    mounted() {
        this.filmInfo = this.$store.getters.filmInfo
    },
    methods: {
        // 点击退出剧照 --- 返回电影详情
        Exit(url) {
            this.$router.push(url + this.filmInfo.filmId)
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    .exit {
        width: 30px;
        height: 30px;
        position: fixed;
        top: 7px;
        left: 7px;
        text-align: center;
        line-height: 30px;
        z-index: 999;
    }
    .total {
        width: 100vw;
        font-size: 18px;
        line-height: 44px;
        text-align: center;
        height: 44px;
        position: fixed;
        top: 0;
        left: 0;
    }
    ul {
        position: fixed;
        top: 44px;
        width: 100vw;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
            width: 123px;
            height: 123px;
            margin-right: 3px;
            overflow: hidden;
            align-items: center;
            img {
                width: 123px;
                height: 123px;
            }
        }
        li:nth-of-type(3) {
            margin: 0;
        }
    }
}
</style>
