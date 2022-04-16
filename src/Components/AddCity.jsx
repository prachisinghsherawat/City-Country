import axios from "axios"
import { useEffect, useState } from "react"



export const AddCity = ()=>{
        const[data,setData] = useState([]);
         const [city,setcity] = useState({
            city:"" ,
            population:"",
            country:"",

         })
        useEffect(()=>{
            GetData()
        },[])

   const GetData = ()=>{
  axios.get("http://localhost:8080/countries").then((res)=>{
            setData(res.data)
  })       
   }
        
     const HandleChange  = (e)=>{
         const {id,value} = e.target;
         setcity({...city,[id]:value})
     }

     const HandleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/cities",city)
           
      e.target.reset();
        
    }
    return(

        <div>

            <h1>Add City</h1>

            <form onSubmit={HandleSubmit}>

            <label>City :</label>  <br /> 
            <input type="text" placeholder="enter your city" id="city" onChange={HandleChange}/><br /><br />

            <label>Population :</label><br />
            <input type="number"  placeholder="enter population" id="population" onChange={HandleChange}/><br /><br />

            <label>Country :</label><br />   

                <select  name="countries" id="country" onChange={HandleChange}>
                    <option value="">-----</option>
                {data.map((el)=>(
                    <option key={el.id} value={el.country}>{el.country}</option>
                
             )
             )}
             </select> <br /><br /><br />
                 <input type="submit" id="submit"/>

            </form>
        </div>
    )

}