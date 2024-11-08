import { Component } from '@angular/core';
import { Apiinterface, Personaje} from '../../models/apiinterface';
import { ApiService } from '../../services/api.service';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit {
  personaje: any[] = []; 

  constructor(private apiService: ApiService ) {}
  
  number: number = 0;
  ngOnInit(): void{
    this.number = this.apiService.getId();
    
    console.log("el numero que pasastes es" + this.number);
    this.apiService.getCharacter(this.number).pipe(
      tap({
        next: (response) => {
          if (response) {
            this.personaje = response;
            console.log("este es el personaje")
            console.log(this.personaje); 
            alert(JSON.stringify(this.personaje))
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
}
