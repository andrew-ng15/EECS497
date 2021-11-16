import React, { useEffect, useState } from "react";
import classes from './Search.module.scss';
import profpic from './uploads/profpic.jpg';
import logo from './uploads/logo.jpg';
import search from './uploads/search.png'
import hamburger from './uploads/hamburger.png'
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { appAuth, db, logout } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";


const Search = () => {
    const [user, loading, error] = useAuthState(appAuth);
    const [name, setName] = useState("");
    const history = useHistory();
    const fetchUserName = async () => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", appAuth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setName(doc.data().name);
        });
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");
        fetchUserName();
    }, [user, loading]);

    const updateProfile = () => {
        history.push('/personalinfo');
    }

    return (
        <div className={classes.Search}>
            <img src={logo} className={classes.Logo} />
            <div className={classes.Profile}>
                <img src={profpic} className={classes.profpic}/>
                <h3>{name}</h3>
                {/* <button onClick={openSidebar} className={classes.burger}>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div></button> */}
                <button onClick={updateProfile}>Update Profile</button>
                <button onClick={logout}>Logout</button>

            </div>
            <div className={classes.Middle}>
                <h2>Search For an Event!</h2>
                <div className={classes.SearchBar}>
                    <img src={search} />
                    <form action="/results/">
                        <input className={classes.Text} type="text" placeholder="Search For Events" />
                        <input className={classes.Submit} type="submit" value="search" />
                        <input type="hidden" name="operation" value="search" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;