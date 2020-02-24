import FuseAnimate from '@fuse/core/FuseAnimate';
// import Icon from '@material-ui/core/Icon';
// import Input from '@material-ui/core/Input';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
// import { Link } from 'react-router-dom';

function Error404Page() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16" style={{ backgroundColor: "#1e1f1c" }}>
			<div className="max-w-512 text-center">
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<Typography variant="h1" className="font-medium mb-16">
						<span style={{ color: "#A6E22E" }}>404</span>

					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={500}>
					<Typography variant="h5" className="mb-16">
						<span style={{ color: "#A6E22E", letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>Page not found ...</span>
					</Typography>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default Error404Page;
