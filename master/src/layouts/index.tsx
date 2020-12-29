import React, { FC } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { Header, Footer } from '../components/layouts';
import { CommonModelState } from '@/models/common';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Toast from '../components/common/toast/Toast';

interface FCProps extends ConnectProps{
    common:CommonModelState;
}
const BasicLayout:FC<FCProps> = ({common, dispatch, children}) => {
    const {isLogin, iShowMenu, msg} = common;
    const setToggleMenu = ()=>{
        dispatch({type:'common/setState', payload:{iShowMenu:!iShowMenu}});
    }
    return (
        <ConfigProvider  locale={zhCN}>
            <div className={styles.layout}>
                <ReactCSSTransitionGroup transitionName={{ enter:'fadeIn', leave:'fadeOut' }} transitionEnterTimeout={400} transitionLeaveTimeout={700}>
                    {
                        !!msg && <Toast msg={msg} />
                    }
                </ReactCSSTransitionGroup>
                <Header isLogin iShowMenu setToggleMenu={setToggleMenu}/>
                <div className="router-view">
                    {children}
                </div>
                <Footer/>
            </div>

        </ConfigProvider>
    );
};

export default connect((state:{common:CommonModelState})=>({common:state.common}))(BasicLayout)
