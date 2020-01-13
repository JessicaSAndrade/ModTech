import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  public funcionario: Funcionario = new Funcionario();
  public data: Date = new Date();
  home = HomePage;

  // retorno dos parâmetros da tela de cadastro no construtor.
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.funcionario.nome = navParams.get('nome');
    this.funcionario.id = navParams.get('id');
    this.funcionario.idade = navParams.get('idade');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  // Retorno para a tela inicial de cadastro.
  voltar() {
    this.navCtrl.push(HomePage);
  }

}
