<template>
    <div class="content">
      <div class="login-wrapper">
        <div class="left-img">
          <img src="../assets/bg.jpg" />
        </div>
        <div class="right-login-form">
          <div class="form-wrapper">
            <h1>修改密码</h1>
            <div class="input-items">
              <span class="input-tips"> 账号 </span>
              <input
                type="text"
                class="inputs"
                placeholder="输入账号"
                v-model="username"
              />
            </div>

            <div class="input-items">
              <span class="input-tips"> 密码 </span>
              <input
                type="password"
                class="inputs"
                placeholder="输入密码"
                v-model="password"
              />
              
              <!-- <span class="input-tips"> 验证码 </span>
              <div class="input-container">
                <input type="code" class="inputs" placeholder="输入验证码" />
                <span class="codeBtn" id="second">获取验证码</span>
              </div> -->
              <!-- <div id="popup"></div> -->
            </div>
            <div class="input-items">
              <span class="input-tips"> 确认密码 </span>
              <input
                type="password"
                class="inputs"
                placeholder="确认密码"
                v-model="repassword"
              />
            </div>
            <button class="btn" @click="signup">修改密码</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import request from "@/net";
  import { ElMessage } from "element-plus";
  import  router  from "@/router";
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
        repassword: "",
      };
    },
    methods: {
      signup() {
        console.log(this.username);
        if (this.username === "" || this.repassword === "" || this.password === "") {
          ElMessage({
            message: "输入不能为空",
            type: "warning",
          });
        } else if (this.password === this.repassword) {
          request
            .post("/user/update", {
              name: this.username,
              password: this.password,
            })
            .then((response) => {
              if (response.code === "0") {
                ElMessage({
                  message: "修改成功",
                  type: "success",
                });
                router.push("/");
              } else {
                ElMessage({
                  message: response.errorMsg,
                  type: "warning",
                });
              }
            })
            .catch((error) => {
              console.error(error); // 处理错误
            });
        } else {
          ElMessage({
            message: "密码不一致",
            type: "warning",
          });
        }
      },
      login() {
        console.log(
          "Login clicked with email:",
          this.email,
          "and password:",
          this.password
        );
      },
    },
  };
  </script>
    
  <style scoped>
  * {
    font-family: "Aguazyuan", Courier, monospace;
  }
  
  a {
    text-decoration: none;
  }
  
  .content {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      to left,
      rgba(185, 246, 244, 0.2),
      rgba(217, 201, 237, 0.37)
    ); /* 这里定义两种颜色和混合方向 */
    position: relative;
  }
  
  .content .login-wrapper {
    width: 70vw;
    height: 80vh;
    background-color: #fff;
    border-radius: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
  }
  
  img {
    width: 35vw;
    height: 80vh;
    border-radius: 40px;
    background-size: cover;
    position: relative;
  }
  
  .content .login-wrapper .left-img .glass {
    width: 30%;
    padding: 20px;
    color: #fff;
    position: absolute;
    top: 20%;
    left: 30%;
    transform: translate(-50%, -20%);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.48);
  }
  
  .content .login-wrapper .left-img .glass .title {
    font-size: 50px;
    text-align: center;
    padding: 10px;
    overflow: hidden;
  }
  
  .content .login-wrapper .right-login-form {
    flex: 1;
    position: relative;
  }
  
  .content .login-wrapper .right-login-form .form-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .content .login-wrapper .right-login-form .form-wrapper h1 {
    font-size: 30px;
    text-align: center;
  }
  
  .content .login-wrapper .right-login-form .form-wrapper .input-items {
    margin: 20px 0;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .input-items
    .input-tips {
    display: inline-block;
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0;
  }
  
  .content .login-wrapper .right-login-form .form-wrapper .input-items .inputs {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(227, 227, 227);
    padding: 20px;
    box-sizing: border-box;
    outline: none;
    transition: 0.5s;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .input-items
    .inputs:focus {
    border: 1px solid rgb(128, 106, 196);
  }
  
  .content .login-wrapper .right-login-form .form-wrapper .input-items a {
    float: right;
    font-weight: 600;
    text-align: right;
    margin: 5px 0;
    font-size: 13px;
    cursor: pointer;
  }
  
  .content .login-wrapper .right-login-form .form-wrapper .btn {
    width: 100%;
    height: 50px;
    background-color: rgb(128, 106, 196);
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-size: 25px;
    margin: 10px 0;
    cursor: pointer;
  }
  
  .content .login-wrapper .right-login-form .form-wrapper .siginup-tips {
    text-align: center;
    font-weight: 600;
    margin: 5px 0;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .siginup-tips
    span:last-child {
    color: rgb(110, 87, 179);
    cursor: pointer;
  }
  
  .content .login-wrapper .right-login-form .form-wrapper .other-login .divider {
    width: 100%;
    margin: 20px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .other-login
    .divider
    .line {
    display: inline-block;
    max-width: 35%;
    width: 35%;
    flex: 1;
    height: 1px;
    background-color: rgb(162, 172, 185);
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .other-login
    .divider
    .divider-text {
    vertical-align: middle;
    margin: 0 20px;
    display: inline-block;
    width: 50px;
    color: rgb(162, 172, 185);
    white-space: normal;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .other-login
    .other-login-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .other-login
    .other-login-wrapper
    .other-login-item {
    width: 70px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    color: rgb(51, 49, 116);
    margin: 0 10px;
    transition: 0.4s;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .other-login
    .other-login-wrapper
    .other-login-item
    img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .other-login
    .other-login-wrapper
    .other-login-item
    span {
    vertical-align: middle;
  }
  
  .content
    .login-wrapper
    .right-login-form
    .form-wrapper
    .other-login
    .other-login-wrapper
    .other-login-item:hover {
    width: 80px;
    height: 50%;
    background-color: #fff;
    border: 0;
    box-shadow: 1px 10px 32px 1px rgba(186, 175, 221, 0.37);
  }
  
  @media (max-width: 800px) {
    .login-wrapper {
      padding: 20px;
    }
  
    .login-wrapper .left-img {
      display: none;
    }
  
    .login-wrapper .right-login-form {
      padding: 20px;
    }
  }
  
  .input-container {
    position: relative;
  }
  
  .inputs {
    padding-right: 120px;
    /* 调整这个值以适应实际情况 */
  }
  
  .codeBtn {
    position: absolute;
    top: 10px;
    right: 0px;
    padding: 5px 10px;
    color: #806ac4;
    cursor: pointer;
  }
  
  #popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 150px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 20px;
  }
  </style>
  
  