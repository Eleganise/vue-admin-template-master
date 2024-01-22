<template>
  <div class="app-container">

    <!-- 淡入淡出 -->
    <el-container>
      <el-main>
        <el-button @click="show = !show">Fade 淡入淡出</el-button>
        <div style="display: flex; margin-top: 20px; height: 100px;">
          <transition name="el-fade-in-linear">
            <div v-show="show" class="transition-box">.el-fade-in-linear</div>
          </transition>
          <transition name="el-fade-in">
            <div v-show="show" class="transition-box">.el-fade-in</div>
          </transition>
        </div>
      </el-main>
    </el-container>

    <!-- 缩放 -->
    <el-container>
      <el-main>
        <el-button @click="show2 = !show2">Zoom 缩放</el-button>
        <div style="display: flex; margin-top: 20px; height: 100px;">
          <transition name="el-zoom-in-center">
            <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
          </transition>
          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
          </transition>
          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
        </div>
      </el-main>
    </el-container>

    <!-- 展开折叠 -->
    <el-container>
      <el-main>
        <div>
          <el-button @click="show3 = !show3">Collapse 展开折叠</el-button>
          <div style="margin-top: 20px; height: 200px;">
            <el-collapse-transition>
              <div v-show="show3">
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>

export default {
  data: () => ({
    show : true,
    show2: true,
    show3: true
  })
}
</script>

<style lang="scss" scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>

