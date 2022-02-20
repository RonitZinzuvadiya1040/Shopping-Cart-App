import React,{useState} from 'react'
import Image from 'next/image'

const Index = () => {
    const [apiData,setapiData]=useState([]);
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setapiData(json))

  return (
    <div>
        
<div className="container">

<h1>Shopping Cart</h1>

<div className="cart">

    <div className="products">
{
    apiData.map((curelem)=>{
        return( 
        <div className="product" key={curelem.id}>

            <Image src={curelem.image} alt="no " width="200px" height="200px"/>

            <div className="product-info">


                <h3 className="product-name">{curelem.title}</h3>

                <h4 className="product-price">₹ {curelem.price}</h4>

                <h4 className="product-offer">Category: {curelem.category}</h4>

                

                <p className="product-detail">

                    <i className="fa fa-detail" aria-hidden="true"></i>

                    <span className="detail">More Details</span>
                </p>

            </div>

        </div>
        )

    })
}

        
      
    

    </div>

    

</div>

</div>

    </div>
    
  )
}

export default Index;