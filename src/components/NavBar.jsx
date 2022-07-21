import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { WelcomeName } from "./WelcomeName";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { Link as RouterLink } from "react-router-dom";

import { useIsAuthenticated } from "@azure/msal-react";

const NavBar = () => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <div sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        <Link component={RouterLink} to="/" color="inherit" variant="h6">Microsoft identity platform</Link>
                    </Typography>
                    {isAuthenticated ? <WelcomeName /> : null}
                    <Button component={RouterLink} to="/profile" color="inherit">Profile</Button>
                    {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;