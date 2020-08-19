import React from 'react'
import Aux from '../../hoc/Aux';

const UserTable = (props) => {
    return (
        <Aux>
            <div className="table-responsive mb-4">
                <table className="table table-data mb-0">
                    <thead>
                        <tr>
                            <th scope="col">
                                <button className="btn-th" onClick={props.deleteContacts}>
                                    <i className="fas fa-trash small"></i>
                                </button>
                            </th>
                            <th scope="col">Basic Info</th>
                            <th scope="col">Company</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((item) => <tr key={item.id} className={`${item.id === props.chatId ? 'tr-active' : ''}`}>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name="check" onChange={(event) => props.handleCheck(event, item.id)} className="custom-control-input" id={item.id} />
                                    <label className="custom-control-label mt-1" htmlFor={item.id}>
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="basic-info" onClick={() => props.signleUser(item)}>
                                    <div className="basic-img" style={{ backgroundColor: item.color }}>
                                        <p className="basic-name">{item.first_name[0] + item.last_name[0]}</p>
                                    </div>
                                    <div className="basic-content">
                                        <h6 className="basic-title">{item.first_name + " " + item.last_name}</h6>
                                        <p className="basic-subtitle">{item.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{item.company}</td>
                            <td>
                                <button className="btn action" onClick={() => props.openModel(item)}>
                                    <i className="fas fa-pen" />
                                </button>
                                {(props.LoginUserId.length !==0) ?
                                <button className="btn action" onClick={() =>props.openbot(item.id)}>
                                    <i className="fas fa-comment-dots" />
                                </button>: null}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="add" tabIndex={-1} role="dialog" aria-labelledby="addLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addLabel">{props.isOpen ? "Update Contact Details" : "Add Contact"}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={props.addContact} id="contact">
                                <div className="form-row">
                                    <div className="col-md mb-3">
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            onChange={props.handleChange}
                                            defaultValue={props.inpValues.firstName}
                                            className="form-control" required />

                                    </div>
                                    <div className="col-md mb-3">
                                        <label>Last name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            onChange={props.handleChange}
                                            defaultValue={props.inpValues.lastName}
                                            className="form-control" required />
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={props.handleChange}
                                        defaultValue={props.inpValues.email}
                                        className="form-control" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        onChange={props.handleChange}
                                        defaultValue={props.inpValues.company}
                                        className="form-control" required />
                                </div>

                                <div className="form-group mb-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio"
                                            onChange={props.handleChange}
                                            id="gender1" name="gender"
                                            value="Male"
                                            className="custom-control-input" required />
                                        <label className="custom-control-label" htmlFor="gender1">Male</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio"
                                            onChange={props.handleChange}
                                            id="gender2" name="gender"
                                            value="Female"
                                            className="custom-control-input" required />
                                        <label className="custom-control-label" htmlFor="gender2">Female</label>
                                    </div>
                                </div>

                                <div className="w-100 text-center">
                                    <button type="button" className="btn btn-secondary mx-1" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary mx-1">Submit</button>
                                </div>
                            </form>
                        </div>
                        {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
          </div> */}
                    </div>
                </div>
            </div>

        </Aux>
    )
}

export default UserTable;
