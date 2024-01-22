<template>
  <div class="app-container">
    <el-container>
      <el-header height="0px"></el-header>
      <el-main>
        <el-radio v-model="radio" label="1">天津</el-radio>
        <el-radio v-model="radio" label="2">北京</el-radio>
        <el-radio v-model="radio" disabled label="3">上海</el-radio>
        <el-radio v-model="radio" disabled label="4">深圳</el-radio>
      </el-main>
      <el-main>
        <el-radio-group v-model="radio0">
          <el-radio label="3">备选项</el-radio>
          <el-radio label="6">备选项</el-radio>
          <el-radio label="9">备选项</el-radio>
        </el-radio-group>
      </el-main>
      <el-main>
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio2" size="medium">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio3" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button disabled label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio4" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </el-main>
      <el-main>
        <div>
          <el-radio v-model="radio5" border label="1">备选项1</el-radio>
          <el-radio v-model="radio5" border label="2">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio v-model="radio6" border label="1" size="medium">备选项1</el-radio>
          <el-radio v-model="radio6" border label="2" size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio7" size="small">
            <el-radio border label="1">备选项1</el-radio>
            <el-radio border disabled label="2">备选项2</el-radio>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio8" disabled size="mini">
            <el-radio border label="1">备选项1</el-radio>
            <el-radio border label="2">备选项2</el-radio>
          </el-radio-group>
        </div>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
      radio : '3',
      radio0: '9',
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海',
      radio5: '1',
      radio6: '1',
      radio7: '1',
      radio8: '1'
    }
  }
}
</script>
