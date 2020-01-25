import {Component} from '@angular/core';
import {NavParams} from "@ionic/angular";

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss'],
})
export class DetailPage {

    constructor(public params: NavParams) {
        console.log('params', params);
    }

}
