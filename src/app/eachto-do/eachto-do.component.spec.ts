import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachtoDOComponent } from './eachto-do.component';

describe('EachtoDOComponent', () => {
  let component: EachtoDOComponent;
  let fixture: ComponentFixture<EachtoDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EachtoDOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachtoDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
