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
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="传感器设备编号">
            <el-select v-model="form.deviceId" filterable placeholder="请选择传感器设备编号">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="始发地">
            <el-input v-model="form.starting" placeholder="请填写始发地址，例如：北京市-海淀区-西土城路10号-北京邮电大学"></el-input>
          </el-form-item>
          <el-form-item label="目的地">
            <el-input v-model="form.destination" placeholder="请填目的地地址，例如：北京市-海淀区-裕民中路6号-北京市农业局"></el-input>
          </el-form-item>
          <el-form-item label="司机姓名">
            <el-input v-model="form.driverName" placeholder="请填写司机姓名，例如：张三"></el-input>
          </el-form-item>
          <el-form-item label="车牌号">
            <el-input v-model="form.carId" placeholder="请填写车牌号，例如：京A123456"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phoneNum" placeholder="请填写司机手机号，例如：13812341234"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">表单提交</el-button>
            <el-button @click="goBack">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { sendData } from '../../api/index';
import { changeOrderState } from '../../api/index';
export default {
  name: 'baseform',
  data() {
    return {
      option: [{
        value: 1,
        label: '设备1'
      }, {
        value: 2,
        label: '设备2'
      }, {
        value: 3,
        label: '设备3'
      }, {
        value: 4,
        label: '设备4'
      }, {
        value: 5,
        label: '设备5'
      },{
        value: 6,
        label: '设备6'
      },{
        value: 7,
        label: '设备7'
      },{
        value: 8,
        label: '设备8'
      },{
        value: 9,
        label: '设备9'
      },{
        value: 10,
        label: '设备10'
      },{
        value: 11,
        label: '设备11'
      },{
        value: 12,
        label: '设备12'
      },{
        value: 13,
        label: '设备13'
      },{
        value: 14,
        label: '设备14'
      },{
        value: 15,
        label: '设备15'
      },{
        value: 16,
        label: '设备16'
      },{
        value: 17,
        label: '设备17'
      },{
        value: 18,
        label: '设备18'
      },{
        value: 19,
        label: '设备19'
      },{
        value: 20,
        label: '设备20'
      }],
      query: {},
      form: {},
    };
  },

  created () {
    this.form = this.$route.query.oneOrder;

  },

  methods: {
    goBack(){
      this.$router.push({path:'/processingOrdersSum',})
    },

    onSubmit() {
      // this.query = JSON.stringify(this.form);
      sendData(this.form);
      console.log(this.form);
      changeOrderState(this.form.id,1);
      this.$message.success('提交成功！');
      this.$router.push({path:'/processingOrdersSum',})
      // this.$set(this.tableData, this.idx, this.form);
    }
  },
  watch: {
    '$route'(to,from){
      if (this.$route.query.oneOrder !== undefined && this.$route.query.oneOrder !==  "[object Object]") {
        // 参数变化 复用 mounted里面的方法
        this.form = this.$route.query.oneOrder;
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

</style>