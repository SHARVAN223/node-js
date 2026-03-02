// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from './CounterSlice';

// const store = configureStore({
//     reducer:{
//         mycounter: myReducer
//     }
// })

// export default store;





import { configureStore } from "@reduxjs/toolkit";
import myReducer from './colorSlice';

const store = configureStore({
    reducer:{
        mycolor:myReducer
    }
})

export default store;