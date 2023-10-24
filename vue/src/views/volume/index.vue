<template>
  <div>
    <el-form :inline="true" :model="form" size="mini">
		<el-form-item label="code">
			<el-input v-model="form.code" placeholder="code"></el-input>
		</el-form-item>
		<el-form-item label="期间">
			<el-date-picker v-model="timeArr" value-format="yyyyMMdd" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" @change="getTime"></el-date-picker>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="Foo">查询</el-button>
		</el-form-item>
    </el-form>
	
	<el-table :data="tableData" border height="500" style="width: 100%" v-loading="loading">
		<el-table-column type="index" width="50"></el-table-column>
		<el-table-column prop="code" label="code"></el-table-column>
		<el-table-column prop="name" label="名称"></el-table-column>
		<el-table-column prop="bs" label="倍数"></el-table-column>
		<el-table-column prop="todayC" label="当日收盘价"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { volume } from '@/api/common'
export default {
  data() {
    return {
		loading: false,
		pickerOptions: {
			shortcuts: [
				{
					text: '最近一周',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', [start, end]);
					}
				},
				{
					text: '最近一个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				},
				{
					text: '最近三个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						picker.$emit('pick', [start, end]);
					}
				}
			]
		},	
		form: {
			code: '',
			start_date: '',
			end_date: ''
		},
		tableData: [],
		timeArr: [],
    }
  },
  methods: {
    Foo () {
		this.loading = true;
		volume(this.form).then(res => {
			if (res.length > 0) {
				
			} else {
				this.tableData = res;
				this.loading = false;
			}
		})
    },
	getTime (val) {
      this.form.start_date = val[0]
      this.form.end_date = val[1]
    }
  }
}
</script>