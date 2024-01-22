<template>
  <div class = "app-container">

    <!-- 基础用法 -->
    <div class = "body">
      <el-alert :closable = "false" center title = "基础用法" type = "success"/>
    </div>
    <div class = "body">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type = "primary">主要按钮</el-button>
        <el-button type = "success">成功按钮</el-button>
        <el-button type = "info">信息按钮</el-button>
        <el-button type = "warning">警告按钮</el-button>
        <el-button type = "danger">危险按钮</el-button>
      </el-row>
    </div>
    <div class = "body">
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button plain type = "primary">主要按钮</el-button>
        <el-button plain type = "success">成功按钮</el-button>
        <el-button plain type = "info">信息按钮</el-button>
        <el-button plain type = "warning">警告按钮</el-button>
        <el-button plain type = "danger">危险按钮</el-button>
      </el-row>
    </div>
    <div class = "body">
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button round type = "primary">主要按钮</el-button>
        <el-button round type = "success">成功按钮</el-button>
        <el-button round type = "info">信息按钮</el-button>
        <el-button round type = "warning">警告按钮</el-button>
        <el-button round type = "danger">危险按钮</el-button>
      </el-row>
    </div>
    <div class = "body">
      <el-row>
        <el-button circle icon = "el-icon-search"></el-button>
        <el-button circle icon = "el-icon-edit" type = "primary"></el-button>
        <el-button circle icon = "el-icon-check" type = "success"></el-button>
        <el-button circle icon = "el-icon-message" type = "info"></el-button>
        <el-button circle icon = "el-icon-star-off" type = "warning"></el-button>
        <el-button circle icon = "el-icon-delete" type = "danger"></el-button>
      </el-row>
    </div>


    <!-- 禁用状态 -->
    <div class = "body">
      <el-alert :closable = "false" center title = "禁用状态" type = "info"/>
    </div>
    <div class = "body">
      <el-row>
        <el-button disabled>默认按钮</el-button>
        <el-button disabled type = "primary">主要按钮</el-button>
        <el-button disabled type = "success">成功按钮</el-button>
        <el-button disabled type = "info">信息按钮</el-button>
        <el-button disabled type = "warning">警告按钮</el-button>
        <el-button disabled type = "danger">危险按钮</el-button>
      </el-row>
    </div>
    <div class = "body">
      <el-row>
        <el-button disabled plain>朴素按钮</el-button>
        <el-button disabled plain type = "primary">主要按钮</el-button>
        <el-button disabled plain type = "success">成功按钮</el-button>
        <el-button disabled plain type = "info">信息按钮</el-button>
        <el-button disabled plain type = "warning">警告按钮</el-button>
        <el-button disabled plain type = "danger">危险按钮</el-button>
      </el-row>
    </div>


    <!-- 文字按钮 -->
    <div class = "body">
      <el-alert :closable = "false" center title = "文字按钮" type = "warning"/>
    </div>
    <div class = "body">
      <el-button type = "text">文字按钮</el-button>
      <el-button disabled type = "text">文字按钮</el-button>
    </div>


    <!-- 图标按钮 -->
    <div class = "body">
      <el-alert :closable = "false" center title = "图标按钮" type = "error"/>
    </div>
    <div class = "body">
      <el-button icon = "el-icon-edit" type = "primary"></el-button>
      <el-button icon = "el-icon-share" type = "primary"></el-button>
      <el-button icon = "el-icon-delete" type = "primary"></el-button>
      <el-button icon = "el-icon-search" type = "primary">搜索</el-button>
      <el-button type = "primary">上传<i class = "el-icon-upload el-icon--right"></i></el-button>
    </div>


    <!-- 按钮组 -->
    <div class = "body">
      <el-alert :closable = "false" center title = "按钮组" type = "success"/>
    </div>
    <div class = "body">
      <el-button-group>
        <el-button icon = "el-icon-arrow-left" type = "primary">上一页</el-button>
        <el-button type = "primary">下一页<i class = "el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </div>
    <div class = "body">
      <el-button-group>
        <el-button icon = "el-icon-edit" plain type = "primary"></el-button>
        <el-button icon = "el-icon-share" plain type = "primary"></el-button>
        <el-button icon = "el-icon-delete" plain type = "primary"></el-button>
      </el-button-group>
    </div>


    <!-- 加载中 -->
    <div class = "body">
      <el-alert :closable = "false" center title = "加载中" type = "info"/>
    </div>
    <div class = "body">
      <el-button :loading = "true" center type = "primary">加载中</el-button>
    </div>

    <!-- 不同尺寸 -->
    <div class = "body">
      <el-alert :closable = "false" center title = "不同尺寸" type = "info"/>
    </div>
    <div class = "body">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button size = "medium">中等按钮</el-button>
        <el-button size = "small">小型按钮</el-button>
        <el-button size = "mini">超小按钮</el-button>
      </el-row>
    </div>
    <div class = "body">
      <el-row>
        <el-button round>默认按钮</el-button>
        <el-button round size = "medium">中等按钮</el-button>
        <el-button round size = "small">小型按钮</el-button>
        <el-button round size = "mini">超小按钮</el-button>
      </el-row>
    </div>

  </div>
</template>
<script>
</script>
