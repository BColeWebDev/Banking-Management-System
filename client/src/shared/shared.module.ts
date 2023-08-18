import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Shared Modules 

@NgModule({
  exports:[FormsModule, ReactiveFormsModule],
})
export class SharedModule { }
