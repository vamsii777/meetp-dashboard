import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { AuthService } from 'app/services/auth.service';

@Component({
    selector   : 'dashboard/categories',
    templateUrl: './categories.component.html',
    styleUrls  : ['./categories.component.scss']
})
export class CategoriesComponent
{

    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public auth: AuthService
    )
    {
        //this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }
    defaultElevation = 2;
    raisedElevation = 8;

}
