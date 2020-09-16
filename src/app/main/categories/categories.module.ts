import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories.component';
const routes = [
    {
        path     : 'dashboard/categories',
        component: CategoriesComponent
    }
];

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        TranslateModule,
        MatCardModule,
        MatButtonModule,
        FuseSharedModule,
        BrowserAnimationsModule
    ],
    exports     : [
        CategoriesComponent
    ]
})

export class CategoriesModule
{
}
