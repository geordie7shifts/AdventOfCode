
export const exec = (func) => {
    let start = Date.now();
    func();
    console.log("Execution time:", Date.now() - start + 'ms');
};