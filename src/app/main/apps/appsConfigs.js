import {AcademyAppConfig} from './academy/AcademyAppConfig';
import {ChallengeCreatorAppConfig} from './securethebox/challenge-creator/ChallengeCreatorAppConfig';
import {SubscriptionConfig} from './securethebox/subscription/SubscriptionConfig';

export const appsConfigs = [
    SubscriptionConfig,
    ChallengeCreatorAppConfig,
    AcademyAppConfig
];

export default appsConfigs;
