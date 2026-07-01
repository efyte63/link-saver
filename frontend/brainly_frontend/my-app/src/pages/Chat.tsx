import Chatsidenavigation from '../component/Chatsidenavigation'
import Chatbox from '../component/Chatbox'
import { messageStore } from '../store/message'

const Chat = () => {
  const { selecteduser } = messageStore();

  return (
    <div className='flex h-screen w-full overflow-hidden'>

      <div className={`${selecteduser ? "hidden" : "flex"} md:flex w-full md:w-auto shrink-0 h-full`}>
        <Chatsidenavigation/>
      </div>

      <div className={`${selecteduser ? "flex" : "hidden"} md:flex flex-1 min-w-0 h-full`}>
        <Chatbox/>
      </div>

    </div>
  )
}

export default Chat
