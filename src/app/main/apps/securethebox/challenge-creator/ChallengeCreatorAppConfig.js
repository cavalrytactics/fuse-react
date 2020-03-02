import React from 'react';
import {authRoles} from 'app/auth';

export const ChallengeCreatorAppConfig = {
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
    routes  : [
        {
            path     : '/apps/challenge-creator/create',
            // component: React.lazy(() => import('./creator2/Create4'))
            component: React.lazy(() => import('./creator/Create33'))
        }
    ]
};
