import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'CONSOLE MAP',
        //translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Home',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'home',
                url      : '/dashboard'
            }
        ]
    } ,

    {
        id       : 'olinks',
        title    : 'OTHER LINKS',
        //translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [



            {
                id       : 'shortlinks',
                title    : 'Connect Link',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'link',
                url      : 'u/connectlink'
            },
            {
                id       : 'checkapp',
                title    : 'Go To Playstore',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'shop',
                url      : 'u/checkapp'
            }
        ]
    }
];
