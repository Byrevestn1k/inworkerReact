
  
  import { getAuth } from "firebase/auth";
	



const AuthPage = () => {
	// let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate.pushForUseEffectUpdate);
	// let dispatcher = useDispatch()
	const user = getAuth().currentUser;

	if (user) {

	} else {
	
	}

	return (

		<div>SIGN IN</div>
	// <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   {/* loading */}
    //   <Backdrop style={{ zIndex: "1000", color: "#fff" }} open={loading}>
    //     <CircularProgress color="inherit" />
    //   </Backdrop>
    //   <div className={classes.paper}>
    //     <Avatar className={classes.avatar}>
         
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Sign in
    //     </Typography>
    //     <form className={classes.form} noValidate>
    //       <TextField
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         label="Email Address"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //         onChange={(e) => set_email(e.target.value)}
    //       />
    //       <TextField
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //         onChange={(e) => set_password(e.target.value)}
    //       />
    //       <Button
    //         type="button"
    //         fullWidth
    //         variant="contained"
    //         color="primary"
    //         className={classes.submit}
    //         onClick={handleSignIn}
    //       >
    //         {loading ? "...signing" : "SIGN IN"}
    //       </Button>
    //     </form>
    //   </div>
    //   <Box mt={8}>
    //     <Copyright />
    //   </Box>
    // </Container>
			

	);
};

export default AuthPage;
