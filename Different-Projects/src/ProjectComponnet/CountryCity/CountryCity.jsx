import React, { useState } from 'react'
import Header from '../Header'

function CountryCity() {
    let [val,setval]=useState(0)
    
    let arr=[
        {country:'pakistan',value:'pk',city:[
            'karachi','Islamabad','Gujranwala','Lahore'
        ]},
        {country:'India',value:'pk',city:[
            'Mumbai','Dihli'
        ]},
        {country:'Sudia',value:'pk',city:[
            'Makkha','Madina','Jadda'
        ]}
    ]
  return (
    <>
      <Header/>
      <div className='UpperStopWatch'>
        <h1>Country City</h1>
        <h2>Set Country & get City According to Country</h2>

        {/* First DropDown */}
        <select onChange={(e)=>setval(e.target.value)}>
            {
                arr.map((item,i)=>
                <option key={i}  value={i}>{item.country}</option>
                )
            }
        </select>

            {/* Second DropDown */}

            <select value={val}>
                {
                    arr[val].city.map((ele)=>
                    <option>{ele}</option>
                    )
                }
            </select>

      </div>
    </>
  )
}

export default CountryCity
