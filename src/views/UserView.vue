<template>
    <el-container class="user-container">
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
            <User></User>
          </el-main>
        </el-container>
    </el-container>
</template>


<script setup>
import Header from '@/components/Header.vue'
import Asider from '@/components/Asider.vue'
import User from '@/components/User.vue'
</script>
