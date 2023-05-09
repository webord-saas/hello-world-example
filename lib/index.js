define(["require", "exports", "../node_modules/webord-plugin/lib/index", "./screens/HelloWorld"], function (require, exports, index_1, HelloWorld_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
