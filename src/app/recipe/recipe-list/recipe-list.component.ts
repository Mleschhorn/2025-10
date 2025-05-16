import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {
    this.recipes = recipeData;
  }
}
