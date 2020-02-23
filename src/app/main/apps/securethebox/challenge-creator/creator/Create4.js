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

const ALL_CATEGORIES = gql`
    {
        allCategories{
            edges {
                node {
                    id,
                    value,
                    label,
                    color
                }
            }
        }
    }
`;

function AllCategories() {
    const { loading, error, data } = useQuery(ALL_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    data["allCategories"]["edges"].map((v, i) => {
        console.log(v["node"])
        return null
    })
    return (
        <div><p>hello</p></div>
    )
}

// function renderAppCategoryHook(props) {
//     const { loading, error, data } = useQuery(ALL_CATEGORIES);
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
//     if (data) return data["allCategories"]["edges"].map((value, index) => {
//         if (props.category === value["node"]["value"]) {
//             return (
//                 <FormControlLabel
//                     key={value["node"]["id"]}
//                     label={value["node"]["label"]}
//                     control={
//                         <Field
//                             name={`steps[${props.step_index}].apps[${props.category}]`}
//                             component={Radio}
//                             type="radio"
//                             value={value["node"]["value"]}
//                         />
//                     }
//                 />
//             )
//         }
//         return null
//     }
//     )
// }



class Create4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        
    }

    render() {
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
                            steps: this.state.course_steps
                        }}
                        onSubmit={onSubmit}
                    >
                        <AllCategories/>
                    </Wizard>
                </Paper>
            </div>
        )
    };
}

function mapStateToProps({ auth }) {
    return {
        user: auth.user
    }
}

export default withReducer('auth', reducer)((connect(mapStateToProps)(Create4)));
