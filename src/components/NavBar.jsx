import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { WelcomeName } from "./WelcomeName";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

const NavBar = () => {
    return (
        <div sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        <Link to="/" color="inherit" variant="h6">Microsoft identity platform</Link>
                    </Typography>
                    <WelcomeName />
                    <div className="auth-btn">
                        <SignInButton />
                        <SignOutButton />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;