<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 未执行的订单
        </el-breadcrumb-item>
        <el-breadcrumb-item>修改订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="120px" class="inputDeep">
          <el-form-item label="传感器设备编号">
            <el-input v-model="form.deviceId" :readonly="true"></el-input>
          </el-form-item>
          <el-form-item label="始发地">
            <el-input v-model="form.starting" :readonly="true"></el-input>
          </el-form-item>
          <el-form-item label="目的地">
            <el-input v-model="form.destination" :readonly="true"></el-input>
          </el-form-item>
          <el-form-item label="司机姓名">
            <el-input v-model="form.driverName" :readonly="true"></el-input>
          </el-form-item>
          <el-form-item label="车牌号">
            <el-input v-model="form.carId" :readonly="true"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phoneNum" :readonly="true"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="goBack">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseform',
  data() {
    return {
      form:{},
    };
  },

  created () {
    this.form = this.$route.query.oneOrderhis;

  },

  methods: {
    goBack(){
      this.$router.push({path:'/processedOrdersSum',})
    }
  },
  watch: {
    '$route'(to,from){
      if (this.$route.query.oneOrderhis !== undefined && this.$route.query.oneOrderhis !==  "[object Object]") {
        // 参数变化 复用 mounted里面的方法
        this.form = this.$route.query.oneOrderhis;
        this.$forceUpdate();
      }

    }
  }

};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
/* 利用穿透，设置input边框隐藏 */
.inputDeep>>>.el-input__inner {
  border: 0;
  border-radius: 0px;
  border-bottom: 1px solid #666666;
}
</style>