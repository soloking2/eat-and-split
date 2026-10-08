import { useState } from "react"
import Button from "./Button"

export default function FormAddFriend({onAddFriend}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function addFriend(e) {
        e.preventDefault();

        if(!name || !image) return;
        const id = crypto.randomUUID()
        const friend = {
            name,
            image: `${image}?u=${id}`,
            balance: 0,
            id
        }
        onAddFriend(friend)
        setName("");
        setImage("https://i.pravatar.cc/48");
    }
    return (
      <form className="form-add-friend" onSubmit={addFriend}>
        <label htmlFor="friend-name">👯 Friend name</label>
        <input
          id="friend-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="image-url">🎇Image URL</label>
        <input
          id="image-url"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button text="Add" />
      </form>
    );
}