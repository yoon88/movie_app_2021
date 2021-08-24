import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };
  add = () =>{
    console.log("add");
    // this.setState({count:this.state.count+1}) 
    //this.state.count 이런식의 코딩은 추천하지 않음. 이렇게 state를 사용하는 것은 좋지 않음 아래를 더 추천함
    //아래의 방법이 state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법.
    //매번 setState를 호출할때마다 react는 새로운 state와 함께 render function을 호출함
    this.setState(current =>({count:current.count+1}))
  };
  minus = () =>{
    console.log("minus");
    // this.setState({count: this.state.count-1})
    this.setState(current=>({count:current.count-1}))
  };
  componentDidMount(){
    console.log("Component rendered");
  }
  componentDidUpdate(){
    console.log("I just Updated");
  }
  render(){
    console.log("I'm rendering");
    return ( 
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;


//react는 자동적으로 class component의 rendar method를 실행함.
//state is object. component의 data를 넣을 공간이 있고 이 데이터는 변함 이것이 state를 사용해야하는 이유

//lifeCycle : Mounting, Updating, Unmounting 