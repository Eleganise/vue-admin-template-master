<template>
  <div class="app-container">
    <div class="block">
      <span class="demonstration">显示总数</span>
      <el-pagination
          :current-page.sync="currentPage1"
          :page-size="100"
          :total="1000"
          layout="total, prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">调整每页显示条数</span>
      <el-pagination
          :current-page.sync="currentPage2"
          :page-size="100"
          :page-sizes="[100, 200, 300, 400]"
          :total="1000"
          layout="sizes, prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">直接前往</span>
      <el-pagination
          :current-page.sync="currentPage3"
          :page-size="100"
          :total="1000"
          layout="prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
          :current-page="currentPage4"
          :page-size="100"
          :page-sizes="[100, 200, 300, 400]"
          :total="400"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log (`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log (`当前页: ${val}`)
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  }
}
</script>
