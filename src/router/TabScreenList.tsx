import React from 'react';
import { Stack, Tab } from '.';
import  { TabObj } from './TabScreen'

export  function TabScreenList(list: TabObj[])  {
    return (
        list.map((it, index) => {
            return (
                <Stack.Screen component={it.comp} name={it.name} 
                listeners={it.listeners} key={index} 
                options={it.options} />
            )
        })
    )
}

export default function TabNavigator(list: TabObj[]) {
    return TabScreenList(list);
}