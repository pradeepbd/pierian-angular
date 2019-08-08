import { Component, OnInit } from '@angular/core';
import { CardData } from './card/card-data';

@Component({
  selector: 'app-card-conatiner',
  templateUrl: './card-conatiner.component.html',
  styleUrls: ['./card-conatiner.component.css']
})
export class CardConatinerComponent implements OnInit {

  cards: Array<CardData>

  constructor() { }

  ngOnInit() {
    this.cards = [
      { header: 'Free', price: 'Rs.56/mo', features: ['1GG IO', '3 Email', 'Limited Storage'] },
      { header: 'Blaze', price: 'Rs.90/mo', features: ['8GG IO', '27 Email', 'Unlimited Storage'] },
      { header: 'Spark', price: 'Rs.190/mo', features: ['50GG IO', '89 Email', 'Unlimited Storage'] }
    ]
  }
}
