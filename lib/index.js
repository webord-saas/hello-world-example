(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../node_modules/webord-plugin/lib/index", "./screens/HelloWorld"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const index_1 = require("../node_modules/webord-plugin/lib/index");
    const HelloWorld_1 = require("./screens/HelloWorld");
    class HelloWorldExamplePlugin {
        constructor() {
            this.WebordVal = window.Webord || index_1.Webord;
            this.init = () => {
                if (!this.WebordVal) {
                    throw new Error('Webord is not defined');
                }
                this.WebordVal.registerCategory({
                    key: 'hello-world',
                    name: 'Hello World from Plugin',
                    path: '/hello-world',
                });
                this.WebordVal.registerLink({
                    key: 'hello-world',
                    name: 'Hello World',
                    path: '/',
                    categoryKey: 'hello-world',
                    component: HelloWorld_1.HelloWorld,
                });
            };
        }
    }
    if (typeof window !== 'undefined') {
        window.HelloWorldExamplePlugin = HelloWorldExamplePlugin;
    }
    exports.default = HelloWorldExamplePlugin;
});
