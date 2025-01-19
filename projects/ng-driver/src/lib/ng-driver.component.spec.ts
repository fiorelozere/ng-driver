import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDriverComponent } from './ng-driver.component';

describe('NgDriverComponent', () => {
  let component: NgDriverComponent;
  let fixture: ComponentFixture<NgDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
