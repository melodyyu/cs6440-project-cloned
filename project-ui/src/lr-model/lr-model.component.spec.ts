import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrModelComponent } from './lr-model.component';

describe('LrModelComponent', () => {
  let component: LrModelComponent;
  let fixture: ComponentFixture<LrModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LrModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LrModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
