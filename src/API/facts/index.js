import { createAsyncThunk } from "@reduxjs/toolkit";


const options = {
    method: 'GET',
    headers: { 'X-Api-Key': '61uz9mA3aPETRPLmInO+3w==BNeGP7mIFN6qlBNE' },
  
}


export const getFact = createAsyncThunk(
    'quotes/getFact',
    async () => {
        const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', options);
        const json = await response.json();
        const data = {
            fact: json[0].fact
        }
        return data.fact
    }
    )
    
    
