import React from 'react';
import classes from './Search.module.scss';

const Search = () => {


    return (
        <div>
            <img src="logo.jpg" className={classes.Logo} />
            <div className={classes.Profile}>
                <img src="profpic.jpg" />
                <h3>mockuser</h3>
            </div>
            <div className={classes.SearchBar}>
                <img src=""/>
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