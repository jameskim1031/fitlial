import React, { useEffect, useState } from 'react';
import { auth, db, doc, getDoc } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        setUserData(null); // Clear user data when user logs out
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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