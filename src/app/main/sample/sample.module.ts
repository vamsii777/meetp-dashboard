import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { FuseSharedModule } from '@fuse/shared.module';
import { SampleComponent } from './sample.component';
import {MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes = [
    {
        path     : 'dashboard',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
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
        SampleComponent
    ]
})

export class SampleModule
{
}
