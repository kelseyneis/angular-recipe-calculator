import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnChanges{

  constructor() { }
 // 50 # bread flour, 10 # all purpose flour, 10 quarts water, 1 # Salt, 2 # konsui
    @Input() konsui : number;
    @Input() salt : number;
    @Input() breadFlour : number;
    @Input() flour : number; 
    @Input() water : number;  
    @Input() waterWeight : number;
    @Input() totalWeight : number;
    @Input() flourProp : number;
    @Input() breadFlourProp : number;
    @Input() waterProp : number;
    @Input() saltProp : number;
    @Input() konsuiProp : number;
    
setNewRecipe(val, prop){
  const ingrs = ['water', 'flour', 'breadFlour', 'salt', 'konsui'];
  const factor = val / this[prop];
  const filteredIngrs = ingrs.filter((x) => {
    return x !== prop;
  });
  filteredIngrs.forEach((x) => {
    this[x] *= factor;
  })
}

    convertWaterQuartsToPounds(){

    }
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      this.waterWeight = (this.water * 2.09).toFixed(2);
      this.totalWeight = parseInt(this.flour) + parseInt(this.waterWeight);
      this.flourProp = this.flour / this.totalWeight;
      this.breadFlourProp = this.breadFlour / this.totalWeight;
      this.waterProp = this.waterWeight / this.totalWeight;
      this.saltProp = this.salt / this.totalWeight;
      this.konsuiProp = this.konsui / this.totalWeight;
    }
  
  ngOnInit() {
  }

}