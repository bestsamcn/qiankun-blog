import React from 'react';
import styles from './styles.less';

const Toast = ({msg}:{msg?:string})=>(
    <div className={`animated ${styles.toast}`}>
        { msg }
    </div>
)
export default Toast;
