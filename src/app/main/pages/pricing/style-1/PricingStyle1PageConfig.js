import React from 'react';
import { authRoles } from 'app/auth';

const PricingStyle1PageConfig = {
	settings: {
        layout: {
            style: 'layout1',
            config: {
                navbar        : {
                    display: true,
                    folded: true,
			        position: 'left'
                },
                toolbar       : {
                    display: false,
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
        }
    },
    customScrollbars: false,
    animations: true,
    auth   : authRoles.user,
	routes: [
		{
			path: '/pricing',
			component: React.lazy(() => import('./PricingStyle1Page'))
		}
	]
};

export default PricingStyle1PageConfig;
