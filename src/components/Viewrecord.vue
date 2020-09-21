<template>
    <div class="title">
        <div class="record" v-for="(item, key) in idList" :key="key">
            <label class="week">{{item.today}}</label>
            <label class="date">{{item.date}}</label>
            <div class="workTime">
                <label class="onWork">上班{{item.onWork}}</label>
                <label class="offWork">下班{{item.offWork}}</label>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Time",
        props: ['idList'],
        // data() {
        //     return {
        //
        //     }
        //
        // }

    }
</script>
<style>
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
    }

    .record {
        display: flex;
        flex-direction: column;
        clip-path: polygon(85% 0, 100% 50%, 85% 100%, 0 100%, 0 0);
        max-width: 300px;
        border-radius: 30px;
        &: hover;
        background: #f3f2f3;
    }

    .record > date {
        padding-right: 20px;
        margin: 20px;
        border-right: 1px solid #E6E6E6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .week{
        font-size:14px;
        color: #787C84;
    }
    .date{
        font-size:32px;
        font-weight: bold;
    }
    .workTime{
        padding: 10px 0;
        color: #787C84;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        font-family: 微軟正黑體;
    }

</style>

