import { Component } from '@angular/core';
import { AuthService } from './service/auth-service.service';
import { UserModule } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-courses';
<<<<<<< master
<<<<<<< master
=======
  user: UserModule;
>>>>>>> Add auth guard for add course and edit course
=======
>>>>>>> Modify Login logic

  constructor(private authService: AuthService) {
  }

  ngOnChange(): void {
<<<<<<< master
<<<<<<< master
<<<<<<< master
=======
    const result = this.authService.getUserInfo()
    if(result) {
      this.user = result;
    }
>>>>>>> Add auth guard for add course and edit course
=======
    // const result = this.authService.getUserInfo()
    // if(result) {
    //   this.user = result;
    // }
>>>>>>> Implement load more function
=======
>>>>>>> Modify Login logic
  }

}
