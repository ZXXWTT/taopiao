<template>
    <van-dropdown-menu>
        <van-dropdown-item showPopup="showPopup" showWrapper="showWrapper">
            <template #title>{{ title }}</template>

            <template #default>
                <downmenu></downmenu>
            </template>

            <router-view></router-view>
        </van-dropdown-item>
        <van-dropdown-item showPopup="showPopup" showWrapper="showWrapper">
            <template #title>品牌</template>
            <template #default>
                <brand></brand>
            </template>
            <router-view></router-view>
        </van-dropdown-item>
        <van-dropdown-item showPopup="showPopup" showWrapper="showWrapper">
            <template #title>特色</template>
            <template #default>
                <feature></feature>
            </template>
            <router-view></router-view>
        </van-dropdown-item>
    </van-dropdown-menu>
</template>

<script>
import downmenu from "./downmenu.vue"
import brand from "./brand.vue"
import feature from "./feature.vue"
export default {
    components: {
        feature,
        downmenu,
        brand,
    },
    data() {
        return {
            title: "北京",
            showPopup: false,
            showWrapper: false,
            cityId: "1",
        }
    },

    mounted() {
        // let id = this.$route.query.id
        this.title = this.$route.query.nm
        this.cityId = this.$route.query.id

        // this.$store.dispatch("cinemas/getBrand", id)
    },
}
</script>

<style></style>
