import { Layout, Menu, Breadcrumb } from "antd"
import React from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../../store/actions/Authentication/auth"
const { Header, Content } = Layout
class CustomLayout extends React.Component {
  render() {
    return (
      <>
        <nav class='navbar navbar-expand-sm navbar-dark bg-primary '>
          <button
            class='navbar-toggler collapsed'
            type='button'
            data-toggle='collapse'
            data-target='#navbarsExample10'
            aria-controls='navbarsExample10'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>

          <div
            class='navbar-collapse justify-content-sm-center collapse'
            id='navbarsExample10'>
            <ul class='navbar-nav'>
              {this.props.isAuthenticated ? (
                <li class='nav-item active'>
                  <Link class='nav-link' onClick={this.props.logout} href='#'>
                    Logout <span class='sr-only'>(current)</span>
                  </Link>
                </li>
              ) : (
                <li class='nav-item active'>
                  <Link class='nav-link' to='/login'>
                    Login <span class='sr-only'>(current)</span>
                  </Link>
                </li>
              )}
              <li class='nav-item'>
                <Link class='nav-link' to='/'>
                  Posts
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <Layout className='layout'>
          <Header>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["2"]}>
              {this.props.isAuthenticated ? (
                <Menu.Item key='2' onClick={this.props.logout}>
                  Logout
                </Menu.Item>
              ) : (
                <Menu.Item key='2'>
                  <Link to='/login'>Login</Link>
                </Menu.Item>
              )}
              <Menu.Item key='1'>
                <Link to='/'>Post</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to='/'>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to='/'>List</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className='site-layout-content'>{this.props.children}</div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> </Layout> */}
        <div className='container pt-5'>{this.props.children}</div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  }
}
export default withRouter(connect(null, mapDispatchToProps)(CustomLayout))

// import React from "react"
// import { Layout, Menu, Breadcrumb } from "antd"
// import { Link, withRouter } from "react-router-dom"
// import { connect } from "react-redux"
// import * as actions from "../store/actions/auth"

// const { Header, Content, Footer } = Layout

// class CustomLayout extends React.Component {
//   render() {
//     return (
//       <Layout className='layout'>
//         <Header>
//           <div className='logo' />
//           <Menu
//             theme='dark'
//             mode='horizontal'
//             defaultSelectedKeys={["2"]}
//             style={{ lineHeight: "64px" }}>
//             {this.props.isAuthenticated ? (
//               <Menu.Item key='2' onClick={this.props.logout}>
//                 Logout
//               </Menu.Item>
//             ) : (
//               <Menu.Item key='2'>
//                 <Link to='/login'>Login</Link>
//               </Menu.Item>
//             )}

//             <Menu.Item key='1'>
//               <Link to='/'>Posts</Link>
//             </Menu.Item>
//           </Menu>
//         </Header>
//         <Content style={{ padding: "0 50px" }}>
//           <Breadcrumb style={{ margin: "16px 0" }}>
//             <Breadcrumb.Item>
//               <Link to='/'>Home</Link>
//             </Breadcrumb.Item>
//             <Breadcrumb.Item>
//               <Link to='/'>List</Link>
//             </Breadcrumb.Item>
//           </Breadcrumb>
//           <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
//             {this.props.children}
//           </div>
//         </Content>
//         <Footer style={{ textAlign: "center" }}>
//           Ant Design ©2016 Created by Ant UED
//         </Footer>
//       </Layout>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(actions.logout()),
//   }
// }

// export default withRouter(connect(null, mapDispatchToProps)(CustomLayout))