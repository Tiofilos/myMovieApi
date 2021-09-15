import React from 'react';  //Imports REACT into the file and allows for the creation of react components...see below.
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
export class MainView extends React.Component { //export makes this component available for use outside this file...here, I am basically telling react to create a new component.
    constructor(){  //this is used to create the movies component--> see below
        super();   //this calls/initializes the constructor of React.Component :if you don't need to use 'this.state' please omit super()
        this.state = {//this.state has a 'constructor' method used to create the movie component: it must be called before 'render'
            movies: [
                { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...'},
                { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...'},
                { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...'}
            ]
    }}
setSelectedMovie(newSelectedMovie) {
    this.setState({
        selectedMovie: newSelectedMovie
      });
    }
        
             
        
render() { //render returns the visual representation of the component...what'll be shown on screen. This function can only have one root html element.
    const {movies, selectedMovie} = this.state;
    
if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

return (
    <div className="main-view">
    {selectedMovie
        ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
        : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
        ))
    }
    </div>
  );
}

}

//     if (selectedMovie) return <MovieView movie={selectedMovie} />; //this returns moviecard when clicked
//     if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
//     return (
//          <div className="main-view">
//         {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: newSelectedMovie }); }} />)}
//     </div>
//   );
// }}


//         return (
//         <div className="main-view"> 
//             <div>Inception</div>
//             <div>The Shawshank Redemption</div>
//             <div>Gladiator</div>
//         </div>
//         );
//     }
// }
// export default MainView; //if an element doesn't have children, write it this way ---> <div /> instead of <div><div/>
//note that <div>, <span> or <React.Fragment></React.Fragment> or better still, just , <> </> ,can be used to wrap round a group of html elements
