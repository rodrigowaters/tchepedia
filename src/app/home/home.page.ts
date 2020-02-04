import {Component} from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {ArtigosService} from '../services/artigos.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    items = {};
    private loading: HTMLIonLoadingElement;

    constructor(
        private artigosService: ArtigosService,
        private loadingController: LoadingController,
        public navCtrl: NavController
    ) {

        this.presentLoading().then(() => {
            this.items = artigosService.fetch();
        }).finally(() => {
            this.loading.dismiss().then();
        });

    }

    search(ev: any) {

        // Resetar items
        this.items = this.artigosService.fetch();

        // Localizar valor digitado
        const val = ev.target.value;

        // Validar se tem conteudo
        if (val && val.trim() !== '') {

            const itensFiltrado = [];

            for (const key of Object.keys( this.items )) {
                const item = this.items[key];
                if ((item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                    itensFiltrado[key] = item;
                }
            }

            this.items = itensFiltrado;

        }

    }

    async presentLoading() {
        this.loading = await this.loadingController.create({
            message: 'Carregando Dados'
        });
        return await this.loading.present();
    }

}

