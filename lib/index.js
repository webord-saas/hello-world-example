/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../node_modules/webord-plugin/lib/index */ "../node_modules/webord-plugin/lib/index.js"), __webpack_require__(/*! ./screens/HelloWorld */ "./screens/HelloWorld.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1, HelloWorld_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    class HelloWorldExamplePlugin {
        constructor(WebordParam) {
            this.WebordVal = null;
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
            this.WebordVal = WebordParam || index_1.Webord;
        }
    }
    if (typeof window !== 'undefined') {
        window.HelloWorldExamplePlugin = HelloWorldExamplePlugin;
    }
    exports["default"] = HelloWorldExamplePlugin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./screens/HelloWorld.ts":
/*!*******************************!*\
  !*** ./screens/HelloWorld.ts ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.HelloWorld = void 0;
    const HelloWorld = () => {
        return (document.createElement('p').innerHTML = 'Hello World from Plugin');
    };
    exports.HelloWorld = HelloWorld;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../node_modules/webord-plugin/lib/actions.js":
/*!****************************************************!*\
  !*** ../node_modules/webord-plugin/lib/actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Actions = void 0;
exports.Actions = {
    // Custom Actions
    action: {},
    registerAction(action) {
        if (!action.name) {
            throw new Error('Action name is required');
        }
        if (!action.exec) {
            throw new Error('Action exec is required');
        }
        if (this.action[action.name]) {
            throw new Error('Action name already exists');
        }
        this.action[action.name] = action.exec;
    },
    useAction(actionName, ...args) {
        if (!this.action[actionName]) {
            throw new Error('Action not found');
        }
        return this.action[actionName](...args);
    },
};


/***/ }),

/***/ "../node_modules/webord-plugin/lib/index.js":
/*!**************************************************!*\
  !*** ../node_modules/webord-plugin/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Webord = void 0;
const actions_1 = __webpack_require__(/*! ./actions */ "../node_modules/webord-plugin/lib/actions.js");
const links_1 = __webpack_require__(/*! ./links */ "../node_modules/webord-plugin/lib/links.js");
exports.Webord = {
    // Links
    /**
     * @param {string} key
     * @param {string} name
     * @param {string} path
     * @param {string} description (optional)
     * @param {string} icon (optional)
     * @param {string} categoryKey (optional)
     * @returns
     * @memberof Category
     * @example
     * Webord.registerCategory({
     *  key: 'test',
     *  name: 'Test',
     *  description: 'Test category',
     *  path: '/test',
     *  icon: 'test',
     * });
     * */
    registerCategory(category) {
        return links_1.Links.registerCategory(category);
    },
    /**
     * @param {string} key
     * @param {string} name
     * @param {string} path
     * @param {string} description (optional)
     * @param {string} icon (optional)
     * @param {string} categoryKey (optional)
     * @returns
     * @memberof Category
     * @example
     * Webord.updateCategory({
     *  key: 'test',
     *  name: 'Test',
     *  description: 'Test category',
     *  path: '/test',
     *  icon: 'test',
     * });
     * */
    updateCategory(category) {
        return links_1.Links.updateCategory(category);
    },
    /**
     * @param {string} key
     * @memberof Category
     * @example
     * Webord.removeCategory('test');
     * */
    removeCategory(key) {
        return links_1.Links.removeCategory(key);
    },
    /**
     * @param {string} key
     * @param {string} name
     * @param {string} categoryKey
     * @param {Element} component
     * @param {string} description (optional)
     * @param {string} path (optional)
     * @param {string} icon (optional)
     * @returns
     * @memberof Link
     * @example
     * Link.registerLink({
     *  key: 'test',
     *  name: 'Test',
     *  description: 'Test link',
     *  component: TestComponent,
     *  path: '/test',
     *  icon: 'test',
     *  categoryKey: 'test',
     * });
     *  */
    registerLink(link) {
        return links_1.Links.registerLink(link);
    },
    /**
     * @param {string} key
     * @param {string} name
     * @param {string} categoryKey
     * @param {Element} component
     * @param {string} description (optional)
     * @param {string} path (optional)
     * @param {string} icon (optional)
     * @returns
     * @memberof Link
     * @example
     * Link.updateLink({
     *  key: 'test',
     *  name: 'Test',
     *  description: 'Test link',
     *  component: TestComponent,
     *  path: '/test',
     *  icon: 'test',
     *  categoryKey: 'test',
     * });
     * */
    updateLink(link) {
        return links_1.Links.updateLink(link);
    },
    /**
     * @param {string} key
     * @memberof Link
     * @example
     * Link.removeLink('test');
     * */
    removeLink(key) {
        return links_1.Links.removeLink(key);
    },
    getNavigationTree() {
        return links_1.Links.getLinkTree();
    },
    /**
     * @param {string} name
     * @param {(...args: any[]) => any} exec
     * @memberof Webord
     * @example
     * Webord.registerAction({
     *  name: 'test',
     *  exec: (foo) => {
     *    console.log(`Hello ${foo}!`);
     *  },
     * });
     * */
    registerAction(action) {
        return actions_1.Actions.registerAction(action);
    },
    /**
     * @param {string} name
     * @param {...any[]} args
     * @returns
     * @memberof Webord
     * @example
     * Webord.useAction('test', 'World');
     * */
    useAction(actionName, ...args) {
        return actions_1.Actions.useAction(actionName, ...args);
    },
};


/***/ }),

/***/ "../node_modules/webord-plugin/lib/links.js":
/*!**************************************************!*\
  !*** ../node_modules/webord-plugin/lib/links.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Links = void 0;
exports.Links = {
    /**
     * @param {string} key
     * @param {string} name
     * @param {string} description (optional)
     * @param {string} path
     * @param {string} icon (optional)
     * @param {string} categoryKey (optional)
     */
    categories: [],
    registerCategory(category) {
        if (!category.key) {
            throw new Error('Category key is required');
        }
        if (!category.name) {
            throw new Error('Category name is required');
        }
        if (!category.path) {
            throw new Error('Category path is required');
        }
        if (this.categories.find((c) => c.key === category.key)) {
            throw new Error('Category key already exists');
        }
        if (category.categoryKey) {
            const parent = this.categories.find((c) => c.key === category.categoryKey);
            if (!parent) {
                throw new Error('Category parent not found');
            }
        }
        this.categories.push(category);
        return this.categories;
    },
    updateCategory(category) {
        const index = this.categories.findIndex((c) => c.key === category.key);
        if (index === -1) {
            throw new Error('Category not found');
        }
        this.categories[index] = category;
        return this.categories;
    },
    removeCategory(categoryKey) {
        const index = this.categories.findIndex((c) => c.key === categoryKey);
        if (index === -1) {
            throw new Error('Category not found');
        }
        this.categories.splice(index, 1);
        return this.categories;
    },
    /**
     * @param {string} key
     * @param {string} name
     * @param {string} description (optional)
     * @param {string} path (optional)
     * @param {string} icon (optional)
     * @param {string} categoryKey
     */
    links: [],
    registerLink(link) {
        if (!link.key) {
            throw new Error('Link key is required');
        }
        if (!link.name) {
            throw new Error('Link name is required');
        }
        if (!link.categoryKey) {
            throw new Error('Link categoryKey is required');
        }
        if (!link.path) {
            link.path = '/' + link.key;
        }
        if (this.links.find((l) => l.key === link.key)) {
            throw new Error('Link key already exists');
        }
        if (!this.categories.find((c) => c.key === link.categoryKey)) {
            throw new Error('Link category not found');
        }
        this.links.push(link);
        return this.links;
    },
    updateLink(link) {
        const index = this.links.findIndex((l) => l.key === link.key);
        if (index === -1) {
            throw new Error('Link not found');
        }
        this.links[index] = link;
        return this.links;
    },
    removeLink(linkKey) {
        const index = this.links.findIndex((l) => l.key === linkKey);
        if (index === -1) {
            throw new Error('Link not found');
        }
        this.links.splice(index, 1);
        return this.links;
    },
    // Navigation
    getLinkTree() {
        let tree = [];
        this.categories
            .filter((category) => !category.categoryKey)
            .forEach((category) => {
            let categoryTree = this.getRecursiveCategory(category.key);
            tree.push(categoryTree);
        });
        return tree;
    },
    getRecursiveCategory(categoryKey) {
        let category = this.categories.find((c) => c.key === categoryKey);
        let subCategorie = [];
        if (!category) {
            throw new Error('Category not found');
        }
        this.categories
            .filter((c) => c.categoryKey === categoryKey)
            .forEach((c) => {
            let subCategoryTree = this.getRecursiveCategory(c.key);
            subCategorie.push(subCategoryTree);
        });
        let links = this.links.filter((l) => l.categoryKey === categoryKey);
        category.links = links;
        return Object.assign(Object.assign({}, category), { subCategorie });
    },
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUdBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsRUFBRSxnSEFBeUMsRUFBRSwwRUFBc0IsQ0FBQyxtQ0FBRTtBQUNsRztBQUNBLElBQUksOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBZTtBQUNuQixDQUFDO0FBQUEsa0dBQUM7Ozs7Ozs7Ozs7O0FDOUJGLGlHQUFPLENBQUMsbUJBQVMsRUFBRSxPQUFTLENBQUMsbUNBQUU7QUFDL0I7QUFDQSxJQUFJLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUNqRSxJQUFJLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtCQUFrQjtBQUN0QixDQUFDO0FBQUEsa0dBQUM7Ozs7Ozs7Ozs7OztBQ1JXO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixlQUFlO0FBQ2Y7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7QUN4QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkLGtCQUFrQixtQkFBTyxDQUFDLCtEQUFXO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLDJEQUFTO0FBQ2pDLGNBQWM7QUFDZDtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQyxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7OztBQ2hKYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjO0FBQzFFLEtBQUs7QUFDTDs7Ozs7OztVQzdIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyZWVucy9IZWxsb1dvcmxkLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2Vib3JkLXBsdWdpbi9saWIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYm9yZC1wbHVnaW4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2Vib3JkLXBsdWdpbi9saWIvbGlua3MuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuLi9ub2RlX21vZHVsZXMvd2Vib3JkLXBsdWdpbi9saWIvaW5kZXhcIiwgXCIuL3NjcmVlbnMvSGVsbG9Xb3JsZFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGluZGV4XzEsIEhlbGxvV29ybGRfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBjbGFzcyBIZWxsb1dvcmxkRXhhbXBsZVBsdWdpbiB7XG4gICAgICAgIGNvbnN0cnVjdG9yKFdlYm9yZFBhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLldlYm9yZFZhbCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLldlYm9yZFZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYm9yZCBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLldlYm9yZFZhbC5yZWdpc3RlckNhdGVnb3J5KHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnaGVsbG8td29ybGQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSGVsbG8gV29ybGQgZnJvbSBQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL2hlbGxvLXdvcmxkJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLldlYm9yZFZhbC5yZWdpc3Rlckxpbmsoe1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdoZWxsby13b3JsZCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdIZWxsbyBXb3JsZCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlLZXk6ICdoZWxsby13b3JsZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogSGVsbG9Xb3JsZF8xLkhlbGxvV29ybGQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5XZWJvcmRWYWwgPSBXZWJvcmRQYXJhbSB8fCBpbmRleF8xLldlYm9yZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LkhlbGxvV29ybGRFeGFtcGxlUGx1Z2luID0gSGVsbG9Xb3JsZEV4YW1wbGVQbHVnaW47XG4gICAgfVxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IEhlbGxvV29ybGRFeGFtcGxlUGx1Z2luO1xufSk7XG4iLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGV4cG9ydHMuSGVsbG9Xb3JsZCA9IHZvaWQgMDtcbiAgICBjb25zdCBIZWxsb1dvcmxkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5pbm5lckhUTUwgPSAnSGVsbG8gV29ybGQgZnJvbSBQbHVnaW4nKTtcbiAgICB9O1xuICAgIGV4cG9ydHMuSGVsbG9Xb3JsZCA9IEhlbGxvV29ybGQ7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BY3Rpb25zID0gdm9pZCAwO1xuZXhwb3J0cy5BY3Rpb25zID0ge1xuICAgIC8vIEN1c3RvbSBBY3Rpb25zXG4gICAgYWN0aW9uOiB7fSxcbiAgICByZWdpc3RlckFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFhY3Rpb24ubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWN0aW9uLmV4ZWMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIGV4ZWMgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hY3Rpb25bYWN0aW9uLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb25bYWN0aW9uLm5hbWVdID0gYWN0aW9uLmV4ZWM7XG4gICAgfSxcbiAgICB1c2VBY3Rpb24oYWN0aW9uTmFtZSwgLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aW9uW2FjdGlvbk5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25bYWN0aW9uTmFtZV0oLi4uYXJncyk7XG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2Vib3JkID0gdm9pZCAwO1xuY29uc3QgYWN0aW9uc18xID0gcmVxdWlyZShcIi4vYWN0aW9uc1wiKTtcbmNvbnN0IGxpbmtzXzEgPSByZXF1aXJlKFwiLi9saW5rc1wiKTtcbmV4cG9ydHMuV2Vib3JkID0ge1xuICAgIC8vIExpbmtzXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlLZXkgKG9wdGlvbmFsKVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdGVnb3J5XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBXZWJvcmQucmVnaXN0ZXJDYXRlZ29yeSh7XG4gICAgICogIGtleTogJ3Rlc3QnLFxuICAgICAqICBuYW1lOiAnVGVzdCcsXG4gICAgICogIGRlc2NyaXB0aW9uOiAnVGVzdCBjYXRlZ29yeScsXG4gICAgICogIHBhdGg6ICcvdGVzdCcsXG4gICAgICogIGljb246ICd0ZXN0JyxcbiAgICAgKiB9KTtcbiAgICAgKiAqL1xuICAgIHJlZ2lzdGVyQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtzXzEuTGlua3MucmVnaXN0ZXJDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeUtleSAob3B0aW9uYWwpXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2F0ZWdvcnlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIFdlYm9yZC51cGRhdGVDYXRlZ29yeSh7XG4gICAgICogIGtleTogJ3Rlc3QnLFxuICAgICAqICBuYW1lOiAnVGVzdCcsXG4gICAgICogIGRlc2NyaXB0aW9uOiAnVGVzdCBjYXRlZ29yeScsXG4gICAgICogIHBhdGg6ICcvdGVzdCcsXG4gICAgICogIGljb246ICd0ZXN0JyxcbiAgICAgKiB9KTtcbiAgICAgKiAqL1xuICAgIHVwZGF0ZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIHJldHVybiBsaW5rc18xLkxpbmtzLnVwZGF0ZUNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAbWVtYmVyb2YgQ2F0ZWdvcnlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIFdlYm9yZC5yZW1vdmVDYXRlZ29yeSgndGVzdCcpO1xuICAgICAqICovXG4gICAgcmVtb3ZlQ2F0ZWdvcnkoa2V5KSB7XG4gICAgICAgIHJldHVybiBsaW5rc18xLkxpbmtzLnJlbW92ZUNhdGVnb3J5KGtleSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlLZXlcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIChvcHRpb25hbClcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBMaW5rXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBMaW5rLnJlZ2lzdGVyTGluayh7XG4gICAgICogIGtleTogJ3Rlc3QnLFxuICAgICAqICBuYW1lOiAnVGVzdCcsXG4gICAgICogIGRlc2NyaXB0aW9uOiAnVGVzdCBsaW5rJyxcbiAgICAgKiAgY29tcG9uZW50OiBUZXN0Q29tcG9uZW50LFxuICAgICAqICBwYXRoOiAnL3Rlc3QnLFxuICAgICAqICBpY29uOiAndGVzdCcsXG4gICAgICogIGNhdGVnb3J5S2V5OiAndGVzdCcsXG4gICAgICogfSk7XG4gICAgICogICovXG4gICAgcmVnaXN0ZXJMaW5rKGxpbmspIHtcbiAgICAgICAgcmV0dXJuIGxpbmtzXzEuTGlua3MucmVnaXN0ZXJMaW5rKGxpbmspO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5S2V5XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvbiAob3B0aW9uYWwpXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgTGlua1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTGluay51cGRhdGVMaW5rKHtcbiAgICAgKiAga2V5OiAndGVzdCcsXG4gICAgICogIG5hbWU6ICdUZXN0JyxcbiAgICAgKiAgZGVzY3JpcHRpb246ICdUZXN0IGxpbmsnLFxuICAgICAqICBjb21wb25lbnQ6IFRlc3RDb21wb25lbnQsXG4gICAgICogIHBhdGg6ICcvdGVzdCcsXG4gICAgICogIGljb246ICd0ZXN0JyxcbiAgICAgKiAgY2F0ZWdvcnlLZXk6ICd0ZXN0JyxcbiAgICAgKiB9KTtcbiAgICAgKiAqL1xuICAgIHVwZGF0ZUxpbmsobGluaykge1xuICAgICAgICByZXR1cm4gbGlua3NfMS5MaW5rcy51cGRhdGVMaW5rKGxpbmspO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBtZW1iZXJvZiBMaW5rXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBMaW5rLnJlbW92ZUxpbmsoJ3Rlc3QnKTtcbiAgICAgKiAqL1xuICAgIHJlbW92ZUxpbmsoa2V5KSB7XG4gICAgICAgIHJldHVybiBsaW5rc18xLkxpbmtzLnJlbW92ZUxpbmsoa2V5KTtcbiAgICB9LFxuICAgIGdldE5hdmlnYXRpb25UcmVlKCkge1xuICAgICAgICByZXR1cm4gbGlua3NfMS5MaW5rcy5nZXRMaW5rVHJlZSgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gYW55fSBleGVjXG4gICAgICogQG1lbWJlcm9mIFdlYm9yZFxuICAgICAqIEBleGFtcGxlXG4gICAgICogV2Vib3JkLnJlZ2lzdGVyQWN0aW9uKHtcbiAgICAgKiAgbmFtZTogJ3Rlc3QnLFxuICAgICAqICBleGVjOiAoZm9vKSA9PiB7XG4gICAgICogICAgY29uc29sZS5sb2coYEhlbGxvICR7Zm9vfSFgKTtcbiAgICAgKiAgfSxcbiAgICAgKiB9KTtcbiAgICAgKiAqL1xuICAgIHJlZ2lzdGVyQWN0aW9uKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gYWN0aW9uc18xLkFjdGlvbnMucmVnaXN0ZXJBY3Rpb24oYWN0aW9uKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHsuLi5hbnlbXX0gYXJnc1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIFdlYm9yZFxuICAgICAqIEBleGFtcGxlXG4gICAgICogV2Vib3JkLnVzZUFjdGlvbigndGVzdCcsICdXb3JsZCcpO1xuICAgICAqICovXG4gICAgdXNlQWN0aW9uKGFjdGlvbk5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5BY3Rpb25zLnVzZUFjdGlvbihhY3Rpb25OYW1lLCAuLi5hcmdzKTtcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MaW5rcyA9IHZvaWQgMDtcbmV4cG9ydHMuTGlua3MgPSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlLZXkgKG9wdGlvbmFsKVxuICAgICAqL1xuICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgIHJlZ2lzdGVyQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgaWYgKCFjYXRlZ29yeS5rZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkga2V5IGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYXRlZ29yeS5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IG5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhdGVnb3J5LnBhdGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkgcGF0aCBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXMuZmluZCgoYykgPT4gYy5rZXkgPT09IGNhdGVnb3J5LmtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkga2V5IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhdGVnb3J5LmNhdGVnb3J5S2V5KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmNhdGVnb3JpZXMuZmluZCgoYykgPT4gYy5rZXkgPT09IGNhdGVnb3J5LmNhdGVnb3J5S2V5KTtcbiAgICAgICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBwYXJlbnQgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzO1xuICAgIH0sXG4gICAgdXBkYXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNhdGVnb3JpZXMuZmluZEluZGV4KChjKSA9PiBjLmtleSA9PT0gY2F0ZWdvcnkua2V5KTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhdID0gY2F0ZWdvcnk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXM7XG4gICAgfSxcbiAgICByZW1vdmVDYXRlZ29yeShjYXRlZ29yeUtleSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGMpID0+IGMua2V5ID09PSBjYXRlZ29yeUtleSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvbiAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5S2V5XG4gICAgICovXG4gICAgbGlua3M6IFtdLFxuICAgIHJlZ2lzdGVyTGluayhsaW5rKSB7XG4gICAgICAgIGlmICghbGluay5rZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGluayBrZXkgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaW5rIG5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuY2F0ZWdvcnlLZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGluayBjYXRlZ29yeUtleSBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5wYXRoKSB7XG4gICAgICAgICAgICBsaW5rLnBhdGggPSAnLycgKyBsaW5rLmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5saW5rcy5maW5kKChsKSA9PiBsLmtleSA9PT0gbGluay5rZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpbmsga2V5IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3JpZXMuZmluZCgoYykgPT4gYy5rZXkgPT09IGxpbmsuY2F0ZWdvcnlLZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpbmsgY2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5rcy5wdXNoKGxpbmspO1xuICAgICAgICByZXR1cm4gdGhpcy5saW5rcztcbiAgICB9LFxuICAgIHVwZGF0ZUxpbmsobGluaykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlua3MuZmluZEluZGV4KChsKSA9PiBsLmtleSA9PT0gbGluay5rZXkpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpbmsgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5rc1tpbmRleF0gPSBsaW5rO1xuICAgICAgICByZXR1cm4gdGhpcy5saW5rcztcbiAgICB9LFxuICAgIHJlbW92ZUxpbmsobGlua0tleSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlua3MuZmluZEluZGV4KChsKSA9PiBsLmtleSA9PT0gbGlua0tleSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGluayBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmtzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtzO1xuICAgIH0sXG4gICAgLy8gTmF2aWdhdGlvblxuICAgIGdldExpbmtUcmVlKCkge1xuICAgICAgICBsZXQgdHJlZSA9IFtdO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNcbiAgICAgICAgICAgIC5maWx0ZXIoKGNhdGVnb3J5KSA9PiAhY2F0ZWdvcnkuY2F0ZWdvcnlLZXkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVRyZWUgPSB0aGlzLmdldFJlY3Vyc2l2ZUNhdGVnb3J5KGNhdGVnb3J5LmtleSk7XG4gICAgICAgICAgICB0cmVlLnB1c2goY2F0ZWdvcnlUcmVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmVlO1xuICAgIH0sXG4gICAgZ2V0UmVjdXJzaXZlQ2F0ZWdvcnkoY2F0ZWdvcnlLZXkpIHtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzLmZpbmQoKGMpID0+IGMua2V5ID09PSBjYXRlZ29yeUtleSk7XG4gICAgICAgIGxldCBzdWJDYXRlZ29yaWUgPSBbXTtcbiAgICAgICAgaWYgKCFjYXRlZ29yeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNcbiAgICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGMuY2F0ZWdvcnlLZXkgPT09IGNhdGVnb3J5S2V5KVxuICAgICAgICAgICAgLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGxldCBzdWJDYXRlZ29yeVRyZWUgPSB0aGlzLmdldFJlY3Vyc2l2ZUNhdGVnb3J5KGMua2V5KTtcbiAgICAgICAgICAgIHN1YkNhdGVnb3JpZS5wdXNoKHN1YkNhdGVnb3J5VHJlZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbGlua3MgPSB0aGlzLmxpbmtzLmZpbHRlcigobCkgPT4gbC5jYXRlZ29yeUtleSA9PT0gY2F0ZWdvcnlLZXkpO1xuICAgICAgICBjYXRlZ29yeS5saW5rcyA9IGxpbmtzO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yeSksIHsgc3ViQ2F0ZWdvcmllIH0pO1xuICAgIH0sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9