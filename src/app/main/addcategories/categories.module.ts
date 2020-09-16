import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCategoriesComponent } from './categories.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
const routes = [
    {
        path     : 'dashboard/addvideos',
        component: AddCategoriesComponent
    }
];

@NgModule({
    declarations: [
        AddCategoriesComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        TranslateModule,
        MatCardModule,
        MatButtonModule,
        FuseSharedModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

    ],
    exports     : [
        AddCategoriesComponent
    ]
})

export class AddCategoriesModule
{
}
