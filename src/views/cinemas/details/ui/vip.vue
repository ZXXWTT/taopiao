<template>
    <div>
        <div class="vip" @click="toLogin('/login')">
            <div class="left">
                <span class="discount">折扣</span>
                <span class="card">开卡享优惠</span>
            </div>
            <div class="right">
                <span>9.9元起开卡</span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toLogin(url) {
            this.$router.push(url)
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    .vip {
        width: 100%;
        height: 42px;
        background: #fff5ea;
        padding: 0 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            .discount {
                width: 34px;
                height: 15px;
                background: #ff941a;
                padding: 0 5px;
                line-height: 15px;
                border-radius: 2px;
                font-size: 10px;
                text-align: center;
                color: #fff;
                margin: 0 10px 0 0;
            }
            .card {
                color: #fa9600;
                font-size: 12px;
            }
        }
        .right {
            line-height: 42px;
            color: #999;
            font-size: 12px;
            i {
                font-size: 10px;
                margin: 0 0 0 6px;
            }
        }
    }
}
</style>
