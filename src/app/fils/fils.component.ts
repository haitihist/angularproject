import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData=new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('Fils component : voici le contenu de la variable color de mon pere '+this.filsProperty);
  }

  sendEven(){
    this.sendRequestToData.emit(
      'Please can i have some many'
    )
      
  }

}
