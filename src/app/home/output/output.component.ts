import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  constructor(private _interaction: InteractionService) {}

  arr: number[] = [];
  displayCount?: any;
  shape?: any;
  ngOnInit(): void {
    this._interaction.count$.subscribe((data: any) => {
      this.displayCount = data.count;
      this.shape = data.shape;
      this.sequenceData(this.displayCount);
    });
  }

  sequenceData(length: any) {
    this.arr = [];
    let k = 2;

    for (let i = 2; i < length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.arr.length < length) {
          this.arr.push(k);
          k = k + i;
        } else {
          break;
        }
      }
    }

    console.log(this.arr);
  }
}
