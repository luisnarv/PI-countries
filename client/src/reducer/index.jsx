


const initialState ={
    countries: [],
    allContinents: [],
    allPopulation: [],
    activities:[],
    detail: []
}

function rootReducer (state= initialState, action){
    switch(action.type){

// "GET_COUNTRIES"
        case "GET_COUNTRIES":
            return{
                ...state,
                countries: action.payload,
                allContinents: action.payload,
                allPopulation: action.payload
            }
//  "FILTER_CONTINENT"   
            case "FILTER_CONTINENT":
            const allContinents = state.allContinents
            const statusFil = action.payload === "All" ? allContinents:
            allContinents.filter(e => e.continent === action.payload)    
            return {
                    ...state,
                    countries: statusFil
                }
//  "FILTER_POPULATION" 
             case "FILTER_POPULATION" :
            const allPopulation = state.allPopulation
            const statusPo = action.payload === 'Min' ?   
           // action.payload === 'Min' ?
           allPopulation.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0;
                }) :
                allPopulation.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: statusPo
            }
 // FILTER_AZ
          case "FILTER_AZ":
            const orderCountries = action.payload === 'AZ' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderCountries
            }

 //SearCountry 
            case "SearCountry":
            return {
                ...state,
                countries: action.payload,
                error: ""
            }

// GetActivity
            case "GET_ACTIVITY":
                return {
                    ...state,
                    loading: false,
                    activities: action.payload
                }

// GetDetail

            case "GET_DETAIL":
                return{
                    ...state,
                    detail: action.payload
                }
        
            default:
                return state;
    }
}


export default rootReducer;