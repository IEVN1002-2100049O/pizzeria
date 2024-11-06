import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnadirComponent } from "./anadir/anadir.component";
import { TablacompraComponent } from "./tablacompra/tablacompra.component";
import { VentasComponent } from "./ventas/ventas.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnadirComponent, TablacompraComponent, VentasComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}
