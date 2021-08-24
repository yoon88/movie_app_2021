import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
      isLoading: true,
      movies: []
    };
    // 비동기 함수 async, await
    getMovies = async() => {
            // const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
            // console.log(movies.data.data.movies);
            const {
              data: {
                data :{movies}
              }
            } = await axios.get(
              "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
            );
            // console.log(movies);
            this.setState({movies, isLoading: false}); 
            //this.setState({movies:movies}) state : axios
    };
    componentDidMount(){
      // setTimeout(()=>{
      //   this.setState({isLoading: false});
      // }, 6000);
      this.getMovies();
    }
  render(){
    const {isLoading, movies} = this.state;
    // return <div>{isLoading ? "Loading" : "We are ready"}</div>;
    return (
    <section className ="container">
      {isLoading ? ( 
        <div className="loader">
          <span className = "loader__text_">Loading...</span>
        </div> 
    ) : (
      <div className="movies">
        {
          movies.map(movie=>(
              < Movie
                key={movie.id}
                d={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
          ))
        }
      </div>
    //    movies.map(movie => (
    //     <Movie 
    //       key={movie.id}
    //       id={movie.id} 
    //       year={movie.year} 
    //       title={movie.title} 
    //       summary={movie.summary} 
    //       poster={movie.medium_cover_image}
    //     />
    // ))
    )}
    </section>
    );
  }
}

export default App;
//이론적으로 우리가 할 일은 componentDidMount에서 data를 fetch하는 것
//그리고 API로부터 data fetching이 완료되면 we are ready 대신 movie를 render하고 map을 만들고
//movie를 render하기

//render -> componetDidMount 수행
//fetch, Axios
//axios : fetch 위에 있는 작은 레이어, 느림
//axios를 사용하기 위해 설치가 필요 : npm install axios
