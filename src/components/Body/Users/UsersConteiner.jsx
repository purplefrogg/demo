import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../../redux/users-Reducer';
import Users from './UsersPage';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
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
        }
    }
}
let UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersConteiner;
