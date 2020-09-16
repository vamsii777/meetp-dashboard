import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessComponent } from './access.component';
const routes = [
    {
        path     : 'access',
        component: AccessComponent
    }
];

@NgModule({
    declarations: [
        AccessComponent
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
        AccessComponent
    ]
})

export class AccessModule
{
}
