import {Router} from 'aurelia-router';

export class ChildRouter{
    static inject() { return [Router]; }
    constructor(router){
        this.heading = 'Child Router';
        this.router = router;
        router.configure(config => {
            config.map([
                { route: ['',':id'],        moduleId: 'flickr',       nav: true },
                { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
                ]);
            });
        }
    }
