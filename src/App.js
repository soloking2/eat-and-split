import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddForm() {
    setShowAddFriendForm((form) => !form);
  }

  function onAddFriend(friend) {
    setFriendList((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(curFriend => curFriend?.id === friend.id ? null : friend);
    setShowAddFriendForm(false);
  }

  function handleSplitBill(billToBeResolved) {
    setFriendList((friends) => friends.map(friend => (friend.id === selectedFriend.id ? {...friend, balance: friend.balance + billToBeResolved} : friend)))
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friendList}
          onSelectFriend={handleSelectedFriend}
        selectedFriend={selectedFriend}
        />
        {showAddFriendForm && <FormAddFriend onAddFriend={onAddFriend} />}

        <Button
          text={showAddFriendForm ? "Close" : "Add Friend"}
          onClick={handleShowAddForm}
        />
      </div>
      {selectedFriend && <SplitBillForm friend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend?.id}/>}
    </div>
  );
}

export default App;
