import { log } from "../common/utilities";

function closure() {
    log("[closure]");

    const sampleA = () => {
        let coffeeOrigin = "indonesia";

        function showOrigin() {
            log(coffeeOrigin);
        }

        coffeeOrigin = "nicaragua";

        showOrigin();
    }

    const sampleB = () => {
        function outer(outerParam) {
            return function inner(innerParam) {
                log(`outer parameter is '${outerParam}'`);
                log(`inner parameter is '${innerParam}'`);
            }
        }

        const temp = outer('outside');

        temp("inside");
    }

    const sampleC = () => {

        function increase() {
            let counter = 0;

            return function () {
                counter += 1;

                return counter;
            }
        }

        const trigger = increase();

        log(trigger());
        log(trigger());
        log(trigger());
    }

    const add = (a) => {
        return function(b) {
            return a + b;
        }
    }

    const main = () => {
        sampleA();
        sampleB();
        sampleC();
        add(3)(2);
    }

    main();
}

export default closure;