<template>
    <body>

    <div class="container">

        <div class="checkin-control">
            <div class="checkin-clock">
                <p>{{time}}</p>
            </div>
            <div class="checkin-input">
                <label class="checkin-label">
                    <div class="title">員工編號:</div>
                    <input @keydown.enter="searchHandler" v-model="searchText" class="content" placeholder="請輸入員工編號">
                </label>
                <label class="checkin-label">
                    <div class="title">員工名稱:</div>
                    <div class="content">{{findEmp.name}}</div>
                </label>
                <label class="checkin-label">
                    <div class="title">職稱:</div>
                    <div class="content">{{findEmp.title}}</div>
                </label>
            </div>
            <div class="checkin-footer">
                <button @click="recordHandler">打卡</button>
                <button @click="refreshHandler">重置</button>
            </div>
        </div>
    </div>
    </body>
</template>
<script>
    export default {
        name: 'Info',
        data() {
            return {
                searchText: "",
                empList: [{
                    id: '1',
                    name: 'qqq',
                    title: 'www',
                    today: 'Mon',
                    date: '10',
                    onWork: null,
                    offWork: null
                },
                    {
                        id: '2',
                        name: 'eee',
                        title: 'rrrr',
                        today: 'Mon',
                        date: '10',
                        onWork: null,
                        offWork: null
                    },
                    {
                        id: '3',
                        name: 'yyy',
                        title: 'jjjj',
                        today: 'Mon',
                        date: '10',
                        onWork: null,
                        offWork: null
                    }
                ],
                time: '',
                timer: null,
                resultKeyword: '1'
            }
        },
        computed: {
            findEmp() {
                return this.empList.find(item => {
                    return this.resultKeyword === item.id
                }) || {}
            }
        },
        mounted() {
            this.updateTime()
            this.timer = setInterval(() => {
                // console.log(123)
                this.updateTime()
            }, 1000)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        methods: {
            recordHandler() {
                this.searchHandler()
                let id = this.findEmp.id
                let idList = {}

                    this.empList.some(item => {
                    if (item.id === id && item.onWork === null) {
                        // console.log(item.onWork)
                        idList = item
                        item.onWork = this.time
                        return true

                    } else if (item.id === id && item.offWork === null) {
                        idList = item
                        item.offWork = this.time

                        return true

                    }
                    return false
                })


                this.$emit('recordHandler', {key: idList.id, val: idList})
            },
            updateTime() {
                let date = new Date();
                this.time = date.toTimeString().substr(0, 8)
            },
            searchHandler() {
                this.resultKeyword = this.searchText
            },
            refreshHandler(){
                let c = this.findEmp.id
                let cList = {}

                this.empList.find(clear=>{
                    if(clear.id === c && clear.onWork){
                        cList = clear
                        clear.onWork = null

                    }else if(clear.id === c && clear.offWork){
                        // clear.onWork = null
                        cList = clear
                        clear.offWork = null

                        this.$emit('refreshHandler',{key: cList.id, val: cList})
                    }

                    })


            }
        }
    }
</script>
<style>
    .checkin-control {
        padding: 0 30px;
        padding-top: 50px;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 400px;
        background: #FCFCFC;
    }

    .checkin-clock {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-bottom: 50px;
        border-bottom: 1px solid #e6e6e6;
    }

    .checkin-input label .content {
        font-size: 16px;
        margin-top: 10px;
        margin-left: 20px;
    }

    .checkin-footer {
        border-top: 1px solid #E5E5E5;
        padding-top: 40px;
        display: flex;
        width: 360px;
        position: absolute;
        bottom: 50px;
    }

    .checkin-footer > button {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        flex: 1;
        height: 50px;
        margin: 10px;
        font-size: 18px;
        letter-spacing: 3px;
        border-radius: 12px;
        cursor: pointer;
    }
</style>