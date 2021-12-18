import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyPageComponent } from './emptyPage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmptyPageComponent,
      },
    ]),
  ],
  declarations: [EmptyPageComponent],
})
export class EmptyPageModule {}
