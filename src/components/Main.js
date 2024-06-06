import { React, useState, useEffect } from 'react';
import Page from './Page';
import TopBar from './TopBar';
import TodayWorkout from './TodayWorkout';
import WelcomeBar from './WelcomeBarMain';
import NavBar from './NavBar';
import WeeklyStreak from './WeeklyStreak';
import { db } from '../firebase/config';
import { collection, doc, getDocs, getDoc } from 'firebase/firestore';


function Main() {

    const userId = 2;
    const [user, setUser] = useState({});
    const [userFamilyData, setuserFamilyData] = useState([]);

    useEffect(()=>{
        async function fetchUserData() {
            try {
                const ref = collection(db, 'users');
                const userSnapshot = await getDocs(ref);
                
                let results = [];
                userSnapshot.docs.forEach(doc=> {
                    results.push({id:doc.id, ...doc.data()});
                })
                const fetchedUser = results[userId];
                setUser(fetchedUser);

                if (fetchedUser && fetchedUser.familyMembers) {
                    const familyMembersRefs = fetchedUser.familyMembers;
                    console.log(familyMembersRefs);
                    const familyMembersPromises = familyMembersRefs.map(refPath => {
                        const ref = doc(db, refPath);
                        return getDoc(ref);
                    });
                    const familyMembersSnapshots = await Promise.all(familyMembersPromises);
                    const familyMembersData = familyMembersSnapshots.map(familyDoc => ({ id: familyDoc.id, ...familyDoc.data() }));
                    console.log(familyMembersData);
                    setuserFamilyData(familyMembersData);
                }

            }
            catch(error) {
                console.error("Error fetching user and family members: ", error);
            }
        }   
        fetchUserData();     
    },[])


    if (!user) {
        return <div>Loading</div>;  // Handle the case where user data is not found
    }

    return (
        <Page>
            <div className='MainCard'>
                <div className="MainContent">
                    <WelcomeBar user={user}/>
                    <TopBar user={user} userFamily={userFamilyData}/>
                    <TodayWorkout />
                    <WeeklyStreak />
                </div>
                <NavBar />
            </div>
        </Page>
    );
}; 

export default Main;