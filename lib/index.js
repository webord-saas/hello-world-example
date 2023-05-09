/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../node_modules/webord-plugin/lib/index */ "../node_modules/webord-plugin/lib/index.js"), __webpack_require__(/*! ./screens/HelloWorld */ "./screens/HelloWorld.tsx")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1, HelloWorld_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.init = void 0;
    const init = () => {
        index_1.Webord.registerCategory({
            key: 'hello-world',
            name: 'Hello World from Plugin',
            path: '/hello-world',
        });
        index_1.Webord.registerLink({
            key: 'hello-world',
            name: 'Hello World',
            path: '/',
            categoryKey: 'hello-world',
            component: HelloWorld_1.HelloWorld,
        });
    };
    exports.init = init;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./screens/HelloWorld.tsx":
/*!********************************!*\
  !*** ./screens/HelloWorld.tsx ***!
  \********************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (6:15)\nFile was processed with these loaders:\n * ../node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|     exports.HelloWorld = void 0;\n|     const HelloWorld = () => {\n>         return <h1>Hello World</h1>;\n|     };\n|     exports.HelloWorld = HelloWorld;");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7QUFDYixhQUFhO0FBQ2I7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDZDQUE2QyxlQUFlLGNBQWM7QUFDMUUsS0FBSztBQUNMOzs7Ozs7O1VDN0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYm9yZC1wbHVnaW4vbGliL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJvcmQtcGx1Z2luL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYm9yZC1wbHVnaW4vbGliL2xpbmtzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi4vbm9kZV9tb2R1bGVzL3dlYm9yZC1wbHVnaW4vbGliL2luZGV4XCIsIFwiLi9zY3JlZW5zL0hlbGxvV29ybGRcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbmRleF8xLCBIZWxsb1dvcmxkXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZXhwb3J0cy5pbml0ID0gdm9pZCAwO1xuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGluZGV4XzEuV2Vib3JkLnJlZ2lzdGVyQ2F0ZWdvcnkoe1xuICAgICAgICAgICAga2V5OiAnaGVsbG8td29ybGQnLFxuICAgICAgICAgICAgbmFtZTogJ0hlbGxvIFdvcmxkIGZyb20gUGx1Z2luJyxcbiAgICAgICAgICAgIHBhdGg6ICcvaGVsbG8td29ybGQnLFxuICAgICAgICB9KTtcbiAgICAgICAgaW5kZXhfMS5XZWJvcmQucmVnaXN0ZXJMaW5rKHtcbiAgICAgICAgICAgIGtleTogJ2hlbGxvLXdvcmxkJyxcbiAgICAgICAgICAgIG5hbWU6ICdIZWxsbyBXb3JsZCcsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBjYXRlZ29yeUtleTogJ2hlbGxvLXdvcmxkJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogSGVsbG9Xb3JsZF8xLkhlbGxvV29ybGQsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZXhwb3J0cy5pbml0ID0gaW5pdDtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvbnMgPSB2b2lkIDA7XG5leHBvcnRzLkFjdGlvbnMgPSB7XG4gICAgLy8gQ3VzdG9tIEFjdGlvbnNcbiAgICBhY3Rpb246IHt9LFxuICAgIHJlZ2lzdGVyQWN0aW9uKGFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhY3Rpb24uZXhlYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZXhlYyBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFjdGlvblthY3Rpb24ubmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvblthY3Rpb24ubmFtZV0gPSBhY3Rpb24uZXhlYztcbiAgICB9LFxuICAgIHVzZUFjdGlvbihhY3Rpb25OYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rpb25bYWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvblthY3Rpb25OYW1lXSguLi5hcmdzKTtcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5XZWJvcmQgPSB2b2lkIDA7XG5jb25zdCBhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi9hY3Rpb25zXCIpO1xuY29uc3QgbGlua3NfMSA9IHJlcXVpcmUoXCIuL2xpbmtzXCIpO1xuZXhwb3J0cy5XZWJvcmQgPSB7XG4gICAgLy8gTGlua3NcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeUtleSAob3B0aW9uYWwpXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2F0ZWdvcnlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIFdlYm9yZC5yZWdpc3RlckNhdGVnb3J5KHtcbiAgICAgKiAga2V5OiAndGVzdCcsXG4gICAgICogIG5hbWU6ICdUZXN0JyxcbiAgICAgKiAgZGVzY3JpcHRpb246ICdUZXN0IGNhdGVnb3J5JyxcbiAgICAgKiAgcGF0aDogJy90ZXN0JyxcbiAgICAgKiAgaWNvbjogJ3Rlc3QnLFxuICAgICAqIH0pO1xuICAgICAqICovXG4gICAgcmVnaXN0ZXJDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gbGlua3NfMS5MaW5rcy5yZWdpc3RlckNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvbiAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5S2V5IChvcHRpb25hbClcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXRlZ29yeVxuICAgICAqIEBleGFtcGxlXG4gICAgICogV2Vib3JkLnVwZGF0ZUNhdGVnb3J5KHtcbiAgICAgKiAga2V5OiAndGVzdCcsXG4gICAgICogIG5hbWU6ICdUZXN0JyxcbiAgICAgKiAgZGVzY3JpcHRpb246ICdUZXN0IGNhdGVnb3J5JyxcbiAgICAgKiAgcGF0aDogJy90ZXN0JyxcbiAgICAgKiAgaWNvbjogJ3Rlc3QnLFxuICAgICAqIH0pO1xuICAgICAqICovXG4gICAgdXBkYXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtzXzEuTGlua3MudXBkYXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBtZW1iZXJvZiBDYXRlZ29yeVxuICAgICAqIEBleGFtcGxlXG4gICAgICogV2Vib3JkLnJlbW92ZUNhdGVnb3J5KCd0ZXN0Jyk7XG4gICAgICogKi9cbiAgICByZW1vdmVDYXRlZ29yeShrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtzXzEuTGlua3MucmVtb3ZlQ2F0ZWdvcnkoa2V5KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeUtleVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gKG9wdGlvbmFsKVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIExpbmtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIExpbmsucmVnaXN0ZXJMaW5rKHtcbiAgICAgKiAga2V5OiAndGVzdCcsXG4gICAgICogIG5hbWU6ICdUZXN0JyxcbiAgICAgKiAgZGVzY3JpcHRpb246ICdUZXN0IGxpbmsnLFxuICAgICAqICBjb21wb25lbnQ6IFRlc3RDb21wb25lbnQsXG4gICAgICogIHBhdGg6ICcvdGVzdCcsXG4gICAgICogIGljb246ICd0ZXN0JyxcbiAgICAgKiAgY2F0ZWdvcnlLZXk6ICd0ZXN0JyxcbiAgICAgKiB9KTtcbiAgICAgKiAgKi9cbiAgICByZWdpc3RlckxpbmsobGluaykge1xuICAgICAgICByZXR1cm4gbGlua3NfMS5MaW5rcy5yZWdpc3RlckxpbmsobGluayk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlLZXlcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIChvcHRpb25hbClcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBMaW5rXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBMaW5rLnVwZGF0ZUxpbmsoe1xuICAgICAqICBrZXk6ICd0ZXN0JyxcbiAgICAgKiAgbmFtZTogJ1Rlc3QnLFxuICAgICAqICBkZXNjcmlwdGlvbjogJ1Rlc3QgbGluaycsXG4gICAgICogIGNvbXBvbmVudDogVGVzdENvbXBvbmVudCxcbiAgICAgKiAgcGF0aDogJy90ZXN0JyxcbiAgICAgKiAgaWNvbjogJ3Rlc3QnLFxuICAgICAqICBjYXRlZ29yeUtleTogJ3Rlc3QnLFxuICAgICAqIH0pO1xuICAgICAqICovXG4gICAgdXBkYXRlTGluayhsaW5rKSB7XG4gICAgICAgIHJldHVybiBsaW5rc18xLkxpbmtzLnVwZGF0ZUxpbmsobGluayk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQG1lbWJlcm9mIExpbmtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIExpbmsucmVtb3ZlTGluaygndGVzdCcpO1xuICAgICAqICovXG4gICAgcmVtb3ZlTGluayhrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtzXzEuTGlua3MucmVtb3ZlTGluayhrZXkpO1xuICAgIH0sXG4gICAgZ2V0TmF2aWdhdGlvblRyZWUoKSB7XG4gICAgICAgIHJldHVybiBsaW5rc18xLkxpbmtzLmdldExpbmtUcmVlKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiBhbnl9IGV4ZWNcbiAgICAgKiBAbWVtYmVyb2YgV2Vib3JkXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBXZWJvcmQucmVnaXN0ZXJBY3Rpb24oe1xuICAgICAqICBuYW1lOiAndGVzdCcsXG4gICAgICogIGV4ZWM6IChmb28pID0+IHtcbiAgICAgKiAgICBjb25zb2xlLmxvZyhgSGVsbG8gJHtmb299IWApO1xuICAgICAqICB9LFxuICAgICAqIH0pO1xuICAgICAqICovXG4gICAgcmVnaXN0ZXJBY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zXzEuQWN0aW9ucy5yZWdpc3RlckFjdGlvbihhY3Rpb24pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0gey4uLmFueVtdfSBhcmdzXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgV2Vib3JkXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBXZWJvcmQudXNlQWN0aW9uKCd0ZXN0JywgJ1dvcmxkJyk7XG4gICAgICogKi9cbiAgICB1c2VBY3Rpb24oYWN0aW9uTmFtZSwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gYWN0aW9uc18xLkFjdGlvbnMudXNlQWN0aW9uKGFjdGlvbk5hbWUsIC4uLmFyZ3MpO1xuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxpbmtzID0gdm9pZCAwO1xuZXhwb3J0cy5MaW5rcyA9IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeUtleSAob3B0aW9uYWwpXG4gICAgICovXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgcmVnaXN0ZXJDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBpZiAoIWNhdGVnb3J5LmtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBrZXkgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhdGVnb3J5Lm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkgbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2F0ZWdvcnkucGF0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBwYXRoIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllcy5maW5kKChjKSA9PiBjLmtleSA9PT0gY2F0ZWdvcnkua2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBrZXkgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2F0ZWdvcnkuY2F0ZWdvcnlLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuY2F0ZWdvcmllcy5maW5kKChjKSA9PiBjLmtleSA9PT0gY2F0ZWdvcnkuY2F0ZWdvcnlLZXkpO1xuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IHBhcmVudCBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXM7XG4gICAgfSxcbiAgICB1cGRhdGVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGMpID0+IGMua2V5ID09PSBjYXRlZ29yeS5rZXkpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleF0gPSBjYXRlZ29yeTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcztcbiAgICB9LFxuICAgIHJlbW92ZUNhdGVnb3J5KGNhdGVnb3J5S2V5KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXRlZ29yaWVzLmZpbmRJbmRleCgoYykgPT4gYy5rZXkgPT09IGNhdGVnb3J5S2V5KTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlLZXlcbiAgICAgKi9cbiAgICBsaW5rczogW10sXG4gICAgcmVnaXN0ZXJMaW5rKGxpbmspIHtcbiAgICAgICAgaWYgKCFsaW5rLmtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaW5rIGtleSBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpbmsgbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5jYXRlZ29yeUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaW5rIGNhdGVnb3J5S2V5IGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsaW5rLnBhdGgpIHtcbiAgICAgICAgICAgIGxpbmsucGF0aCA9ICcvJyArIGxpbmsua2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxpbmtzLmZpbmQoKGwpID0+IGwua2V5ID09PSBsaW5rLmtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGluayBrZXkgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcy5maW5kKChjKSA9PiBjLmtleSA9PT0gbGluay5jYXRlZ29yeUtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGluayBjYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtzO1xuICAgIH0sXG4gICAgdXBkYXRlTGluayhsaW5rKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saW5rcy5maW5kSW5kZXgoKGwpID0+IGwua2V5ID09PSBsaW5rLmtleSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGluayBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmtzW2luZGV4XSA9IGxpbms7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtzO1xuICAgIH0sXG4gICAgcmVtb3ZlTGluayhsaW5rS2V5KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saW5rcy5maW5kSW5kZXgoKGwpID0+IGwua2V5ID09PSBsaW5rS2V5KTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaW5rIG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlua3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlua3M7XG4gICAgfSxcbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgZ2V0TGlua1RyZWUoKSB7XG4gICAgICAgIGxldCB0cmVlID0gW107XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1xuICAgICAgICAgICAgLmZpbHRlcigoY2F0ZWdvcnkpID0+ICFjYXRlZ29yeS5jYXRlZ29yeUtleSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5VHJlZSA9IHRoaXMuZ2V0UmVjdXJzaXZlQ2F0ZWdvcnkoY2F0ZWdvcnkua2V5KTtcbiAgICAgICAgICAgIHRyZWUucHVzaChjYXRlZ29yeVRyZWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyZWU7XG4gICAgfSxcbiAgICBnZXRSZWN1cnNpdmVDYXRlZ29yeShjYXRlZ29yeUtleSkge1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXMuZmluZCgoYykgPT4gYy5rZXkgPT09IGNhdGVnb3J5S2V5KTtcbiAgICAgICAgbGV0IHN1YkNhdGVnb3JpZSA9IFtdO1xuICAgICAgICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1xuICAgICAgICAgICAgLmZpbHRlcigoYykgPT4gYy5jYXRlZ29yeUtleSA9PT0gY2F0ZWdvcnlLZXkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YkNhdGVnb3J5VHJlZSA9IHRoaXMuZ2V0UmVjdXJzaXZlQ2F0ZWdvcnkoYy5rZXkpO1xuICAgICAgICAgICAgc3ViQ2F0ZWdvcmllLnB1c2goc3ViQ2F0ZWdvcnlUcmVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBsaW5rcyA9IHRoaXMubGlua3MuZmlsdGVyKChsKSA9PiBsLmNhdGVnb3J5S2V5ID09PSBjYXRlZ29yeUtleSk7XG4gICAgICAgIGNhdGVnb3J5LmxpbmtzID0gbGlua3M7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3J5KSwgeyBzdWJDYXRlZ29yaWUgfSk7XG4gICAgfSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=