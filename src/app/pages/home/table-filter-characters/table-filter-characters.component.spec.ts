import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterCharactersComponent } from './table-filter-characters.component';

describe('TableFilterCharactersComponent', () => {
  let component: TableFilterCharactersComponent;
  let fixture: ComponentFixture<TableFilterCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilterCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
