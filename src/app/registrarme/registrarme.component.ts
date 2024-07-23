import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarme',
  templateUrl: './registrarme.component.html',
  styleUrl: './registrarme.component.css'
})
export class RegistrarmeComponent {
  person = {
    names: '',
    lastnames: '',
    identification: '',
    email: '',
    typeid: '',
    username: '',
    password: '',
    confirmpass: ''
  }
  result: string = '';
  data: any[] = [];
  constructor(private apiService: ApiService, private router: Router) { }

  Login() {
    this.router.navigate([''])
  }
  Registrarme() {
    if (this.person.password == this.person.confirmpass) {
      let baseURL = this.apiService.ObtenerUrl();
      fetch(baseURL + 'Registrarme/Registrarme'
        , {
          method: 'POST',
          body: JSON.stringify({
            names: this.person.names,
            lastnames: this.person.lastnames,
            identification: this.person.identification,
            email: this.person.email,
            typeid: this.person.typeid,
            username: this.person.username,
            password: this.person.password
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        }
      )
        .then((response) => response.json())
        .then((json) => this.Redirigir(json))
    } else {
      alert("Las contraseñas deben de coincidir");
    }
    console.log(this.person)
  }
  Redirigir(_json: any) {
    this.data = _json
    this.data.forEach(item => {
       this.result = item.result
    });
   
    if(this.result == "Persona registrada con exito"){
     alert(this.result);
     this.router.navigate([''])
   }else{
     alert(this.result);
   }
  }
}
