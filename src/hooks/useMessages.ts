import React, { useEffect, useState } from 'react';
import store from '../store';
import { message } from '../store/messages';
import {AddMessages, DeleteMessage, UpdateMessage} from '../store/messages/actionFuncs';

export default () => {
    const [messages, setMessages] = useState() as Array<any>;
    const getMessages = () => {
        setMessages(() => store.getState().messageReducer.datas as message[]);
    }
    useEffect(() => {
        getMessages();
    }, []);

    function usdate_messages (index: number) {
        messages[index].isRead = true;
        store.dispatch(UpdateMessage(messages));
    }

    return {
        messages,
        usdate_messages
    };
}
