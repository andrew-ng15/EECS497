import React from 'react';
import classes from './Search.module.scss';
import profpic from './uploads/profpic.jpg';
import logo from './uploads/logo.jpg';
import search from './uploads/search.png'

const Search = () => {


    return (
        <div className={classes.Search}>
            <img src={profpic} className={classes.Logo} />
            <div className={classes.Profile}>
                <img src={logo} />
                <h3>mockuser</h3>
            </div>
            <div className={classes.SearchBar}>
                <img src={search} />
                <form>
                    <input className={classes.Text} type="text" placeholder="Search For Events" />
                    <input className={classes.Submit} type="submit" value="search" />
                    <input type="hidden" name="operation" value="search" />
                </form>
            </div>
        </div>
    );
};

export default Search;