import {useEffect, useState} from 'react';
import store from '../store';
import {addAddr, deleteAddr, editAddr, changeDefault} from '../store/addr/actionFuc';
import {addr} from '../types';

export default function useAddr() {
    const get_addr = () => {
        setAddr(() => store.getState().addrReducer);
    }
    const [addr, setAddr] = useState([]) as any[]
    useEffect(() => {
        get_addr();
      return () => {
        
      }
    }, []);

    const add_addr = (newAddr: addr) => {
        store.dispatch(addAddr(newAddr));
        get_addr();
    }

    const delete_addr = (index: number) => {
        store.dispatch(deleteAddr(index));
        get_addr();
    }

    const edit_addr  =(changeOne: addr) => {
        store.dispatch(editAddr(changeOne));
        get_addr();
    }

    const setDefault = (index: number) => {
        store.dispatch(changeDefault(index));
        get_addr();
    }

    return {addr,add_addr,delete_addr,edit_addr, setDefault
    };
}