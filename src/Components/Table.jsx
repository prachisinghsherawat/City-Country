import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#073655",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export const  TableIs = ()=>{
 
      const [data,setData] = useState([]);

      const[country,setCountry] = useState("");
      const [order,setOrder] = useState("");

     useEffect(()=>{
        GetData()
     },[order,country,data])

      const GetData = ()=>{
         axios.get(`http://localhost:8080/cities?_sort=${country}&_order=${order}`).then((res)=>{
             setData(res.data)
         })
      }

      const CountryFilter = (value,change)=>{
                setCountry(change)
                setOrder(value)
      }

      // Delete Without Server ---->

      // function Delete(id){
      //   let arr = data.filter((el)=> el.id != id)
      //   setData([...arr])
      // }
        

      const Delete = (id)=> {
        axios.delete(`http://localhost:8080/cities/${id}`).then((res)=>{setData([...res.data])})
      }

  return (

    <>

    <ButtonGroup id="btns" variant="contained" aria-label="outlined primary button group">
      <Button onClick={()=>CountryFilter("asc","country")}>Country Asc</Button>
      <Button onClick={()=>CountryFilter("desc","country")}>Country Desc</Button>
      <Button onClick={()=>CountryFilter("desc","population")}>High To Low</Button>
      <Button onClick={()=>CountryFilter("asc","population")}>Low to High</Button>
    </ButtonGroup>



    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Counties</StyledTableCell>
            <StyledTableCell align="right">Cities</StyledTableCell>
            <StyledTableCell align="right">Population</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.country}
              </StyledTableCell>
              <StyledTableCell align="right">{row.city}</StyledTableCell>
              <StyledTableCell align="right">{row.population}</StyledTableCell>
              <StyledTableCell align="right"><button id='btnE'>Edit</button></StyledTableCell>
              <StyledTableCell align="right"><button onClick={()=>{Delete(row.id)}} id='btnD'>Delete</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
