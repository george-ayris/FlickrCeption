import {HttpClient} from 'aurelia-http-client';

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

export class Flickr{
    static inject() { return [HttpClient]; }
    constructor(http){
        this.heading = 'Flickr';
        this.images = [];
        this.http = http;
    }

    activate(tag){
        console.log(tag);
        return this.http.jsonp(url).then(response => {
            console.log(JSON.stringify(response.content.items[0]));
            this.images = response.content.items;
        });
    }

    randomTag(imageTagsString) {
        var imageTags = imageTagsString.split(" ");
        return '#/flickr/' + imageTags[0];
    }
}
