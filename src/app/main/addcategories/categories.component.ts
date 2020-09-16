import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { AuthService } from 'app/services/auth.service';
import { Item } from './item';
import { TutorialService } from 'app/services/itemservice.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { Validators } from '@angular/forms';


/**
 * generate groups of 4 random characters
 * @example getUniqueId(1) : 607f
 * @example getUniqueId(2) : 95ca-361a-f8a1-1e73
 */
export function getUniqueId(parts: number): string {
    const stringArr = [];
    for(let i = 0; i< parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

@Component({
    selector   : 'dashboard/addvideos',
    templateUrl: './categories.component.html',
    styleUrls  : ['./categories.component.scss']
})
export class AddCategoriesComponent
{

    item: Item = new Item;
    submitted = false;
    updatedTime: number;
    title: string;
    id:string;
    timestamp: number;
    published: boolean = false;
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public auth: AuthService,
        private itemSvc: TutorialService,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder
    )
    {
        //this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }
    defaultElevation = 2;
    raisedElevation = 8;
    acatForm: FormGroup;
    saveTutorial(): void {

        this.itemSvc.create(this.item, this.item.key).then(() => {
          console.log('Created new item successfully!');
          this.submitted = true;
        });
      }

      newTutorial(): void {
        this.submitted = false;
        this.item = new Item();
        this.item.published = false

      }



      /**
     * On init
     */
    ngOnInit(): void
    {
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let sec = ("0" + now.getSeconds).slice(-2);
    //let str = hours + ':' + minutes + sec;
    let str = Date.now() / 1000 | 0;
    this.item.timestamp = str;
    this.timestamp = this.item.timestamp;
    this.item.id = "_de" + getUniqueId(4)
    this.title = this.item.title
        this.acatForm = this._formBuilder.group({
            title   : ['', [Validators.required, Validators.name]],
            description: ['', Validators.required],
            vidourl: ['', Validators.required],
            imageurl: ['', Validators.required],
            id: ['', Validators.required],
            timestamp: ['', Validators.required]
            //updatedTime: [this.time]
        });

    }

}
