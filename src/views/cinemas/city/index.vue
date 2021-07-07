<template>
    <div id="box">
        <div class="goBack iconfont">&#xe608;</div>

        <ul>
            <li>
                <p class="title">最近访问城市</p>
                <div class="lcity">
                    <template v-for="item in reCity">
                        <p
                            class="city"
                            :key="item.nm"
                            @click="tab({ path: '/cinemas', query: { nm: item.nm, id: item.id } })"
                        >
                            {{ item.nm }}
                        </p>
                    </template>
                </div>
            </li>
            <li>
                <p class="title">热门城市</p>
                <div class="lcity">
                    <template v-for="item in hotCity">
                        <p
                            class="city"
                            :key="item.py"
                            @click="tab({ path: '/cinemas', query: { nm: item.nm, id: item.id } })"
                        >
                            {{ item.nm }}
                        </p>
                    </template>
                </div>
            </li>
        </ul>

        <van-index-bar v-show="bool" :index-list="indexList">
            <van-index-anchor v-for="(item, name) in cities" :key="name">
                <p class="title">{{ name }}</p>
                <van-cell
                    :title="value.nm"
                    v-for="(value, name) in item"
                    :key="name"
                    @click="tab({ path: '/cinemas', query: { nm: value.nm, id: value.id } })"
                />
            </van-index-anchor>
        </van-index-bar>
    </div>
</template>

<script>
import { getCities } from "@/api/cinemas"
import hotCity from "@/data/hotData"
export default {
    data() {
        return {
            bool: true,
            cities: {},
            indexList: [],
            hotCity: hotCity,

            arr: [],
        }
    },

    computed: {
        reCity() {
            return this.$store.getters.reCity
        },
    },
    created() {
        this.$root.$children[0].isShow = false
    },

    async mounted() {
        let cities = await getCities()
        this.cities = cities
        this.indexList = Object.keys(cities)
    },

    beforeDestroy() {
        this.$root.$children[0].isShow = true
    },

    methods: {
        tab(url) {
            this.$store.commit("cinemas/reCity", url.query)
            this.$router.push(url)
        },
    },
}
</script>

<style lang="scss" scoped>
#box {
    background: #ebebeb;
}

.goBack {
    z-index: 9999;
    position: fixed;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    background: #e2e2e2;
    color: #ffff;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
}
ul {
    li {
        font-size: 14px;
        .title {
            box-sizing: border-box;
            width: 100%;
            height: 30px;
            padding-left: 15px;
            line-height: 30px;
        }

        .lcity {
            background-color: #f5f5f5;
            padding-bottom: 8px;
            padding-right: 30px;
            overflow: hidden;
            .city {
                float: left;
                background: #fff;
                width: 29%;
                height: 33px;
                margin-top: 15px;
                margin-left: 4%;
                padding: 0 4px;
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                line-height: 33px;
                text-align: center;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
