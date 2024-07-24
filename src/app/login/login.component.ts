import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

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
      //alert(this.result + ' sr/sra '+ this.usuario.username);
      Swal.fire({ 
        title:'Exito', 
        text: this.result +' sr/sra '+ this.usuario.username, 
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      }).then((_result)=>{
        if(_result.isDismissed){
          this.router.navigate(['/principal'])
        }
      });
    }else{
      Swal.fire({ 
        title:'Error', 
        text: this.result, 
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      });
    }

  }
}
