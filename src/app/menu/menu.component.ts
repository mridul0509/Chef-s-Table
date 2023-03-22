import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { expand, flyInOut } from '../animations/app.animation';
//import { baseURL } from '../shared/baseurl';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class MenuComponent implements OnInit {

  dishes!: Dish[];
  errMess!: string;

  constructor(private dishService : DishService,
    @Inject('BaseURL') public BaseURL : string) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe({ next: dishes => this.dishes = dishes,
      error : errmess => this.errMess = <any>errmess
    });
  }
  
}
