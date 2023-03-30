
const key = '3955338e16214be443da654c669f9496'
const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;


const ApiDataFetch = async (city, units="metric") => {
  
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;


    const data = await fetch(Url)
    .then(res => res.json())
    .then(data => data)
    .catch((err) => console.err(err))
    
  return data;
 
}

export {ApiDataFetch};