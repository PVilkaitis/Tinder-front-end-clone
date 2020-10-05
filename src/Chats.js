
import React from 'react'
import './Chats.css'
import Chat from "./Chat";

function Chats() {
    return (
        <div className="Chats">
            <Chat 
                name="Icecube"
                message="Sup?"
                timestamp="41 minutes ago"
                profilePic="https://www.antiwarsongs.org/img/art/13732.jpg"
            />
        </div>
    )
}

export default Chats
