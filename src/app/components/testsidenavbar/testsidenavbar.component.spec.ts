import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsidenavbarComponent } from './testsidenavbar.component';

describe('TestsidenavbarComponent', () => {
  let component: TestsidenavbarComponent;
  let fixture: ComponentFixture<TestsidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsidenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
