import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import Grid from "@mui/material/Grid";

function App({ msalInstance }) {
    return (
        <MsalProvider instance={msalInstance}>
            <PageLayout>
                <Grid container justifyContent="center">
                    <Pages />
                </Grid>
            </PageLayout>
        </MsalProvider>
    );
}

const Pages = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (!isAuthenticated) {
            instance.ssoSilent({
                scopes: ["user.read"],
                // loginHint: "", 
            }).then((response) => {
                instance.setActiveAccount(response.account);
            }).catch(error => {
                    if (error instanceof InteractionRequiredAuthError) {
                        instance.loginRedirect();
                    }
                });
        }
    // eslint-disable-next-line
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default App;
