import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Game } from '../shared/models/game.model';

@Injectable()
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/api/games');
  }

  countGames(): Observable<number> {
    return this.http.get<number>('/api/games/count');
  }

  addGame(Game: Game): Observable<Game> {
    return this.http.post<Game>('/api/game', game);
  }

  getGame(Game: Game): Observable<Game> {
    return this.http.get<Game>(`/api/game/${game._id}`);
  }

  editGame(Game: Game): Observable<string> {
    return this.http.put(`/api/game/${game._id}`, game, { responseType: 'text' });
  }

  deleteGame(Game: Game): Observable<string> {
    return this.http.delete(`/api/game/${game._id}`, { responseType: 'text' });
  }
}
