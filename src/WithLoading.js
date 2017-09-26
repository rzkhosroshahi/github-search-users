import React from 'react';
import Loading from './component/Loading';

function withLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if(!isLoading) return (<Component {...props} />);
        return (<Loading/>)
    }
}
export default withLoading