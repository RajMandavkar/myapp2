import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editResto = new FormGroup({
    name: new FormControl(''),
    Email: new FormControl(''),
    Address: new FormControl(''),
    Contact: new FormControl(''),
    Percentage: new FormControl(''),
    Position: new FormControl('')
  });

  constructor(
    private resto: RestoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.resto.getCurrentResto(id).subscribe((result: any) => {
      console.log(result);

      this.editResto = new FormGroup({
        name: new FormControl(result.name),
        Email: new FormControl(result.Email),
        Address: new FormControl(result.Address),
        Contact: new FormControl(result.Contact),
        Percentage: new FormControl(result.Percentage),
        Position: new FormControl(result.Position)
      });
    });
  }

  collection(): void {
    this.resto.updateResto(this.route.snapshot.params['id'], this.editResto.value)
      .subscribe((result) => {
        console.warn('Update Success', result);
        this.router.navigate(['/list']);
      });

    this.editResto.reset();
  }
}
