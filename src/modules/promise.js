import { log } from "../common/utilities";

function promise() {
    log("\n[promise]");

    const basic = () => {
        const wait = (time) => new Promise((resolve, reject) => setTimeout(resolve, time));

        wait(3000).then(() => log('Hello!')); // 'Hello!'
    }

    const promiseAll = () => {
        const print = (time, content) => new Promise((resolve, reject) => setTimeout(resolve, time, content));

        const first = print(1000, 'a');
        const second = print(2000, 'b');
        const third = print(3000, 'c');

        Promise.all([first, second, third]).then((values) => log(values));
    }

    const main = () => {
        basic();
        promiseAll();
    }

    main();
}

export default promise;