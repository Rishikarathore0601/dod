import React from 'react'
import Layout from '../components/Layout/Layout'
import {useNavigate} from "react-router-dom"

const HomePage = () => {
  const navigate=useNavigate()
  const img1="https://img.freepik.com/free-vector/renting-electronic-device-renting-electronics-website-new-device-rent-terms-use-conditions-gadget-rental-test-equipment-lease_335657-4495.jpg"
  const img2="https://img.freepik.com/free-vector/shopping-online-background_1156-96.jpg?size=626&ext=jpg&ga=GA1.1.936415901.1700207531&semt=ais"
  return (
    <Layout>
    <h1>Category</h1>
      <div className="container mt-3">
        <div className="row">
        
          <div className="col-md-5">
          <div className="Imagecontainer">
  <img src={img1} alt="rent" style={{width:"100%"}} />
  <button className="btn" 
  onClick={()=>navigate('/category/rent')}
  >For Rent</button>
</div>

          </div>
          <div className='col-md-5'>
          <div className="Imagecontainer">
  <img src={img2} alt="rent" style={{width:"100%"}} />
  <button className="btn"
  onClick={()=>navigate('/category/sale')}
  >For Sell</button>
</div>
          </div>
      </div>
      </div>
    </Layout>
  )
}

export default HomePage
