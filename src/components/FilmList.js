import React, { Fragment } from 'react';
import Films from './Films'

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(<Films link={film.url}>{film.name}</Films>);
    });
    
    return (
    <Fragment>
        <h1>Upcoming Releases</h1>
        {filmNodes}
        <a href='https://www.imdb.com/calendar/?region=gb'><button>View More Upcoming Releases >></button></a>
    </Fragment>);
};


export default FilmList;