import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  products: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }[] | undefined;

  fetchedData: any;

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.displayFetchedData();
  }

  displayFetchedData(): void {
    this.fetchDataService.fetchData().subscribe(
      (data) => {
        this.fetchedData = data;
        this.products = data;
        console.log('Fetched data:', this.fetchedData);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  sortProductsByCategory(): void {
    if (this.products) {
      this.products.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });
    }
  }
}