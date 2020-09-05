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
            "20010",
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
        // if (this.props.SpaceReducer.spaceList?.length === 0) {
        //     this.setState({
        //         isLoading: false
        //     });
        //     return
        // }
        if (prevProps.SpaceReducer.spaceList === undefined && this.props.SpaceReducer.spaceList?.length > 0) {
            this.setState({
                isLoading: false
            });
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return this.props.SpaceReducer.spaceList?.length === undefined
    // }

    // TO GET YEAR FROM THE FILTER
    getYear = (year) => {
        const { land_success, launch_year, launch_success } = this.state;
        if (launch_year === year) {
            this.setState({
                launch_year: undefined
            });
            if (land_success !== undefined && launch_success !== undefined && launch_year === year) {
                this.setState({
                    isLoading: true
                })
                const body = {
                    launch_success: launch_success,
                    land_success: land_success,
                }
                this.props.FilterAction(body);
                return
            }
            return;
        } else {
            this.setState({
                ...this.state.years,
                launch_year: year,
            });
        }
        if (land_success !== undefined && launch_success !== undefined && year) {
            this.setState({
                isLoading: true
            })
            const body = {
                launch_success: launch_success,
                land_success: land_success,
                launch_year: year,
            }
            this.props.FilterAction(body);
            return
        } else if (land_success === undefined && launch_success === undefined) {
            this.setState({
                errMsg: "Please select Landing and Launching"
            });
            setTimeout(() => {
                this.setState({
                    errMsg: ""
                });
            }, 3000);
        }
    }

    // TO GET LAUNCH VALUE
    getLaunch = (val) => {
        const { land_success, launch_year, launch_success } = this.state;
        if (launch_success === val) {
            this.setState({
                launch_success: undefined
            });
            return;
        } else {
            this.setState({
                launch_success: val,
            });
        }
        if (launch_year && land_success === undefined) {
            this.setState({
                errMsg: "Please select Landing"
            });
            setTimeout(() => {
                this.setState({
                    errMsg: ""
                });
            }, 3000);
            return;
        }
        if (land_success !== undefined && launch_year) {
            this.setState({
                isLoading: true
            })
            const body = {
                launch_success: val,
                land_success: land_success,
                launch_year: launch_year,
            }
            this.props.FilterAction(body);
            return;
        } else if (land_success !== undefined) {
            this.setState({
                isLoading: true
            })
            const body = {
                launch_success: val,
                land_success: land_success,
            }
            this.props.FilterAction(body);
            return;
        } else if (!val || val) {
            this.setState({
                isLoading: true
            })
            const body = {
                launch_success: val,
            }
            this.props.FilterAction(body);
            return;
        }
    }

    getLand = (val) => {
        const { land_success, launch_year, launch_success } = this.state;
        if (land_success === val) {
            this.setState({
                land_success: undefined
            });
            if (land_success !== undefined && launch_year === undefined && land_success === val) {
                const body = {
                    launch_success: launch_success,
                }
                this.props.FilterAction(body);
                return
            }
            return;
        } else {
            this.setState({
                land_success: val
            });
        }
        if (launch_success === undefined) {
            this.setState({
                errMsg: "Please select launching"
            });
            setTimeout(() => {
                this.setState({
                    errMsg: ""
                });
            }, 3000);
            return;
        }
        if (launch_success !== undefined && launch_year) {
            const body = {
                launch_success: launch_success,
                land_success: val,
                launch_year: launch_year,
            }
            this.props.FilterAction(body);
            return;
        } else if (launch_success !== undefined) {
            const body = {
                launch_success: launch_success,
                land_success: val,
            }
            this.props.FilterAction(body);
            return;
        }

    }


    render() {
        const list = this.props.SpaceReducer.spaceList;
        const { isLoading, errMsg, years, isSuccessful,
            launch_year, land_success, launch_success } = this.state;
        return (
            <Aux>
                {errMsg ? <div className="toastr">{errMsg}</div> : (null)}
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
