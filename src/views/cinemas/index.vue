<template>
    <div id="box">
        <div :class="{ titile: true, active: show }">
            <mytitle></mytitle>
        </div>
        <div id="main">
            <mylist></mylist>
        </div>
    </div>
</template>

<script>
import mytitle from "@/views/cinemas/ui/titile.vue"
import mymenu from "@/views/cinemas/ui/menu.vue"
import mylist from "@/views/cinemas/ui/mylist.vue"
import _ from "lodash"
export default {
    components: {
        mylist,
        mymenu,
        mytitle,
    },
    data() {
        return {
            reCity: [],
            show: false,
        }
    },
    mounted() {
        this.$store.dispatch("cinemas/getCinema", this.$route.query.id, 20)
        this.$store.dispatch("cinemas/getBrand", this.$route.query.id)

        window.addEventListener("scroll", _.throttle(this.onScroll, 500))
    },
    methods: {
        onScroll() {
            let scrollTop = document.documentElement.scrollTop
            if (scrollTop > 300) {
                this.show = true
            } else {
                this.show = false
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.title {
    position: static;
    width: 100%;
    height: 94px;
}

.active {
    width: 100%;
    position: fixed;
    top: 0;
}
</style>
