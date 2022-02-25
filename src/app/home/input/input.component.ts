import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(
    private _interaction: InteractionService,
    private fb: FormBuilder
  ) {}

  inputForm!: FormGroup;
  ngOnInit(): void {
    this.inputForm = this.fb.group({
      count: ['', Validators.required],
      shape: ['', Validators.required],
    });
  }

  sendNumber() {
    this._interaction.sendMessage(this.inputForm.value);
  }
}
