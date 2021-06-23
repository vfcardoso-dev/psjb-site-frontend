import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements AfterViewInit {

    @ViewChild('slider') public slider: any;

    public images: Array<any> = [
        { path: 'https://picsum.photos/id/1000/1920/1080', href: '/um' },
        { path: 'https://picsum.photos/id/1002/1920/1080', href: '/dois' },
        { path: 'https://picsum.photos/id/1021/1920/1080', href: '/tres' }
    ];

    constructor(private router: Router) {}

    ngAfterViewInit() {
        for(const cell of this.slider.cells.cells) {
            const href = this.images.find(x => x.path === cell.firstChild.src).href;
            // cell.onclick = () => window.location.href = href;
            cell.onclick = () => this.router.navigateByUrl(href);
        }
    }
}