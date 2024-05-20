import React, { useEffect, useState } from 'react';
import { auth, db, doc, getDoc } from './firebase';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, [auth.currentUser]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <p>Role: {userData.role}</p>
          <p>Age: {userData.age}</p>
          <img src={userData.profilePicture} alt="Profile" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;