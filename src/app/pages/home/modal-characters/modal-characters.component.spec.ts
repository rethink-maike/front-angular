import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCharactersComponent } from './modal-characters.component';

describe('ModalCharactersComponent', () => {
  let component: ModalCharactersComponent;
  let fixture: ComponentFixture<ModalCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
