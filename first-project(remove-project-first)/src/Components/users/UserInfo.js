import Avatar from './avatar';
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
              {props.user.name}
            </div>
          </div>
    )
}
export default UserInfo ;