import React from 'react';
import {Button, Card, CardContent, Checkbox, Divider, FormControl, FormControlLabel, TextField, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import {useForm} from '@fuse/hooks';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
}));

function LoginPage()
{
    const classes = useStyles();

    const {form, handleChange, resetForm} = useForm({
        email   : '',
        password: '',
        remember: true
    });

    function isFormValid()
    {
        return (
            form.email.length > 0 &&
            form.password.length > 0
        );
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        resetForm();
    }

    return (
        <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

            <div className="flex flex-col items-center justify-center w-full">

                <FuseAnimate animation="transition.expandIn">

                    <Card className="w-full max-w-384">

                        <CardContent className="flex flex-col items-center justify-center p-32">

                            <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo"/>

                            <Typography variant="h6" className="mt-16 mb-32">LOGIN TO YOUR ACCOUNT</Typography>

                            <form
                                name="loginForm"
                                noValidate
                                className="flex flex-col justify-center w-full"
                                onSubmit={handleSubmit}
                            >

                                <TextField
                                    className="mb-16"
                                    label="Email"
                                    autoFocus
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <TextField
                                    className="mb-16"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <div className="flex items-center justify-between">

                                    <FormControl>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="remember"
                                                    checked={form.remember}
                                                    onChange={handleChange}/>
                                            }
                                            label="Remember Me"
                                        />
                                    </FormControl>

                                    <Link className="font-medium" to="/pages/auth/forgot-password">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <Button
                                    variant="contained" color="primary"
                                    className="w-224 mx-auto mt-16"
                                    aria-label="LOG IN"
                                    disabled={!isFormValid()}
                                    type="submit"
                                >
                                    LOGIN
                                </Button>

                            </form>

                            <div className="my-24 flex items-center justify-center">
                                <Divider className="w-32"/>
                                <span className="mx-8 font-bold">OR</span>
                                <Divider className="w-32"/>
                            </div>

                            <Button variant="contained" color="secondary" size="small"
                                    className="normal-case w-192 mb-8">
                                Log in with Google
                            </Button>

                            <Button variant="contained" color="primary" size="small"
                                    className="normal-case w-192">
                                Log in with Facebook
                            </Button>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Don't have an account?</span>
                                <Link className="font-medium" to="/pages/auth/register">Create an account</Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        </div>
    );
}

export default LoginPage;
