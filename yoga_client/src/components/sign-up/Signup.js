// import React, { useState } from 'react';
// import axiosInstance from '../../axios';
// import { useNavigate } from 'react-router-dom';
// // Material UI

// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.primary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 3),
//     },
// }));

// export default function SignUp() {
//     const history = useNavigate();
//     const initialFormData = Object.freeze({
//         first_name: '',
//         last_name: '',
//         username: '',
//         email: '',
//         password: '',
//         confirm_password: '',
//     });

//     const [formData, updateFormData] = useState(initialFormData);

//     const handleChange = (e) => {
//         updateFormData({
//             ...formData,
//             // Trimming any whitespace
//             [e.target.name]: e.target.value.trim(),
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         axiosInstance
//             .post(`user/register/`, {
//                 first_name: formData.first_name,
//                 last_name: formData.last_name,
//                 username: formData.username,
//                 email: formData.email,
//                 password: formData.password,
//                 confirm_password: formData.confirm_password,
//             })
//             .then((res) => {
//                 history("/signin", { replace: true });
//             });
//     };

//     const classes = useStyles();

//     return (
//         <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <div className={classes.paper}>
//                 <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign Up
//                 </Typography>
//                 <form className={classes.form} noValidate>
//                     <Grid container spacing={2}>

//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 variant="outlined"
//                                 autoComplete="given-name"
//                                 name="first_name"
//                                 required
//                                 fullWidth
//                                 id="first_name"
//                                 label="First Name"
//                                 autoFocus
//                                 onChange={handleChange}
//                             />
//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="last_name"
//                                 label="Last Name"
//                                 name="last_name"
//                                 autoComplete="family-name"
//                                 onChange={handleChange}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Username"
//                                 name="username"
//                                 autoComplete="username"
//                                 onChange={handleChange}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                                 onChange={handleChange}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="current-password"
//                                 onChange={handleChange}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 name="confirm_password"
//                                 label="Confirm Password"
//                                 type="password"
//                                 id="confirm_password"
//                                 autoComplete="current-password"
//                                 onChange={handleChange}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <FormControlLabel
//                                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                 label="I want to marketing updates via email."
//                             />
//                         </Grid>

//                     </Grid>
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         className={classes.submit}
//                         onClick={handleSubmit}
//                     >
//                         Sign Up
//                     </Button>
//                     <Grid container justify="flex-end">
//                         <Grid item>
//                             Already have an account?
//                             <Link href="/signin" variant="body2">
//                                 Sign in
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </div>
//         </Container>
//     );
// }
