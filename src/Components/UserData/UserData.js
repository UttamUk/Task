import React from 'react';
import Aux from '../../hoc/Aux';

const UserData = (props) => {
    return (
        <Aux>
            <div className="info">
                <div className="info-card">
                    <div className="info-img" style={{ backgroundColor: props.singleUserData.color }}>
                        <h4 className="info-name">{props.singleUserData?.first_name ? props.singleUserData?.first_name[0] + props.singleUserData?.last_name[0] : null}</h4>
                    </div>
                    <h6 className="info-title">{props.singleUserData.first_name + " " + props.singleUserData.last_name}</h6>
                    <p className="info-subtitle">{props.singleUserData.email}</p>
                </div>
                <ul className="info-data">
                    <li>
                        <span> Full Name:</span>
                        <span>{props.singleUserData.first_name + " " + props.singleUserData.last_name}</span>
                    </li>
                    <li>
                        <span>Email:</span>
                        <span>{props.singleUserData.email}</span>
                    </li>
                    <li>
                        <span>Id:</span>
                        <span>{props.singleUserData.id}</span>
                    </li>
                    <li>
                        <span>Company:</span>
                        <span>{props.singleUserData.company}</span>
                    </li>
                    <li>
                        <span>Gender</span>
                        <span>{props.singleUserData.gender}</span>
                    </li>
                </ul>
            </div>

            <div className="info mt-3">

                <div className="contact-info">
                    <div className="contact-img">
                        {/* <i className="fas fa-address-book" /> */}
                        <i className="fas fa-balance-scale"></i>
                    </div>
                    <div className="contact-content">
                        <h6 className="contact-title">Contacts</h6>
                        <p className="contact-subtitle">Date 18 Aug, 2020 </p>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default UserData
