import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { RulesViewComponent } from './components/rules-view/rules-view.component';
import { FrequenzyViewComponent } from './components/frequenzy-view/frequenzy-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RuleComponent } from './components/rule/rule.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrequenzyElementComponent } from './components/frequenzy-element/frequenzy-element.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HeatmapDialogComponent } from './components/heatmap-dialog/heatmap-dialog.component';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import { FileManipulationComponent } from './components/file-manipulation/file-manipulation.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    RulesViewComponent,
    FrequenzyViewComponent,
    RuleComponent,
    FrequenzyElementComponent,
    HeatmapDialogComponent,
    UploadDialogComponent,
    FileManipulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
