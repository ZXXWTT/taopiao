<template>
    <div id="app">
        <myfooter />
        <myfooter v-show="isShow" />

        <router-view />
    </div>
</template>

<script>
import myfooter from "./components/common/myFoot/myFoot.vue"
export default {
    components: {
        myfooter,
    },

    data() {
        return {
            isShow: true,
        }
    },
}
</script>

<style lang="scss"></style>
