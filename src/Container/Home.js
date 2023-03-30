import React from 'react'
// import hotBg from './Assets/hot.jpg'
// import rainBg from './Assets/rainBg.jpg'
import cloudBg from '../Assets/cloud.jpg'
// import coldBg from './Assets/coldBg.jpg'

import { useEffect, useState } from 'react';
import { ApiDataFetch } from './ApiDataFetch';
import Description from './Description';

const Home = () => {

  const [city, setCity] = useState("jaipur");
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(cloudBg);
  const [search, setsearch] = useState("");
  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      const data = await ApiDataFetch(city, units);
      console.log(data)

      setData(data);
    }

    fetchData();
  },[units, city])

  // console.log(data);
  
  
  const handleUnits = (e) =>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "*F" : "*C";
    setUnits(isCelsius ? "metric" : "imperial ");
  }

  const handleSearch = () =>{
    setCity(search);
  }
  // const {
  //   weather,
  //   main: {temp, feels_like, temp_max, temp_min, pressure, humidity },
  //   wind: {speed},
  //   sys: {country},
  //   name,
  // } = data;

  // const { description, icon} = weather[0];

  const {
    name,
    id,
    weather,
    main,
    // main: {temp},
  } = data;
  console.log(weather);
  const {presure} = weather

  return (
    <>
    <h1>hello</h1>
    <h1>{name}</h1>
    <h1>{id}</h1>
    {/* <h1>{temp}</h1> */}

    </>

  //   <div className="home" style={{backgroundImage: `url(${bg})`}} >
  //   <div className='overlay'>
      
  //     {
  //       data && (
          
  //         <div className='container' >
  //         <div className='section section_inputs'>
  //           <input type='text' name='city' onChange={(e) => setsearch(e.target.value)} placeholder='Enter City' />

  //           <button onClick={handleSearch} >Get Weather</button>

  //           <button onClick={(e) => handleUnits(e)} >°F</button>
  //         </div>
       
  //         <div className='section section_temp'>
  //           <div className='icon'>
  //             <h3> {`${name}, ${country}`} </h3>
  //             <img src={weather.iconUrl} alt='icon' ></img>
  //             <h3>{weather.description}</h3>
  //           </div>

  //           <div className='temp'>
  //             <h1>{`${temp} ${units === "metric" ? "°C" : "°F"}`}</h1>
  //           </div>
  //         </div>

  //         <Description data = {data} units={units}/>
  //       </div>

  //       )}
  //   </div>
 
  // </div>
  )
}

export default Home;