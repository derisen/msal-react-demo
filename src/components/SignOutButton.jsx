import { useMsal } from '@azure/msal-react';
import Button from '@mui/material/Button';


export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleSignOut = () => {
        instance.logoutRedirect();
    }

    return (
        <Button color="inherit" onClick={handleSignOut}>Sign out</Button>
    )
};