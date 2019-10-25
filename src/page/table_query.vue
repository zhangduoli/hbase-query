  <template >
    <el-table
    :data="datas"
      style="width: 100%">
      <el-table-column :label="label" :prop="prop"  v-for="{prop, label} in colConfigs" width="500" :key="prop">
      </el-table-column>
    </el-table>
  </template>
<script>

export default {
  data() {
    return {
      tableName: this.$route.params.tableName,
      datas: [],
      colConfigs :[
      { prop: 'id', label: 'id' },
      { prop: 'field', label: '字段' },
      { prop: 'value', label: '值' }
    ]
    };
  },
  mounted() {
    this.$http
      .post(
        "http://127.0.0.1:8099/hbase/query",JSON.stringify(
          {
            zkHost: this.$route.params.zkHost,
            tableName: this.$route.params.tableName,
            columnFamily: this.$route.params.columnFamily,
            rowKeyPrefix: this.$route.params.rowKeyPrefix,
            scanSize: this.$route.params.scanSize,
            type: this.$route.params.type,
            filterValueVos: this.$route.params.filterValueVos
        }),
        {
          emulateJSON: true
        }
      )
      .then(res => {
        for(let item of res.data.data){
          for (let key of Object.keys(item)){
            this.datas.push({
              "id":0,
              "field":key,
              "value":item[key]
            })
          }
        }
      }).catch(error => {
        console.log("http error:" + error);
      });
  },
  methods:{
    convert(obj){
    }
  }
};
</script>
 
<style lang="css" scoped>
.movie-name {
  line-height: 1.2rem;
  font-size: 0.8rem;
}
</style>