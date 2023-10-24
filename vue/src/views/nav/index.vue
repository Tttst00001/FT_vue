<template>
  <div>
    <el-button @click="clicka">默认按钮</el-button>
  </div>
</template>
<script>
import { getFinaMainbz } from '@/api/common'
export default {
  data () {
    return {

    }
  },
  methods: {
    clicka () {
      let args = {
        api_name: '_get_growth_data',
        token: 'c2284318d101be62a7d4c8d7a69cc67f14af57b58c1c3423f04c28cb',
        params: {
          year: '2018,3'
        }
      }
      console.log(args)
      getFinaMainbz().then(res => {
        console.log(res)
      })

    }
  }
}
</script>

