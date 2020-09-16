import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { LoginModule } from 'app/main/login/login.module';
import { CategoriesModule } from 'app/main/categories/categories.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment'
import { eventNames } from 'process';
import { AuthGuard } from './services/auth.guard';
import { RedirectGuard } from './services/redirect.guard';
import { CategoriesComponent } from './main/categories/categories.component';
import { AccessComponent } from './main/access/access.component';
import { AccessModule } from './main/access/access.module';
import { LoginComponent } from './main/login/login.component';
import { SampleComponent } from './main/sample/sample.component';
import { AddCategoriesModule } from './main/addcategories/categories.module';
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToAccount = () => redirectLoggedInTo(['dashboard']);
const appRoutes: Routes = [

    {

        path        : 'dashboard',
        redirectTo: 'dashboard',
        //canActivate: [AuthGuard]
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToAccount }
    },

    {

        path        : 'dashboard/addvideos',
        redirectTo: 'addvideos',
        //canActivate: [AuthGuard]
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToAccount }
    },

{
    path        : 'dashboard/categories',
    redirectTo: 'categories',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToAccount }
},

{
    path: 'login',
    redirectTo: 'login',
    //canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome }
},

{
    path: 'loginauth',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'localhost:4200/dashboard'
    }
},
    {
        path: 'u/connectlink',
        canActivate: [RedirectGuard],
        component: RedirectGuard,
        data: {
          externalUrl: 'https://connect.link/'
        }
    },
    {
        path: 'u/checkapp',
        canActivate: [RedirectGuard],
        component: RedirectGuard,
        data: {
          externalUrl: 'https://play.google.com/store/apps/details?id=download.crossally.apps.hizkiyyah&hl=en_US'
        }
    },
    {
        path: '*/*',
        redirectTo: 'access',
        pathMatch: 'full'

    }
];

@NgModule({
    declarations: [
        AppComponent

    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        TranslateModule.forRoot(),
        AngularFireAuthGuardModule,
        FormsModule,
        AngularFireDatabaseModule, // for database
        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        LoginModule,
        CategoriesModule,
        AccessModule,
        AddCategoriesModule

    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [RedirectGuard],
})
export class AppModule
{
}
