import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
// Shared Modules 

@NgModule({
  exports:[FormsModule, ReactiveFormsModule,CommonModule,
    MatButtonModule,
    MatInputModule
  ],
})
export class SharedModule { }
