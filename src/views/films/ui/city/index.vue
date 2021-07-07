<template>
    <div>
        <!-- 城市页面头部导航 -->
        <div
            class="cityNav"
            style="
            position: sticky;
            top: 0;background:#fff;z-index:9999"
        >
            <div class="current">
                选择城市
            </div>
            <div class="cancel">
                <van-icon name="cross" @click="exitCity('/films')" />
            </div>

            <div class="searchCity">
                <form action="/">
                    <van-search
                        v-model="value"
                        show-action
                        placeholder="请输入搜索关键词"
                        background="#f4f4f4"
                        @focus="showCancel"
                        @input="showSearchResult"
                    >
                        <template #action>
                            <div
                                :class="active"
                                v-show="!active"
                                @click="hiddenCancel"
                            >
                                取消
                            </div>
                        </template>
                    </van-search>
                </form>
            </div>
        </div>
        <!-- 热门城市 -->
        <div class="hotCity" style="margin:0 auto;padding:15px" v-show="show">
            <p style="margin-bottom:10px;color:#797d82">热门城市</p>
            <template v-for="value in city">
                <van-button
                    type="default"
                    v-for="(item, index) in value"
                    :key="item.pinyin + index"
                    v-show="item.isHot"
                    style="width:100px;height:30px;margin:7.5px;background:#f4f4f4;border-radius:3px"
                    @click="
                        changeCity(toCity, {
                            cityId: item.cityId,
                            name: item.name,
                        })
                    "
                    >{{ item.name }}</van-button
                >
            </template>
        </div>
        <!-- 城市列表 -->
        <div class="indexCity" v-show="show">
            <van-index-bar :index-list="indexList">
                <template v-for="(item, key) in city">
                    <van-index-anchor
                        :index="key"
                        :key="key"
                    ></van-index-anchor>
                    <template v-for="value in item">
                        <van-cell
                            :title="value.name"
                            :key="value.cityId"
                            @click="
                                changeCity(toCity, {
                                    cityId: value.cityId,
                                    name: value.name,
                                })
                            "
                        />
                    </template>
                </template>
            </van-index-bar>
        </div>
        <!-- 模糊查询匹配到结果 -->
        <div class="return" v-show="!show">
            <!-- 有结果 -->
            <div class="searchResult">
                <van-list>
                    <van-cell
                        v-for="item in searchResult"
                        :key="item.cityId"
                        :title="item.name"
                    />
                </van-list>
            </div>
            <!-- 无结果 -->
            <!-- <div class="noResult">
                没有找到匹配的城市
            </div> -->
        </div>
    </div>
</template>

<script>
import { getCity, fuzzyCity } from "@/api/films"
export default {
    data() {
        return {
            // van-index 数据 --- 索引和城市
            indexList: [],
            city: [],
            // 是否展示 取消 两字
            active: true,
            // 展示城市列表 or 模糊查询得到的城市列表
            show: true,
            // 模糊查询
            fuzzyCity: [],
            value: "",
            // searchResult列表展示
            loading: false,
            finished: false,
            // result --- yes / no
        }
    },

    computed: {
        // 监听从哪来
        toCity() {
            return this.$store.getters.toCity
        },

        // 模糊查询
        searchResult() {
            if (this.value) {
                let arr = this.fuzzyCity.filter(
                    (item) =>
                        item.name.indexOf(this.value) != -1 ||
                        item.pinyin.indexOf(this.value) != -1
                )
                // if (arr.length == 0) return "没有找到匹配的城市"
                return arr
            }
        },
    },

    async mounted() {
        // 获取城市列表数据
        let city = await getCity()
        this.city = city
        this.indexList = Object.keys(city)
        // 模糊查询
        let ret = await fuzzyCity()
        this.fuzzyCity = ret.data.cities
    },

    methods: {
        // 展示取消
        showCancel() {
            this.active = false
        },
        // 隐藏取消
        hiddenCancel() {
            this.active = true
        },
        // 退出城市列表 进入正在热映页面
        exitCity(url) {
            this.$router.push(url)
        },
        // 根据点击的cityId切换城市
        changeCity(url, data = {}) {
            this.$router.push({ path: url, query: data })
        },
        // input事件 --- 触发则隐藏热门城市和城市列表 展示查询结果页面
        showSearchResult() {
            this.show = false
        },
    },
}
</script>

<style lang="scss" scoped>
.cityNav {
    position: fixed;
    top: 0;
    background: #fff;
    background: rgb(252, 247, 247);
    z-index: 9999;
    position: relative;
    font-size: 18px;
    .cancel {
        width: 44px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .current {
        width: 100%;
        height: 44px;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .van-search__content {
        background: #fff;
    }
    // .current:after {
    //     content: "";
    //     width: 100%;
    //     height: 1px;
    //     background: #797d82;
    //     transform: scaleY(0.5);
    //     position: absolute;
    //     top: 44px;
    // }
}
</style>
