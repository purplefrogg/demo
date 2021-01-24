import { connect } from 'react-redux';
import { followAC, setCurentPageAC, setUsersAC, unfollowAC, setTotalCountAC} from '../../../redux/users-Reducer';
import Users from './UsersPage';

let mapStateToProps = (state) => {
	return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
        count: state.usersPage.count,
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurentPage: (page) => {
            dispatch(setCurentPageAC(page));
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count));
        }
    }
}
let UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersConteiner;
