import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PersonajeComponent } from './Pages/home/Components/personaje/personaje.component';
export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: "personaje", component:PersonajeComponent}
];
