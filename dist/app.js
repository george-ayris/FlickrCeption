System.register(["aurelia-router"], function (_export) {
    var Router, _createClass, _classCallCheck, App;

    return {
        setters: [function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            App = _export("App", (function () {
                function App(router) {
                    _classCallCheck(this, App);

                    this.router = router;
                    this.router.configure(function (config) {
                        config.title = "Aurelia";
                        config.map([{ route: "flickr", moduleId: "child-router", nav: true }, { route: ["", "welcome"], moduleId: "welcome", title: "Welcome" }]);
                    });
                }

                _createClass(App, null, {
                    inject: {
                        value: function inject() {
                            return [Router];
                        }
                    }
                });

                return App;
            })());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQVEsTUFBTSxpQ0FFRCxHQUFHOzs7O0FBRlIsa0JBQU0sa0JBQU4sTUFBTTs7Ozs7Ozs7O0FBRUQsZUFBRztBQUVELHlCQUZGLEdBQUcsQ0FFQSxNQUFNLEVBQUU7MENBRlgsR0FBRzs7QUFHUix3QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsd0JBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzVCLDhCQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6Qiw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNQLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxRQUFRLEVBQUUsY0FBYyxFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDckUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLENBRWxFLENBQUMsQ0FBQztxQkFDTixDQUFDLENBQUM7aUJBQ047OzZCQVpRLEdBQUc7QUFDTCwwQkFBTTsrQkFBQSxrQkFBRztBQUFFLG1DQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQUU7Ozs7dUJBRDNCLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=