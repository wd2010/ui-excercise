import DataTable from './DataTable.js'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        data: state.DataReducer.data,
        selectedColumns: state.DataReducer.selectedColumns
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

const DataTableContainer = connect(
    mapStateToProps,
    null
)(DataTable)

export default DataTableContainer