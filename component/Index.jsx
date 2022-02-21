import React,{useEffect, useState} from 'react';
import Image from 'next/image';

const Index = () => {
    const [apiData,setapiData]=useState([]);
    const [filterData,setfilterData]=useState("");
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setapiData(json))
    },[])
   
const filterHandler=(event)=>{
    setfilterData(event.target.value);
}
  return (
    <div>
        
        <div className="container">

        <center><h1>Shopping Cart</h1></center> <br/>
        <label><b>Filter By Category/Name: </b></label>
        <input type="text" onChange={filterHandler}/> <br/> <br/>

        <div className="cart">

            <div className="products">
            {
                apiData.filter((curelems)=>{
                    if(filterData === ""){
                    return curelems;
                    } else if(curelems.title.toLowerCase().includes(filterData.toLowerCase())){
                    return curelems;
                    } else if(curelems.category.toLowerCase().includes(filterData.toLowerCase())){ 
                    return curelems; 
                    } 
            }).map((curelem)=>{
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
