<template>
  <div class = "app-container">
    <el-container>
      <el-header height = "0px"></el-header>
      <el-main>
        <el-checkbox v-model = "checked">备选项</el-checkbox>
        <el-checkbox v-model = "checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model = "checked2" disabled>备选项</el-checkbox>
      </el-main>
      <el-main>
        <el-checkbox-group v-model = "checkList">
          <el-checkbox label = "复选框 A"></el-checkbox>
          <el-checkbox label = "复选框 B"></el-checkbox>
          <el-checkbox label = "复选框 C"></el-checkbox>
          <el-checkbox disabled label = "禁用"></el-checkbox>
          <el-checkbox disabled label = "选中且禁用"></el-checkbox>
        </el-checkbox-group>
      </el-main>
      <el-main>
        <el-checkbox v-model = "checkAll" :indeterminate = "isIndeterminate" @change = "handleCheckAllChange">全选</el-checkbox>
        <div style = "margin: 15px 0;"></div>
        <el-checkbox-group v-model = "checkedCities" @change = "handleCheckedCitiesChange">
          <el-checkbox v-for = "city in cities" :key = "city" :label = "city">{{ city }}</el-checkbox>
        </el-checkbox-group>
      </el-main>
      <el-main>
        <el-checkbox-group
            v-model = "checkedCities"
            :max = "2"
            :min = "1">
          <el-checkbox v-for = "city in cities" :key = "city" :label = "city">{{ city }}</el-checkbox>
        </el-checkbox-group>
      </el-main>
      <el-main>
        <div>
          <el-checkbox-group v-model = "checkboxGroup1">
            <el-checkbox-button v-for = "city in cities" :key = "city" :label = "city">{{ city }}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style = "margin-top: 20px">
          <el-checkbox-group v-model = "checkboxGroup2" size = "medium">
            <el-checkbox-button v-for = "city in cities" :key = "city" :label = "city">{{ city }}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style = "margin-top: 20px">
          <el-checkbox-group v-model = "checkboxGroup3" size = "small">
            <el-checkbox-button v-for = "city in cities" :key = "city" :disabled = "city === '北京'" :label = "city">{{ city }}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style = "margin-top: 20px">
          <el-checkbox-group v-model = "checkboxGroup4" disabled size = "mini">
            <el-checkbox-button v-for = "city in cities" :key = "city" :label = "city">{{ city }}</el-checkbox-button>
          </el-checkbox-group>
        </div>
      </el-main>
      <el-main>
        <div>
          <el-checkbox v-model = "checked1" border label = "备选项1"></el-checkbox>
          <el-checkbox v-model = "checked2" border label = "备选项2"></el-checkbox>
        </div>
        <div style = "margin-top: 20px">
          <el-checkbox v-model = "checked3" border label = "备选项1" size = "medium"></el-checkbox>
          <el-checkbox v-model = "checked4" border label = "备选项2" size = "medium"></el-checkbox>
        </div>
        <div style = "margin-top: 20px">
          <el-checkbox-group v-model = "checkboxGroup1" size = "small">
            <el-checkbox border label = "备选项1"></el-checkbox>
            <el-checkbox border disabled label = "备选项2"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div style = "margin-top: 20px">
          <el-checkbox-group v-model = "checkboxGroup2" disabled size = "mini">
            <el-checkbox border label = "备选项1"></el-checkbox>
            <el-checkbox border label = "备选项2"></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
const cityOptions = [ '上海', '北京', '广州', '深圳' ];
export default {
  data () {
    return {
      checked        : true,
      checked1       : false,
      checked2       : true,
      checkList      : [ '选中且禁用', '复选框 A' ],
      checkAll       : false, //是否全选
      checkedCities  : [ '上海', '北京' ],
      cities         : cityOptions,
      isIndeterminate: true, //是否有选中
      checkboxGroup1 : [ '上海' ],
      checkboxGroup2 : [ '上海' ],
      checkboxGroup3 : [ '上海' ],
      checkboxGroup4 : [ '上海' ],
      checked3       : false,
      checked4       : true,
    };
  },
  methods: {
    //全选
    handleCheckAllChange ( val ) {
      console.log ( val )
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    //选中事件
    handleCheckedCitiesChange ( value ) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length; //是否全部选中
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length; //是否有选中
    }
  }
}
</script>
