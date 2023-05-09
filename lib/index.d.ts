import { Webord } from '../node_modules/webord-plugin/lib/index';
declare class HelloWorldExamplePlugin {
    WebordVal: typeof Webord | null;
    constructor(WebordParam: typeof Webord);
    init: () => void;
}
export default HelloWorldExamplePlugin;
