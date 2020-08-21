import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ChatCmp from '../../Components/ChatCmp/ChatCmp';
import { connect } from 'react-redux';
const $ = window.$;

class Chat extends Component {
    state = {
        isBotOpen: false,
        msgArr: [],
        message: "",
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if (nextProps.UserReducer.LoginUserId !== this.props.UserReducer.LoginUserId) {
    //         console.log(nextProps.UserReducer.LoginUserId);     
    //     }
    //     return nextProps.UserReducer.LoginUserId !== this.props.UserReducer.LoginUserId
    // }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.chatId !== this.props.chatId || prevProps.UserReducer.LoginUserId !== this.props.UserReducer.LoginUserId) {
            this.setState({
                msgArr: []
            })
        }
    }

    handleChangeMsg = (event) => {
        event.preventDefault();
        this.setState({
            message: event.target.value
        });
    }

    sendMessage = (event) => {
        event.preventDefault();
        if (this.state.message) {
            // let chatId = this.props.chatId;
            const LoginUserId = this.props.UserReducer.LoginUserId;
            const userInfo = this.props.UserReducer.userList.filter(item => item.id === LoginUserId);
            const userInfoObj = userInfo[0];
            let date = new Date();
            let newDate = date.getHours() + ":" + date.getMinutes();
            let newData = {
                date: newDate,
                color: userInfoObj.color,
                name: userInfoObj?.first_name[0] + userInfoObj?.last_name[0],
                message: this.state.message
            }
            this.setState({
                msgArr: [...this.state.msgArr, newData],
                message: '',
            });
            $("#chatbox").scrollTop($("#chatbox")[0].scrollHeight);
            document.getElementById("chatform").reset();
        }
    }

    time = () => {
        let date = new Date();
        let newDate = date.getHours() + ":" + date.getMinutes();
        return newDate;
    }
    // TO OPEN CHAT BOX
    openbot = () => {
        $('#bot').removeClass('botactive');
        $('#chat-id').removeClass('chatshow');
        // this.setState({
        //     isBotOpen: !this.state.isBotOpen
        // })
    }


    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        const list = this.props.UserReducer.userList;
        const chatId = this.props.chatId;
        const LoginUserId = this.props.UserReducer.LoginUserId;
        const adminInfo = list.filter(item => item.id === chatId);
        const time = new Date().getHours() + ":" + new Date().getMinutes();
        return (
            <Aux>
                <div className="bot">
                    {/* <button className="chat-bot" id="bot" onClick={this.openbot}>
                        <span className="notify-msg"></span>
                        {this.state.isBotOpen
                            ? <span className="close-chat"><i className="fas fa-times"></i></span>
                            : <span className="close-chat"><i className="far fa-comment-alt"></i></span>
                        }
                    </button> */}
                    <div className="bot-box" id="chat-id">
                        <ChatCmp
                            send={this.sendMessage}
                            changeMsg={this.handleChangeMsg}
                            adminInfo={adminInfo[0]}
                            openbot={this.openbot}
                            msgArr={this.state.msgArr}
                            time={time}
                        />
                    </div>
                </div>
                    
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    const { UserReducer, LoginUserId } = state;
    return state;
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

export default connect(mapStateToProps)(Chat);
