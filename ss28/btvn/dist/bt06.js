"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        callback();
    }, 1000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        callback();
    }, 1500);
}
function task3() {
    setTimeout(() => {
        console.log("Task 3 được thực thi");
    }, 2000);
}
task1(() => {
    task2(() => {
        task3();
    });
});
//# sourceMappingURL=bt06.js.map