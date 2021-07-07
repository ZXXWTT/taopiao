<template>
    <div>
        <template v-for="value in getBrand">
            <p class="subItem" :key="value.id" @click="getData(value.id)">
                <span>{{ value.name }}</span> <span>{{ value.count }}</span>
            </p>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },

    computed: {
        getBrand() {
            return this.$store.getters.getBrand.brand.subItems
        },
    },

    methods: {
        getData(bid) {
            let cityId = this.$parent.$parent.$parent.$parent.cityId
    
            this.$store.dispatch("cinemas/getBrandText", { cityId, bid })
            this.$parent.$parent.showWrapper = false
            this.$parent.$parent.showPopup = false
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
