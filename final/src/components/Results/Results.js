import React from 'react';
import classes from './Results.module.scss';
import pic1 from './uploads/1.jpg';
import pic2 from './uploads/2.jpg';
import pic3 from './uploads/3.jpg';
const Results = () => {
    return (
        <div className={classes.results}>
            <div className={classes.post}>
                <img src={pic1} width="200" height="200" alt="failed" />
                    Name: John Smith
                <div></div>
                Interests: Hang gliding, Kayaking, Comedy, Jazz Concerts
                <div></div>
                Contact: john.smith@rocketmail.com
            </div>
            <div className={classes.padder}></div>
            <div className={classes.post}>
                <img src= {pic2} width="200" height="200" alt="failed" />
                Name: Sara Hodler
                <div> </div>
                Interests: Hiking, Concerts, Baking, Karate
                <div> </div>
                Contact: sarsar122@gmail.com
            </div>
            <div className={classes.padder}></div>
            <div className={classes.post}>
                <img src= {pic3} width="200" height="200" alt="failed" />
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

