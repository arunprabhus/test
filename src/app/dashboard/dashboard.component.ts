import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {DataViewModule} from 'primeng/dataview';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  selectedhero: Hero;

  sortKey: string;

  sortField: string;

  sortOrder: number;
  
  displayDialog: boolean;


  sortOptions: SelectItem[] ;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.getHeroes();
  
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

    this.sortOptions = [
        {label: 'FirstName', value: 'firstName'},
        {label: 'Last Name', value: 'lastName'},
        {label: 'Country', value: 'country'}
    ];

  }

  
/*
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 20));
  }*/


selecthero(event: Event, Hero: Hero) {
    this.selectedhero = Hero;
    this.displayDialog = true;
    event.preventDefault();
}

onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onDialogHide() {
    this.selectedhero = null;
}
}
/*
export class DataViewDemo implements OnInit {

    Heros: Hero[];

    selectedHero: Hero;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    constructor(private HeroService: HeroService) { }

    ngOnInit() {
        this.HeroService.getHerosLarge().then(Heros => this.Heros = Heros);

        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
    }

    selectHero(event: Event, Hero: Hero) {
        this.selectedHero = Hero;
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {
        this.selectedHero = null;
    }
}*/

