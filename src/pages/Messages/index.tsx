import React from 'react';
import { connect } from 'react-redux';
import { AddMessages, DeleteMessage, SetIsloading, UpdateMessage } from '../../store/messages/actionFuncs';
import { action, state } from '../../types';
import Ui, {IState, IDispatch} from './ui';
import { getMessages } from '../../server/message';
import store from '../../store';

export default function Message({ navigation, route }) {
    const mapState2Props = (state: state):IState => {
        return {
            navigation,
            route,
            messages: state.messageReducer.datas,
            un_read: state.messageReducer.newMessageCount
        }
    }
    const mapDispatch2Props = (dispatch: (action: action<any>)=> void): IDispatch => {
        return {
            usdate_messages: ( messages: any[], index: number)=> {
                const newMsg = messages.map((it, i) => ({
                    ...it,
                    isRead: it.isRead || index == i
                }))
                dispatch(UpdateMessage(newMsg));
            },
            fetch_messages: async()=> {
                const res = await getMessages();
                console.log(res, 888)
                // dispatch(AddMessages(res))
                dispatch(UpdateMessage(res));
                console.log(store.getState().messageReducer.newMessageCount, 990)
            }
        }
    }
    const Show = connect(mapState2Props, mapDispatch2Props)(Ui);
    return (
        <Show />
  )
}
