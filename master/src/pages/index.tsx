import React, {FC } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { CommonModelState } from '@/models/common';


interface FCProps extends ConnectProps{
    common:CommonModelState;
}
const Container:FC<FCProps> =  ({common, dispatch})=>{
    return (
        <div className={ styles.container }>
        </div>
    );
}
export default connect((state:{common:CommonModelState})=>({common:state.common}))(Container);
