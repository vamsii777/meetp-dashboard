import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { AuthService } from 'app/services/auth.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
    selector   : 'access',
    templateUrl: './access.component.html',
    styleUrls  : ['./access.component.scss']
})
export class AccessComponent
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
        //this._fuseTranslationLoaderService.loadTranslations(english, turkish);
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
