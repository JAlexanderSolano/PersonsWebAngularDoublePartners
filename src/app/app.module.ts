import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarmeComponent } from './registrarme/registrarme.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes =[
  
  {
    path: '',
    component:LoginComponent
  },
  {
    path:'registrarme',
    component:RegistrarmeComponent
  },
  {
    path:'principal',
    component:PrincipalComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrarmeComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
