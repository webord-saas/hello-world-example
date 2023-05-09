define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HelloWorld = void 0;
    const HelloWorld = () => {
        return (document.createElement('p').innerHTML = 'Hello World from Plugin');
    };
    exports.HelloWorld = HelloWorld;
});
