import React from 'react';
import { Dimensions } from 'react-native';
import LoginBg from '../pictures/login/bg.svg';
import LoginLo from '../pictures/login/logo.svg';
import Home from '../pictures/tabbar/default/home.svg';
import HomeActive from '../pictures/tabbar/active/home.svg';
import Community from '../pictures/tabbar/default/community.svg';
import CommunityActive from '../pictures/tabbar/active/community.svg';
import Me from '../pictures/tabbar/default/me.svg';
import MeActive from '../pictures/tabbar/active/me.svg';
import Shop from '../pictures/tabbar/default/shop.svg';
import ShopActive from '../pictures/tabbar/active/shop.svg';
import Message from '../pictures/tabbar/default/message.svg';
import MessageActive from '../pictures/tabbar/active/message.svg';
import ArrowR from '../pictures/oneserver/arrowR.svg';
import AddF from '../pictures/oneserver/addfile.svg';
import YizhanshiBg from '../pictures/oneserver/bg.svg';
import { ROATE } from '../size';

const TabbarIconStyle = {
    width: ROATE(18),
    height : ROATE(18.73)
}

export function LoginBack() {
  return (
    <LoginBg style={{position: "absolute", left: -1, top: -1}} width={Dimensions.get("screen").width + 2} 
    height={Dimensions.get("screen").height + 2} />
  )
}

export function LoginLogo() {
    return (
        <LoginLo  />
    )
}

export function ShopD() {
    return (
        <Shop style={TabbarIconStyle} />
    )
}


export function ShopA() {
    return (
        <ShopActive style={TabbarIconStyle} />
    )
}

export function MeD() {
    return (
        <Me style={TabbarIconStyle} />
    )
}


export function MeA() {
    return (
        <MeActive style={TabbarIconStyle} />
    )
}

export function HomeD() {
    return (
        <Home style={TabbarIconStyle} />
    )
}

export function HomeA() {
    return (
        <HomeActive style={TabbarIconStyle} />
    )
}

export function CommunityD() {
    return (
        <Community style={TabbarIconStyle} />
    )
}

export function CommunityA() {
    return (
        <CommunityActive style={TabbarIconStyle} />
    )
}

export function MessageD() {
    return (
        <Message style={TabbarIconStyle} />
    )
}


export function MessageA() {
    return (
        <MessageActive style={TabbarIconStyle} />
    )
}

export function ArrowRight() {
    return (
        <ArrowR />
    )
}

export function Download() {
    return (
        <AddF />
    )
}
