import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import asyncComponent from './aysncComponent'
//合理使用异步路由与路由 获得更好的用户体验
//局部刷新

// // 主页面路由地址 使用异步路由
const Home = asyncComponent(() => import('./Page/Home/index'))
// 后台页面路由地址


class RootComponent extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            {/* 从上往下添加 否则Home会遍历 */}
            {/* 后台页面路由 */}

            {/* 主页面路由 */}
            {/* <Route path='/Login' component={Login} /> */}
            {/* <Route path='/Regist' component={Regist} /> */}
            <Route path='/' element={<Home />} />
            {/* <Route path='/login' element={<Login/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default RootComponent