<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <!-- <van-loading v-if="this.nowData.length === 0" /> -->
            <myList :data="soonData">
                <template #sale="row">
                    <van-button
                        :class="{ active: !row.item.isPresale }"
                        round
                        type="info"
                        to="/cinemas"
                    >
                        <p style="width:40px;height:18px">预售</p>
                    </van-button>
                </template>
            </myList>
        </van-list>
    </div>
</template>

<script>
import myList from "../../../components/films/myList.vue"
import { getSoonData } from "../../../api/films"
export default {
    components: {
        myList,
    },

    data() {
        return {
            loading: false,
            finished: false,
            // 正在热映数据
            soonData: [],

            // 电影列表分页
            page: 1,
        }
    },
    mounted() {
        // this.onLoad()
    },
    methods: {
        async onLoad() {
            let page = this.page
            let cityId = this.$route.query.cityId
            let ret = await getSoonData(page, cityId)
            this.soonData = [...this.soonData, ...ret.data.films]
            if (ret.data.films.length > 0) {
                this.page++
                this.loading = false
            } else {
                this.finished = true
            }
            //  this.nowData 是数组
            this.soonData.forEach((item) => {
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
.active {
    opacity: 0;
}
.van-button {
    width: 52px;
    height: 30px;
    background: #5622e6;
    border: #5622e6;
}
</style>
