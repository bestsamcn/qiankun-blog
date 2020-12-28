import React, {FC } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Header } from '../components/layouts/header/Header';
import { CommonModelState } from '../models/common';


interface FCProps extends ConnectProps{
    common:CommonModelState;
}
const Container:FC<FCProps> =  ({common, dispatch})=>{
    const {isLogin, iShowMenu} = common;
    const setToggleMenu = ()=>{
        dispatch({type:'common/setState', payload:{iShowMenu:!iShowMenu}});
    }
    return (
        <div className={ styles.container }>
            <Header setToggleMenu={setToggleMenu} isLogin iShowMenu />
        </div>
    );
}
export default connect((state:{common:CommonModelState})=>({common:state.common}))(Container);
