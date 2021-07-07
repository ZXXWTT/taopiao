<template>
    <div>
        <!-- 跳转到影院详情页面时，要将底部 nav 隐藏 -->
        <div class="showed">
            <img
                src="https://obj.pipi.cn/festatic/fe-trade/public/img/today-no-show.3f026db3.png"
                alt=""
            />
            <p>今日场次已放映完</p>
            <div class="see">点击查看明日场次</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
    width: 100%;
    height: 230px;
    background: #f0f0f0;
    .showed {
        padding: 55px 0;
        height: calc(100% - 110px);
        text-align: center;
        img {
            width: 77.5px;
            height: 71px;
        }
        p {
            margin: 12px 0 0 0;
            font-size: 16px;
            color: #acacac;
        }
        .see {
            margin: 20px auto;
            border-radius: 5px;
            width: 160px;
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            color: #f03d37;
            border: 1px solid rgba(0, 0, 0, 0.15);
            background: #fff;
            text-align: center;
        }
    }
}
</style>
