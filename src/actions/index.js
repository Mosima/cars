//importing action types
import { FETCH_CAR} from './types';

//fetching all the vehicles
export const  fetchCar =  () => async dispatch => {
    try {
        const res = await fetch("http://recruitment.warpdevelopment.co.za/vehicles/vehicles.json",{ mode: 'no-cors'});
        const data = await JSON.stringify(res);
        console.log("cars",data)
        dispatch({type: FETCH_CAR, payload: data});
    } catch (error) {
        console.log(error)
    }
    
};

// // recieving selected comic that will passed to fetch comic from the selected api
// export const fetchCategory =(obj) => async dispatch =>{
//     const res = await fetch(baseUrl + '/random?category=' + obj);
//     const data = await res.json();
//     dispatch({type: FETCHFETCH_CAR_CATEGORY, payload: data});
// };

