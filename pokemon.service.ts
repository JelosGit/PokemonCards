import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

interface ApiResponse {
  data: any[]; // Adjust this based on the actual structure of your cards
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) { }

  searchCardByName(name: string): Observable<any[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?q=name:${name}`).pipe(
      tap(response => console.log('API Response:', response)),
      map(response => response.data)
    );
  }
} 