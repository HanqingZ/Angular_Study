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
  user: UserModule;

  constructor(private authService: AuthService) {
  }

  ngOnChange(): void {
    const result = this.authService.getUserInfo()
    if(result) {
      this.user = result;
    }
  }

}
