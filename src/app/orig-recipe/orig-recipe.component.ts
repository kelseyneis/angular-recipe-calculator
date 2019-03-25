import { Component, OnInit, Input} from '@angular/core';

import { CopyInputService } from '../copy-input.service';

@Component({
  selector: 'app-orig-recipe',
  templateUrl: './orig-recipe.component.html',
  styleUrls: ['./orig-recipe.component.css']
})
 // 50 # bread flour, 10 # all purpose flour, 10 quarts water, 1 # Salt, 2 # konsui
export class OrigRecipeComponent implements OnInit {
  flour : number= 10;
  water : number = 10;
  konsui : number = 2;
  salt : number = 1;
  breadFlour : number = 50;
  
  constructor(private copyInputService: CopyInputService) { }

  ngOnInit() {
  }

}