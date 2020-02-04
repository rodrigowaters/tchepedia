import {Component} from '@angular/core';
import {ArtigosService} from '../services/artigos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss'],
})
export class DetailPage {

    title: string;
    description: string;

    constructor(
        private route: ActivatedRoute,
        private artigosService: ArtigosService
    ) {
        this.route.params.subscribe(params => {

            if (params.hasOwnProperty('key')) {

                const key = Math.abs(params.key);
                const item = artigosService.find(key);

                this.title = item.title;
                this.description = item.description;

            }

        });
    }

}
