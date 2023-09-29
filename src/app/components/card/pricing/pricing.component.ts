import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit{
  @Input()
  gameType:string=''
  @Input()
  gamePrice:string=''
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
