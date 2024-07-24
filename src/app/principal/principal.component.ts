import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  data: any[] = [];
  constructor(private apiService: ApiService, private router: Router) { }
  ngOnInit() {
    this.CargarData();
  }
  CargarData() {
    let baseURL = this.apiService.ObtenerUrl()
    fetch(baseURL + 'Person')
      .then((response) => response.json())
      .then((json) => this.data = json
      )
  }
  Salir() {
    Swal.fire({
      title: "¿Deseas salir?",
      text: "Estas seguro de que quieres salir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate([''])
      }
    });

  }
}
