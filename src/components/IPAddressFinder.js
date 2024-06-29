import Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function IPAddressFinder() {

    const[ipDetail, setIpDetail]=useState([])

    useEffect(() => { 
        Axios.get('https://ipapi.co/json/').then((res) => { 
            setIpDetail(res.data); 
           
        }); 
    }, []) 
    console.log(ipDetail)

  return (
    <div>
       <h1> IPAddressFinder of your pc</h1> 

<h4>What is my IPv4 address?</h4> 
        {ipDetail.ip}
        <h4>Approximate location: </h4> 
  
                    <p>{ipDetail.city}, {ipDetail.region}, 
                        {ipDetail.country_name}.</p> 
  
  
                    <h4>Internet Service Provider(ISP):</h4> 
  
                    <p>{ipDetail.org}</p> 
        </div>
  )
}

export default IPAddressFinder