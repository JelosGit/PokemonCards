import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  card: any;
  weaknessesDisplay: string = ''; // Initialize with a default value
  attacksDisplay: string[] = []; // Initialize with a default value

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      const state = navigation.extras.state as { card: any }; // Type assertion
      this.card = state.card;

      this.weaknessesDisplay = this.card.weaknesses?.map((w: any) => w.type + ' ' + w.value).join(', ') || '';
      this.attacksDisplay = this.card.attacks?.map((attack: any) => `${attack.name}: ${attack.damage} - ${attack.text}`) || [];
    }
  }
}