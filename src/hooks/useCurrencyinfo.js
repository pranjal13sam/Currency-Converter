import { useEffect,useState } from "react";

//writting custom hook:
function useCurrencyInfo(currency){
  const [data,setData]=useState({})//if api call nhi hua toh app crash na kar jaaye uske liye
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))//yaha pe res[currency] issiliye lagaya hai kyuki hume ni pata ki url mei kya dena hai usd ya inr ya koi aur value
    console.log(data)
  },[currency])//jab jab currency ki value change hogi tab tab hum chahenge ki hamara ui fir se render ho
  console.log(data)
  return data;
}


export default useCurrencyInfo;//method ko return kar diya hai takki data ka access le paaye
