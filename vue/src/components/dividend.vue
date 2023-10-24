<template>
  <el-row>
    <el-col :span="24">
      <el-table :data="tableDate" border>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="1" label="TS代码"></el-table-column>
        <el-table-column prop="1" label="分红年度"></el-table-column>
        <el-table-column prop="2" label="预案公告日"></el-table-column>
        <el-table-column prop="3" label="实施进度"></el-table-column>
        <el-table-column prop="4" label="每股送转"></el-table-column>
        <el-table-column prop="5" label="每股送股比例"></el-table-column>
        <el-table-column prop="6" label="每股转增比例"></el-table-column>
        <el-table-column prop="7" label="每股分红(税后)"></el-table-column>
        <el-table-column prop="8" label="每股分红(税前)"></el-table-column>
        <el-table-column prop="9" label="股权登记日"></el-table-column>
        <el-table-column prop="10" label="除权除息日"></el-table-column>
        <el-table-column prop="11" label="派息日"></el-table-column>
        <el-table-column prop="12" label="红股上市日"></el-table-column>
        <el-table-column prop="13" label="实施公告日"></el-table-column>
        <el-table-column prop="14" label="基准日"></el-table-column>
        <el-table-column prop="15" label="基准股本(万)"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
import { getFinaMainbz } from '@/api/common'
export default {
  data () {
    return {
      tableDate: [],
      submitForm: {
        api_name: 'dividend',
        token: 'c2284318d101be62a7d4c8d7a69cc67f14af57b58c1c3423f04c28cb',
        params: {
          ts_code: sessionStorage.getItem('ts_code')
        }
      }
    }
  },
  created () {
    this.getDate()
  },
  methods: {
    getDate () {
      getFinaMainbz(this.submitForm).then(res => {
        this.tableDate = res.items
      })
    }
  }
}
</script>
