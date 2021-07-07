<template>
    <div>
        <ul>
            <li v-for="(item, index) in 7" :key="index">
                <div class="time">
                    <p class="start">15:35</p>
                    <p class="end">16.40散场</p>
                </div>

                <div class="type">
                    <div class="show_type">
                        <span>国语</span>
                        <span>2D</span>
                    </div>
                    <div class="theater">
                        5号4K激光超清厅
                    </div>
                </div>
                <div class="howmuch" @click="goLogin('/login')">
                    <span class="symbol">￥</span>
                    <span class="num">33</span>
                    <span class="discount_card">折扣卡</span>
                    <span class="pay">￥ 30</span>
                </div>
                <div class="sale" @click="goLogin('/login')">
                    <van-button type="default" color="#f03d37" size="mini"
                        >购票</van-button
                    >
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        goLogin(url) {
            this.$router.push(url)
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    ul {
        li {
            width: 100%;
            padding: 15px 10px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            position: relative;
            .time {
                text-align: center;
                .start {
                    font-size: 20px;
                }
                .end {
                    font-size: 12px;
                    color: #999;
                    margin: 10px 0 0 0;
                }
            }
            .type {
                .show_type {
                    font-size: 13px;
                    span:nth-of-type(1) {
                        margin-right: 4px;
                    }
                }
                .theater {
                    font-size: 12px;
                    color: #999;
                    margin: 7px 0 0 0;
                }
            }
            .howmuch {
                width: 130px;
                color: #f03d37;
                .symbol {
                    font-size: 12px;
                }
                .num {
                    font-size: 19px;
                }
                .discount_card {
                    width: 40px;
                    height: 18px;
                    line-height: 18px;
                    text-align: center;
                    font-size: 12px;
                    color: #fff;
                    background: #f90;
                    padding: 0 2px;
                    margin-left: 8px;
                }
                .pay {
                    font-size: 12px;
                    color: #fff;
                    background: rgb(143, 160, 252);
                    padding: 0 2px;
                }
            }
            .sale {
                .van-button {
                    width: 44px;
                    height: 27px;
                    border-radius: 4px;
                }
            }
        }
        li:after {
            content: "";
            width: 100%;
            height: 1px;
            background: #d8d8d8;
            transform: scaleY(0.5);
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
}
</style>
