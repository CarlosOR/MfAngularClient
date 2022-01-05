import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfClientContentComponent } from './mf-client-content.component';

describe('MfClientContentComponent', () => {
  let component: MfClientContentComponent;
  let fixture: ComponentFixture<MfClientContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfClientContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfClientContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
