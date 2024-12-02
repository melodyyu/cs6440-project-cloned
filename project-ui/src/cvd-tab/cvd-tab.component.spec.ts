import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvdTabComponent } from './cvd-tab.component';

describe('CvdTabComponent', () => {
  let component: CvdTabComponent;
  let fixture: ComponentFixture<CvdTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvdTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvdTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
