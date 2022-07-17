import Grid from "@mui/material/Grid";

import { PageLayout } from "./components/PageLayout";
import { ProfileData } from "./components/ProfileData";

function App() {
    return (
        <PageLayout>
            <Grid container justifyContent="center">
                <ProfileData graphData={{
                    displayName: 'Dummy Joe',
                    jobTitle: 'Dummy Title',
                    mail: 'dummy@mail.com',
                    businessPhones: ['1234567890'],
                    officeLocation: 'dummy address',
                }}/>
            </Grid>
        </PageLayout>
    );
}

export default App;
