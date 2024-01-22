<template>
  <div class="app-container">

    <!-- 样式1 -->
    <div class="body">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>

    <!-- 样式2 -->
    <div class="body">
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>

    <!-- 样式3 -->
    <div class="body">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>

    <!-- 样式4 -->
    <div class="body">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>

    <!-- 样式5 -->
    <div class="body">
      <div style="margin-bottom: 20px;">
        <el-button
            size="small"
            @click="addTab(editableTabsValue)"
        >
          add tab
        </el-button>
      </div>
      <el-tabs v-model="editableTabsValue" closable type="card" @tab-remove="removeTab">
        <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

      activeName: 'second',

      tabPosition: 'left',

      editableTabsValue: '2',

      editableTabs: [
        {
          title  : 'Tab 1',
          name   : '1',
          content: 'Tab 1 content'
        }, {
          title  : 'Tab 2',
          name   : '2',
          content: 'Tab 2 content'
        }
      ],

      tabIndex: 2

    }
  },

  methods: {

    handleClick(tab, event) {
      console.log (tab, event)
      console.log (this.activeName)
    },

    addTab(targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push ({
        title  : 'New Tab',
        name   : newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    },

    removeTab(targetName) {
      let tabs = this
      let activeName = this.editableTabsValue
      if ( activeName === targetName ) {
        tabs.forEach ((tab, index) => {
          if ( tab.name === targetName ) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if ( nextTab ) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter (tab => tab.name !== targetName)
    }

  }

}
</script>
