const UsersItem = ({firstName, lastName, prepareData}) => {
    return <li onClick={prepareData}>{firstName} {lastName}</li>
}

export default UsersItem;