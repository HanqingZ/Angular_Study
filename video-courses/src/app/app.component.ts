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

  constructor(private authService: AuthService) {
  }

  ngOnChange(): void {
  }

}
