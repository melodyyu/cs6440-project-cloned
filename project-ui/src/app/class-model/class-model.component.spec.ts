import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassModelComponent } from './class-model.component';

describe('ClassModelComponent', () => {
  let component: ClassModelComponent;
  let fixture: ComponentFixture<ClassModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
