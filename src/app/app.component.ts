import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { LoginService} from './login.service'

@Component({

  selector: 'app-root',
  template: `  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" routerLink="">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="GitHub">GitHub</a>
        </li>           
        <li class="nav-item">
          <a class="nav-link" routerLink="Tester">Tester</a>
        </li>
        <li class="nav-item">
          <a (click)="logout()" class="nav-link" routerLink="">Logout</a>
        </li>      
      </ul>    
    </div>
  </nav>
  <router-outlet></router-outlet>                                                                      

          `,
  providers: []


})
export class AppComponent {
  constructor(private _loginService: LoginService) {

  }

  logout(){
    this._loginService.logout();
  }

}



// @Component({
//   selector: 'app-root',
//   template: `
//          <input class= "form-control" type="search" [formControl] = "searchControl">
//           <h3> User Results:  </h3>
//           <div *ngIf="isLoading"> 
//             <i class="fa fa-spinner fa-spin fa-6x"> </i>
//           </div>
//           <div *ngFor="let user of users" class="media">
//             <div class="media"> 
//               <a href="{{ user.html_url }}" > 
//                 <img src="{{user.avatar_url}}" class = "mr-4" alt ="..." width ="64" height = "64"> 
//               </a>
//               <div class="media-body">
//                 <h5 class ="mt-0">{{user.login}}</h5>
//                 Score: {{user.score}}
//               </div>
//             </div>
//           </div>
//           `,
//   providers: [GitHubService] // we register the service so the injector knows where to find it ? 

// })
// export class AppComponent {                             // add a consttuctor and INJECT the service into the constructor.
//   searchControl = new FormControl();
//   isLoading = false;
//   users = [];
//   constructor(private _githubService: GitHubService) {  // injection is here. 
//   }

//   ngOnInit() {
//     this.searchControl.valueChanges
//       .pipe(
//         filter(text => text.length >= 3),
//         debounceTime(400),
//         distinctUntilChanged()
//       ).subscribe(value => {
//         this.isLoading = true;
//         this._githubService.getGitHubData(value)
//           .subscribe(data => {
//             this.isLoading = false;
//             this.users = this.users.concat(data.items)
//           });


//       });

//   }

// }

// export class AppComponent {                             // add a consttuctor and INJECT the service into the constructor.
//   constructor(private _githubService: GitHubService) {  // injection is here. 
//     this._githubService.getGitHubData('greg')           // we then call the getGHD method with a parameter in the _githubS instance and...
//       .subscribe(data => console.log(data.items));            // SUBSCRIBE TO IT. 
// // .subscribe(data => console.log(data));            // SUBSCRIBE TO IT. 
//   }

// }
