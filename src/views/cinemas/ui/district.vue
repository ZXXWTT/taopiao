<template>
    <div>
        <van-tree-select
            height="55vw"
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="active"
        >
            <template #content>
                <template v-for="(item, index) in subItems">
                    <template v-for="value in item.name">
                        <p
                            :class="{ subItem: true, subColor: show }"
                            :key="value.name"
                            v-if="active === index"
                            @click="getData(item.id, value.id)"
                        >
                            <span>{{ value.name }}</span> <span>{{ value.count }}</span>
                        </p>
                    </template>
                </template>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            activeName: "a",
            active: 0,
            activeId: 1,
            items: [],
            subItems: {},
        }
    },

    mounted() {
        // console.log(this.$store.getters.getBrand)
        this.mainMenu()
    },
    methods: {
        mainMenu() {
            let arrA = []
            let arrS = []
            let arr = this.$store.getters.getBrand.district.subItems
            arr.forEach((item) => {
                let subObj = {}
                subObj["name"] = item.subItems
                subObj["id"] = item.id
                let obj = {}
                let str = item.name + `(${item.count})`
                obj["text"] = str
                arrS.push(obj)
                arrA.push(subObj)
            })
            this.items = arrS
            this.subItems = arrA
            console.log(arrA)
        },

        getData(sid, aid) {
            let cityId = this.$parent.$parent.$children[0].cityId
            this.$store.dispatch("cinemas/getAreas", { cityId, sid, aid })
            this.$parent.$parent.$parent.showPopup = false
            this.$parent.$parent.$parent.showWrapper = false
        },
    },
}
</script>

<style lang="scss" scoped>
.subItem {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font: 28px;
    box-sizing: border-box;
    padding: 0 30px 0 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(209, 207, 207);
}

.subColor {
    color: red;
}
</style>
