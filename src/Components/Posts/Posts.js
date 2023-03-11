import React,{ useEffect, useContext, useState } from 'react';
import {useHistory } from 'react-router-dom'
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/firebaseContext';
import { PostContext } from '../../store/postContext';
import './Post.css';

function Posts() {
  const { firebase } = useContext(FirebaseContext)
  const [ products, setProducts ] = useState([])
  const { setPostDetails } = useContext(PostContext)
  const history = useHistory()

  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((products)=>{
        return {
          ...products.data(),
          id: products.id,
        }
      })
      setProducts(allPost)
    })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

         { products.map(products =>{
          return  <div
          className="card"
          onClick={()=>{
            setPostDetails(products)
            history.push('/view')
          }}
        >
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={products.url} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {products.price}</p>
            <span className="kilometer">{products.category}</span>
            <p className="name">{products.name}</p>
          </div>
          <div className="date">
            <span>{products.createdAt}</span>
          </div>
        </div>
         })}

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
         {products.map(products=>{
          return  <div className="card"
          onClick={()=>{
            setPostDetails(products)
            history.push('/view')
          }}
          >
            
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={products.url} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {products.price}</p>
            <span className="kilometer">{products.category}</span>
            <p className="name"> { products.name} </p>
          </div>
          <div className="date">
            <span>{products.createdAt}</span>
          </div>
        </div>
         })}
         

        </div>
      </div>
    </div>
  );
}

export default Posts;
