import { useState, useEffect } from 'react';
import io from '../../../server/socket';

const [messages, setMessages] = useState([]) as any;

io.on("msg", (chunk) => {
    console.log(chunk);
    setMessages([...messages, chunk]);
});

export default messages