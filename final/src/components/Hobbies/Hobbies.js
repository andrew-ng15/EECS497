import React, { useState } from 'react';
import classes from './Hobbies.module.scss';
import Hobby from './Hobby/Hobby';
import { useHistory } from 'react-router-dom';


const Hobbies = () => {
    // const [profpic, setProfPic] = useState("");
    const [inputList, setInputList] = useState([<Hobby />]);
    const [hobbyList, setHobbyList] = useState([]);

    const history = useHistory();

    const onAddMoreHandler = (event) => {
        setInputList(inputList.concat(<Hobby key={inputList.length} />));
    }

    const onSubmitHandler = (event) => {
        history.push('/search/');
    }

    return (
        <div className={classes.Hobbies}>

            <div className={classes.profile_pic}>
                <form action="/action_page.php">
                    <label for="img"><h2>Profile Picture:</h2></label>
                    <input type="file" className={classes.image} name="img" accept="image/*"/>
                </form>
            </div>
            
            <div className={classes.hobby_list}>
                <h2>Hobbies/Interests:</h2>

                <div className={classes.hobby_options}>
                    {inputList}
                </div>
            
                <div>
                    <button type="button" onClick={onAddMoreHandler}>Add More Hobbies!</button>
                </div>
            
            </div>

            <div className={classes.next_button}>
                <button
                    type="button"
                    onClick={onSubmitHandler}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default Hobbies;