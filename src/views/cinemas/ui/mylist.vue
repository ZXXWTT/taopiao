<template>
    <div v-html="getCinema"></div>
</template>

<script>
export default {
    computed: {
        getCinema() {
            // console.log(this.$store.getters.getCinema)
            return this.$store.getters.getCinema
        },
    },
}
</script>

<style lang="scss">
.item {
    box-sizing: border-box;
    width: 343px;
    margin-left: 15px;
    padding: 13px 15px 13px 0;
}
.title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
    margin: 0 0 3px 0;
    overflow: hidden;
    > span {
        width: 285px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .price-block {
        margin: 0 0 0 5px;
        padding-top: 9px;
        padding-left: 3px;
        color: #f03d37;
        .price {
            font-size: 18px;
        }
        .q {
            font-size: 12px;
        }
    }
}

.location-block {
    width: 100%;
    font-size: 13px;
    color: #666;
    // margin-left: 5px;
    display: flex;
    justify-content: space-between;
    > .flex {
        width: 285px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}

.label-block {
    margin-top: 5px;
    margin-top: 8px;
    height: 20px;
    line-height: 12px;
    display: flex;
    justify-content: start;
    overflow: hidden;
    flex: 1;
    // .allowRefund {
    //     padding: 3px;
    //     color: #589daf;
    //     border: 1px solid #589daf;
    // }
    .snack,
    .allowRefund,
    .hallType,
    .endorse {
        color: #589daf;
        border: 1px solid #589daf;
        margin-right: 10px;
        padding: 3px;
    }
    .vipTag {
        padding: 3px;
        margin-right: 10px;
        color: #cc6724;
        border: 1px solid #cc6724;
    }
}

.discount-block {
    margin-top: 10px;
    color: #999;
    margin-bottom: 4px;

    div {
        display: flex;
        justify-content: start;
        align-items: center;
        .discount-label .normal .card {
            width: 15px;
            height: 14px;
            // position: relative;
            top: 3px;
            margin-right: 10px;
            display: inline-block;
            img {
                width: 14px !important;
                height: 15px !important;
                display: block;
            }
        }
        .discount-label-text {
            margin-left: 10px;
        }
    }
}
</style>
