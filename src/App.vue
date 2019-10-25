<template lang="html">
  <div class="container">
    <!--  引入的header组件 -->
    <headerNav></headerNav>
    <div class="content">
      <router-view></router-view>  <!-- 这里是展示来自路由页面数据的 -->
    </div>
    <!--  引入的footer组件 -->
    <footerNav></footerNav>
  </div>
</template>
<script>
/* 引用组件 */
import headerNav from "@/components/headerNav";
import footerNav from "@/components/footerNav";
 
export default {
  data() {
    return {
    };
  },
  components: {
    headerNav,
    footerNav,
  },
  mounted(){},
};
</script>
 
<style lang="css">
blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}html{overflow-y:scroll}body{font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;font-size:14px;-webkit-font-smoothing:antialiased;background-color:#fff;position:relative}ul,ol{list-style:none}a{text-decoration:none;}em{font-style:normal}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0 none} a{color: inherit} .clear::after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.clear{*zoom:1} .ui-transition { -webkit-transition: ease 0.35s; -moz-transition: ease 0.35s; -ms-transition: ease 0.35s; -o-transition: ease 0.35s; transition: ease 0.35s; } .b1{color: #646262;}.b2{color: #555454;} .o1{color: #f16f47;} .r1{color: rgb(233, 10, 103)} .g1{color: #42b983} .bl{color: #2c3e50;} body{background-color: rgba(233, 233, 233, .5);} .container { width: 100%; padding: 2rem 0; position: relative; }
</style>