import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Frequenzy } from 'src/app/model/Frequenzy';

@Component({
  selector: 'app-heatmap-dialog',
  templateUrl: './heatmap-dialog.component.html',
  styleUrls: ['./heatmap-dialog.component.scss']
})
export class HeatmapDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<HeatmapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Frequenzy) {}

    confirm(){
      this.dialogRef.close();
    }
}
