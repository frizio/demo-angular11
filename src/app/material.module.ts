import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import  {MatInputModule } from '@angular/material/input';

const modulesArray = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
]

@NgModule({
  imports: modulesArray,
  exports: modulesArray
})
export class MaterialModule {}