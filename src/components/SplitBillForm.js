import { useState } from "react";
import Button from "./Button";

export default function SplitBillForm({friend, onSplitBill}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function splitBill(e) {
    e.preventDefault();
    if(!bill || !paidByUser) return;

    //if the user is paying, that means the friend
    //is oweing, so value passed is paidByFriend
    //Else value passed is -paidByUser
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    setBill("");
    setPaidByUser("")

  }

    return (
      <form className="form-split-bill" onSubmit={splitBill}>
        <h2>Split a bill with {friend.name}</h2>
        <label>💰 Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧍‍♂️Your expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value),
            )
          }
        />

        <label>👯 {friend.name}'s expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{friend.name}</option>
        </select>

        <Button text="Split bill" />
      </form>
    );
}