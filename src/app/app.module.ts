import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider,GoogleLoginProvider } from 'angularx-social-login';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { FillInfoComponent } from './fill-info/fill-info.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('694559114614236')
  },
  {  
    id: GoogleLoginProvider.PROVIDER_ID,  
    provider: new GoogleLoginProvider('603868875721-nn2hjhnbej9tg0u5sfjrhtb0asjt0v11.apps.googleusercontent.com')  
  }  
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FillInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SocialLoginModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
