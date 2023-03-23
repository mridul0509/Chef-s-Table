import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  leader! : leader;
  dishErrMess!: string;
  promotionErrMess!: string;
  leaderErrMess!: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL: string) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish().subscribe({ next: dish => this.dish = dish,
      error:  dishErrMess => this.dishErrMess = <any>dishErrMess
    });
    this.promotionservice.getFeaturedPromotion().subscribe({ next: promo => this.promotion = promo,
      error: promotionErrMess => this.promotionErrMess = <any>promotionErrMess
    });
    this.leaderservice.getFeaturedLeader().subscribe({ next: lead => this.leader = lead,
      error: leaderErrMess => this.leaderErrMess = <any>leaderErrMess
    });
  }

}
