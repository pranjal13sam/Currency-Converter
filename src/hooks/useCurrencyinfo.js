import { useEffect,useState } from "react";

//writting custom hook:
function useCurrencyInfo(currency){
  const [data,setData]=useState({})//if api call nhi hua toh app crash na kar jaaye uske liye
  //It initializes a state variable called data using the useState hook. Initially, it's an empty object {}. This data will hold the information fetched from the API.
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))//yaha pe res[currency] issiliye lagaya hai kyuki hume ni pata ki url mei kya dena hai usd ya inr ya koi aur value
    /*The useEffect hook is used to perform side effects in your functional components. Here, it's fetching data from an API.
Whenever the currency value changes, this hook will be triggered.
It sends a GET request to the specified URL to fetch currency information for the provided currency code.
Upon receiving a response, it converts the response to JSON format.
Then, it updates the data state variable with the information related to the specified currency. */
  },[currency])//jab jab currency ki value change hogi tab tab hum chahenge ki hamara ui fir se render ho
  console.log(data)
  return data;
}


export default useCurrencyInfo;//method ko return kar diya hai takki data ka access le paaye
