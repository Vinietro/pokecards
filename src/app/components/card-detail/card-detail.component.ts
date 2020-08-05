import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.sass']
})
export class CardDetailComponent implements OnInit {

  public card = null;

  constructor(
    private cardService: CardService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCard();
  }

  private loadCard() {
    const cardId = this.activatedRoute.snapshot.params.cardId;
    if (cardId) {
      this.cardService.getCard(cardId).subscribe(
        response => this.card = response.card,
        () => this.router.navigate([`./home`])
      );
    } else {
      this.router.navigate([`./home`]);
    }
  }

}
