// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from './CounterSlice';

// const store = configureStore({
//     reducer:{
//         mycounter: myReducer
//     }
// })

// export default store;





import { configureStore } from "@reduxjs/toolkit";
import myReducer from './TodoSlice';

const store = configureStore({
    reducer:{
        todo:myReducer
    }
})

export default store;