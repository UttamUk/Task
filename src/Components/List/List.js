import React from 'react'

const List = (props) => {
    return (
        <div className="container">
            {props.isLoading ? <div className="lds-dual-ring"></div> : (null)}
            <div className="gridboxes">
                {props.list?.length > 0
                    ? props.list.map((item, index) => <div className="gridbox" key={index}>
                        <div className="box-img">
                            {/* <img src={item.links.mission_patch} alt=" no image" /> */}
                            <img src={item.links.flickr_images?.length > 0 ? item.links.flickr_images[0] : "./images/img.png" } alt=" flight" />
                        </div>
                        <h6 className="title">{item.mission_name} #{item.flight_number}</h6>
                        <h6 className="title title1">Mission Ids:</h6>
                        <ul className="list">
                            {item.mission_id.map((res, i) => <li className="list-li" key={i}>
                                {res}
                            </li>)}
                        </ul>
                        <p className="name">
                            Lauch Year: <span>{item.launch_year}</span>
                        </p>
                        <p className="name">
                            Successful Lauch : <span>{item.launch_success ? "True" : "False"}</span>
                        </p>
                        <p className="name">
                            Successful Landing: <span>{item.rocket?.first_stage?.cores[0]?.land_success ? "True" : "False"}</span>
                        </p>
                    </div>)
                    : "No data available"}
            </div>
        </div>
    )
}

export default List;
