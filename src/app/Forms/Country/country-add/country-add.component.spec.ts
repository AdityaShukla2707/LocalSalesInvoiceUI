import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAddComponent } from './country-add.component';

describe('CountryAddComponent', () => {
  let component: CountryAddComponent;
  let fixture: ComponentFixture<CountryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryAddComponent]
    });
    fixture = TestBed.createComponent(CountryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
