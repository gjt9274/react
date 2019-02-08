import {fromJS} from 'immutable'
import axios from 'axios'
import * as  constants from './actionTypes.js'


const changeData = (data) =>({
    type:constants.GET_HOME_DATA,
    topicList:fromJS(data.topicList),
    articleList:fromJS(data.articleList),
    recommendList:fromJS(data.recommendList),
    authorList:fromJS(data.authorList),
    totalPage:fromJS(Math.ceil(data.authorList.length / 5)-1)
})
const changeHomeData = (list,nextPage) =>({
    type:constants.GET_MORE_ARTICLE,
    list:fromJS(list),
    nextPage
})


export const  getData = () =>{
    return (dispatch) => {
        axios.get('/api/home.json?').then((res)=>{
            const homeData = res.data.data;
            dispatch(changeData(homeData))
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export const changePage = (page)=>({
    type:constants.CHANGE_PAGE,
    page
})

export const getMoreList = (page) => {
    return (dispatch) => [
       axios.get('api/homeList.json?page='+page)
       .then((res)=>{
           const result = res.data.data
           dispatch(changeHomeData(result,page+1))
       })
       .catch((err)=>{
           console.log(err)
       })
    ]
}

export const toggleScrollShow = (show) => ({
    type:constants.TOGGLE_SCROLL_SHOW,
    show
})