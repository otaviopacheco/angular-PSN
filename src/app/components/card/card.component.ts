import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameType:string=''
  @Input()
  gamePrice:string=''
  @Input()
  gamelabel:string=''
  @Input()
  gameCover:string=''
  constructor(){}
  ngOnInit(): void {

  }


}
