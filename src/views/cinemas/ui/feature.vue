<template>
    <div id="box">
        <div class="serve">
            <h3>特色服务</h3>
            <ul>
                <li
                    v-for="(item, index) in serve"
                    :key="item.id"
                    :class="num == index ? 'active' : ''"
                    @click="getServeId(item.id, index)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>

        <div class="content">
            <h3>特殊厅</h3>
            <ul>
                <ul>
                    <li
                        v-for="(item, index) in hallType"
                        :key="item.id"
                        @click="getHallId(item.id, index)"
                        :class="count == index ? 'active' : ''"
                    >
                        {{ item.name }}
                    </li>
                </ul>
            </ul>
        </div>

        <div class="foot">
            <van-button type="default" @click="toRest()">重置</van-button>
            <van-button type="default" @click="getData(sId, hId)">确定</van-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            num: 0,
            sId: -1,
            hId: -1,
        }
    },
    computed: {
        serve() {
            return this.$store.getters.getBrand.service.subItems
        },

        hallType() {
            return this.$store.getters.getBrand.hallType.subItems
        },
    },
    mounted() {},

    methods: {
        getServeId(sId, index) {
            this.sId = sId
            this.num = index
        },
        getHallId(hId, index) {
            this.hId = hId
            this.count = index
        },
        getData(sId, hId) {
            let cityId = this.$parent.$parent.$parent.$parent.cityId
            console.log(cityId, sId, hId)
            this.$store.dispatch("cinemas/getFeature", { cityId, sId, hId })
            this.$parent.$parent.showWrapper = false
            this.$parent.$parent.showPopup = false
        },
        toRest() {
            this.num = 0
            this.count = 0
            this.sId = -1
            this.hId = -1
        },
    },
}
</script>

<style lang="scss" scoped>
#box {
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    font-size: 9px;
    color: #777;
    .serve,
    .content {
        h3 {
            font-size: 15px;
        }
        ul {
            overflow: hidden;
            width: 100%;
            margin: 9px 0;
            .active {
                color: red;
                border: 1px solid rgb(238, 15, 15);
            }
            li {
                height: 38px;
                width: 70px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                border: 1px solid #777;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                float: left;
                margin-right: 9px;
                margin-bottom: 10px;
            }
        }
    }

    .foot {
        display: flex;
        justify-content: space-between;
    }
}
</style>
