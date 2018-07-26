const redux = require("redux");
const createStore = redux.createStore;

let mathReducer = (state = 0, action) => { // state should have always some initial value
    if (action.type == "INCREAMENT") {
        return state + 1;
    } else if (action.type == "ADD") {
        return state + action.payload;
    } else {
        return state;
    }
}

let myStore = createStore(mathReducer);
console.log("Intial State", myStore.getState());
myStore.subscribe(() => {
    console.log("Current State is", myStore.getState());
})

/*myStore.dispatch({ type: "INCREAMENT" });
myStore.dispatch({ type: "INCREAMENT" });
myStore.dispatch({ type: "INCREAMENT" });
myStore.dispatch({ type: "ADD", payload: 100 });
myStore.dispatch({ type: "INCREAMENT" });*/

//Define Action Creators
function increment() {
    return { type: "INCREAMENT" }
}

function add(num) {
    return {
        type: "ADD", payload: num 
    }
}

myStore.dispatch(increment());
myStore.dispatch(add(100));

console.log("Redux Demo File Message***");
