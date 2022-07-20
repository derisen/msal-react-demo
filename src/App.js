import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { MsalProvider } from "@azure/msal-react";

function App({ msalInstance }) {
    return (
        <MsalProvider instance={msalInstance}>
            <PageLayout>
                <Grid container justifyContent="center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Grid>
            </PageLayout>
        </MsalProvider>
    );
}

export default App;
