import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calorie-intake',
  templateUrl: './calorie-intake.page.html',
  styleUrls: ['./calorie-intake.page.scss']
})
export class CalorieIntakePage {

  constructor(private router: Router) {}

  goToManageCalorieIntakes() {
    this.router.navigate(['calorie-intake', 'manage']);
  }

}

