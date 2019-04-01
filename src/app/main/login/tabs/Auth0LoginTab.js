import React, {useEffect} from 'react';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import auth0Service from 'app/services/auth0Service';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import * as authActions from 'app/auth/store/actions';
import * as Actions from 'app/store/actions';

function Auth0LoginTab(props)
{
    useEffect(() => {

        showDialog();

        auth0Service.onAuthenticated(() => {

            props.showMessage({message: 'Logging in with Auth0'});

            auth0Service.getUserData().then(tokenData => {

                props.setUserDataAuth0(tokenData);

                props.showMessage({message: 'Logged in with Auth0'});
            });
        });
    }, []);

    function showDialog()
    {
        auth0Service.login();
    }

    return (
        <div className="w-full">
            <Button
                className="w-full my-48"
                color="primary"
                variant="contained"
                onClick={showDialog}
            >
                Log In/Sign Up with Auth0
            </Button>
        </div>
    );
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            setUserDataAuth0: authActions.setUserDataAuth0,
            showMessage     : Actions.showMessage
        },
        dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Auth0LoginTab));
