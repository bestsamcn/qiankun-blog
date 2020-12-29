import React from 'react';
import styles from './styles.less';

const Loading = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <div className="loading" style={ { display: isLoading ? 'block' : 'none' } }>
            <div className="loadMask"></div>
            <div className="loadEffect">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Loading;
