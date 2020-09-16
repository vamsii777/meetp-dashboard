import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { AuthService } from 'app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
    selector   : 'dashboard',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public auth: AuthService,
        public afAuth: AngularFireAuth,
        private router: Router
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }
    defaultElevation = 2;
    raisedElevation = 8;

     /**
     * On init
     */
    ngOnInit(): void
    {

        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.router.navigate(['/dashboard']);
            } else {
              this.router.navigate(['/login']);
            }
          });
    }
}
