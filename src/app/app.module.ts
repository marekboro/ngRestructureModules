import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component"
import { NotFoundComponent } from "./notfound.component"
import { routing } from "./app.routing"
import {GitHubRouting} from './github/github.routing'
import { TesterComponent } from './github/another.component';
import {GitHubModule} from './github/github.module'
import {LoginModule} from './login/login.module'

@NgModule({
  declarations: [  // FOR components we use
    AppComponent,
    HomeComponent,
    NotFoundComponent
    
  ],

  imports: [    // modules we use
    BrowserModule,
    GitHubModule,
    LoginModule,
    GitHubRouting,
    routing
  ],

  providers: [    // services we use
  ],

  bootstrap: [AppComponent]   // the ENTRY module of the APP.
})
export class AppModule { }
