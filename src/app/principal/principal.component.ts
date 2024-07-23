import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  data: any[] = [];
  constructor(private apiService: ApiService, private router:Router){}  
  ngOnInit(){
    this.CargarData();
  }
  CargarData(){
   let baseURL = this.apiService.ObtenerUrl()
   fetch(baseURL+ 'Person')
   .then((response) => response.json())
   .then((json)=> this.data = json
    ) 
  }
  Salir(){
    this.router.navigate([''])
  } 
}
