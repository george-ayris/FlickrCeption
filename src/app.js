import {Router} from 'aurelia-router';

export class App {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                { route: 'flickr',        moduleId: 'child-router',       nav: true },
                { route: ['','welcome'], moduleId: 'welcome', title:'Welcome' },

            ]);
        });
    }
}
