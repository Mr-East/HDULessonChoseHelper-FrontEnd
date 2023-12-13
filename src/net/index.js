import axios from 'axios';
import {ElMessage} from 'element-plus';

const defaultError = () => ElMessage.error("网络错误，请稍后重试！")
const defaultFailure = (message) => ElMessage.warning(message)

function post(url, data, success, failure = defaultFailure, error = defaultError) {
    axios.post(url,data,{
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        withCredentials: true
    }).then((data) => {
       if (data.success) 
        success(data.message, data.status);
       else
        failure(data.message, data.status);
     }).catch(error)
}

function get(url, success, failure = defaultFailure, error = defaultError) {
    axios.post(url,{
        withCredentials: true
    }).then((data) => {
       if (data.success) 
        success(data.message, data.status);
       else
        failure(data.message, data.status);
     }).catch(error)
}

export {post, get}