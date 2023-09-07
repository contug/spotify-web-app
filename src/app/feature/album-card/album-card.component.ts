import {Component, Input} from '@angular/core';
import {Item} from "../../model/searchResponse";

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {

  @Input() albumData: Item = {} as Item;

  constructor() {
  }

}
