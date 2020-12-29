import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.less';

export interface HeaderProps{

    /**是否已经登录 */
    isLogin:boolean;

    iShowMenu:boolean;

    setToggleMenu:()=>void;

}


export const Header:React.FC<HeaderProps> = (props)=>{
    const { isLogin } = props;
    return(
        <div className={styles.header}>
            <NavLink to="/" activeClassName={styles.active} className={`${styles.logo} color-green`} >
                B<span className="color-black font-20">est</span>
            </NavLink>
            <div className={`${styles['nav-list']} sm-hide`}>
                <NavLink to="/" activeClassName={styles.active} >首页</NavLink>
                <NavLink to="/search" activeClassName={styles.active} >搜索</NavLink>
                <NavLink to="/about" activeClassName={styles.active} >关于</NavLink>
                <NavLink to="/message" activeClassName={styles.active} >留言</NavLink>
                <NavLink to={isLogin ? '/admin/home' : '/admin/signin'} activeClassName={styles.active} >{isLogin ? '管理' : '登录'}</NavLink>
            </div>
            <div className={`${styles['menu-btn']} md-hide`}>
                <a
                    onClick={props.setToggleMenu}
                    className={props.iShowMenu ? 'icon-reorder on' : 'icon-reorder' }
                />
            </div>
        </div>
    )
}
