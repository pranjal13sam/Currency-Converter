import {useEffect ,useState} from 'react';

function useCurrencyinfo(currency){
  const [data,setData]=useState({})//empty use state kyuki agar fetch ni kar paaya toh block na hojaaye
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>res.json())
      .then((res)=>setData(res[currency]))
      
    
  },[currency])
  console.log(data);
  return data;
}

export default useCurrencyinfo;




