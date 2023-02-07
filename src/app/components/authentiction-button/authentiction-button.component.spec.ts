import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentictionButtonComponent } from './authentiction-button.component';

describe('AuthentictionButtonComponent', () => {
  let component: AuthentictionButtonComponent;
  let fixture: ComponentFixture<AuthentictionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentictionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentictionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
