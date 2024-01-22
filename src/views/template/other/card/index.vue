<template>
  <div class="app-container">
    <el-container>
      <el-header height="0px"></el-header>
      <el-main>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-main>
      <el-main>
        <el-card class="box-card" shadow="hover">
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-main>
      <el-main>
        <el-row>
          <el-col v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0" :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <img class="image" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button class="button" type="text">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              从不显示
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date ()
    }
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
