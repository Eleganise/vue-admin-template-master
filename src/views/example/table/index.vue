<template>
  <div class="app-container">
    <el-container>
      <el-header height="20px" style="font-size: 18px; font-weight: bold">表格</el-header>
      <el-main>
        <el-table ref="tableData" :data="tableData" tooltip-effect="dark">
          <el-table-column v-for="(item,index) in tableConfig" :key="index" :align="item.align || 'center'" :label="item.label"
                           :min-width="item.minWidth || ''" :prop="item.prop" :type="item.type || ''" show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template v-slot="scope">
              <el-button icon="el-icon-delete" size="mini" type="text" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import Table        from '@/layout/mixin/view/Table'
import { Common }   from '@/layout/mixin/view/Common'
import { DataBase } from '@/layout/mixin/view/DataBase'

export default {
  mixins: [Table, Common, DataBase],
  data() {
    return {
      tableConfig: [
        { type: 'selection', align: 'center', minWidth: '50px', show: true },
        { label: '编号', type: 'index', align: 'center', minWidth: '50px', show: true },
        { label: '姓名', prop: 'name', align: 'center', minWidth: '50px', show: true },
        { label: '性别', prop: 'sex', align: 'center', minWidth: '50px', show: true },
        { label: '年龄', prop: 'age', align: 'center', minWidth: '50px', show: true },
        { label: '民族', prop: 'nature', align: 'center', minWidth: '50px', show: true },
        { label: '职业', prop: 'job', align: 'center', minWidth: '50px', show: true },
        { label: '地址', prop: 'address', align: 'center', minWidth: '50px', show: true },
        { label: '电话号码', prop: 'phone', align: 'center', minWidth: '50px', show: true }
      ]
    }
  },
  created() {},
  methods: {
    handleDelete(row, index) {
      this.tableData.splice (index, 1) //删除表格中的数据
    }
  }
}
</script>
