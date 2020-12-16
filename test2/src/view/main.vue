<template>
    <div>
        <el-container
            style="margin-top: 10px; height: 590px; border: 1px solid #eee"
        >
            <el-header>
                <font
                    style="
                        text-align: left;
                        font-size: 25px;
                        line-height: 60px;
                        margin-left: 20px;
                        font-family: SimSun;
                        font-weight: bold;
                    "
                >
                    产品运维管理平台
                </font>
                <div
                    style="
                        text-align: right;
                        margin-top: -60px;
                        font-size: 16px;
                    "
                >
                    <font>用户xxx 欢迎您！</font>
                    <el-button style="margin-right: 10px" @click="logout()">
                        注销
                    </el-button>
                </div>
            </el-header>

            <el-container>
                <el-aside width="200px" style="background-color: #545c64">
                    <el-menu
                        :default-openeds="['']"
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        border-radius="4px"
                        active-text-color="#ffd04b"
                        @open="handleOpen"
                        @close="handleClose"
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                导航一
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1" @click="addTab1()">
                                    选项1
                                </el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-2">
                                <template slot="title">选项2</template>
                                <el-menu-item index="1-2-1" @click="addTab2()">
                                    选项2-1
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-message"></i>
                                用户信息
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1" @click="addTab3()">
                                    基本流程
                                </el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="2-2">
                                <template slot="title">用户信息</template>
                                <el-menu-item index="2-2-1">
                                    基本信息
                                </el-menu-item>
                                <el-menu-item index="2-2-2">
                                    权限管理
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                导航三
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="3-2">
                                <template slot="title">选项2</template>
                                <el-menu-item index="3-2-1">
                                    选项2-1
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main>
                    <el-tabs
                        v-model="editableTabsValue"
                        type="card"
                        closable
                        class="el-tabs"
                        @tab-remove="removeTab"
                        @tab-click="chooseTab"
                    >
                        <el-tab-pane
                            v-for="item in editableTabs"
                            :key="item.name"
                            :label="item.title"
                            :name="item.name"
                        >
                            {{ item.content }}
                        </el-tab-pane>
                    </el-tabs>
                    <keep-alive :include="includeList">
                        <router-view />
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            tabIndex: 1,
            editableTabsValue: '主页面',
            editableTabs: [
                {
                    title: '主页面',
                    name: '主页面',
                    content: '主页面内容'
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        addTab1() {
            var hasSame = this.editableTabs.filter(
                (item1) => item1.title == '选项一'
            );
            if (!hasSame.length) {
                let newTableTitle = '选项一';
                let newTableName = 'first';
                this.editableTabs.push({
                    title: newTableTitle,
                    name: newTableName,
                    content: '选项一的内容'
                });
                this.editableTabsValue = newTableName;
            }
            this.tabIndex++;
        },
        addTab2() {
            var hasSame = this.editableTabs.filter(
                (item1) => item1.title == '选项2-1'
            );
            if (!hasSame.length) {
                let newTableTitle = '选项2-1';
                let newTableName = 'second';
                this.editableTabs.push({
                    title: newTableTitle,
                    name: newTableName,
                    content: '选项2-1的内容'
                });
                this.editableTabsValue = newTableName;
            }
            this.tabIndex++;
        },
        addTab3() {
            var hasSame = this.editableTabs.filter(
                (item1) => item1.title == '基本流程'
            );
            if (!hasSame.length) {
                let newTableTitle = '基本流程';
                let newTableName = 'third';
                this.editableTabs.push({
                    title: newTableTitle,
                    name: newTableName,
                    content: '基本流程的内容'
                });
                this.editableTabsValue = newTableName;
            }
            this.tabIndex++;
        },
        removeTab(targetName) {
            let tabs = this.editableTabs;
            tabs.forEach((tab, index) => {
                if (tab.name == targetName) {
                    this.editableTabsValue = tabs[index - 1].name;
                    tabs.splice(index, 1);
                }
            });
        },
        logout() {
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.el-header {
    background-color: #eef1f6;
    color: #333;
    line-height: 80px;
    height: 75px;
}

.el-aside {
    color: #333;
}
.el-main {
    margin-top: -20px;
    margin-left: -20px;
}
</style>
