<template>
  <div>
    <el-form :inline="true" :model="form" size="mini">
		<el-form-item>
			<el-button type="primary" @click="Foo">查询</el-button>
		</el-form-item>
    </el-form>
	
	<el-table :data="tableData" border height="500" style="width: 100%" v-loading="loading">
		<el-table-column type="index" width="50"></el-table-column>
		<el-table-column prop="code" label="code"></el-table-column>
		<el-table-column prop="name" label="名称"></el-table-column>
		<el-table-column prop="industry" label="行业"></el-table-column>
		<el-table-column prop="num" label="次数"></el-table-column>
		<el-table-column label="操作">
			<template slot-scope="scope">
				<p @click="info(scope.row.code)">详情</p>
			</template>
		</el-table-column>
    </el-table>
	
	<el-dialog title="详情" :visible.sync="toggle" width="90%" :before-close="handleClose">
		<el-table :data="infoTable" border height="500" style="width: 100%" v-loading="loading">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="ts_code" label="code"></el-table-column>
			<el-table-column prop="end_date" label="分红年度"></el-table-column>
			<el-table-column prop="ann_date" label="预案公告日"></el-table-column>
			<el-table-column prop="div_proc" label="实施进度"></el-table-column>
			<el-table-column prop="stk_div" label="每股送转"></el-table-column>
			<el-table-column prop="stk_bo_rate" label="每股送股比例"></el-table-column>
			<el-table-column prop="stk_co_rate" label="每股转增比例"></el-table-column>
			<el-table-column prop="cash_div" label="每股分红（税后）"></el-table-column>
			<el-table-column prop="cash_div_tax" label="每股分红（税前）"></el-table-column>
			<el-table-column prop="record_date" label="股权登记日"></el-table-column>
			<el-table-column prop="ex_date" label="除权除息日"></el-table-column>
			<el-table-column prop="pay_date" label="派息日"></el-table-column>
			<el-table-column prop="div_listdate" label="红股上市日"></el-table-column>
			<el-table-column prop="imp_ann_date" label="实施公告日"></el-table-column>
		</el-table>
		<span slot="footer" class="dialog-footer">
			<el-button @click="toggle = false">取 消</el-button>
			<el-button type="primary" @click="toggle = false">确 定</el-button>
		</span>
	</el-dialog>
  </div>
</template>
<script>
import { dividend, dividend_info } from '@/api/common'
export default {
  data() {
    return {
		toggle: false,
		loading: false,
		form: {
			code: '',
			year: ''
		},
		tableData: [],
		infoTable: []
    }
  },
  methods: {
	Foo () {
		this.loading = true;
		dividend().then(res => {
			if (res.length > 0) {
				this.tableData = res
				this.loading = false;
			} else {
				this.tableData = res;
				this.loading = false;
			}
		})
    },
	info (val) {
		this.toggle = true
		let args = {
			code: val
		}
		dividend_info(args).then(res => {
			for (let i = 0; i < res.length; i++) {
				if (res[i].stk_div > 5 || res[i].cash_div_tax > 5) {
					console.log(res[i])
				}
			}
			this.infoTable = res
		})
	},
	handleClose(done) {
        this.$confirm('确认关闭？').then(() => {
			done();
		})
    }
}
	

}
</script>