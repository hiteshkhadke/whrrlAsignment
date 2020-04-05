import { Component, OnInit  } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'whrrlAssignment';
  socialInfoObj: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) { }
  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.socialInfoObj = user;
      this.loggedIn = (user != null);
      console.log(this.socialInfoObj);
      console.log(this.loggedIn);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
   }

   signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   }
}
