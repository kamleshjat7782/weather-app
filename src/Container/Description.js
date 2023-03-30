import {FaArrowDown, FaArrowUp, FaWind} from 'react-icons/fa';
import {BiHappy} from 'react-icons/bi';
import {MdCompress, MdOutlineWaterDrop} from 'react-icons/md';

const Description = ({data,units}) => {
   
    const tempUnit = units === "metric" ? "°C" : "°F"; 
    const windUnit = units === "metric" ? "m/s" : "m/h"; 

    const {
        weather,
        main: {temp, feels_like, temp_max, temp_min, pressure, humidity },
        wind: {speed},
        sys: {country},
        name,
      } = data;

      const { description, icon} = weather[0];
    

  return (
    <>
    <div className='section section_desc' >
        <div className='card'>
            <div className='card_icon'>
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>{`${temp_min.toFixed()} ${tempUnit}`} </h2>
        </div>
        <div className='card'>
            <div className='card_icon'>
                <FaArrowUp />
                <small>max</small>
            </div>
            <h2>{`${temp_max.toFixed()} ${tempUnit}`} </h2>
        </div>
        <div className='card'>
            <div className='card_icon'>
                <BiHappy />
                <small>feel like</small>
            </div>
            <h2>{`${feels_like.toFixed()} ${tempUnit}`} </h2>
        </div>
        <div className='card'>
            <div className='card_icon'>
                <MdCompress />
                <small>pressure</small>
            </div>
            <h2>{`${pressure} hpa`}</h2>
        </div>
        <div className='card'>
            <div className='card_icon'>
                <MdOutlineWaterDrop />
                <small>humidity</small>
            </div>
            <h2>{`${humidity} %`}</h2>
        </div>
        <div className='card'>
            <div className='card_icon'>
                <FaWind />
                <small>wind speed</small>
            </div>
            <h2>{`${speed.toFixed()} ${windUnit}`}</h2>
        </div>
    </div>
    </>
  )
}

export default Description;