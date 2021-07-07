<template>
    <div id="app">
        <myfooter />

        <router-view />
    </div>
</template>

<script>
import myfooter from "./components/common/myFoot/myFoot.vue"
export default {
    components: {
        myfooter,
    },
}
</script>

<style lang="scss"></style>
