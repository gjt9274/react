import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators}  from './store'
import { actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfroSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'

class Header extends Component{
     getListArea = () => {
         const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage}  = this.props;
         const newList = list.toJS();
         const pageList = [];
        for (let i =(page*10);i<(page+1)*10;i++) {
            if(newList[i])pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
         
        if(focused || mouseIn){
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
                >
                <SearchInfoTitle>
                热门搜索
                <SearchInfroSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                <span ref={(icon)=>{this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
                    换一批
                </SearchInfroSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                   {pageList} 
                </SearchInfoList>
            </SearchInfo>
            )
        }
        return null;
    
    }
   render(){
       const {focused,handleInputFocus,handleInputBlur,login,logOut} = this.props
    return (
        <HeaderWrapper>
             <Link to="/">
                <Logo />
             </Link>
            <Nav>
                <NavItem className = 'left active'>首页</NavItem>
                <NavItem className = 'left'>下载App</NavItem>
                
                {
                    login? <NavItem onClick={logOut} className = 'right'>退出</NavItem> :
                    <Link to="/login"> <NavItem className = 'right'>登录</NavItem></Link>
                }
                
                <NavItem className = 'right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <NavSearch
                        className = {focused?'focused':''}
                        onFocus = {handleInputFocus}
                        onBlur = {handleInputBlur}
                    >
                    </NavSearch>
                    <span className= {focused?'focused iconfont zoom':'iconfont zoom'}> &#xe614;</span>
                    {this.getListArea()}
                </SearchWrapper> 
            </Nav>
            <Addition>
                <Link to='/write'>
                    <Button className='writing'>
                        <span className="iconfont">&#xe68f;</span>
                        写文章
                    </Button>
                </Link>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
       )
   } 
}

const mapStateToProps = (state) => {
    return {    
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus())
        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },

        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },

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
            
        },
        logOut() {
            dispatch(loginActionCreators.logOut())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);