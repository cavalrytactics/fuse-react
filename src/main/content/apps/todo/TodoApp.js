import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TodoList from './TodoList';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import {FusePageCarded} from '@fuse';
import TodoToolbar from './TodoToolbar';
import TodoHeader from './TodoHeader';
import TodoSidebarHeader from './TodoSidebarHeader';
import TodoSidebarContent from './TodoSidebarContent';
import TodoDialog from './TodoDialog';
import _ from '@lodash';

class TodoApp extends Component {

    componentDidMount()
    {
        this.props.getData(this.props.match);
    }

    componentDidUpdate(prevProps, prevState)
    {
        if ( !_.isEqual(this.props.location, prevProps.location) )
        {
            this.props.getTodos(this.props.match);
        }
    }

    render()
    {
        return (
            <React.Fragment>
                <FusePageCarded
                    classes={{
                        root  : "w-full",
                        header : "items-center min-h-72 h-72 sm:h-136 sm:min-h-136"
                    }}
                    header={
                        <TodoHeader pageLayout={() => this.pageLayout}/>
                    }
                    contentToolbar={
                        <TodoToolbar/>
                    }
                    content={
                        <TodoList/>
                    }
                    leftSidebarHeader={
                        <TodoSidebarHeader/>
                    }
                    leftSidebarContent={
                        <TodoSidebarContent/>
                    }
                    onRef={instance => {
                        this.pageLayout = instance;
                    }}
                    innerScroll
                />
                <TodoDialog/>
            </React.Fragment>
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData : Actions.getData,
        getTodos: Actions.getTodos
    }, dispatch);
}

function mapStateToProps({todoApp})
{
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoApp));
