import React, { useState } from 'react';
import classes from './Hobbies.module.scss';
import Hobby from './Hobby/Hobby';

const Hobbies = () => {

    const [inputList, setInputList] = useState([<Hobby />]);

    const onClickHandler = (event) => {
        setInputList(inputList.concat(<Hobby key={inputList.length} />));
    }

    return (
        <div className={classes.Home}>

            <div id="profile_pic">
                <form action="/action_page.php">
                    <label for="img">Profile Picture:</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
                    <input type="submit" />
                </form>
            </div>
            
            <div id="hobbies">
                <p>Hobbies/Interests:</p>

                <div id="hobby_options">
                    {inputList}
                </div>
            
                <div>
                    <button type="button" onClick={onClickHandler}>Add More Hobbies!</button>
                </div>
            
            </div>

            <div id="next">
                <button type="button">Next</button>
            </div>

        </div>
    );
};

export default Hobbies;