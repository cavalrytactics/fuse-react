import React from 'react'
import {
	Environment,
	Network,
	RecordSource,
	Store,
} from 'relay-runtime';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

function fetchQuery(
	operation,
	variables,
) {
	// return fetch('http://localhost:5000/graphql', {
	return fetch('https://cloud-run.securethebox.us/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: operation.text,
			variables,
		}),
	}).then(response => {
		return response.json();
	});
}

const environment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});


function ManagerPage() {

	return (
		<div>
			<QueryRenderer
				environment={environment}
				query={graphql`
				query ManagerPageQuery {
					categoriesList {
					label
					}  
				}
				`}
				variables={{}}
				render={({ error, props }) => {
					if (error) {
						return <div>Error!</div>;
					}
					if (!props) {
						return <div>Loading...</div>;
					}
					if (props) {
						return (
							props.categoriesList.map((v, i) => {
								return <div key={i}>{v.label}</div>
							}))
					}

				}}
			/>
		</div>
	);
}

export default ManagerPage;
