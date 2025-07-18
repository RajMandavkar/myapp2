import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  addResto = new FormGroup({
    name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Contact: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$') // 10-digit mobile number
    ]),
    Percentage: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100)
    ]),
    Position: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required])
  });

  alert: boolean = false;

  constructor(private resto: RestoService) {}

  ngOnInit(): void {}

  collectResto() {
    if (this.addResto.valid) {
      this.resto.saveResto(this.addResto.value).subscribe(() => {
        this.alert = true;
        this.addResto.reset({});
      });
    }
  }

  closeAlert() {
    this.alert = false;
  }

  // Getters for validation
  get user() {
    return this.addResto.get('name');
  }

  get email() {
    return this.addResto.get('Email');
  }

  get contact() {
    return this.addResto.get('Contact');
  }

  get percentage() {
    return this.addResto.get('Percentage');
  }

  get position() {
    return this.addResto.get('Position');
  }

  get address() {
    return this.addResto.get('Address');
  }
}
