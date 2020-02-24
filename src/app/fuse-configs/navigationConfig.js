// import {authRoles} from 'app/auth';
import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
    {
        'id'      : 'creator',
        'title'   : 'Challenges',
        'type'    : 'group',
        'url'     : '/apps/challenge-creator/create',
        'children': [
            {
                'id'   : 'challenges-view',
                'title': 'View Challenges',
                'type' : 'item',
                'icon' : 'fitness_center',
                'url'  : '/apps/academy/courses'
            },
            {
                'id'   : 'challenges-create',
                'title': 'Create Challenge',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/apps/challenge-creator/create'
            },
        ]
    },
    {
        'id'      : 'subscription',
        'title'   : 'Subscription',
        'type'    : 'item',
        'icon'    : 'credit_card',
        'url'     : '/pricing'
    },
];


export default navigationConfig;
