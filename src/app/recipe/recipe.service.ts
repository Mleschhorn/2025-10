import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = environment.recipeApiUrl;

  constructor(private http: HttpClient) {}

  
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/recipe.json`);
  }

  
  getRecipeDetail(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/recipe.json`);
  }
}
