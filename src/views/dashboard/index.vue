<template>
  <div>
    <el-form :inline="true" :model="form" size="mini">
      <el-form-item label="code">
        <el-input v-model="form.code" placeholder="code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Foo">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border height="500" style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="code" label="code"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="industry" label="板块" :filters="induList" :filter-method="filterHandler"></el-table-column>
      <el-table-column prop="close" label="收盘价"></el-table-column>
      <el-table-column prop="count" label="预计价格"></el-table-column>
      <el-table-column prop="rate" label="预计涨幅"></el-table-column>
      <el-table-column prop="min_np" label="每股净利润"></el-table-column>
      <el-table-column prop="min_na" label="每股净资产"></el-table-column>
      <el-table-column prop="dt_netprofit_yoy" label="净利润增长比"></el-table-column>
      <el-table-column prop="total_mv" label="总市值"></el-table-column>
      <el-table-column prop="goodwill" label="商誉"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { stock } from '@/api/common'
export default {
  data() {
    return {
      form: {
        code: ''
      },
      tableData: [
      ],
      induList: []
    }
  },
  methods: {
    Foo () {
      stock(this.form).then(res => {
        if (res.length > 0) {
          let arr = []
          this.tableData = res.sort((a, b) =>{
            if(arr.indexOf(a.industry) == '-1'){
              arr.push(a.industry)
            }
            return parseInt(b.rate) - parseInt(a.rate)
          })

          for(var key in arr){
            let obj = {
              text: arr[key],
              value: arr[key]
            }
            this.induList.push(obj)
          }

        } else {
          this.tableData = res
        }
      })
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>