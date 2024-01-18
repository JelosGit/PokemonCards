import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; // Make sure Storage is imported

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards: any[] = [];
  noCardsFound: boolean = false; // Declare the noCardsFound property

  constructor(
    private pokemonService: PokemonService, 
    private router: Router,
    private storage: Storage // Inject Storage
  ) {}

  searchCards(event: any) {
    const value = event.detail.value;
    if (value && value.trim() !== '') {
      this.pokemonService.searchCardByName(value).subscribe(cards => {
        this.cards = cards.slice(0, 5);
        this.noCardsFound = this.cards.length === 0; // Set noCardsFound based on the response
      });
    }
  }

  async openPokemonDetail(card: any) {
    // Save the clicked card to storage
    await this.saveCardToVisited(card);

    // Navigate to the detail page
    this.router.navigate(['/pokemon-detail'], { state: { card: card } });
  }

  private async saveCardToVisited(card: any) {
    try {
      const visited = await this.storage.get('visitedCards') || [];
      visited.push(card);
      await this.storage.set('visitedCards', visited);
    } catch (error) {
      console.error('Error saving card to visited:', error);
    }
  }
}