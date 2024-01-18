import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visited-cards',
  templateUrl: './visited-cards.page.html',
  styleUrls: ['./visited-cards.page.scss'],
})
export class VisitedCardsPage implements OnInit {
  visitedCards: any[] = [];

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.loadVisitedCards();
  }

  async loadVisitedCards() {
    this.visitedCards = await this.storage.get('visitedCards') || [];
  }

  openPokemonDetail(card: any) {
    this.router.navigate(['/pokemon-detail'], { state: { card: card } });
  }
}