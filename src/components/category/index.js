import connect from 'react-redux/es/connect/connect';
import Category from './category';

const actions = {
}

function mapStateToProps(state) {
    const {  } = state.categoryReducer;

    return {

    }
}

export default connect(mapStateToProps, actions) (Category);
