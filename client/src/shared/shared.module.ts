import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
// Shared Modules 

@NgModule({
  exports:[
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
  ],
})
export class SharedModule { }
