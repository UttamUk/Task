import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
// import { UserListAction} from '../../Store/Actions/SpaceAction';
import { connect } from 'react-redux';
import List from '../../Components/List/List';
import FilterCmp from '../../Components/FilterCmp/FilterCmp';
import { SpaceListAction, FilterAction } from '../../Store/Actions/SpaceAction';

class Dashboard extends Component {
    state = {
        isLoading: false,
        land_success: undefined,
        launch_success: undefined,
        launch_year: undefined,
        years: [
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
        ],
        isSuccessful: [true, false],
        errMsg: "",
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        this.props.SpaceListAction();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.SpaceReducer.spaceList === undefined && this.props.SpaceReducer.spaceList?.length > 0) {
            this.setState({
                isLoading: false
            });
        }
    }

    // TO GET YEAR FROM THE FILTER
    getYear = (year) => {
        const { land_success, launch_year, launch_success } = this.state;
        if (launch_year === year) {
            this.setState({
                launch_year: undefined,
                isLoading: true
            });
            const body = {
                launch_success: launch_success,
                land_success: land_success,
                launch_year: undefined
            }
            this.props.FilterAction(body);
            return;
        } else {
            this.setState({
                ...this.state.years,
                launch_year: year,
                isLoading: true
            });
            const body = {
                launch_success: launch_success,
                land_success: land_success,
                launch_year: year,
            }
            this.props.FilterAction(body);
        }
    }

    // TO GET LAUNCH VALUE
    getLaunch = (val) => {
        const { land_success, launch_year, launch_success } = this.state;
        if (launch_success === val) {
            this.setState({
                launch_success: undefined,
                isLoading: true
            });
            const body = {
                launch_success: undefined,
                land_success: land_success,
                launch_year: launch_year,
            }
            this.props.FilterAction(body);
            return;
        } else {
            this.setState({
                launch_success: val,
                isLoading: true
            });
            const body = {
                launch_success: val,
                land_success: land_success,
                launch_year: launch_year,
            }
            this.props.FilterAction(body);
        }
    }

    getLand = (val) => {
        const { land_success, launch_year, launch_success } = this.state;
        if (land_success === val) {
            this.setState({
                land_success: undefined,
                isLoading: true
            });
            const body = {
                launch_success: launch_success,
                land_success: undefined,
                launch_year: launch_year,
            }
            this.props.FilterAction(body);
            return;
        } else {
            this.setState({
                land_success: val,
                isLoading: true
            });
            const body = {
                launch_success: launch_success,
                land_success: val,
                launch_year: launch_year,
            }
            this.props.FilterAction(body);
        }
    }


    render() {
        const list = this.props.SpaceReducer.spaceList;
        const { isLoading, errMsg, years, isSuccessful,
            launch_year, land_success, launch_success } = this.state;
        return (
            <Aux>
                {errMsg ? <div className="toastr">{errMsg}</div> : (null)}
                {/* SIDE BAR  */}
                <FilterCmp
                    years={years}
                    isSuccessful={isSuccessful}
                    launch_year={launch_year}
                    land_success={land_success}
                    launch_success={launch_success}
                    getYear={this.getYear}
                    getLaunch={this.getLaunch}
                    getLand={this.getLand}
                />
                {/* LIST OF ITEMS */}
                <List
                    isLoading={isLoading}
                    list={list}
                />
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    const { SpaceReducer } = state;
    return {
        SpaceReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        SpaceListAction: () => dispatch(SpaceListAction()),
        FilterAction: (body) => dispatch(FilterAction(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
