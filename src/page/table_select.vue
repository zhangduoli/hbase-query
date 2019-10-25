<template lang="html">
    <el-form ref="formData" :model="formData" label-width="80px">
    <el-form-item  label="表"> 
        {{submitData.tableName}}  
  </el-form-item>
  <el-form-item label="列族" >
    <el-select v-model="submitData.columnFamily" placeholder="请选择列族">
      <el-option v-for="(item,index) in formData.familys" :key="index" :label="item.value" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
  <el-row>
  <el-col :span="12">
      <div class="grid-content bg-purple">
        <el-form-item  label="Key前缀">
            <el-input :span="12" type="text" v-model="submitData.rowKeyPrefix"></el-input>    
        </el-form-item>
          </div></el-col>
 </el-row>
 <el-row>
  <el-col :span="12">
      <div class="grid-content bg-purple">
        <el-form-item  label="查询数量">
            <el-input :span="12" type="number" v-model="submitData.scanSize"></el-input>    
        </el-form-item>
          </div></el-col>
 </el-row>
 <div>
     <el-row :gutter="16" v-for="(filter,index) in submitData.filterValueVos" :key="index">
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <el-form-item label="字段">
                    <el-input type="text" v-model="filter.key"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <el-form-item label="操作符">
                    <el-select v-model="filter.operator" placeholder="请选择操作符">
                        <el-option label="小于" value="1"></el-option>
                        <el-option label="小于等于" value="2"></el-option>
                        <el-option label="等于" value="3"></el-option>
                        <el-option label="大于等于" value="4"></el-option>
                        <el-option label="大于" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </div>
        </el-col>
         <el-col :span="4">
             <div class="grid-content bg-purple">
                <el-form-item label="值">
                    <el-input type="text" v-model="filter.value"></el-input>
                </el-form-item>
             </div></el-col>
             <el-button type="danger" @click="del(index)">删除</el-button>
    </el-row>
 </div>
 <el-form-item > 
       <el-button type="text" icon="el-icon-plus" @click="add">添加查询条件</el-button>  
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="forward">查询</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          familys: []
        },
        submitData:{
            tableName: this.$route.params.tableName,
            zkHost: this.$route.params.zkHost,
            rowKeyPrefix: null,
            scanSize: 10,
            type: 0,
            columnFamily:'',
            filterValueVos:[
          ]
        }
      }
    },
    mounted() {
    this.$http
      .get("http://127.0.0.1:8099/hbase/get", {
        params: { zkHost: this.submitData.zkHost, table: this.submitData.tableName }
      })
      .then(res => {
        console.log(res.data.data);
        this.formData.familys = res.data.data;
        res = null;
      })
      .catch(error => {
        console.log("http error:" + error.data);
      });
  },
    methods: {
      add(){
          this.submitData.filterValueVos.push({
            key: '',
            operator: '',
            value: ''
          })
          console.log(this.submitData.filterValueVos)
      },
      del(index){
          this.submitData.filterValueVos.splice(index,1)
      },
      forward: function() {
        this.$router.push({
            name: "query",
            params: this.submitData
        });
      }
    }
  }
</script>