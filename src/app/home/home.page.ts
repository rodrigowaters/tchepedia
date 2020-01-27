import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    items_default = [];
    items = [];

    constructor(public router: Router, private storage: Storage) {
        this.storage.forEach((item) => {
            this.items_default.push(item);
        }).then(() => {
            this.items = this.items_default;
        });
    }

    search(ev: any) {

        // Resetar items
        this.items = this.items_default;

        // Localizar valor digitado
        const val = ev.target.value;

        // Validar se tem conteudo
        if (val && val.trim() !== '') {
            this.items = this.items.filter((item, b) => {
                return (
                    // Filtrar no titulo
                    (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)
                );
            });
        }

    }

}
