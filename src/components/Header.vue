<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="header-left" width="180px">
                <router-link to="/home">
                <img src="../assets/logo.svg" alt="logo" />
                </router-link>
            </div>
            <el-popover
            :width="300"
            popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
            >
            <template #reference>
                <el-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
            </template>
            <template #default>
                <div
                class="rich-content"
                style="display: flex; gap: 8px; flex-direction: column"
                >
                <span class="user-name" @click="goToUserProfile">{{ userName }}</span>
                <span @click="goToUserProfile">个人中心</span>
                <span @click="showLogoutConfirm">退出</span>
                </div>
            </template>
            </el-popover>
        </div>
    </div>
</template>

<script setup>
import { ElAvatar } from "element-plus";
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { ElPopover } from "element-plus";

const visible = ref(false);
const userName = ref('用户名'); 

const goToUserProfile = () => {
  router.push({ path: '/user' });
};

const showLogoutConfirm = () => {
  ElMessageBox.confirm('确定退出登录吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    console.log('用户点击了确定');
  }).catch(() => {
    console.log('用户点击了取消');
  });
};

</script>

<style lang="less" scoped>

header {
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 999;
}

.header-wrapper {
    width: 90vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-left img {
  width: 180px; 
  height: 60px; 
  background-size: cover; 
  margin: auto;
}

.header-right {
    display: flex;
    align-items: center;
    padding-right: 10px;
}

.user-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 8px;
}

.user-name {
  font-size: 14px;
}


</style>

