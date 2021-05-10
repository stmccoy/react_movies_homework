import React, { Fragment } from 'react';
import Films from './Films'

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(<Films link={film.url}>{film.name}</Films>);
    });
    
    return (
    <Fragment>
        {filmNodes}
    </Fragment>);
};


export default FilmList;