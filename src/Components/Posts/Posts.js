// import React,{useContext,useEffect, useState} from 'react';
// import { doc, getDoc } from "firebase/firestore";
// import Heart from '../../assets/Heart';
// import './Post.css';
// import { FirebaseContext } from '../../store/Context';

// async function Posts() {
//   const { FireBase,db} = useContext(FirebaseContext);
//   const[products,setProducts]=useState([])
// //   useEffect(()=>{
    

// // const docRef = doc(db, "products",);
// //  const docSnap = await getDoc(docRef);

// // if (docSnap.exists()) {
// //   alert("Document data:", docSnap.data());
// // } else {
// //   // docSnap.data() will be undefined in this case
// //   calret("No such document!");
// // }

// //   },[])

//   useEffect(() => {
//     const fetchData = async () => {
//       const docRef = doc(db, "products");
//       const docSnap = await getDoc(docRef);
  
//       if (docSnap.exists()) {
//         alert("Document data: " + JSON.stringify(docSnap.data()));
//       } else {
//         alert("No such document!");
//       }
//     };
  
//     fetchData();
//   }, []);


import React,{useEffect,useContext, useState} from 'react';
import { collection, getDocs } from "firebase/firestore"; 


import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import {PostContext} from '../../store/PostContext'
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router';

function Posts() {


const[products,setProducts]=useState([])
const {FireBase}=useContext(FirebaseContext)
console.log('11111111111');
console.log(PostContext);
console.log('22222222222222222');
console.log(useContext(PostContext));
console.log('33333333333333333333');
// const {setPostDetail}=useContext(PostContext)
const navigate=useNavigate()

useEffect(()=>{
  
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
        const allPost=querySnapshot.docs.map((product)=>{

          return {
            ...product.data(),
          id:product.id }
        })
        setProducts(allPost)
  };

  fetchData();

},[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        {   products.map(product=>{     
          return <div
            className="card"onClick={()=>{setPostDetail(product)
              navigate("/view")}} >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>})}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
