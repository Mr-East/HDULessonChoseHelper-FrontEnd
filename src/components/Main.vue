<template>
    <div class="view-container">
        <div class="app-contain">
            <div class="form-container">
                <div class="filter-view">
                    <div class="filter-search">
                        <input v-model="form.filter" type="text" class="filter-input" placeholder="请输入问卷名称">
                        <el-button type="primary" :icon="Search" class="filter-button">搜索</el-button>
                    </div>
                    <div class="filter-create">
                        <el-button type="primary" :icon="Plus" @click="handleCreate">创建问卷</el-button>
                    </div>
                    <div class="filter-sort">
                        <span class="status-label">问卷状态</span>
                        <el-radio-group v-model="selectedStatus" label="label position">
                            <el-radio-button label="all">全部</el-radio-button>
                            <el-radio-button label="await">待发布</el-radio-button>
                            <el-radio-button label="collect">收集中</el-radio-button>
                            <el-radio-button label="stop">已停止</el-radio-button>
                        </el-radio-group>
                    </div>
                    
                </div>
                <div class="project-container">
                    <el-empty description="暂无问卷" />
                    <div class="card-container">
                    </div>
                    <div class="page-contain">
                        <div class="page">
                            <el-pagination
                            v-model:current-page="currentPage"
                            v-model:page-size="pageSize"
                            :small="small"
                            :disabled="disabled"
                            :background="background"
                            layout="prev, pager, next, jumper"
                            :total="1000"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Search, Plus} from "@element-plus/icons-vue";
import {ElButton, ElInput} from "element-plus";
import { reactive } from 'vue';
import { ref } from 'vue';

const selectedStatus = ref('all');
const form = reactive({
  filter: '',
});
const currentPage = ref(5)
const pageSize = ref(100)
const handleSizeChange = (val) => {
  console.log(`${val} items per page`);
};

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
};


</script>

<style>

.filter-view {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.filter-input {
    width: 300px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #e3e3e3;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    margin-left: 0;
    margin-right: 20px;
}

.filter-input:focus {
    border: 1px solid #806ac4;
}

.filter-button {
    margin-right: 50px; 
}

.filter-sort {
    margin-left: 40px;
    display: flex;
    align-items: center;
}

.status-label {
    margin-right: 10px;
    margin-left: 20px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.page {
    margin-top: 20px;
    margin-bottom: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}



</style>