import React, {PureComponent} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {BackTop} from './style'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
}from './style'

class Home extends PureComponent {
    handleBackTop(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img  alt="" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4607/2836fb00d1d98798ffe218fc709ec80d30b18c0e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.scrollShow ? <BackTop onClick={this.handleBackTop}>回到顶部</BackTop> : ''
                }
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.getHomeData()
        this.bindEvent()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState = (state) =>({
    scrollShow:state.getIn(['home','scrollShow'])
})

const mapDispatch =(dispatch) =>({
    getHomeData(){
        dispatch(actionCreators.getData())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.toggleScrollShow(true))
        }else{
            dispatch(actionCreators.toggleScrollShow(false))
        }
    }
})
 export default connect(mapState,mapDispatch)(Home)