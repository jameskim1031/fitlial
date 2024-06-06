import { React, useState, useEffect } from 'react';
import Son from '../images/son.jpeg';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

function WelcomeBar({user}) {

    // const [users, setUsers] = useState([])

    // useEffect(()=>{
    //     const ref = collection(db, 'users');
    //     getDocs(ref)
    //         .then((snapshot) => {
    //             let results = [];
    //             snapshot.docs.forEach(doc => {
    //                 console.log(doc.data());
    //                 results.push({id:doc.id, ...doc.data()});
    //             })
    //             setUsers(results);
    //         })
    //     }, []);
    
    // console.log(users)
    return (
        <div className='WelcomeBar'>
            <div className='WelcomeBarTexts'>
                <h2>Hi, {user ? user.firstName : null}</h2>
                <h3>Let's check the family's progress!</h3>
            </div>
            <div className="WelcomeBarProfile">
                <img className="WelcomeBarProfileImage" src={user.imageURL}/>
            </div>
            
        </div>
    );
}; 

export default WelcomeBar;