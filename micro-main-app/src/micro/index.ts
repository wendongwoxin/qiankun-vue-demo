import { addGlobalUncaughtErrorHandler, registerMicroApps, start } from "qiankun";
import app from "./app";

registerMicroApps(app, {
    beforeLoad: (_app): any => {
        console.log(_app, 'beforeLoad');
    },
    beforeMount: (_app): any => {
        console.log(_app, 'beforeMount');
    },
    afterMount: (_app): any => {
        console.log(_app, 'afterMount');
    },
    afterUnmount: (_app): any => {
        console.log(_app, 'afterUnmount');
    },
})

addGlobalUncaughtErrorHandler((_event) => {
    console.error(_event);
})

export default start