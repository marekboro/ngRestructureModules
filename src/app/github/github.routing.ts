import {NgModule} from "@angular/core"
import {Routes, RouterModule } from "@angular/router"


import {GitHubComponent } from "./github.component"
import {TesterComponent} from './another.component'
import { GitHubUserComponent } from './githubuser.component'
import {AuthGuard} from '../login/auth-guard.service'


export const GitHubRouting = RouterModule.forChild([
    {path:'GitHub', component: GitHubComponent, canActivate:[AuthGuard]},
    {path:'Tester', component: TesterComponent, canActivate:[AuthGuard]},
    {path:'Tester/user/:login/:score', component: GitHubUserComponent, canActivate:[AuthGuard]},
    {path:'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate:[AuthGuard]}
])