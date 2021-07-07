<template>
    <div>
        <van-tabs v-model="activeName">
            <van-tab title="商区" to="/cinemas/district"></van-tab>
            <van-tab title="地铁站" to="/cinemas/subway"></van-tab>
        </van-tabs>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "a",
            active: 0,
            cityId: 1,
        }
    },

    created() {
        this.cityId = this.$route.query.id
    },
    methods: {
        goDistrict(url) {
            console.log(url)
        },
        goSubway(url) {
            console.log(url)
        },
    },
}
</script>

<style lang="scss" scoped></style>
