import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {
    AdsWrapper,
    AdsContent,
    WriterWrapper,
    WriterTitle,
    WriterList,
    WriterItem,
    WriterInfo
}from '../style'

class Writer extends PureComponent {
    getListArea = () => {
        const {list,page} =  this.props;
        const newList = list.toJS();
        const pageList = [];
       if(newList.length){
           for(let i = (page*5); i < (page+1)*5 ;i++ ) {
               pageList.push(
                <WriterItem key={newList[i].id}>
                    <img className="authorPic" alt="" src={newList[i].avatar_source} />
                    <WriterInfo>
                        <span className="guanzhu">+关注</span>
                        <h3 className="authorName">{newList[i].nickname}</h3>
                        <p className="authorDesc">写了 {newList[i].total_wordage} 字・{newList[i].total_likes_count} 喜欢</p>
                    </WriterInfo>
                </WriterItem>
               )
           }
       }
        return pageList
    }
    render() {
        const {page,totalPage,handleChangePage} = this.props
        return (
            <div>
                <AdsWrapper>
                    <img className="adsPic" alt="" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                    <AdsContent>
                        <h3 className="adsTitle">下载简书手机App ></h3>
                        <p className="adsDesc">随时随地发现和创造内容</p>
                    </AdsContent>
                </AdsWrapper>
                <WriterWrapper>
                <WriterTitle>
                    <h3 className='title'>推荐作者</h3>
                    <p className='switch' onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                        <span ref={(icon)=>{this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
                        换一换
                    </p>
                </WriterTitle>
                <WriterList>
                  {
                    this.getListArea()
                  }  
                
                </WriterList>
            </WriterWrapper>
            </div>
        )
    }

 }
const mapState = (state) => ({
    list:state.getIn(['home','authorList']),
    page:state.getIn(['home','author_page']),
    totalPage:state.getIn(['home','author_totalPage'])
})
const mapDispatch =(dispatch) =>({
    handleChangePage(page,totalPage,spin){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig,' ');
        if(originAngle){
            originAngle = parseInt(originAngle,10);
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
        if(page<totalPage){
            dispatch(actionCreators.changePage(page+1))
        }else{
            dispatch(actionCreators.changePage(0))
        }
    }
})
 export default connect(mapState,mapDispatch)(Writer)