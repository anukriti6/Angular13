// import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';


// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { Observable, of } from 'rxjs';

// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';
// import { Location } from '@angular/common';

// import { HttpClient, HttpHandler } from '@angular/common/http';

// import { ReactiveFormsModule } from '@angular/forms';
// import { CardsData, LoginData } from 'src/dbData';

// import { AppComponent } from './app.component';
// import { RestService } from './services/rest.service';
// import { LoginComponent } from './login/login.component';
// import { routes } from './app-routing.module';


// // <!Created to mock the service!>
// export class MockRestService {

//   Msg:any;

//   setMsg(data:any){
//     this.Msg = data;
//   }

//   getMsg(data:any){
//     return of (4027106782381003)
//   }

//   getLogin(){
//     return of(null)
//   }

// }

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let rs: RestService;
//   let location: Location;
//   let router: Router;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({

//       declarations: [LoginComponent,
//         AppComponent,
//       ],

//       providers: [
//         { provide: RestService, useClass: MockRestService },
//         HttpClient,
//         HttpHandler
//       ],
//       imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes),ReactiveFormsModule]
//     })
//       .compileComponents();

//     router = TestBed.get(Router);
//     location = TestBed.get(Location);
//     fixture = TestBed.createComponent(AppComponent);
//     router.initialNavigation();

//   });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     rs = TestBed.inject(RestService);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     fixture.detectChanges();
    

//   });

//   it('Should Contain specific data', () => {
//     expect(component).toBeTruthy();

//     expect(location.path()).toBe('/Loans');

//   });
// });