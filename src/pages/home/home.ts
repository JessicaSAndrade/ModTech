import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public data: Date = new Date();
  public funcionario: Funcionario = new Funcionario();
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }


  // Método para cadastrar o usuário na apicação, passando parâmetros para a tela index.
  cadastrarUsuario() {
    if (this.funcionario.nome == null || this.funcionario.dataNasc == null) {
      this.alertFalha("Preencha todos campos.");
    } else {
      this.calculaIdade();
      this.alertSucesso("Cadastro realizado com Sucesso");
      this.navCtrl.push('IndexPage', {
        nome: this.funcionario.nome,
        dataNasc: this.funcionario.dataNasc,
        idade: this.funcionario.idade,
        id: this.funcionario.id
      });
      console.log(this.funcionario);
    }
  }


  // Método utilizado para calcular a idade do usuário de acordo com a data atual e a data de aniversário do usuário.
  calculaIdade() {
    let dataNasci = (this.funcionario.dataNasc.toString());
    let dataNasciSplit = parseInt(dataNasci.substr(-10, 4));
    let dataAtual = new Date().getFullYear();
    let descobrindoIdade = (dataAtual - dataNasciSplit);
    this.funcionario.idade = descobrindoIdade;
    console.log(dataNasci);
    console.log(dataNasciSplit);
    console.log(dataAtual);

  }

  //alert para avisar sobre o erro de acesso
  alertFalha(text) {
    let alert = this.alertCtrl.create({
      title: "<font color='red' >" + "Erro" + "</font>",
      subTitle: text,
      enableBackdropDismiss: false,
      buttons: ["Fechar"]
    });
    alert.present();
  }

  //alert para avisar sobre o sucesso de cadastro do usuário
  alertSucesso(text) {
    let alert = this.alertCtrl.create({
      title: "<font color='green' >" + "Sucesso" + "</font>",
      subTitle: text,
      enableBackdropDismiss: false,
      buttons: ["Fechar"]
    });
    alert.present();
  }
}
