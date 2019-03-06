import {
    ADD_FILTER, 
    REMOVE_FILTER,
    ADD_COLUMN,
    REMOVE_COLUMN
} from '../actions/DataActions.js'

const INITIAL_STATE = {

    data: getRandomData(5000),
    allColumns: ['base_id', 'mo_id', 'dyna_id', 'who_id', 'clo_id', 'company', 'country', 'address', 'sr_ranking', 'pp_ranking'],
    selectedColumns: ['base_id']
}


const DataSourceReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case ADD_COLUMN:
            var newSelectedColumns = Array.from(state.selectedColumns)
            newSelectedColumns.push(action.column)
            return Object.assign({}, state, { selectedColumns: newSelectedColumns })
        case REMOVE_COLUMN:
             var colIndex = state.selectedColumns.indexOf(action.column)
             var newSelectedColumns = Array.from(state.selectedColumns)
            newSelectedColumns.splice(colIndex, 1)
            return Object.assign({}, state, { selectedColumns: newSelectedColumns })
        case ADD_FILTER:
            var newFilters = Array.from(state.filters)
            newFilters.push(action.filter)
            return Object.assign({}, state, { filters: newFilters })
        case REMOVE_FILTER:
            var newFilters = Array.from(state.filters)
            newFilters.splice(action.filterIndex, 1)
            return Object.assign({}, state, { filters: newFilters })
		default:
			return state
	}
}

function getRandomData(rows) {
    var randomData = []
    for(var i=0; i<rows; i++) {
        randomData.push({
            base_id: 'BID'+getRandomInt(1000000,9999999),
            mo_id: 'S'+getRandomInt(100000000,999999999),
            dyna_id: 'SA'+getRandomInt(10000000,99999999),
            who_id: 'WH'+getRandomInt(10000000,99999999),
            clo_id: 'cl'+getRandomInt(100000,999999),
            company: getRandomLengthString(),
            country: getRandomLengthString(),
            address: getRandomInt(1,1500) + ' ' + getRandomLengthString() + ' ' + getRandomLengthString() + ' ' + getRandomLengthString().toUpperCase(),
            sr_ranking: i+5,
            pp_ranking: i+30
        })
    }
    return randomData
}

function getRandomLengthString() {
    let result="";
    let stringLength = getRandomInt(5,15)
    for(let i=0; i<stringLength; i++) {
        result=result+'x';
    }
    return result;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)+min);
}

export default DataSourceReducer;