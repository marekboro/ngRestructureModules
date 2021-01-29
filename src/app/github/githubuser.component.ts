import {Component, OnInit, OnDestroy} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'user',
    template: `
    <h1>User Login: {{login}}</h1>
    <h2>User score: {{score}}</h2>
   

    `
})

export class GitHubUserComponent implements OnInit, OnDestroy {
    login;
    score;
    secret;
    subscribtion;

    constructor(private _route: ActivatedRoute){
    }

    ngOnInit(){
        this.subscribtion = this._route.params.subscribe(params => {
            this.login = params["login"];
            this.score = params["score"];
           
        })
    }
    ngOnDestroy(){
        this.subscribtion.unsubscribe();
    }
}

