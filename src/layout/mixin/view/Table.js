export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {

    /**
     * 可以导入之后，用this.method的方式进行调用。
     */
    consoleLog() {
      console.log ('测试方法')
    },

    /**
     * 可用用在组件方法中
     * @param v1
     * @param v2
     */
    test(v1, v2) {
      console.log ('测试方法:', v1, v2)
    }
  }
}

