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

            url = "http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&tags=";
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

                            if (!tag.id) {
                                tag.id = "sky";
                            }
                            return this.http.jsonp(url + tag.id).then(function (response) {
                                _this.images = response.content.items;
                            });
                        }
                    },
                    randomTag: {
                        value: function randomTag(imageTagsString) {
                            var imageTags = imageTagsString.split(" ");
                            var randomIndex = Math.floor(Math.random() * imageTags.length);
                            return "#/flickr/" + imageTags[randomIndex];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQVEsVUFBVSxpQ0FFZCxHQUFHLEVBRU0sTUFBTTs7OztBQUpYLHNCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVkLGVBQUcsR0FBRyxzRkFBc0Y7QUFFbkYsa0JBQU07QUFFSix5QkFGRixNQUFNLENBRUgsSUFBSSxFQUFDOzBDQUZSLE1BQU07O0FBR1gsd0JBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLHdCQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ3BCOzs2QkFOUSxNQUFNO0FBUWYsNEJBQVE7K0JBQUEsa0JBQUMsR0FBRyxFQUFDOzs7QUFDVCxnQ0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7QUFDVCxtQ0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUE7NkJBQ2pCO0FBQ0QsbUNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEQsc0NBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOzZCQUN4QyxDQUFDLENBQUM7eUJBQ047O0FBRUQsNkJBQVM7K0JBQUEsbUJBQUMsZUFBZSxFQUFFO0FBQ3ZCLGdDQUFJLFNBQVMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLGdDQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsbUNBQU8sV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQzt5QkFDL0M7OztBQXBCTSwwQkFBTTsrQkFBQSxrQkFBRztBQUFFLG1DQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQUU7Ozs7dUJBRC9CLE1BQU0iLCJmaWxlIjoiZmxpY2tyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=