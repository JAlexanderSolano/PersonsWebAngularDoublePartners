import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = {
    username: '',
    password: ''
  }
  result:string = '';
  data: any[] = [];
  constructor(private apiService: ApiService, private router:Router){}
  Login(){
    //console.log(this.usuario)
    let baseURL = this.apiService.ObtenerUrl();
    fetch(baseURL+'Login/Login', 
      {
        method: 'POST',
        body: JSON.stringify({
          username : this.usuario.username,
          password: this.usuario.password
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        },
      }
    )
    .then((response) => response.json())
    .then((json)=> this.Redirigir(json))
  }
  Registrarme(){
    this.router.navigate(['/registrarme'])
  }
  Redirigir(_json:any){
     this.data = _json
     this.data.forEach(item => {
        this.result = item.result
     });
    
     if(this.result == "Bienvenido"){
      alert(this.result + ' sr/sra '+ this.usuario.username);
      this.router.navigate(['/principal'])
    }else{
      alert(this.result);
    }

  }
}
