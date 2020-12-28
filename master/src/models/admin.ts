/*
 * @Description:common
 * @Author: Sam
 * @Date: 2020-12-28 21:03:34
 * @LastEditTime: 2020-12-28 21:12:26
 * @LastEditors: Sam
 */
import { Model } from 'dva';



export interface AdminModel extends Model{
    state:{
        isHideSidebar:boolean,
        categoryList:any[],
        tagList:any[],
        isAddArticle:boolean,
        breadCrumb:any[]
    }
}

const common:AdminModel = {
    namespace:'admin',
    state:{
        isHideSidebar:false,
        categoryList:[],
        tagList:[],
        isAddArticle:false,
        breadCrumb:[]
    }
}

export default common;
