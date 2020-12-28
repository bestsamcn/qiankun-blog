/*
 * @Description:common
 * @Author: Sam
 * @Date: 2020-12-28 21:03:34
 * @LastEditTime: 2020-12-28 22:34:51
 * @LastEditors: Sam
 */
import { Model } from 'dva';


export interface CommonModelState {
    token: string;
    isLogin: boolean;
    isLoading: false;
    isMobile: false;
    msg: string;
    clientHeight: number;
    iShowMenu: boolean;
    hotWord: {
        isFromHotWord: boolean,
        name: string
    },
    hotWordList: [];
    articleParams: {
        category: string,
        tag: string,
        isFromHome: boolean
    }
}

export interface CommonModel extends Omit<Model, 'reducers'> {
    state: CommonModelState;
    reducers:{
        [key:string]:ReducersMapObject
    }
}

const common: CommonModel = {
    namespace: 'common',
    state: {
        token: '',
        isLogin: false,
        isLoading: false,
        isMobile: false,
        msg: '',
        clientHeight: 0,
        iShowMenu: false,
        hotWord: {
            isFromHotWord: false,
            name: ''
        },
        hotWordList: [],
        articleParams: { category: "前端", tag: "", isFromHome: true }
    },


    effects:{

        /**设置菜单 */
        *setToggleMenu({params}, {call, put, select}){
            yield put({type:'setState', payload:{iShowMenu:params.iShowMenu}});
        },
    },


    reducers:{
        setState(state, action){
            return {
                ...state,
                ...action.payload
            }
        }
    }


}

export default common;
