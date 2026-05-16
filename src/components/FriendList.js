import Friend from "./Friend";

export default function FriendList({friendList, onSelectFriend, selectedFriend}) {
    return (
        <ul>
            {friendList.map(friend => (<Friend 
            key={friend.name}
            friend={friend}
            onSelectedFriend={onSelectFriend}
            selectedFriend={selectedFriend}
            />))}
        </ul>
    )
}