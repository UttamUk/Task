import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import UserData from '../../Components/UserData/UserData';
import UserTable from '../../Components/UserData/UserTable';
import { UserListAction, AddContactAction, UpdateContactAction, DeleteContactAction } from '../../Store/Actions/UserAction';
import { connect } from 'react-redux';
import Chat from '../Chat/Chat';
const $ = window.$;

class Dashboard extends Component {
    state = {
        name: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        color: "yellow",
        company: "",
        id: "",
        checkList: [],
        singleUserData: undefined,
        isOpen: false,
        chatId: "",
    }

    componentDidMount() {
        this.props.UserListAction();
    }

    signleUser = (data) => {
        this.setState({
            singleUserData: data,
            chatId: data.id,
        })
    }

    handleCheck = (event, id) => {
        const checked = event.target.checked;
        if (checked) {
            this.setState({
                checkList: [...this.state.checkList, id]
            });
        } else {
            const newValues = this.state.checkList.filter(res => res !== id);
            this.setState({
                checkList: newValues
            });
        }
    }

    deleteContacts = () => {
        this.props.DeleteContactAction(this.state.checkList);
        this.setState({
            singleUserData: undefined,
            chatId: ""
        })
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addContact = (event) => {
        event.preventDefault();
        const { email, firstName, lastName, company, gender, id, isOpen } = this.state;
        const list = this.props.UserReducer.userList;
        if (email && firstName && lastName && company && gender) {
            if (!isOpen) {
                const body = {
                    id: list[list.length - 1] && list[list.length - 1].id + 1,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    gender: gender,
                    color: "#e89b65",
                    company: company
                };
                this.props.AddContactAction(body)
            } else {
                const body = {
                    id: id,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    gender: gender,
                    color: "#e89b65",
                    company: company
                };
                console.log(body);
                this.props.UpdateContactAction(body)
            }
        } else {
            console.log("sdad");
        }
    }

    clearForm = () => {
        this.setState({
            email: "",
            firstName: "",
            lastName: "",
            gender: "",
            color: "yellow",
            company: "",
        })
    }

    openModel = (item) => {
        $('#add').modal("show");
        this.setState({
            id: item.id,
            email: item.email,
            firstName: item.first_name,
            lastName: item.last_name,
            gender: item.gender,
            company: item.company,
            isOpen: true,
        })
    }

    // TO OPEN CHAT BOX
    openbot = (val) => {
        $('#bot').addClass('botactive');
        $('#chat-id').addClass('chatshow');
        this.setState({
            bot: !this.state.bot,
            chatId: val
        })
    }

    render() {
        const list = this.props.UserReducer.userList;
        const LoginUserId = this.props.UserReducer.LoginUserId;
        const listData = this.props.UserReducer.userList.filter(item => item.id !== LoginUserId);
        const { singleUserData, email, firstName,
            lastName, company, gender, isOpen, chatId } = this.state;
        const inpValues = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            company: company,
        }
        return (
            <Aux>
                <div className="row m-0 mb-2">
                    <div className="col-md-12">
                        <div className="menu-sort">
                            <div className="contact-info">
                                <div className="contact-img">
                                    <i className="fas fa-address-book" />
                                </div>
                                <div className="contact-content">
                                    <h2 className="contact-title">Contacts</h2>
                                    <p className="contact-subtitle">Welcome to FlatCRM contact Page</p>
                                </div>
                            </div>
                            <div className="sort">
                                <span>Sort By:</span>
                                <select className="sort-select">
                                    <option>Created Date</option>
                                    <option>Name</option>
                                    <option>Company</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="display">
                    <div className="row m-0">
                        <div className="col-md-7">
                            <div className="form-group row contact">
                                <div className="col-sm-7 mb-2">
                                    <div className="search-contact">
                                        <input type="text" className="form-control" placeholder="Search Contact" />
                                        <span className="search-icon"><i className="fas fa-search" /></span>
                                    </div>
                                </div>
                                <div className="col-sm-5 mb-2">
                                    <button type="button" className="btn btn-add" data-toggle="modal" data-target="#add" onClick={this.clearForm}>+ Add
                                        Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-7">
                            <UserTable
                                list={listData || list}
                                inpValues={inpValues}
                                isOpen={isOpen}
                                chatId={chatId}
                                LoginUserId={LoginUserId}
                                handleCheck={this.handleCheck}
                                signleUser={this.signleUser}
                                handleChange={this.handleChange}
                                addContact={this.addContact}
                                openModel={this.openModel}
                                deleteContacts={this.deleteContacts}
                                openbot={this.openbot}
                            />
                        </div>
                        <div className="col-md-5">
                            {singleUserData
                                ? <UserData singleUserData={singleUserData} />
                                : null}
                        </div>
                    </div>
                </div>

                <Chat chatId={chatId} />
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    const { UserReducer, LoginUserId } = state;
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        UserListAction: () => dispatch(UserListAction()),
        AddContactAction: (body) => dispatch(AddContactAction(body)),
        UpdateContactAction: (body) => dispatch(UpdateContactAction(body)),
        DeleteContactAction: (body) => dispatch(DeleteContactAction(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
