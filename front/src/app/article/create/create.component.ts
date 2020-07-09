import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    price: new FormControl(2.45, [Validators.required, Validators.min(0)]),
    qty: new FormControl(100, [Validators.required, Validators.min(0)]),
  });
  constructor() {}

  ngOnInit(): void {}
}
