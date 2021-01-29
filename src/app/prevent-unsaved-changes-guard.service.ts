import { CanDeactivate } from '@angular/router'
import { LoginComponent } from './login.component'
import { LoginService} from './login.service'
import {Injectable } from '@angular/core'

@Injectable()
export class PreventUnsavedChangesGuard implements CanDeactivate<LoginComponent> {   // CanDeactivate of TYPE LoginComponent? ?
    
    constructor(private _loginService:LoginService){}
    
    canDeactivate(component: LoginComponent) {
        if (component.form.dirty && !this._loginService.isLoggedIn) {
            return confirm("Are you sure");
        }
        
            return true;
        
    }
}