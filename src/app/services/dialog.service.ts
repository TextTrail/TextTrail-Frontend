import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeatmapDialogComponent } from '../components/heatmap-dialog/heatmap-dialog.component';
import { Frequenzy } from '../model/Frequenzy';
import { UploadDialogComponent } from '../components/upload-dialog/upload-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(frequenzy: Frequenzy): void {
    this.dialog.open(HeatmapDialogComponent, {
      width: '90vw', data: frequenzy  });
  }

  uploadDialog(): void {
    this.dialog.open(UploadDialogComponent, {
      width: '90vw' });
  }
}
