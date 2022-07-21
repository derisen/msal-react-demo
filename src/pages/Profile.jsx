import { ProfileData } from "../components/ProfileData";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType, BrowserAuthError } from "@azure/msal-browser";
import { useState, useEffect } from "react";
import { fetchData } from "../fetch";

export const Profile = () => {
    const { result, error, login } = useMsalAuthentication(InteractionType.Popup, {
        scopes: ["user.read"],
        claims: sessionStorage.getItem('claimsChallenge') 
            ? window.atob(sessionStorage.getItem('claimsChallenge')) : undefined
    });

    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        if (!!graphData) {
            return
        }

        if (!!error) {
            if (error instanceof BrowserAuthError) {
                login(InteractionType.Redirect, {
                    scopes: ["user.read"]
                })
            }
            console.log(error);
        }

        if (result) {
            fetchData("https://graph.microsoft.com/v1.0/me", result.accessToken)
                .then(data => setGraphData(data))
                .catch(error => console.log(error));
        }
    }, [error, result, graphData, login]);


    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {graphData ? <ProfileData graphData={graphData} /> : null}
        </>
    )
}