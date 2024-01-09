<template>
  <el-container class="user-container">
    <!-- 侧边栏 -->
    <el-aside
      :width="asideWidth"
      style="min-height: 100vh; background-color: #001529"
    >
      <div
        style="
          height: 60px;
          background-color: #c1c9d6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <img src="@/assets/logo.png" style="width: 40px; height: 40px" alt="" />

        <span class="logo-title" style="" v-show="!isCollapse"
          >杭电选课助手</span
        >
      </div>

      <el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        router
        :default-active="$router.path"
        style="border: none"
        text-color="rgba(255,255,255,0.65)"
        active-text-color="#fff"
        background-color="#001529"
      >
        <el-menu-item index="/user">
          <el-icon><House /></el-icon>
          <span>系统首页</span>
        </el-menu-item>
        <el-menu-item>
          <el-icon><Star /></el-icon><span>我的收藏</span>
        </el-menu-item>
        <el-menu-item>
          <el-icon><Finished /></el-icon><span>模拟课表</span></el-menu-item
        >
        <el-menu-item>
          <el-icon><Comment /></el-icon><span>我的评论</span></el-menu-item
        >
        <el-sub-menu>
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>信息管理</span>
          </template>
          <el-menu-item>修改头像</el-menu-item>
          <el-menu-item>修改密码</el-menu-item>
          <el-menu-item>修改账号</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <!-- 页面主体区域 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-icon
          class="header-icon"
          style="font-size: 26px"
          @click="handleCollapse"
        >
          <component :is="collapseIcon" />
        </el-icon>
        <!-- <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/user' }"
            >用户管理</el-breadcrumb-item
          >
        </el-breadcrumb> -->

        <div
          style="
            flex: 1;
            width: 0;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          "
        >
          <el-dropdown class="user-dropdown" placement="bottom">
            <div style="display: flex; align-items: center; cursor: default">
              <img
                src="@/assets/logo.png"
                style="width: 40px; height: 40px; padding-right: 5px"
              />
              <span>用户</span>
            </div>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item divided @click="quit"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 右侧内容主体区域 -->
      <el-main>
       
        <el-card class="box-card">
          <div :key="o" class="text item">
            欢迎来到杭电选课助手平台
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>


<script >
export default {
  data() {
    return {
      isCollapse: false,
      asideWidth: "200px",
      collapseIcon: "Fold",
    };
  },
  methods: {
    handleCollapse() {
      {
        this.isCollapse = !this.isCollapse;
        this.asideWidth = this.isCollapse ? "64px" : "200px";
        this.collapseIcon = this.isCollapse ? "Expand" : "Fold";
      }
    },
    quit() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.el-menu--inline .el-menu-item {
  background-color: #000c17 !important;
  padding-left: 49px;
}
.el-menu-item:hover,
.el-sub-menu__title:hover span {
  color: #fff !important;
}
.el-sub-menu__title:hover i {
  color: #fff;
}
.el-menu-item.is-active {
  background-color: #40a9ff;
  border-radius: 5px;
}
.el-menu-item {
  height: 60px;
  line-height: 60px;
}

.el-sub-menu__title {
  height: 60px;
  line-height: 60px;
}
.el-aside {
  transition: width 0.3s;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.25);
}
.el-header {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.25);
  display: flex;
  line-height: 60px;
  align-items: center;
}
.logo-title {
  margin-left: 5px;
  font-size: 20px;
  color: #fff;
  transition: all 0.3s;
}
.header-icon {
  height: 60px;
  align-content: center;
}

.el-tooltip__trigger {
  outline: none;
}
</style>