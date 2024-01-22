<template>
  <div class="app-container">

    <!-- 样式1 -->
    <el-alert title="样式1" type="success"></el-alert>
    <div class="body">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"/>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple"/>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light"/>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"/>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"/>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"/>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple"/>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"/>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"/>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"/>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"/>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"/>
        </el-col>
      </el-row>
    </div>

    <!-- 样式2 -->
    <el-alert title="样式2" type="info"></el-alert>
    <div class="body">
      <el-row :gutter="100">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 样式3 -->
    <el-alert title="样式3" type="warning"></el-alert>
    <div class="body">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 样式4 -->
    <el-alert title="样式4" type="error"></el-alert>
    <div class="body">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :offset="6" :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :offset="6" :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :offset="6" :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :offset="6" :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 样式5 -->
    <el-alert title="样式5" type="success"></el-alert>
    <div class="body">
      <el-row class="row-bg" type="flex">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row class="row-bg" justify="center" type="flex">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row class="row-bg" justify="end" type="flex">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row class="row-bg" justify="space-between" type="flex">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row class="row-bg" justify="space-around" type="flex">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 样式6 -->
    <el-alert title="样式6" type="info"></el-alert>
    <div class="body">
      <el-row :gutter="10">
        <el-col :lg="3" :md="4" :sm="6" :xl="1" :xs="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :lg="9" :md="8" :sm="6" :xl="11" :xs="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :lg="9" :md="8" :sm="6" :xl="11" :xs="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :lg="3" :md="4" :sm="6" :xl="1" :xs="8">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<style>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
<script>
</script>
