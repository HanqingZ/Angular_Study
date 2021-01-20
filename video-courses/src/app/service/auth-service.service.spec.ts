import { TestBed } from '@angular/core/testing';

<<<<<<< master
<<<<<<< master
import { AuthService } from './auth-service.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
=======
import { AuthServiceService } from './auth-service.service';
=======
import { AuthService } from './auth-service.service';
>>>>>>> Add auth guard for add course and edit course

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
<<<<<<< master
    service = TestBed.inject(AuthServiceService);
>>>>>>> Add Login page
=======
    service = TestBed.inject(AuthService);
>>>>>>> Add auth guard for add course and edit course
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
