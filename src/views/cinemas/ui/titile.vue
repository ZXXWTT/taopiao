<template>
    <div>
        <van-nav-bar title="淘票票" left-arrow>
            <template #left>
                <div class="iconfont" @click="goCity('/city')">{{ title }} &#xe628;</div>
            </template>
            <template #title>
                <div class="active">淘票票</div>
            </template>
            <template #right>
                <van-icon name="search" size="24" color="black" />
            </template>
        </van-nav-bar>
        <mymenu></mymenu>
    </div>
</template>

<script>
import mymenu from "@/views/cinemas/ui/menu.vue"
export default {
    components: {
        mymenu,
    },
    data() {
        return {
            title: "北京",
        }
    },

    mounted() {
        this.title = this.$route.query.nm === "undefined" ? "北京" : this.$route.query.nm
    },
    methods: {
        goCity(url, id) {
            if (this.$route.path === url) return
            this.$router.push(url)
        },
    },
}
</script>
<style lang="scss" scoped>
.title {
    .active {
        font-size: 26px;
        font-weight: bold;
        font-family: "华文楷体";
        color: rgba(255, 0, 0, 0.8);
    }
}
</style>
