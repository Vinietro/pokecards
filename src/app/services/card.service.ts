import { Card } from './../interfaces/Card';
import { Response } from './../interfaces/Response';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardApi = environment.pokemonTcgApi;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCard(cardId: string): Observable<Response<Card>> {
    return this.httpClient.get<Response<Card>>(`${this.cardApi}cards/${cardId}`);
  }

  public getCards(page = 1, pageSize = 100): Observable<Response<Card[]>> {
    return this.httpClient.get<Response<Card[]>>(`${this.cardApi}cards?page=${page}&pageSize=${pageSize}`);
  }

  public searchCards(searchTerm: string) {
    return this.httpClient.get<Response<Card[]>>(`${this.cardApi}cards?name=${searchTerm}`);
  }
}
