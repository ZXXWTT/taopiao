<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <!-- <van-loading v-if="this.nowData.length === 0" /> -->
            <myList :data="nowData">
                <template #roleA="row">
                    <!-- 评分判断方法 1 -->
                    <!-- <p
                        v-show="
                            (show = row.item.grade != undefined ? true : false)
                        "
                    >
                        评分：<i>{{ row.item.grade }}</i>
                    </p>
                    <p
                        v-show="
                            (show = row.item.grade === undefined ? true : false)
                        "
                    >
                        评分：<i>暂无评分</i>
                    </p> -->
                    <!-- 评分判断方法 2 -->
                    <p v-show="row.item.isGrade">
                        评分：<i>{{ row.item.grade }}</i>
                    </p>
                    <p v-show="!row.item.isGrade">评分：<i>暂无评分</i></p>
                </template>
                <template #time="row">
                    <span v-show="row.item.isRun"
                        >{{ " | " + row.item.runtime + "分钟" }}
                    </span>
                </template>
                <template #sale>
                    <van-button round type="info" to="/cinemas">
                        <p style="width:40px;height:18px">购票</p>
                    </van-button>
                </template>
            </myList>
        </van-list>
    </div>
</template>

<script>
import myList from "../../../components/films/myList.vue"
import { getNowData } from "../../../api/films"
export default {
    components: {
        myList,
    },

    data() {
        return {
            loading: false,
            finished: false,
            // 正在热映数据
            nowData: [],
            // 电影列表分页
            page: 1,
            // 展示评分：
            showGrade: true,
        }
    },

    // mounted() {
    //     console.log(this.$route)
    // },
    methods: {
        async onLoad() {
            // 页码
            let page = this.page
            // 城市
            let cityId = this.$route.query.cityId
            // 请求数据
            let ret = await getNowData(page, cityId)
            // 数据覆盖赋值给 nowData
            this.nowData = [...this.nowData, ...ret.data.films]
            if (ret.data.films.length > 0) {
                // 请求到数据 页码累加
                this.page++
                // 请求完毕 滚动加载自动变为true 不再加载 手动改为false让其继续加载
                this.loading = false
            } else {
                // 加载完毕
                this.finished = true
            }
            //  this.nowData 是数组
            this.nowData.forEach((item) => {
                // 加评分判断 --- 方法 2
                if (item.grade === undefined) {
                    item["isGrade"] = false
                } else {
                    item["isGrade"] = true
                }

                // 加电影时长判断方法
                if (item.runtime == 0) {
                    item["isRun"] = false
                } else {
                    item["isRun"] = true
                }

                // 主演名字拼接
                // item 是对象
                let aName = ""
                // item.actor 是数组

                if (item.actors === undefined) {
                    item["Aname"] = "暂无主演"
                    return
                } else {
                    item.actors.forEach((obj) => {
                        // obj 是对象
                        aName += obj.name + " "
                    })
                    // 给 nowData 对象添加新的键名键值
                    item["Aname"] = aName
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.van-button {
    width: 52px;
    height: 30px;
    background: #ff3d5c;
    border: #ff5456;
}
</style>
