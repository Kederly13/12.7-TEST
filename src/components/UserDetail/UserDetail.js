const UsersDetail = props => {
    return (
        <div className="user-detail">
            <img src={props.userInfo.avatar}></img>
            <h2>{props.userInfo.first_name}</h2>
            <h2>{props.userInfo.last_name}</h2>
        </div>
    )
}

export default UsersDetail;