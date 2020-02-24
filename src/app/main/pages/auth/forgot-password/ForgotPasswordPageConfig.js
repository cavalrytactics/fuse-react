import React from 'react';

const ForgotPasswordPageConfig = {
	settings: {
        layout: {
			style: 'layout1',
            config: {
                navbar        : {
                    display: false
                },
                toolbar       : {
                    display: true,
                    style: "fixed"
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
		},
		customScrollbars: false,
		animations: true,
		direction: 'ltr',
        theme           : {
            main   : 'default',
            navbar : 'mainThemeDark',
            toolbar: 'mainThemeLight',
            footer : 'mainThemeDark'
        }
    },
	routes: [
		{
			path: '/forgot-password',
			component: React.lazy(() => import('./ForgotPasswordPage'))
		}
	]
};

export default ForgotPasswordPageConfig;
