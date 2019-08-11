import {Component} from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    dictionary_cache = [];
    dictionary = [];

    constructor( public loadingController: LoadingController ) {

        this.loadingController.create({message: 'Carregando informações'})
        .then((res) => {

            res.present().then(() => {
               
                fetch('./assets/dictionary.json').then(res => res.json())
                .then(json => {
    
                    this.dictionary_cache = json;
                    this.dictionary = json;
    
                    res.dismiss();
                    
                });

            });

        });
        

    }

    search(ev: any) {

        this.dictionary = this.dictionary_cache;

        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.dictionary = this.dictionary.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Hellooo',
            duration: 2000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }

}
