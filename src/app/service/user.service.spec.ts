import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
import { User } from './user.service';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

describe('User', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[ HttpModule ],
        providers: [User, ApiService]
      });
    });

    it('different input for factorial function', inject([User], (service: User) => {
        expect(service.check_number(5)).toBeTruthy();
      }));
 }); 