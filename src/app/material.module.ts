import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modulesArray = [
  MatButtonModule,
  MatIconModule,
]

@NgModule({
  imports: modulesArray,
  exports: modulesArray
})
export class MaterialModule {}