import React, {PureComponent} from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {Link } from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    LoadMore
}from '../style'
class List extends PureComponent {
    render() {
        const { list,page,getMoreList } = this.props;
        return (
            <div>
              {  
                  list.map((item,index) => (    
                      <Link  key={index}  to={'/detail/'+item.get('id')}>
                        <ListItem>
                            <img className="listPic" src={item.get('image')} alt=""/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="dsc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                        </Link>
                   )
                 )
              }
              <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
            </div>
            
        )
    }
 }
const mapState = (state) => ({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','article_page'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
 export default connect(mapState,mapDispatch)(List);