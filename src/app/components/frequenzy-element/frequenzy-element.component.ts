import { Component, Input, OnInit } from '@angular/core';
import { Frequenzy } from 'src/app/model/Frequenzy';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-frequenzy-element',
  templateUrl: './frequenzy-element.component.html',
  styleUrls: ['./frequenzy-element.component.scss']
})

export class FrequenzyElementComponent implements OnInit{

  @Input() frequenzy: Frequenzy = null as any; 
  isDisabled = false;

  constructor(private dialogService:DialogService) { }
  
  ngOnInit(): void {
  }

  heatMapDialog(){
    this.dialogService.openDialog(this.frequenzy);
  }
}
