<template>
    <el-button text @click="centerDialogVisible = true">
      Click to open the Dialog
    </el-button>
  
    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="30%"
      align-center
    >
      <span>Open the dialog from the center from the screen</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const centerDialogVisible = ref(false)
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>
  