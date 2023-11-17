import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCurriculosComponent } from './painel-curriculos.component';

describe('PainelCurriculosComponent', () => {
  let component: PainelCurriculosComponent;
  let fixture: ComponentFixture<PainelCurriculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelCurriculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelCurriculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
