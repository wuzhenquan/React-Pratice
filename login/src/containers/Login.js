import React from 'react'
import { connect } from 'react-redux'
import {inputUsername, inputPassword} from 'actions/login'


class Login extends React.Component{
	inputUsernameHandler(evt){
		this.props.dispatch(inputUsername(evt.target.value))
	}
	inputPasswordHandler(evt){
    this.props.dispatch(inputPassword(evt.target.value))
  }
  render(){
    return (
      <div>
        <div>早上好，{this.props.username}</div>
        <div>用户名：<input onChange={this.inputUsernameHandler.bind(this)}/></div>
        <div>密　码：<input type="papssword" onChange={this.inputPasswordHandler.bind(this)}/></div>
        <button>登录</button>
      </div>
    )
  }
}

// 这个 mapStateToProps 函数返回的对象就是从仓库去除的数据, 具体的数据等我们写完reducer再补充
function mapStateToProps(state){
  return (
		{
			username: state.login.username,
			password: state.login.password
		}
	)
}
// 用 connect 方法和外界打交道
// connect 的功能就是把组件和 redux 的 store 连接起来
export default connect(mapStateToProps)(Login)
