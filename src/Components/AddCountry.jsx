import { useState } from "react"
import axios from "axios"

export const AddCountry = () => {

    const [country,setCountry] = useState("")

    const getData = {
        "country" : country
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/countries",getData);
        
    }
    console.log(country)

    return(
        <div>
            <h1>Add Country</h1>

           <form onSubmit={HandleSubmit}>

                <label>Country : </label><br />
                <input type="text" id="country" placeholder="enter your country" onChange={(e)=>setCountry(e.target.value)}/><br /><br />
                <input type="submit" id="submit" />
           </form>

        </div>
    )

}