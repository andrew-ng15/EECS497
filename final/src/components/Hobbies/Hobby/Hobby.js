import React, { useState } from 'react';
import classes from './Hobby.module.scss';
import { useHistory } from 'react-router-dom';

const Hobby = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const onClickHandler = (e) => {
        if (username === "" || password === "") {
            alert('Missing username or password');
            e.preventDefault();
        } else {
            history.push('/search/');
        }
    };

    return (
        <div className={classes.Hobby}>
            <input list="hobby_list" name="hobby_in" placeholder="Select Hobbies"/>
            <datalist id="hobby_list">
                <option value="Music"/>
                <option value="Art"/>
                <option value="Food"/>
                <option value="Travel"/>
                <option value="Fitness"/>
                <option value="Sports"/>
                <option value="Movies"/>
                <option value="Nightlife"/>
            </datalist>
        </div>
    );
};

export default Hobby;
