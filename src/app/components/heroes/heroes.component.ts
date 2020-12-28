import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
    ) {
    console.log('contrunsctor')
  }

  ngOnInit(): void {
    console.log('ng--init')
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes)
  }

  verHeroe (idx: number) {
    this._router.navigate(['/heroe', idx])
  }

}
