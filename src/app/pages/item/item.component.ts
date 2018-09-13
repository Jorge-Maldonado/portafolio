import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    producto: ProductoDescripcion;
    id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( parametros => {
        // console.log(parametros['id']);
        this.productoService.getProduto(parametros['id'])
        .subscribe( (producto: ProductoDescripcion) => {
          this.producto = producto;
          // console.log(producto);
          this.id = parametros['id'];
        });



      });
  }

}
