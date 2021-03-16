import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterarSenhaPage } from './alterar-senha.page';

describe('AlterarSenhaPage', () => {
  let component: AlterarSenhaPage;
  let fixture: ComponentFixture<AlterarSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarSenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterarSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
