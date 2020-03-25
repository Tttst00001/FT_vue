<template>
  <el-row id="wrapper">
    <el-col :span="24" class="header">
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="0">预算价格</el-menu-item>
        <el-menu-item index="1">资金走势</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="24" class="container">
      <router-view/>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      navList: [],
      activeIndex: '0'
    }
  },
  created () {
    // let routerMap = JSON.parse(sessionStorage.getItem('routerMap'))
    // this.navList = routerMap[0].children
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case '0':
          this.$router.push({ path: '/dashboard' })
          break
        case '1':
          this.$router.push({ path: '/moneyflow' })
          break
        default:
          console.log(key)
      }
    }
  }
}
</script>
<style>
*{margin: 0; padding: 0;}
.el-menu{ margin: 0 0 20px 0;}
.container{ padding: 0 10px;}
</style>
