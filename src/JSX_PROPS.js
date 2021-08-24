import React from 'react';
import PropTypes from "prop-types";

// import Potato from './Potato';

// function Potato(){
//   return <h1>I like Potato</h1>
// }

//동적할당을 위해.
const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5
  },
  {
    id:2,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.9
  }
];
// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />
// }

function Food({name, picture, rating}){
  //인자를 props로 주고, props.fav라고 해도 됨
  // return <h1>I like {name}</h1>
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
    {/* alt는 시각장애인들을 위한 것으로 작성해주지 않으면 경고 발생 */}
    {/* father  */}
  </div>)
}
Food.propTypes ={
  // 일종의 유효성 검사
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  // isRequired은 필수라는 의미 (Props type react를 검색하면 알수있음)
};
function App() {
  return (
  <div>
    {/* <h1>Hello!!!!!</h1>
    <Potato />
    //1단계
    <Food fav="kimchi"/> 
    <Food fav="fish"/>
    <Food fav="corn"/>
    <Food fav="peach"/> */}
    {/* 2단계 */}
    {foodILike.map(dish =>(
      <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating}
        />
    ))}
    {/* 또다른 방법. 함수를 새로 작성하여 호출. 이거보다는 2단계가 함수를 작성하지 않아도 되어서 좋음 */}
    {/* {foodILike.map(renderFood)} */}
  </div>
  );
}

export default App;

/*jsx, food component에 fav라는 이름의 property를 kimchi라는 value로 준 것, 원하는 많은 props 전달 가능(bool, array ...)*/
//map : array의 각 item에서 function을 실행하는 array를 가지는 javascript function이며 그 function의 result를 갖는 array를 넘겨줌
//ex) friends =["dal","mark","lynn","kate"];
// friends.map(function(current){
//     console.log(current);
//     return 0
// })
// dal
// mark
// lynn
// kate
// (4) [0, 0, 0, 0]

// friends.map(function(friend){
//   return friend + " 💕";
// })
// (4) ["dal 💕", "mark 💕", "lynn 💕", "tell 💕"]

//state 개념
//보통 동적데이터와 함께 작업할 때 만들어지며 변하는 데이터, 존재하지 않는 데이터 같은 dynamic data.
//그때 필요한 state