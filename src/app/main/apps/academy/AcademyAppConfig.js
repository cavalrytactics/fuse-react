import React from 'react';
import { authRoles } from 'app/auth';
import { Redirect } from 'react-router-dom';

export const AcademyAppConfig = {
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
    auth: authRoles.user,
    routes  : [
        {
            path     : '/apps/academy/courses/:courseId/:courseHandle?',
            component: React.lazy(() => import('./securethebox/course/Course'))
        },
        {
            path     : '/apps/academy/courses',
            component: React.lazy(() => import('./courses/Courses'))
        },
        {
            path     : '/apps/academy',
            component: () => <Redirect to="/apps/academy/courses"/>
        }
    ]
};

export default AcademyAppConfig;
