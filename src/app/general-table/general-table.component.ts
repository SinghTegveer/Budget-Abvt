import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-table',
  standalone: true,
  imports: [],
  templateUrl: './general-table.component.html',
  styleUrl: './general-table.component.css'
})
export class GeneralTableComponent {

  @Input() columnHeaderList: Array<string> = new Array();
  @Input() dataList: Array<any> = new Array();
  
  ngOnInit() {
    console.log("General Table Component");
  }

}
