<template>
  <div class="container-fans">
    <el-card>
      <div slot="header">
        <my-bread>粉丝管理</my-bread>
      </div>
      <!-- tabs组件 -->
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="粉丝列表" name="list" class="fans_list">
          <div class="fans_item" v-for="item in fansList" :key="item.id.toString()">
            <el-avatar :size="80" :src="item.photo"></el-avatar>
            <p>{{item.name}}</p>
            <el-button type="primary" size="small" plain>+关注</el-button>
          </div>
          <!-- 分页 -->
          <el-pagination
            style="margin-top:20px"
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="reqParams.per_page"
            :current-page="reqParams.page"
            @current-change="pager"
          ></el-pagination>
        </el-tab-pane>
        <el-tab-pane label="粉丝画像" name="pic"></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import defaultImage from '../../assets/avatar.jpg'
export default {
  data () {
    return {
      activeName: 'list',
      defaultImage,
      fansList: [],
      reqParams: {
        page: 1,
        per_page: 21
      },
      total: 0
    }
  },
  created () {
    this.getFanList()
  },
  methods: {
    async getFanList () {
      const {
        data: { data }
      } = await this.$http.get('/followers', { params: this.reqParams })
      this.fansList = data.results
      this.total = data.total_count
    },
    pager (newPage) {
      this.reqParams.page = newPage
      this.getFanList()
    }
  }
}
</script>

<style lang="less" scoped>
.fans_list {
  .fans_item {
    width: 133px;
    height: 190px;
    text-align: center;
    border: 1px dashed #dddddd;
    padding-top: 20px;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
