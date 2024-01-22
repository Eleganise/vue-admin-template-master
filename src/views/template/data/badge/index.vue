<template>
  <div class = "app-container">
    <el-container>
      <el-header height = "0px"></el-header>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "2">
            <el-badge :value = "12" class = "item">
              <el-button size = "small">评论</el-button>
            </el-badge>
          </el-col>
          <el-col :span = "2">
            <el-badge :value = "3" class = "item">
              <el-button size = "small">回复</el-button>
            </el-badge>
          </el-col>
          <el-col :span = "2">
            <el-badge :value = "1" class = "item" type = "primary">
              <el-button size = "small">评论</el-button>
            </el-badge>
          </el-col>
          <el-col :span = "2">
            <el-badge :value = "2" class = "item" type = "warning">
              <el-button size = "small">回复</el-button>
            </el-badge>
          </el-col>
          <el-col :span = "2">
            <el-dropdown trigger = "click">
              <span class = "el-dropdown-link">点我查看
                <i class = "el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot = "dropdown">
                <el-dropdown-item class = "clearfix">
                  评论
                  <el-badge :value = "12" class = "mark"/>
                </el-dropdown-item>
                <el-dropdown-item class = "clearfix">
                  回复
                  <el-badge :value = "3" class = "mark"/>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "2">
            <el-badge :max = "99" :value = "200" class = "item">
              <el-button size = "small">评论</el-button>
            </el-badge>
          </el-col>
          <el-col :span = "2">
            <el-badge :max = "10" :value = "100" class = "item">
              <el-button size = "small">回复</el-button>
            </el-badge>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "2">
            <el-badge class = "item" value = "new">
              <el-button size = "small">评论</el-button>
            </el-badge>
          </el-col>
          <el-col :span = "2">
            <el-badge class = "item" value = "hot">
              <el-button size = "small">回复</el-button>
            </el-badge>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "2">
            <el-badge class = "item" is-dot>数据</el-badge>
          </el-col>
          <el-col :span = "2">
            <el-badge class = "item" is-dot>
              <el-button class = "share-button" icon = "el-icon-share" type = "primary"></el-button>
            </el-badge>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  mounted () {
  },
  data () {
    return {};
  },
  methods: {},
}
</script>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
