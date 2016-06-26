import React from 'react';
import {get} from '../utils/ajax';

export default class Plist extends React.Component{
  constructor(props){
    super(props);
    // 初始状态
    this.state = {"loading": false, "list":[]};
  }
  //当初次渲染完毕 设置该组件的属性firstView为true
  componentDidMount(){
    this.setState({"firstView": true});
  }
  //当传入的props有变化(在父组件 index.jsx 中的<Plist/>), 就是时候发起请求 更新列表的内容了
  componentWillReceiveProps(nextProps){
    let keyword = nextProps.keyword;
    // 加载状态
    // loading设为true，firstView设为false
    this.setState({"loading": true, 'firstView': false});
    let url = `https://api.github.com/search/users?q=${keyword}`;
    //发起ajax请求
    get(url).then((data) => {
      // 加载完成状态
      // 更新本组件的 state
      this.setState({"loading": false, "list": data.items});
    }).catch((error) => {
      console.error(error)
    });
  }
  render(){
      const imgStyle = {
        width: '50px'
      }
      //添加一些if else的判断，用来展示不同的内容
      if(this.state.firstView){
        return <h2> Enter name to Search </h2>
      }
      if(this.state.loading){
        return <h2> loading result...</h2>
      }else{
        if(this.state.list.length === 0){
          return <h2> No result </h2>
        }else{
          return (
            <div className="row">
              {this.state.list.map(people => {
                return (
                  <div className="card">
                    <img src={people.avatar_url} style={imgStyle}/>
                    <p calssName="card-text">
                      {people.login}
                    </p>
                  </div>
                )
              })}
            </div>
          )
        }
      }
  }
}
