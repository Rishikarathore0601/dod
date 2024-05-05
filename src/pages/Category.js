import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import {useParams} from 'react-router-dom'
import { db } from './../firebase.config';
import { toast } from 'react-toastify';
import {collection,getDocs,query,where,orderBy,limit,startAfter} from 'firebase/firestore'


const Category = () => {
  const [listing, setListing]=useState(" ")
  const [loading,setLoading]=useState(true)
  const params=useParams()
  const itemList = [
    {
      CostPrice: 45000,
      SellingPrice: 35000,
      condition: "working",
      deviceName: "Laptop",
      imgURls: [
        "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg"
      ],
      location: "jabalpur",
      type: "rent"
    },
    {
      CostPrice: 30000,
      SellingPrice: 25000,
      condition: "working",
      deviceName: "Smartphone",
      imgURls: [
        "https://images.pexels.com/photos/385021/pexels-photo-385021.jpeg?cs=srgb&dl=pexels-hakan-esen-385021.jpg&fm=jpg"
      ],
      location: "New Delhi",
      type: "sale"
    },
    {
      CostPrice: 6000,
      SellingPrice: 5000,
      condition: "working",
      deviceName: "Printer",
      imgURls: [
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?cs=srgb&dl=pexels-pixabay-373543.jpg&fm=jpg"
      ],
      location: "Mumbai",
      type: "rent"
    },
    {
      CostPrice: 2000,
      SellingPrice: 1500,
      condition: "working",
      deviceName: "Mouse",
      imgURls: [
        "https://images.pexels.com/photos/414596/pexels-photo-414596.jpeg?cs=srgb&dl=pexels-pixabay-414596.jpg&fm=jpg"
      ],
      location: "Kolkata",
      type: "sale"
    },
    {
      CostPrice: 15000,
      SellingPrice: 12000,
      condition: "working",
      deviceName: "Tablet",
      imgURls: [
        "https://images.pexels.com/photos/373465/pexels-photo-373465.jpeg?cs=srgb&dl=pexels-pixabay-373465.jpg&fm=jpg"
      ],
      location: "Chennai",
      type: "rent"
    }
  ];

useEffect(()=>{
  const fetchListing =async()=>{
    try{
      const listingRef=collection(db,'listings')
      const q= query(listingRef,where('type','==',params.categoryName),orderBy('timestamp','desc'),
    limit(10))
    const querySnap=await getDocs(q)
    const listings=[]
  querySnap.forEach((doc)=>{
    return listing.push({
      id:doc.id,
      data:doc.data()
    })
  });
  setListing(listings)
  setLoading(false)
 }catch(error){
  console.log(error);
  toast.error("unable to fetch data")
 }
  }
  fetchListing();
},[params.categoryName])

  return (
    <Layout>
       <div className="mt-3">
        <h1>{params.categoryName ==="rent" ? "Devices for Rent" : "Devices for Sale"}</h1>
        <div>
            <ul>
        {itemList.map((item, index) => (
          <li key={index} style={{ width: '45%', marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <p>Cost Price: {item.CostPrice}</p>
            <p>Selling Price: {item.SellingPrice}</p>
            <p>Condition: {item.condition}</p>
            <p>Device Name: {item.deviceName}</p>
            <img src={item.imgURls[0]} alt="item" style={{ maxWidth: '100%', height: 'auto' }} />
            <p>Location: {item.location}</p>
            <p>Type: {item.type}</p>
          </li>
        ))}
      </ul>
    </div>
       </div>
    </Layout>
  )
}

export default Category
