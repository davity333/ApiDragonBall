import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Apiinterface} from '../../models/apiinterface';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent implements OnInit{
  interfaceItems: Apiinterface[] = []; 
  numero:number = 0;
  constructor(private apiService: ApiService, private navegar: Router ) {}
  
  ngOnInit(): void{
    this.apiService.getAll().pipe(
      tap({
        next: (response) => {
          console.log(response); 
          if (response && response.items) {
            this.interfaceItems = response.items;
            console.log("Items guardados");
            console.log(this.interfaceItems);
          } else {
            console.error('No se encontraron items en la respuesta');
          }
        },
        error: (err) => {
          console.error('Error al obtener los datos de la API', err);
        }
      })
    ).subscribe();
  }

  getCharacter(index:number){
    this.apiService.setId(index);
    this.numero = index +1;
    alert("Eligistes al personaje con id"+index)
    this.navegar.navigate(['/personaje']);
  }
  
}

