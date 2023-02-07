import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { AuthentictionButtonComponent } from './components/authentiction-button/authentiction-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { PagesComponent } from './pages/pages.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthNavComponent,
    AuthentictionButtonComponent,
    AuthenticationButtonComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    MainNavComponent,
    NavBarComponent,
    SignupButtonComponent,
    PagesComponent,
    ExternalApiComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
