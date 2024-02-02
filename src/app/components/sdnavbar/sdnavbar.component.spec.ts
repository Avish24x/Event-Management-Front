import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdnavbarComponent } from './sdnavbar.component';

describe('SdnavbarComponent', () => {
  let component: SdnavbarComponent;
  let fixture: ComponentFixture<SdnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
