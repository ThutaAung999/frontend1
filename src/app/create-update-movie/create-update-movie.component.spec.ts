import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateMovieComponent } from './create-update-movie.component';

describe('CreateRegistrationComponent', () => {
  let component: CreateUpdateMovieComponent;
  let fixture: ComponentFixture<CreateUpdateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
