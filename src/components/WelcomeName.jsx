import Typography from "@mui/material/Typography";
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";

export const WelcomeName = () => {
    const { instance } = useMsal();
    const [username, setUsername] = useState('');
    useEffect(() =>{
        const currentAccout = instance.getActiveAccount();
        if (currentAccout){
            setUsername(currentAccout.name);
        }
    },[]);   

    return (<Typography variant="h6">Welcome, {username}</Typography>);
};