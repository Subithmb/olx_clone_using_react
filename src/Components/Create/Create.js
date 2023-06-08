// import React, { Fragment,useState,useRef, useContext } from 'react';
// import './Create.css';
// import Header from '../Header/Header';
// import {FirebaseContext,AuthContext}from '../../store/Context'
// import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from 'firebase/firestore';
// import { FireBase,db } from './firebase/config';
// import { FireBase } from '../../firebase/config';
// import { getFirestore } from 'firebase/firestore';
// import { useNavigate } from 'react-router';
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// const Create = () => {
//  const auth = getAuth(FireBase);
 
// const{FirebaseContext}=useContext(FirebaseContext)
// const {user}=useContext(AuthContext)
// const[name,setName]=useState('')
// const[category,setCategory]=useState('')
// const[image,setImage]=useState('')
// const[Price,setPrice]=useState(0)
// const nameRef=useRef(null)
// const categoryRef=useRef(null)
// const date=new Date()


// const handleSubmit=async(e)=>{
//   e.preventDefault(); 
//   const storage = getStorage(FirebaseContext);
//   const storageRef = ref(storage, `/image/${image.name}`);
//   setCategory(categoryRef.current.value)
//   setName(nameRef.current.value)
//   setPrice(setPrice.current.value)

// // 'file' comes from the Blob or File API
// uploadBytes(storageRef, image)

  
//   addDoc(collection(db,"products"),{
 
//     name:nameRef.current.value,
//     category:categoryRef.current.value,
//     price:setPrice.current.value,
//     url,
//     userId:user.uid,
//     createdAT:date.toDateString()

// })
  
 
// }



import React, { Fragment, useRef, useState} from 'react';
import { useContext } from 'react';
import { FirebaseContext,AuthContext } from '../../store/Context';
import './Create.css';
import Header from '../Header/Header';
import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { db } from '../../firebase/config';


const Create = () => {

  const { FireBase,db} = useContext(FirebaseContext);

  const {user}=useContext(AuthContext)


  const[image,setImage]=useState('')
  const navigate=useNavigate()

  const nameRef=useRef(null)
  const categoryRef=useRef(null)
  const priceRef=useRef(null)

  
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const storage = getStorage(FireBase);
    const imageRef = ref(storage, `/images/${image.name}`);
    await uploadBytes(imageRef, image);

        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(imageRef);
    
            // Save the image details to Firestore
    // const firestore = firebaseApp.firestore();
    const firestore = getFirestore(FireBase);

    await addDoc(collection(db, 'products'), {
      name:nameRef.current.value,
      category:categoryRef.current.value,
      price:priceRef.current.value,
      imageUrl: imageUrl,
      userId: user.uid,
      createdAt: new Date().toDateString()
    });
navigate('/')
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
             ref={nameRef}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
             ref={categoryRef}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"  ref={priceRef} />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
