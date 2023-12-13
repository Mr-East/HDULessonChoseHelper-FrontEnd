<template>
  <el-container class="home-container">
  <!-- 头部区域 -->
      <el-header>
        <Header></Header>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="180px">
          <Asider></Asider>
        </el-aside>
        <!-- 右侧内容主体区域 -->
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
  </el-container>
</template>
<script>
import Header from '@/components/Header.vue'
import Asider from '@/components/Asider.vue'
import Main from '@/components/Main.vue'

export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  height: 100vh;
  width: 100vw;
}
.el-header{
  background-color: #E6E8FD;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
> div{
display: flex;
align-items: center;
span{
  margin-left: 15px;
}
}
}
.el-aside{
  background-color: #E4EDF7;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1)
}
.el-main{
  background-color: #E8ECFA;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1)
}
</style>