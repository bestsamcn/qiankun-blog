import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.less';
import { CommonModelState } from '../models/common';

interface FCProps extends ConnectProps{
    common:CommonModelState;
}
export const Footer = ()=>{
    return (
        <div className={`${styles.footer} margin-top-20`}>
            <div className={styles.webmap}>
                <Link to="/">首页</Link>
                <Link to="">搜索</Link>
                <Link to="">关于</Link>
                <Link to="">留言</Link>
            </div>
            <div className={styles.copyright}>
                copyright@2017 bestsamcn
            </div>
        </div>
    )
}
