<!--suppress JSUnresolvedReference-->
<template>
  <div class="app-container">

    <!-- 搜索 -->
    <el-main>
      <el-form ref="QueryForm" :inline="true" :model="queryParams">
        <el-row :gutter="10">
          <el-col :span="5">
            <el-form-item label="姓名">
              <el-input v-model="queryParams.name" clearable placeholder="请输入姓名！" size="small" @keyup.enter.native="handleQuery"/>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="性别">
              <el-input v-model="queryParams.sex" clearable placeholder="请输入性别！" size="small" @keyup.enter.native="handleQuery"/>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="年龄">
              <el-input v-model="queryParams.age" clearable placeholder="请输入年龄！" size="small" @keyup.enter.native="handleQuery"/>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item>
              <el-button icon="el-icon-search" size="small" type="primary" @click="handleQuery">搜索</el-button>
              <el-button icon="el-icon-refresh" size="small" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
    <!-- 按钮 -->
    <el-main style="margin-top: -30px">
      <el-button icon="el-icon-plus" plain size="small" type="primary" @click="handleAdd">录入</el-button>
      <el-button :disabled="!single" icon="el-icon-edit" plain size="small" type="success" @click="handleUpdate">编辑</el-button>
      <el-button :disabled="!(single || multiple)" icon="el-icon-delete" plain size="small" type="danger" @click="handleDelete">删除</el-button>
    </el-main>
    <!-- 列表 -->
    <el-main>
      <el-table :data="tableData" border highlight-current-row stripe @selection-change="handleSelectionChange">
        <el-table-column align="center" type="selection" width="50px"/>
        <el-table-column align="center" label="序号" type="index" width="50px"/>
        <el-table-column :show-overflow-tooltip="true" align="center" label="姓名" prop="name" width="100px"/>
        <el-table-column :show-overflow-tooltip="true" align="center" label="性别" prop="sex" width="100px"/>
        <el-table-column :show-overflow-tooltip="true" align="center" label="年龄" prop="age" sortable width="100px"/>
        <el-table-column :show-overflow-tooltip="true" align="center" label="民族" prop="nature" width="100px"/>
        <el-table-column :show-overflow-tooltip="true" align="center" label="职业" prop="job" width="100px"/>
        <el-table-column :show-overflow-tooltip="true" align="center" label="地址" prop="address"/>
        <el-table-column :show-overflow-tooltip="true" align="center" label="电话号码" prop="phone"/>
        <!-- 操作 -->
        <el-table-column align="center" class-name="small-padding fixed-width" label="操作">
          <template v-slot="scope">
            <el-button icon="el-icon-search" size="mini" type="text" @click="handleDetail(scope.row)">详情</el-button>
            <el-button icon="el-icon-delete" size="mini" type="text" @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <!-- 分页 -->
    <el-main style="margin-top: -20px">
      <el-pagination :current-page="currentPage" :page-size="100" :page-sizes="[100, 200, 300, 400]" :total="400" background
                     layout="total, sizes, prev, pager, next, jumper"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
      />
    </el-main>

    <!-- 录入/编辑 -->
    <el-dialog :close-on-click-modal="false" :visible.sync="open" append-to-body title="录入信息" width="85%">
      <!-- 表格 -->
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-tabs style="margin-top: -20px" type="border-card">
          <el-tab-pane label="客户信息">
            <!-- 基本信息 -->
            <el-card body-style="padding: 0px" class="body" shadow="hover">
              <el-header slot="header" :height=headerHeight class="cardHeader">基本信息</el-header>
              <el-main>
                <!-- 姓名/证件类型/证件号码 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="姓名:" prop="name">
                      <el-input v-model="form.name" clearable maxlength="10" placeholder="请输入信息！" show-word-limit/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="证件类型:" prop="idType">
                      <el-select v-model="form.idType" placeholder="请输入信息">
                        <el-option v-for="item in options" :key="item.value" :disabled="item.disabled" :label="item.label" :value="item.value"/>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="证件号码:" prop="idCard">
                      <el-input-number v-model="form.age" :min="0" placeholder="请输入信息!"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 手机号码/性别/出生日期 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="手机号码:" prop="phone">
                      <el-input v-model="form.birthday" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="性别:" prop="sex">
                      <el-input v-model="form.idCard" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="出生日期:" prop="birthday">
                      <el-input v-model="form.job" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 年龄/国籍/民族 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="年龄:" prop="age">
                      <el-input v-model="form.age" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="国籍:" prop="contrary">
                      <el-input v-model="form.contrary" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="民族:" prop="nation">
                      <el-input v-model="form.nation" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 政治面貌/电子邮箱/住宅电话 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="政治面貌:" prop="politicalOutlook">
                      <el-input v-model="form.politicalOutlook" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="电子邮箱:" prop="email">
                      <el-input v-model="form.address" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="住宅电话:" prop="homePhone">
                      <el-input v-model="form.homePhone" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 婚姻状况/健康状况/最高学历 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="婚姻状况:" prop="maritalStatus">
                      <el-input v-model="form.maritalStatus" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="健康状况:" prop="healthCondition">
                      <el-input v-model="form.healthCondition" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="最高学历:" prop="highestEducation">
                      <el-input v-model="form.highestEducation" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 最高学位/毕业学校/毕业年份 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="最高学位:" prop="highestDegree">
                      <el-input v-model="form.highestDegree" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="毕业学校:" prop="graduationSchool">
                      <el-input v-model="form.graduationSchool" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="毕业年份:" prop="graduationYear">
                      <el-input v-model="form.graduationYear" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 职业/所属行业/工作职务 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="职业:" prop="job">
                      <el-input v-model="form.job" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="所属行业:" prop="industry">
                      <el-input v-model="form.industry" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="工作职务:" prop="jobTitle">
                      <el-input v-model="form.jobTitle" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 地址 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="地址:" prop="address">
                      <el-input v-model="form.address" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col/>
                  <el-col/>
                </el-row>
              </el-main>
            </el-card>
            <!-- 补充信息 -->
            <el-card body-style="padding: 0px" class="body" shadow="hover">
              <el-header slot="header" :height=headerHeight class="cardHeader">补充信息</el-header>
              <el-main>
                <!-- 户籍类型/兴趣爱好/信用等级 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="户籍类型:" label-width="150px" prop="censusRegister">
                      <el-input v-model="form.censusRegister" maxlength="30" placeholder="请输入出生日期！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="兴趣爱好:" label-width="150px" prop="hobby">
                      <el-input v-model="form.hobby" maxlength="30" placeholder="请输入民族！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="信用等级:" label-width="150px" prop="creditRating">
                      <el-input v-model="form.creditRating" maxlength="30" placeholder="请输入职业！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 是否短信提醒/补充信息 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="是否短信提醒:" label-width="150px" prop="isMessage">
                      <el-input v-model="form.isMessage" maxlength="30" placeholder="请输入电话号码！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="补充信息:" label-width="150px" prop="supplementaryInformation">
                      <el-input v-model="form.supplementaryInformation" maxlength="30" placeholder="请输入地址！"/>
                    </el-form-item>
                  </el-col>
                  <el-col/>
                </el-row>
              </el-main>
            </el-card>
            <!-- 地址信息 -->
            <el-card body-style="padding: 0px" class="body" shadow="hover">
              <el-header slot="header" :height=headerHeight class="cardHeader">地址信息</el-header>
              <el-main>
                <!-- 省/市/区 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="省:" prop="province">
                      <el-input v-model="form.province" clearable maxlength="10" placeholder="请输入姓名！" show-word-limit/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="市:" prop="city">
                      <el-select v-model="form.city" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :disabled="item.disabled" :label="item.label" :value="item.value"/>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="区:" prop="district">
                      <el-input-number v-model="form.district" :min="0"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 地址邮编/行政区划/详细地址 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="地址邮编:" prop="addressPostalCode">
                      <el-input v-model="form.addressPostalCode" maxlength="30" placeholder="请输入出生日期！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="行政区划:" prop="administrativeDivision">
                      <el-input v-model="form.administrativeDivision" maxlength="30" placeholder="请输入民族！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="详细地址:" prop="detailedAddress">
                      <el-input v-model="form.detailedAddress" maxlength="30" placeholder="请输入职业！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-main>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="单位信息">
            <el-card body-style="padding: 0px" class="body" shadow="hover">
              <el-header slot="header" :height=headerHeight class="cardHeader">单位信息</el-header>
              <el-main>
                <!-- 公司名称/公司电话/单位性质 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="公司名称:" prop="corporateName">
                      <el-input v-model="form.corporateName" clearable maxlength="10" placeholder="请输入信息！" show-word-limit/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="公司电话:" prop="officeTel">
                      <el-select v-model="form.officeTel" placeholder="请输入信息">
                        <el-option v-for="item in options" :key="item.value" :disabled="item.disabled" :label="item.label" :value="item.value"/>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="单位性质:" prop="unitNature">
                      <el-input-number v-model="form.unitNature" :min="0" placeholder="请输入信息!"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 所属行业/任职部门/发薪日 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="所属行业:" prop="industry">
                      <el-input v-model="form.birthday" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="任职部门:" prop="department">
                      <el-input v-model="form.idCard" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="发薪日:" prop="payday">
                      <el-input v-model="form.job" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 工作年限/公司经历/退休年龄 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="工作年限:" prop="yearsOfWork">
                      <el-input v-model="form.yearsOfWork" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="公司经历:" prop="companyExperience">
                      <el-input v-model="form.companyExperience" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="退休年龄:" prop="retirementAge">
                      <el-input v-model="form.retirementAge" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-main>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="收支信息">
            <el-card body-style="padding: 0px" class="body" shadow="hover">
              <el-header slot="header" :height=headerHeight class="cardHeader">收支信息</el-header>
              <el-main>
                <!-- 月收入/年收入/收入来源 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="月收入:" prop="monthlyIncome">
                      <el-input v-model="form.monthlyIncome" clearable maxlength="10" placeholder="请输入信息！" show-word-limit/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="年收入:" prop="annualIncome">
                      <el-select v-model="form.annualIncome" placeholder="请输入信息">
                        <el-option v-for="item in options" :key="item.value" :disabled="item.disabled" :label="item.label" :value="item.value"/>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="收入来源:" prop="sourceOfIncome">
                      <el-input-number v-model="form.sourceOfIncome" :min="0" placeholder="请输入信息!"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 净资产家庭人口数/供养人数 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="净资产:" prop="netAssets">
                      <el-input v-model="form.netAssets" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="家庭人口数:" prop="familySize">
                      <el-input v-model="form.familySize" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item label="供养人数:" prop="supportingPopulation">
                      <el-input v-model="form.supportingPopulation" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 未成年子女数 -->
                <el-row justify="space-around" type="flex">
                  <el-col>
                    <el-form-item label="子女数:" prop="numberOfChildren">
                      <el-input v-model="form.numberOfChildren" maxlength="30" placeholder="请输入信息！"/>
                    </el-form-item>
                  </el-col>
                  <el-col></el-col>
                  <el-col></el-col>
                </el-row>
              </el-main>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <!--  确认/取消  -->
      <el-footer slot="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </el-footer>
    </el-dialog>

  </div>
</template>

<script>
import { Common }   from '@/layout/mixin/view/Common'
import { DataBase } from '@/layout/mixin/view/DataBase'

export default {
  components: {},
  mixins    : [Common, DataBase],
  watch     : {
    tableData: {
      deep     : true,
      immediate: true,
      handler(val) {
        if ( val ) {
          // console.log ('列表:', this.tableData)
        }
      }
    }
  },
  computed  : {},
  data() {
    return {
      currentPage: 1, // 当前页
      open       : false, // 弹出层
      title      : '', // 弹出层标题
      form       : {}, // 表单参数
      ids        : [], // 选中数组
      single     : false, // 非单个禁用
      multiple   : false, // 非多个禁用
      total      : 0, // 总条数
      queryParams: {
        pageNum : 1,
        pageSize: 10,
        name    : '',
        sex     : '',
        age     : ''
      }, // 查询参数
      rules      : {
        name: [{ required: true, message: '姓名不能为空！', trigger: 'blur' }],
        sex : [{ required: true, message: '性别不能为空！', trigger: 'blur' }],
        age : [{ required: true, message: '年龄不能为空！', trigger: 'blur' }]
      }, // 表单校验
      options    : [
        { value: '男', label: '男' },
        { value: '女', label: '女' },
        { value: '未知', label: '未知', disabled: true }
      ] // 性别选项
    }
  },
  created() {},
  methods: {
    // 详情按钮
    handleDetail(row) {
      this.$message.warning ('功能正在开发！')
    },
    // 重置图文信息
    reset() {
      this.$refs['form'].resetFields ()
    },
    // 提交按钮
    submitForm() {
      this.$refs['form'].validate ((valid) => {
        if ( valid ) {
          let form1 = { name: 'name', age: 'age' }
          let form2 = { name: 'name1', sex: 'sex', address: 'address' }
          let form3 = Object.assign (form1, form2)
          console.log ('form1:', form1)
          console.log ('form2:', form2)
          console.log ('form3:', form3)
        }
      })
    },
    // 取消按钮
    cancel() {
      this.reset ()
      this.open = false
    },
    // 新增按钮
    handleAdd() {
      this.open = true
    },
    // 编辑按钮
    handleUpdate(row) {
      this.$message.warning ('功能正在开发！')
    },
    // 删除
    handleDelete(index) {
      if ( this.single || !this.multiple && index || index === 0 ) this.tableData.splice (index, 1)
      if ( this.multiple ) {
        this.ids.forEach (data => {
          this.tableData.splice (this.tableData.indexOf (this.ids.find (item => item.name === data.name)), 1)
        })
      }
    },
    // 搜索按钮
    handleQuery() {
      this.queryParams.pageNum = 1
    },
    // 重置按钮
    resetQuery() {},
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection
      this.single = selection.length === 1 //是否为单选
      this.multiple = !!selection.length && selection.length !== 0 && selection.length !== 1 // 是否为多选
    },
    handleSizeChange(val) {
      console.log (`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log (`当前页: ${val}`)
    }
  }
}
</script>
<style scoped>
</style>
