import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  collection: any[] = [];
  accessGranted: boolean = false;

  constructor(private resto: RestoService) {}

  ngOnInit(): void {
    
    const password = prompt('Enter Password to View the Student List:');

    if (password === 'Raj@123') {
      this.accessGranted = true;
      this.fetchRestaurantList();
    } else {
      alert('Incorrect Password! Access Denied.');
    }
  }

  fetchRestaurantList(): void {
    this.resto.getlist().subscribe((result: any[]) => {
      this.collection = result;
    });
  }

  deleteResto(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.resto.deleteResto(id).subscribe(() => {
        this.collection = this.collection.filter(item => item.id !== id);
      });
    }
  }
}
