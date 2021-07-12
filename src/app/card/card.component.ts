import { Component, Input, OnInit } from '@angular/core';
import { Venta } from '../models/venta';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'case-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  venta?: Venta

  constructor() { }

  ngOnInit(): void {
  }

}
