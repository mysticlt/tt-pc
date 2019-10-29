// 提供 存储用户相关信息的API
// 约定: key=toutiao-pc-project
const KEY = 'toutiao-pc-project'
const local = {
  // 存储
  setUser (user) {
    // 把user对象转换成json字符串
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  // 获取
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
  },
  // 清除
  delUser () {
    window.sessionStorage.removeItem(KEY) // 也可用setItem(KEY,''),不能用clear
  }
}
export default local
