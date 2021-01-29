import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from "./home.component"
import { NotFoundComponent } from "./notfound.component"
import { GitHubComponent } from "./github.component"
import { routing } from "./app.routing"
import { TesterComponent } from './another.component';
import { GitHubUserComponent } from './githubuser.component';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';


@NgModule({
  declarations: [  // FOR components we use
    GitHubUserComponent,
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    TesterComponent,
    LoginComponent
  ],

  imports: [    // modules we use
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],

  providers: [    // services we use
    LoginService,
    AuthGuard,
    PreventUnsavedChangesGuard
  ],

  bootstrap: [AppComponent]   // the ENTRY module of the APP.
})
export class AppModule { }
