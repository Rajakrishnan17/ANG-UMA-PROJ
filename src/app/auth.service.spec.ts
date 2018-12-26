import { TestBed, inject, async } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [AuthService]
        });
    });

    it('should be created', inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    }));

    it('get token',inject([AuthService], (service: AuthService)=>{
          localStorage.setItem('token','1234');
        expect(service.isAuthenticated()).toBe(true);
    }));
   
    it('token empty',inject([AuthService], (service: AuthService)=>{
        localStorage.clear();
        expect(service.isAuthenticated()).toBe(false);
    }));

  
});

