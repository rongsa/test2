<template>
    <div class="animated fadeIn">
        <el-card class="box-card">
            <p v-for="(nav, index) in navs" :key="index">
                <el-button type="info" @click="change(index)">
                    {{ '切换-' + nav.label }}
                </el-button>
            </p>
        </el-card>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
                v-for="(tab, index) in tabs"
                :key="index"
                :label="tab.label"
                :name="tab.name"
            >
                {{ tab.label }}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'Windows',
    data() {
        return {
            activeName: 'first',
            tabs: [],
            navs: [
                {
                    label: '用户管理',
                    name: 'first'
                },
                {
                    label: '配置管理',
                    name: 'second'
                },
                {
                    label: '角色管理',
                    name: 'third'
                },
                {
                    label: '定时任务补偿',
                    name: 'fourth'
                }
            ]
        };
    },
    computed: {},
    mounted() {
        console.log('hello');
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        change(index) {
            var currData = this.navs[index];
            for (let x = 0; x < this.tabs.length; x++) {
                const tab = this.tabs[x];
                if (tab.name == currData.name) {
                    this.activeName = tab.name;
                    return;
                } else {
                    console.log('重复了～');
                }
            }
            this.tabs.push(currData);
            this.activeName = this.tabs[this.tabs.length - 1].name;
        }
    }
};
</script>
<style type="text/css">
.card-block-welcome img {
    width: 100%;
    border: 1rem solid #fff;
    padding: 0 !important;
}
.welcome_bg {
    background-color: #fff;
}
</style>
