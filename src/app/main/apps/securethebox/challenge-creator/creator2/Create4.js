import React, { Component } from 'react';
import withReducer from 'app/store/withReducer';
import connect from 'react-redux/es/connect/connect';
import reducer from '../../../../../auth/store/reducers';
import './Create.css'
import {
    Paper,
} from '@material-ui/core';
import Wizard from "./Wizard";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import axios from 'axios'
const baseURL = "https://cloud-run.securethebox.us"

function renderWizardPages() {
    return (
        <Wizard.Page key={value.title + index} >
            <div>
                <Field
                    name={`steps[${index}].content`}
                    component={this.renderQuill}
                    placeholder="Content"
                />
                <Error name={`steps[${this.state.page}].content`} />
            </div>
        </Wizard.Page>
    )
}

function Create4(props) {
    const onSubmit = async values => {
        let challengeDict = {}
        challengeDict["challenge"] = values
        axios.post(baseURL + '/api/v1/challenges', challengeDict)
            .then((r) => {
                console.log(r)
            })
    }

    return (
        <div className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64">
            <Paper className="w-full rounded-8 p-16 md:p-24" elevation={1}>
                <Wizard
                    initialValues={{
                        category: 'web',
                        length: 0,
                        totalSteps: 7,
                        activeStep: 0,
                        // steps: this.state.course_steps
                    }}
                    onSubmit={onSubmit}
                >
                    <renderWizardPages />
                </Wizard>
            </Paper>
        </div>
    )
}

function mapStateToProps({ auth }) {
    return {
        user: auth.user
    }
}

export default withReducer('auth', reducer)((connect(mapStateToProps)(Create4)));
