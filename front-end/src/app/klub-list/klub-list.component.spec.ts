import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlubListComponent } from './klub-list.component';

describe('KlubListComponent', () => {
  let component: KlubListComponent;
  let fixture: ComponentFixture<KlubListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlubListComponent]
    });
    fixture = TestBed.createComponent(KlubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
