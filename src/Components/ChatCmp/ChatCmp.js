import React from 'react';
import Aux from '../../hoc/Aux';

const ChatCmp = (props) => {
    return (
        <Aux>
            <div className="chat-section">
                <div className="info border-right-0">
                    <h2 className="info-title">
                        CHAT
                        <span className="text-white float-right" style={{cursor: "pointer"}} onClick={props.openbot}>X</span>
                    </h2>
                    <div className="chat">
                        <div className="chat-box" id="chatbox">
                            <div className="message-box message-box2">
                                <div className="user-msg">
                                    <div className="media">
                                        {/* <img src="./assets/images/live.png" className="mr-2 chat-img border" alt="no img" /> */}
                                        <div className="chat-img mr-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: props.adminInfo?.color }}>
                                            <h6 className="m-0 text-white">
                                                {props.adminInfo ? props.adminInfo?.first_name[0] + props.adminInfo?.last_name[0] : null}
                                            </h6>
                                        </div>
                                        <div className="media-body chat-left">
                                            <p className="chat-msg">HI, {props.adminInfo?.first_name}</p>
                                            <p className="chat-time text-left">{props.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {props.msgArr.map((res, index) =>
                                <div className="message-box message-box1" key={index}>
                                    <div className="bank-msg">
                                        <div className="media">
                                            <div className="media-body chat-right">
                                                <p className="chat-msg">{res.message}</p>
                                                <p className="chat-time text-right">{res.date}</p>
                                            </div>
                                            {/* <img src="./assets/images/user.png" className="ml-2 chat-img border" alt="no img" /> */}
                                            <div className="chat-img ml-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: res?.color }}>
                                                <h6 className="m-0 text-white">
                                                    {res.name}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                        <form className="chat-form" onSubmit={props.send} autoComplete="off" id="chatform">
                            <div className="form-group position-relative">
                                <button type="button" className="chat-icon icon1">
                                    <i className="fas fa-paperclip" />
                                </button>
                                <input
                                    type="text"
                                    className="chat-inp"
                                    name="message"
                                    onChange={props.changeMsg}
                                    placeholder="Type Your Message"
                                />

                                <button type="submit" className="chat-icon icon2">
                                    {/* <i className="fas fa-microphone" /> */}
                                    <i className="fas fa-paper-plane" style={{ transform: "rotate(45deg)" }}></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default ChatCmp
