import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {

  constructor(
    public router: Router
  ) { 
    setTheme('bs5');
  }

  ngOnInit(): void {
  }

}
