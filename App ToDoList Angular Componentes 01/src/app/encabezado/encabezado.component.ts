import { Component } from "@angular/core";  

// Componente que agrega Metadatos, es conocido como un decorador
@Component({
    selector: "app-encabezado",
    standalone: true, // Marca que el componente va a ser indepediente
    templateUrl: './encabezado.component.html',
    styleUrl: './encabezado.component.css'
}) 

export class EncabezadoComponent {}
