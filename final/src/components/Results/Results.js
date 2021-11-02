import React from 'react';
import classes from './Results.module.scss';

const Results = () => {
    return (
        <div className={classes.results}>
            <div className={classes.post}>
                <img src="1.jpg" width="300" height="200" alt="image failed kekw" />
                Name: John Smith
                <div></div>
                Interests: Hang gliding, Kayaking, Comedy, Jazz Concerts
                <div></div>
                Contact: john.smith@rocketmail.com
            </div>
            <div className={classes.padder}></div>
            <div className={classes.post}>
                <img src="2.jpg" width="300" height="200" alt="image failed kekw" />
                Name: Sara Hodler
                <div> </div>
                Interests: Hiking, Concerts, Baking, Karate
                <div> </div>
                Contact: sarsar122@gmail.com
            </div>
            <div className={classes.padder}></div>
            <div className={classes.post}>
                <img src="3.jpg" width="300" height="200" alt="image failed kekw" />
                Name: Alfonso Paton
                <div></div>
                Interests: Rock Concerts, Soccer, Baking, Sky Diving
                <div></div>
                Contact: AlfonsoP923@gmail.com
            </div>
        </div>
    );
};

export default Results; 

