System.register(["aurelia-http-client"], function (_export) {
    var HttpClient, _createClass, _classCallCheck, url, Flickr;

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
            Flickr = _export("Flickr", (function () {
                function Flickr(http) {
                    _classCallCheck(this, Flickr);

                    this.heading = "Flickr";
                    this.images = [];
                    this.http = http;
                }

                _createClass(Flickr, {
                    activate: {
                        value: function activate(tag) {
                            var _this = this;

                            console.log(tag);
                            return this.http.jsonp(url).then(function (response) {
                                console.log(JSON.stringify(response.content.items[0]));
                                _this.images = response.content.items;
                            });
                        }
                    },
                    randomTag: {
                        value: function randomTag(imageTagsString) {
                            var imageTags = imageTagsString.split(" ");
                            return "#/flickr/" + imageTags[0];
                        }
                    }
                }, {
                    inject: {
                        value: function inject() {
                            return [HttpClient];
                        }
                    }
                });

                return Flickr;
            })());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQVEsVUFBVSxpQ0FFZCxHQUFHLEVBRU0sTUFBTTs7OztBQUpYLHNCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVkLGVBQUcsR0FBRyw2RkFBNkY7QUFFMUYsa0JBQU07QUFFSix5QkFGRixNQUFNLENBRUgsSUFBSSxFQUFDOzBDQUZSLE1BQU07O0FBR1gsd0JBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLHdCQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ3BCOzs2QkFOUSxNQUFNO0FBUWYsNEJBQVE7K0JBQUEsa0JBQUMsR0FBRyxFQUFDOzs7QUFDVCxtQ0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixtQ0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDekMsdUNBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQsc0NBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOzZCQUN4QyxDQUFDLENBQUM7eUJBQ047O0FBRUQsNkJBQVM7K0JBQUEsbUJBQUMsZUFBZSxFQUFFO0FBQ3ZCLGdDQUFJLFNBQVMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLG1DQUFPLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3JDOzs7QUFsQk0sMEJBQU07K0JBQUEsa0JBQUc7QUFBRSxtQ0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUFFOzs7O3VCQUQvQixNQUFNIiwiZmlsZSI6ImZsaWNrci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9