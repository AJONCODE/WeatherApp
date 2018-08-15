import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    
    // console.log("Action received : ", action);

    // Avoiding state mutations in Reducers
    // Never do state.push(action.payload.data)

    // Instead of mutating the state, create a new instance of state
    //          [ action.payload.data, ...(state) ]
    //                      OR
    //          ([ action.payload.data ]).concat(state)
    switch(action.type) {
        case FETCH_WEATHER: 
            return [ action.payload.data, ...state ];
    }

    return state;

}