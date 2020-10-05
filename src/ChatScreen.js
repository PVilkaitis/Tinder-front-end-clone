import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
    {
        name: 'Icecube',
        image: 'https://www.antiwarsongs.org/img/art/13732.jpg',
        message: 'Sup!'
    },
    {
        name: 'Icecube',
        image: 'https://www.antiwarsongs.org/img/art/13732.jpg',
        message: 'How are you?'
    },
    {
        message: 'Hello, fantastic!'
    }
])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="matchAlert">YOU MATCHED WITH ICECUBE ON 09/22/20</p>
            {messages.map(message => (
                message.name ? (
               <div className="chatScreen_message">
                   <Avatar 
                        className="chatScreen_message"
                        alt={message.name}
                        src={message.image}
                   />
                   <p className="chatScreen_text">{message.message}</p>
               </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            ))}

            <div>
                <form className="chatscreen_input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatscreen_inputField" 
                    placeholder="Type a message..." type="text" />
                    <button 
                    onClick={handleSend}
                    type="submit" 
                    className="chatscreen_inputSend">SEND</button>
                </form>
            </div>

        </div>
    )
}

export default ChatScreen
