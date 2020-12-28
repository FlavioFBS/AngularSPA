import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Heroe, HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = ''
  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
  }

}
