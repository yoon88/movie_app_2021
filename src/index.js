import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App /> component : react는 component와 함께 동작
//App.js의 function App()에 있는 HTML을 반환하는 함수
//Javascript와 HTML 사이의 조합을 jsx라고 함, react에서 나온 매우 custom한 유일한 개념
// ReactßDOM.render(
//  <React.StrictMode>
//     <App />
//  </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById("root")); //와 동일함
// ReactDOM.render(<App/><Potato/>, document.getElementById('root')); 는 에러 발생
// Potato가 출력되기를 원한다면 App안에 선언해야함
//<React.stricMode> 가 있는 상태로는 2개이상의 component수행 가능 , 개발 모드에만 영향을 끼침, create-react-app으로 프로젝트를 생성하면 자동으로 추가
//하지만 실제로는 오직 1개의 component 수행 가능
//rendering : data --> html로 변환하여 renderer에게 전달하는 작업(모니터 출력)

//!important!
//react application은 한번에 하나의 component만 rendering할 수 있으므로 모든 것은 application(App)안에 들어가야 함
//applictaion안에서 많은 component를 넣을 수 있고, 이러한 component안에 더 많은 component를 import 할 수 있음 


//React 장점!!!!!
// 재사용이 가능한 component를 만들 수 있다는 점
// 즉, component를 계속해서 반복해서 사용할 수 있다는 것