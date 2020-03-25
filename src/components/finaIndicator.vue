<template>
  <el-row>
    <el-col :span="6">
      <el-form label-width="80px">
        <el-form-item label="时间">
          <el-date-picker v-model="moneyflowDate" @change="changeTradeDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyyMMdd" :picker-options="pickerOptions"></el-date-picker>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
