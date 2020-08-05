import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/Card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private currentPage = 1;

  public cardList: Card[] = [];

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCards();
  }

  private loadCards(page?: number): void {
    this.cardService.getCards(page).subscribe(
      response => this.cardList = response.cards.sort((cardOne, cardTwo) => cardOne.name.localeCompare(cardTwo.name))
    );
  }

  public searchCard(searchTerm: string) {
    if (searchTerm) {
      this.cardService.searchCards(searchTerm).subscribe(
        response => this.cardList = response.cards,
        error => console.log('Error: ', error)
      );
    } else {
      this.loadCards(this.currentPage);
    }
  }

  public nextPage() {
    this.currentPage++;
    this.cardService.getCards(this.currentPage).subscribe(
      response => this.cardList = response.cards,
      error => console.log('Error: ', error)
    );
  }

  public previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
    this.cardService.getCards(this.currentPage).subscribe(
      response => this.cardList = response.cards,
      error => console.log('Error: ', error)
    );
  }

  public showCard(cardId: string) {
    this.router.navigate([`./card/${cardId}`]);
  }

}
