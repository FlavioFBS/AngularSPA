import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroeService: HeroesService, private _router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe (texto: string) {
    console.log('------------------')
    console.log(this._heroeService.buscarHeroes(texto))
    this._router.navigate(['/buscar', texto])
  }

}
