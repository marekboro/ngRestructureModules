import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    template: `
    <h1> Home </h1>
    <button (click)="onClick()"> Go to Github Users </button>
    <button (click)="onClick1(values[0])"> test1 </button>
    <button (click)="onClick1(values[1])"> test2 </button>

    `

})

export class HomeComponent {
    values:string[] = ['GitHub','errorpageURL']
    
    constructor(private _router:Router){

    }

    onClick(){
        this._router.navigate(['GitHub']);
    }
    onClick1(value){
        this._router.navigate([value]);
    }

}