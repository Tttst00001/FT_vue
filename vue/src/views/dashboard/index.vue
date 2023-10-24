<template>
  <div>
    <el-form :inline="true" :model="form" size="mini">
		<el-form-item label="code">
			<el-input v-model="form.code" placeholder="code"></el-input>
		</el-form-item>
		<el-form-item label="year">
			<el-select v-model="form.year" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="Foo">查询</el-button>
		</el-form-item>
    </el-form>
	
	<el-table :data="tableData" border height="500" style="width: 100%" v-loading="loading">
		<el-table-column type="index" width="50"></el-table-column>
		<el-table-column prop="code" label="code"></el-table-column>
		<el-table-column prop="name" label="名称"></el-table-column>
		<el-table-column prop="industry" label="板块" :filters="induList" :filter-method="filterHandler"></el-table-column>
		<el-table-column prop="close_s" label="年初收盘价"></el-table-column>
		<el-table-column label="今日收盘价">
			<template slot-scope="scope">
				<p v-if="scope.row.close < scope.row.close_s">
					<span style="color: red; font-weight:bold">{{scope.row.close}}</span>
				</p>
				<p v-else><span style="color: blue;font-weight:bold">{{scope.row.close}}</span></p>
			</template>
		</el-table-column>
		<el-table-column label="实际涨幅">
			<template slot-scope="scope">
				{{((scope.row.close - scope.row.close_s) / scope.row.close_s *100).toFixed(2) }}
			</template>
		</el-table-column>
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
		loading: false,
		options: [
			{
				value: 2018,
				label: 2018
			},
			{
				value: 2019,
				label: 2019
			}
		],	
		form: {
			code: '',
			year: ''
		},
		tableData: [],
		induList: []
    }
  },
  methods: {
    Foo () {
		this.loading = true;
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
				this.loading = false;
			} else {
				this.tableData = res;
				this.loading = false;
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