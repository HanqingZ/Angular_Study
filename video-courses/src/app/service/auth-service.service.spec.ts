import { TestBed } from '@angular/core/testing';

<<<<<<< master
import { AuthService } from './auth-service.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
=======
import { AuthServiceService } from './auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceService);
>>>>>>> Add Login page
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
