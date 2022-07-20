import Typography from "@mui/material/Typography";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { useEffect } from "react";

export const Home = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (!isAuthenticated) {
            instance.ssoSilent()
                .catch(error => {
                    if (error instanceof InteractionRequiredAuthError) {
                        instance.loginRedirect();
                    }
                });
        }
    // eslint-disable-next-line
    }, []);

    return (
        <>
            <AuthenticatedTemplate>
                <Typography variant="h6">You are signed-in. Select profile to call Microsoft Graph.</Typography>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Typography variant="h6">Please sign-in to see your profile information.</Typography>
            </UnauthenticatedTemplate>
        </>
    );
}