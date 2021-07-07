<template>
<<<<<<< HEAD
    <van-skeleton title avatar :row="3" :loading="loading">
        <div>
            <pageNav></pageNav>
            <router-view></router-view>
        </div>
    </van-skeleton>
</template>

<script>
import pageNav from "../../components/films/pageNav.vue"
export default {
    components: {
        pageNav,
    },
    data() {
        return {
            // 骨架屏数据
            loading: true,
        }
    },

    mounted() {
        // 骨架屏
        setTimeout(() => {
            this.loading = false
        }, 1000)

        // 监听从哪来 --- 正在热映 / 即将上映 --- 同步commit
        this.$store.commit("films/toCity", this.$route.path)
    },
}
=======
    <div>我是电影页面</div>
</template>

<script>
export default {}
>>>>>>> db11c0b9bb861b9f48ca87dcf07460772e5a73ce
</script>
<style lang="scss" scoped></style>
