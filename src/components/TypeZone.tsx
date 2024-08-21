import React from 'react'

type ChangeEventHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

interface Handlers {
    handleChange: ChangeEventHandler;
    handleSend: () => void;
    message: string;
}

const TypeZone: React.FC<Handlers> = ( { handleChange, handleSend, message} ) => {
  return (
    <div className="typezone">
            <textarea value={message} onChange={handleChange} placeholder='Say Something... '/>
            <button className="sendMsg" onClick={handleSend} />
    </div>
  )
}


export default TypeZone