import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss'],
})
export class DetailPage {

    id: any;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {

            this.id = null;
            if (params.hasOwnProperty('pageId')) {
                this.id = params.pageId;
            }

        });
    }

}
