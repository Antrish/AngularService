import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers: [EnrollService] //can be directly used in AppComponent to achieve Hierarchical injection
})
export class AngularComponent {
  title:string = 'Angular'


  constructor(private enrollservice : EnrollService) {
    

  }
  onEnroll(){
    // let enrollservice = new EnrollService(); // it's better to have instance of a service class using dependency injection (with help of ctor and providers)
    this.enrollservice.onEnrollment(this.title);
  }
}
