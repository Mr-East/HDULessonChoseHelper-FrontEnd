<template>
    <div class="tac">

        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#E4EDF7"
        active-text-color="#336FFF"
        width="180px"
        style="margin-top: 30px;">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">我的问卷</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">问卷收藏</span>
        </el-menu-item>
        </el-menu>

    </div>
</template>

<script> 
import { ElMenu, ElMenuItem, ElMenuItemGroup } from 'element-plus'
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

.tac{
  border: none; 
  padding-right: 0;
}
.el-menu-item {
  width: 180px;
  display: flex;
  align-items: center;
  border: none;
}

.el-menu-item::before,
.el-menu-item::after {
  border: none; /* 移除伪元素的边框 */
}

</style>