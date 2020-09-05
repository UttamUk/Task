import React from 'react'

const FilterCmp = (props) => {
    return (
        <div className="sidebar">
            <h4 className="filter-title">Filters</h4>
            <p className="filter-subtitle">Launch Year</p>
            <hr />
            <ul className="items">
                {props.years.map((item, i) => <li key={i}>
                    <button
                        className={`btn ${props.launch_year === item ? "active" : ""}`}
                        onClick={() => props.getYear(item)}
                    >{item}</button>
                </li>)}
            </ul>
            <p className="filter-subtitle">Successful Launch</p>
            <hr />
            <ul className="items">
                {props.isSuccessful.map((item, i) => <li key={i}>
                    <button
                        className={`btn ${props.launch_success === item ? "active" : ""}`}
                        onClick={() => props.getLaunch(item)}
                    >{item ? "Ture" : "False"}</button>
                </li>)}
            </ul>
            <p className="filter-subtitle">Successful Landing</p>
            <hr />
            <ul className="items">
                {props.isSuccessful.map((item, i) => <li key={i}>
                    <button
                        className={`btn ${props.land_success === item ? "active" : ""}`}
                        onClick={() => props.getLand(item)}
                    >{item ? "Ture" : "False"}</button>
                </li>)}
            </ul>
        </div>
    )
}

export default FilterCmp;
