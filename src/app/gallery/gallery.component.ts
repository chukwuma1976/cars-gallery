import { Component } from '@angular/core';
import { cars } from '../../../cars';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf, MatIconModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  carList: any[] = []; 
  index = 0;
  maxIndex = cars.length - 1;
  currentCar! : any;
  
  constructor() {
    this.carList = cars.sort((a,b)=>this.sortByName(a,b));
    this.setCar();
  }

  sortByName(a: any, b: any) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }

  previous(){
    if (this.index > 0 ) this.index--;
    this.setCar()
  }

  next(){
    if (this.index < this.maxIndex) this.index++;
    this.setCar()
  }

  setCar(){
    this.currentCar = this.carList![this.index]
  }

}
