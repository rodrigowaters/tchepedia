import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss'],
})
export class DetailPage {

    item: [];

    constructor(private route: ActivatedRoute, private storage: Storage) {
        this.route.params.subscribe(params => {

            this.item = [];
            if (params.hasOwnProperty('pageId')) {
                let pageID = Math.abs(params.pageId);
                this.storage.get(pageID.toString()).then(item => {
                    this.item = item;
                });
            }

        });
    }

}
