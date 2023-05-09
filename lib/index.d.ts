declare let HelloWorldExamplePlugin: {
    Webord: {
        registerCategory(category: import("../node_modules/webord-plugin/lib/interface/Category").Category): import("../node_modules/webord-plugin/lib/interface/Category").CategoryList;
        updateCategory(category: import("../node_modules/webord-plugin/lib/interface/Category").Category): import("../node_modules/webord-plugin/lib/interface/Category").CategoryList;
        removeCategory(key: string): import("../node_modules/webord-plugin/lib/interface/Category").CategoryList;
        registerLink(link: import("../node_modules/webord-plugin/lib/interface/Link").Link): import("../node_modules/webord-plugin/lib/interface/Link").LinkList;
        updateLink(link: import("../node_modules/webord-plugin/lib/interface/Link").Link): import("../node_modules/webord-plugin/lib/interface/Link").LinkList;
        removeLink(key: string): import("../node_modules/webord-plugin/lib/interface/Link").LinkList;
        getNavigationTree(): object[];
        registerAction(action: {
            name: string;
            exec: (...args: any[]) => any;
        }): void;
        useAction(actionName: string, ...args: any[]): any;
    };
    init: () => void;
};
export { HelloWorldExamplePlugin };
