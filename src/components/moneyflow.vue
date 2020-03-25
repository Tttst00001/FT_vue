<template>
  <el-row>
    <el-col :span="6">
      <el-form label-width="80px">
        <el-form-item label="1时间">
          <el-date-picker v-model="moneyflowDate" @change="changeTradeDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyyMMdd" :picker-options="pickerOptions"></el-date-picker>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="24">
      <el-table :data="tableData" border show-summary height="750">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="0" label="TS代码"></el-table-column>
        <el-table-column prop="1" label="交易日期"></el-table-column>
        <el-table-column prop="2" label="小单买入量(手)"></el-table-column>
        <el-table-column prop="3" label="小单买入金额(万元)"></el-table-column>
        <el-table-column prop="4" label="小单卖出量(手)"></el-table-column>
        <el-table-column prop="5" label="小单卖出金额(万元)"></el-table-column>
        <el-table-column prop="6" label="中单买入金额(万元)"></el-table-column>
        <el-table-column prop="7" label="中单卖出量(手)"></el-table-column>
        <el-table-column prop="8" label="中单卖出金额(万元)"></el-table-column>
        <el-table-column prop="9" label="大单买入量(手)"></el-table-column>
        <el-table-column prop="10" label="大单买入金额(万元)"></el-table-column>
        <el-table-column prop="11" label="大单卖出量(手)"></el-table-column>
        <el-table-column prop="12" label="大单卖出金额(万元)"></el-table-column>
        <el-table-column prop="13" label="特大单买入量(手)"></el-table-column>
        <el-table-column prop="14" label="特大单买入金额(万元)"></el-table-column>
        <el-table-column prop="15" label="特大单卖出量(手)"></el-table-column>
        <el-table-column prop="16" label="特大单卖出金额(万元)"></el-table-column>
        <el-table-column prop="17" label="净流入量(手)"></el-table-column>
        <el-table-column prop="18" label="净流入额(万元)"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
import { getFinaMainbz } from '@/api/common'
export default {
  data () {
    return {
      tableData: [],
      moneyflowDate: '',
      pickerOptions: {
        shortcuts: [{
          text: '本月',
          onClick(picker) {
            picker.$emit('pick', [new Date(), new Date()]);
          }
        }, {
          text: '今年至今',
          onClick(picker) {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近六个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      submitForm: {
        api_name: 'moneyflow',
        token: 'c2284318d101be62a7d4c8d7a69cc67f14af57b58c1c3423f04c28cb',
        params: {}
      }
    }
  },
  methods: {
    changeTradeDate (value) { // 资金流向
      this.submitForm.params.start_date = value[0]
      this.submitForm.params.end_date = value[1]
      this.submitForm.params.ts_code = sessionStorage.getItem('ts_code')
      getFinaMainbz(this.submitForm).then(res => {
        this.tableData = res.items
      })
    }
  }
}
</script>
