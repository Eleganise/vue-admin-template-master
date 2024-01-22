<template>
  <div class = "app-container">
    <el-container>
      <el-header height = "0px"></el-header>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "6">
            <el-input-number v-model = "num0" :max = "10" :min = "1" label = "描述文字" @change = "handleChange"></el-input-number>
          </el-col>
          <el-col :span = "6">
            <el-input-number v-model = "num" :disabled = "true"></el-input-number>
          </el-col>
          <el-col :span = "6">
            <el-input-number v-model = "num" :step = "2"></el-input-number>
          </el-col>
          <el-col :span = "6">
            <el-input-number v-model = "num" :step = "2" step-strictly></el-input-number>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "6">
            <el-input-number v-model = "num" :precision = "2" :step = "0.1"></el-input-number>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "6">
            <el-input-number v-model = "num1"></el-input-number>
          </el-col>
          <el-col :span = "6">
            <el-input-number v-model = "num2" size = "medium"></el-input-number>
          </el-col>
          <el-col :span = "6">
            <el-input-number v-model = "num3" size = "small"></el-input-number>
          </el-col>
          <el-col :span = "6">
            <el-input-number v-model = "num4" size = "mini"></el-input-number>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <el-row :gutter = "10">
          <el-col :span = "6">
            <el-input-number v-model = "num" :max = "10" :min = "1" controls-position = "right" @change = "handleChange"></el-input-number>
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
    return {
      num : 1,
      num0: 0,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1
    };
  },
  methods: {
    handleChange ( value ) {
      console.log ( value );
    }
  },
}
</script>

