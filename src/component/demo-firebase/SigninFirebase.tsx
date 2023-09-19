import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";
import { auth, db } from "../../firebase/config.firebase";

type dataAuth = {
    email: string,
    password: string,
    displayName : string,
}
const FirebaseAuth = () => {
     const userRef = collection(db, "users");
    const [values, setValues] = useState<dataAuth>({
        email: "",
        password: "",
        displayName : ""
    });
    const [userInfo, setUserInfo] = useState<any>("");
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser: dataAuth) => {
            if (currentUser) {
                setUserInfo(currentUser);
            } else {
                setUserInfo("");
            }
        });
    }, [userRef]);
    const handleInputChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleCreateUser = async (e: any) => {
        e.preventDefault();
        try {
            const cred: any = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password,
            );
            await updateProfile(auth?.currentUser, {
                displayName: values.displayName,
            });
            setUserInfo(cred);
            console.log(userInfo)
           
            await addDoc(userRef, {
                email: values.email,
                createAt : serverTimestamp(),
                password: values.password,
                id: cred.user.uid,
            });
            e.reset()
        } catch (err) {
            console.log(err);
        }
    };
    const handleSignOut = () => {
        signOut(auth);
    };
    const handleLogin = async (e: any) => {
        e.preventDefault();
        const cred: any = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
        );
        console.log(cred);
        setUserInfo(cred);
    };
    return (
        <>
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                <form onSubmit={handleCreateUser}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                    />
                    <input
                        type="text"
                        name="displayName"
                        onChange={handleInputChange}
                        placeholder="Enter your display name "
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                    />
                    <button
                        type="submit"
                    >
                        SignUp
                    </button>
                </form>
                <div className="flex items-center mt-10 gap-x-5">
                    <span>{userInfo?.displayName}</span>
                    <button
                        className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg"
                        onClick={handleSignOut}
                    >
                        SignOut
                    </button>
                </div>
            </div>
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                    />
                    <button
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default FirebaseAuth;
