import ColumnSelector from './ColumnSelector.js'
import { connect } from 'react-redux'
import { addColumn, removeColumn } from '../actions/DataActions.js'

const mapStateToProps = state => {
    return {
        selectedColumns: state.DataReducer.selectedColumns,
        allColumns: state.DataReducer.allColumns
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addColumn: column => dispatch(addColumn(column)),
        removeColumn: column => dispatch(removeColumn(column))
    }
}

const ColumnSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColumnSelector)

export default ColumnSelectorContainer