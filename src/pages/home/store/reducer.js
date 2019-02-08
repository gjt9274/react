import { fromJS } from 'immutable'
import * as constants from './actionTypes.js'

const defaultState = fromJS({
   topicList:[],
   article_page:1,
   articleList:[],
    recommendList:[ ],
    author_page:0,
    author_totalPage:1,
    authorList:[],
    scrollShow:false
});

const getHomeData = (state,action) =>{
    return state.merge({
        topicList:action.topicList,
        articleList:action.articleList,
        recommendList:action.recommendList,
        authorList:action.authorList,
        author_totalPage:action.totalPage
    })
}

const getMoreArticle = (state,action) => {
    return state.merge({
        articleList:state.get('articleList').concat(action.list),
        article_page:action.nextPage
    })
}

const reducer =  (state = defaultState, action) => {
    switch(action.type){
        case constants.GET_HOME_DATA:
            return getHomeData(state,action)
        case constants.GET_MORE_ARTICLE:
            return getMoreArticle(state,action)
        case constants.CHANGE_PAGE:
            return state.set('author_page',action.page);
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('scrollShow',action.show)
        default:
            return state;
    }
}
export default reducer