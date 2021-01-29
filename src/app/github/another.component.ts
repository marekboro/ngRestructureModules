import {Component } from '@angular/core'



@Component({
    selector: 'testerComponent',
    template: `
    <div>
        <h1> this is tester component : {{values[0]}} </h1>
        <h2> this is tester component : {{values[1]}}  </h2>
        <h3> this is tester component : {{values[2]}}  </h3>
        <h4> this is tester component : {{values[3]}}  </h4>
        <h5> this is tester component : {{values[4]}}  </h5>
        <h6> this is tester component : {{values[5]}} </h6>
        <p>  this is tester component : {{values[6]}}  </p>
        <a>  this is tester component : {{values[7]}} </a>
        <github> </github>
    </div>
    `
})

export class TesterComponent{
    values:string[] = ['H1','H2','H3','H4','H5','H6','P', 'A']

}