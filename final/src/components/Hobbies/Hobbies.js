import React from 'react';
import classes from './Hobbies.module.scss';
import Hobby from './Hobby/Hobby';

const Hobbies = () => {


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

                    <div>
                    <br />
                    </div>
                    
                    <input list="hobby_list" name="hobby_in" placeholder="Select Hobbies"/>
                    <datalist id="hobby_list">
                        <option value="Music" />
                        <option value="Art" />
                        <option value="Food" />
                        <option value="Travel" />
                        <option value="Fitness" />
                        <option value="Sports" />
                        <option value="Movies" />
                        <option value="Nightlife" />
                    </datalist>

                    <div>
                    <br />
                    </div>

                    <input list="hobby_list" name="hobby_in" placeholder="Select Hobbies"/>
                    <datalist id="hobby_list">
                        <option value="Music" />
                        <option value="Art" />
                        <option value="Food" />
                        <option value="Travel" />
                        <option value="Fitness" />
                        <option value="Sports" />
                        <option value="Movies" />
                        <option value="Nightlife" />
                    </datalist>
                    
                    <div>
                    <br/>
                    </div>

                </div>
            
                <div>
                    <button type="button" onclick="addList();">Add More Hobbies!</button>
                </div>
            
            </div>

            <div id="next">
                <button type="button">Next</button>
            </div>

        </div>
    );
};

export default Hobbies;