import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { CalorieIntakePage } from './calorie-intake.page';
import { ManageCalorieIntakePage } from './pages/manage-calorie-intake';


@NgModule({
  declarations: [
    CalorieIntakePage,
    ManageCalorieIntakePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalorieIntakePage
      },
      {
        path: 'manage',
        component: ManageCalorieIntakePage
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalorieIntakeModule {}
