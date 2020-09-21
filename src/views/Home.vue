<template>
    <div>
        <Time :idList="recordList"/>
        <Info v-on:recordHandler="inputList" v-on:refreshHandler="clearList"></Info>
    </div>
</template>

<script>
    import Info from '@/components/Info.vue'
    import Time from '@/components/Viewrecord.vue'
    export default {

        components: {
            Time,
            Info
        },
        data() {
            return {

                recordList: {}

            }
        },
        methods: {
            inputList({key, val}) {
                this.recordList = {
                    ...this.recordList,
                    [key]: val
                }
                // console.log(123+ this.recordList);
            },
            clearList({key, val}) {
                this.recordList = {
                    ...this.recordList,
                    [key]: val
                }
            }
        }
    }
</script>