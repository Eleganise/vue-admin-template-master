<template>
  <div class="app-container">

    <el-container>
      <el-header height="0px"></el-header>
      <el-main>
        <el-row>
          <el-col :span="2">
            <el-link href="https://www.baidu.com" target="_blank">百度链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link type="primary">主要链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link type="success">成功链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link type="warning">警告链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link type="danger">危险链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link type="info">信息链接</el-link>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row>
          <el-col :span="2">
            <el-link disabled>默认链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link disabled type="primary">主要链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link disabled type="success">成功链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link disabled type="warning">警告链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link disabled type="danger">危险链接</el-link>
          </el-col>
          <el-col :span="2">
            <el-link disabled type="info">信息链接</el-link>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row>
          <el-col :span="2">
            <el-link :underline="false">无下划线</el-link>
          </el-col>
          <el-col :span="2">
            <el-link>有下划线</el-link>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row>
          <el-col :span="2">
            <el-link icon="el-icon-edit">编辑</el-link>
          </el-col>
          <el-col :span="2">
            <el-link>查看<i class="el-icon-view el-icon--right"></i></el-link>
          </el-col>
        </el-row>
      </el-main>


    </el-container>
  </div>
</template>
<script>
</script>
