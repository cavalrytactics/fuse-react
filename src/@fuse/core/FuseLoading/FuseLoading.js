import { useTimeout } from '@fuse/hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function FuseLoading(props) {
	const [showLoading, setShowLoading] = useState(!props.delay);

	useTimeout(() => {
		setShowLoading(true);
	}, props.delay);

	if (!showLoading) {
		return null;
	}

	return (
		<div className="flex flex-1 flex-col items-center justify-center" style={{backgroundColor:"#1e1f1c"}}>
			<Typography className="text-20 mb-16" color="textSecondary" style={{color:"white", letterSpacing: '-0.5px', fontSize: '25px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""}}>
				Loading...
			</Typography>
			<LinearProgress className="w-xs" color="secondary" />
		</div>
	);
}

FuseLoading.propTypes = {
	delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

FuseLoading.defaultProps = {
	delay: false
};

export default FuseLoading;
