import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    items = [];

    constructor(public router: Router, private storage: Storage) {
        this.initializeItems();
    }

    search(ev: any) {

        // Resetar items
        this.initializeItems();

        // Localizar valor digitado
        const val = ev.target.value;

        // Validar se tem conteudo
        if (val && val.trim() !== '') {
            this.items = this.items.filter((item) => {
                return (
                    // Filtrar no titulo
                    (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)
                );
            });
        }

    }

    initializeItems() {

        this.items = [];
        this.storage.forEach((item) => {
            this.items.push(item);
        }).then(() => {
            console.log(this.items);
        });

    }

}
