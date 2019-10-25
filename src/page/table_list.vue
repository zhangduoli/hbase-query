<template>
  <el-row>
    <el-row>
        <el-col><el-button type="text" v-if=!newHost @click="open">点击添加zookeeper地址</el-button></el-col>
    </el-row>
    <el-row>
        <el-col :span="6" v-if="host!=''"><div class="grid-content bg-purple">HBase Zookeeper地址为：{{host}}</div></el-col>
        <el-col :span="6" v-if="host!=''"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-edit" @click="open">修改</el-button></div></el-col>
    </el-row>
  <el-table
    :data="tables"
    style="width: 100%"
    max-height="100%">
    <el-table-column
      label="表名"
      prop="value">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="searchText"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="query(scope.row.value)">查询</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      newHost: false,
      searchText: '',
      host: '',
      tables: []
    };
  },
  methods: {
    open:function(){
        this.$prompt('请输入zookeeper地址', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/,
          inputErrorMessage: '地址格式不正确[ip:port]'
        }).then(({ value,action}) => {
          if (action === 'confirm') {
            this.host = value
            this.newHost = true
            console.log(this.host)
            this.searchList()
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
    query: function(item) {
      this.$router.push({
        name: "select",
        params: {
          zkHost: this.host,
          tableName: item
        }
      });
    },
    searchList:function(){
      this.$http
      .get("http://127.0.0.1:8099/hbase/list", {
        params: { zkHost: this.host }
      })
      .then(res => {
        this.tables = res.data.data;
        res = null;
      })
      .catch(error => {
        console.log("http error:" + error.data);
      });
    }
  }
};
</script>
 
<style lang="css" scoped>
.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>