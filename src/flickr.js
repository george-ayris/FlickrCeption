import {HttpClient} from 'aurelia-http-client';

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&tags=';

export class Flickr{
    static inject() { return [HttpClient]; }
    constructor(http){
        this.heading = 'Flickr';
        this.images = [];
        this.http = http;
    }

    activate(tag){
        if (!tag.id) {
            tag.id = 'sky'
        }
        return this.http.jsonp(url+tag.id).then(response => {
            this.images = response.content.items;
        });
    }

    randomTag(imageTagsString) {
        var imageTags = imageTagsString.split(" ");
        var randomIndex = Math.floor(Math.random()*imageTags.length);
        return '#/flickr/' + imageTags[randomIndex];
    }
}
