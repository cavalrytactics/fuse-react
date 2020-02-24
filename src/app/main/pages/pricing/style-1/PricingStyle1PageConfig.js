import React from 'react';
import { authRoles } from 'app/auth';

const PricingStyle1PageConfig = {
	settings: {
        layout: {
			style: 'layout1',
            config: {
                navbar        : {
                    display: false
                },
                toolbar       : {
                    display: false,
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
	auth: authRoles.user,
	routes: [
		{
			path: '/pricing',
			component: React.lazy(() => import('./PricingStyle1Page'))
		}
	]
};

export default PricingStyle1PageConfig;
