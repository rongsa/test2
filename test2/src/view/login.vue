<template>
    <div class="login-background">
        <el-form
            ref="form"
            :model="form"
            :rules="rules"
            label-width="80px"
            class="login-box"
        >
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item class="login-button">
                <el-button type="primary" @click="submitForm('form')">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    },
                    {
                        min: 2,
                        max: 3,
                        message: '长度在 2 到 3 个字符',
                        trigger: 'blur'
                    }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        min: 2,
                        max: 3,
                        message: '长度在 2 到 3 个字符',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('登录成功!!');
                    this.$router.push('/main');
                } else {
                    alert('登录错误!!');
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.login-background {
    background-repeat: no-repeat;
    background-size: 50% 100%;
    text-align: center;
}
.login-box {
    width: 350px;
    margin: 150px 700px;
    border: 1px solid #dcdfe6;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 30px #dcdfe6;
}

.login-title {
    text-align: center;
}

.login-button {
    margin-left: -80px;
}
</style>
