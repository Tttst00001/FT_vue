<template>
  <div>
    <el-form :inline="true" :model="form" size="mini">
      <el-form-item label="代码">
        <el-input v-model="form.ts_code" placeholder="code"></el-input>
      </el-form-item>
      <el-form-item label="单日">
        <el-date-picker v-model="form.trade_date" type="date" value-format="yyyyMMdd" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="期间">
        <el-date-picker v-model="timeArr" value-format="yyyyMMdd" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" @change="getTime"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getData">查询</el-button>
      </el-form-item>
    </el-form>
    <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
	{{echart.count}}
  </div>
</template>
<script>
import { moneyflow } from '@/api/common'
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      form: {
        ts_code: '',
        trade_date: '',
        start_date: '',
        end_date: ''
      },
      timeArr: [],
      msg: 'Welcome to Your Vue.js App',
      echart: {
        trade_date: [],
        buy_sm_vol: []
      }
    }
  },
  methods: {
    getTime (val) {
      this.form.start_date = val[0]
      this.form.end_date = val[1]
    },
    getData () {
      if(this.form.ts_code.length < 6){
        return false
      }
      if(this.form.ts_code.substring(0,1) == '0' || this.form.ts_code.substring(0,1) == '3'){
        this.form.ts_code = this.form.ts_code + '.SZ'
      } else {
        this.form.ts_code = this.form.ts_code + '.SH'
      }
      moneyflow(this.form).then(res => {
        this.echart = res
        this.drawLine();
      })
    },
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        color: ['orange', 'red', 'green', 'red', 'green', 'red', 'green', 'red', 'green', 'red'],
        title: {text: '折线图堆叠'},
        tooltip: {trigger: 'axis'},
        legend: {
          data: ["收盘价", "小单买入金额", "小单卖出金额", "中单买入金额", "中单卖出金额", "大单买入金额", "大单卖出金额", "特大单买入金额", "特大单卖出金额", "净流入额"]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          // boundaryGap: false,
          data: this.echart.trade_date
        },
        yAxis: {
          type: 'value'
        },
    series: [
      {
        name: '收盘价',
        type: 'line',
        smooth: true,
        data: this.echart.close
      },
      {
        name: '小单买入金额',
        type: 'line',
        smooth: true,
        data: this.echart.buy_sm_amount
      },
      {
        name: '小单卖出金额',
        type: 'line',
        smooth: true,
        data: this.echart.sell_sm_amount
      },
      {
        name: '中单买入金额',
        type: 'line',
        smooth: true,
        data: this.echart.buy_md_amount
      },
      {
        name: '中单卖出金额',
        type: 'line',
        smooth: true,
        data: this.echart.sell_md_amount
      },
      {
        name: '大单买入金额',
        type: 'line',
        smooth: true,
        data: this.echart.buy_lg_amount
      },
      {
        name: '大单卖出金额',
        type: 'line',
        smooth: true,
        data: this.echart.sell_lg_amount
      },
      {
        name: '特大单买入金额',
        type: 'line',
        smooth: true,
        data: this.echart.buy_elg_amount
      },
      {
        name: '特大单卖出金额',
        type: 'line',
        smooth: true,
        data: this.echart.sell_elg_amount
      },
      {
        name: '净流入额',
        type: 'line',
        smooth: true,
        data: this.echart.net_mf_amount
      }
    ]
});
    }
  }
}
</script>