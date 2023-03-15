import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAndFilterComponent } from './register-and-filter.component';

describe('RegisterAndFilterComponent', () => {
  let component: RegisterAndFilterComponent;
  let fixture: ComponentFixture<RegisterAndFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAndFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
