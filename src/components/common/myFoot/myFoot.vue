<template>
    <div class="nav">
        <ul>
            <router-link to="/films" active-class="active" tag="li">
                <i class="iconfont icon-geren1"></i>
                <p>电影</p>
            </router-link>
<<<<<<< HEAD
            <router-link to="/cinemas" active-class="active" tag="li">
=======
            <router-link to="/cinemas?nm=北京&id=1" active-class="active" tag="li">
>>>>>>> db11c0b9bb861b9f48ca87dcf07460772e5a73ce
                <i class="iconfont icon-leimupinleifenleileibie"></i>
                <p>影院</p>
            </router-link>
            <router-link to="/center" active-class="active" tag="li">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
    font-size: 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    text-align: center;
    background: #fff;
    color: #7a7e83;
    width: 100%;
    z-index: 999;
    ul {
<<<<<<< HEAD
        width: 100%;
=======
>>>>>>> db11c0b9bb861b9f48ca87dcf07460772e5a73ce
        display: flex;
        align-items: center;
        // padding: 0;
        li {
<<<<<<< HEAD
            width: 100%;
=======
>>>>>>> db11c0b9bb861b9f48ca87dcf07460772e5a73ce
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 3px;
            flex: 1;
            height: 43px;

            &.active {
                color: #fe5100;
            }
            p {
                margin-top: 6px;
            }
            i {
                font-size: 24px;
            }
        }
    }
}
</style>
