<template>
    <div>
        <ul>
            <li v-for="item in data" :key="item.filmId">
                <div class="img">
                    <img v-lazy="item.poster" alt="" />
                </div>

                <div class="text" @click="goDetail(item.filmId)">
                    <h2 class="title">
                        <span class="name"> {{ item.name }}</span
                        ><span class="type">{{ item.filmType.name }}</span>
                    </h2>
                    <slot name="roleA" :item="item"></slot>
                    <p class="role">主演：{{ item.Aname }}</p>
                    <!-- <p>
                        <span>{{ item.nation }}</span> |
                        <span>{{ item.runtime }}分钟</span>
                    </p> -->

                    <p class="minute">
                        <span>{{ item.nation }}</span>
                        <slot name="time" :item="item"></slot>
                        <!-- <span>{{ item.runtime }}分钟</span> -->
                    </p>
                </div>
                <div class="btn">
                    <slot name="sale" :item="item">
                        <van-button round type="info" to="/cinemas">
                            <!-- <template #default>
                            <p style="width:40px;height:18px">购票</p>
                        </template> -->
                        </van-button>
                    </slot>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {}
    },
    mounted() {},
    methods: {
        goDetail(params) {
            // 判断是从哪个页面去详情页面
            if (this.$route.path == "/films/nowPlaying") {
                // 正在热映的详情页面路由
                this.$router.push("/details/" + params)
            } else if (this.$route.path == "/films/comingSoon") {
                // 即将上映的详情页面路由
                this.$router.push("/detail/" + params)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    li {
        position: relative;
        padding: 15px;
        width: calc(100% - 30px);
        // box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .img {
            width: 66px;
            height: 98px;
            margin: 0 10px 0 0;

            img {
                width: 66px;
                height: 98px;
                border-radius: 8px;
            }
        }

        .text {
            height: 98px;
            width: 210px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .title {
                font-size: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;

                .name {
                    max-width: calc(100% - 25px);
                    color: #191a1b;
                    font-size: 16px;
                    height: 22px;
                    line-height: 22px;
                    margin-right: 5px;
                    overflow: hidden;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .type {
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                }
            }

            .role {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }

            .minute {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
        }
        // .btn {
        //     // .van-button {
        //     //     width: 52px;
        //     //     height: 30px;
        //     //     background: #ff3d5c;
        //     //     border: #ff5456;
        //     // }
        // }
    }

    li:after {
        position: absolute;
        bottom: 0;
        content: "";
        background: rgb(219, 216, 216);
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
    }
}
</style>
