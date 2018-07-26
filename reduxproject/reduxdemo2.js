// Import redux
const redux = require("redux");
const createStore = redux.createStore;

// Reducer
let mathReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return { count: ++state.count };
        case "DECREAMENT":
            return { count: --state.count };
        case "ADD":
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

// Store
let myStore = createStore(mathReducer);

console.log("Initial State is", myStore.getState());

// Subscriber
myStore.subscribe(() => {
    console.log("Current State is", myStore.getState());
});

// Action Creator
function increament() {
    return { type: "INCREAMENT" }
}
function decreament() {
    return { type: "DECREAMENT" }
}
function add(num) {
    return {
        type: "ADD",
        payload: num
    }
}

// Dispatch
myStore.dispatch(increament());
myStore.dispatch(add(10));
myStore.dispatch(decreament());


// JS Overview
let myArr = [10, 20];
console.log(myArr);

let myArr2 = [900, 500, ...myArr, 600];
console.log(myArr2);

let myArr3 = [...myArr2.slice(0,1), ...myArr2.slice(2)];
console.log(myArr3);

myArr3 = [...myArr2.slice(0,1), 55, ...myArr2.slice(2)];
console.log(myArr3);