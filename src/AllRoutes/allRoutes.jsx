import { Route, Routes } from "react-router"
import { AddCity } from "../Components/AddCity"
import { AddCountry } from "../Components/AddCountry"
import { Table, TableIs } from "../Components/Table"



export const AllRoutes = () => {

    return(

        <Routes>

            <Route path ="/" element ={<TableIs />} />
            <Route path ="/add_country" element ={<AddCountry />} />
            <Route path ="/add_city" element ={<AddCity />} />

        
        </Routes>
    )
}