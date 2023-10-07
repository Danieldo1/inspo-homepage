import { createAsyncThunk } from "@reduxjs/toolkit";


export const getIp = createAsyncThunk(
    'weather/getIp',
    async () => {
        const response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=7f6d847a84b44c538848c41c6057fde1`)
        const json = await response.json();
        const data = {
            timezone: json.timezone.current_time
        }
        return data
    }
)


 



