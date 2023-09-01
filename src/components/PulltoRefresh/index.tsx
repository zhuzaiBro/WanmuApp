/**
 * Container for ScrollView/FlatList, providing custom pull-to-refresh Header support
 */

 import React, { Component, ComponentType, RefAttributes } from 'react';
 import {
     View,
     ViewStyle,
     Animated,
     PanResponder,
     PanResponderInstance,
     GestureResponderEvent,
     PanResponderGestureState,
     NativeSyntheticEvent,
     NativeScrollEvent,
 } from 'react-native';
 
 export interface PullToRefreshHeaderProps {
     // 当前下拉的距离，也穿给header，方便组件内部进行各种自定义计算
     pullDistance: number;
     // 当前下拉的百分比 [0, 1]
     percentAnimatedValue: Animated.AnimatedDivision;
     // 下拉百分比 [0, 1] 因为percentAnimatedValue 不能直接读取当前值，需要给header直接一个当前比例，方便内部处理
     percent: number;
     // 当前是否正在刷新中
     refreshing: boolean;
 }
 
 export interface Props {
     // 容器样式
     style: ViewStyle;
     // 下拉刷新的header组件类
     HeaderComponent: ComponentType<PullToRefreshHeaderProps & RefAttributes<any>>;
     // Header 组件的高度，也是触发刷新的下拉距离
     headerHeight: number;
     // 下拉过程中，可以触发刷新的下拉距离。不穿，则默认等于 headerHeight
     refreshTriggerHeight?: number;
     // 正在刷新时，容器保持的顶部距离，如果用户不传，则默认等于 headerHeight
     refreshingHoldHeight?: number;
     // 当前是否正在下拉刷新请求数据中
     refreshing: boolean;
     // 下拉刷新达到阈值时，回调父级
     onRefresh: () => void;
     // 子组件，只能是  ScrollView/FlatList 等
     children: JSX.Element;
     // 内部滚动组件，contentOffset.y <= topPullThreshold 时，触发顶部的下拉刷新动作
     topPullThreshold: number;
 }
 
 interface State {
     // 容器顶部的偏移距离
     containerTop: Animated.Value;
     scrollEnabled: boolean;
 }
 
 const styles = {
     con: {
         flex: 1,
         // Android上，不设置这个背景色，貌似会触发  onPanResponderTerminate ！！！
         backgroundColor: '#fff',
     } as ViewStyle,
 };
 
 export default class PullToRefresh extends Component<Props, State> {
     static defaultProps = {
         style: styles.con,
         refreshing: false,
         topPullThreshold: 2,
     };
 
     // 当前容器移动的距离
     containerTranslateY: number = 0;
 
     // 内部scroll容器顶部滚动的距离
     innerScrollTop: number = 0;
 
     // 容器上的 PanResponder
     _panResponder: PanResponderInstance;
 
     // header 组件的引用
     headerRef: any = null;
 
     // inner scroll ref
     scrollRef: any = null;
 
     constructor(props: Props) {
         super(props);
 
         this.state = {
             // 容器偏离顶部的距离
             containerTop: new Animated.Value(0),
             // 是否允许内部scrollview滚动
             scrollEnabled: false,
         };
 
         this.state.containerTop.addListener(this.containerTopChange);
 
         // this.onStartShouldSetResponder = this.onStartShouldSetResponder.bind(this);
         this.onMoveShouldSetResponder = this.onMoveShouldSetResponder.bind(this);
         this.onResponderGrant = this.onResponderGrant.bind(this);
         this.onResponderReject = this.onResponderReject.bind(this);
         this.onPanResponderMove = this.onPanResponderMove.bind(this);
         this.onPanResponderRelease = this.onPanResponderRelease.bind(this);
         this.onPanResponderTerminate = this.onPanResponderTerminate.bind(this);
         this.onResponderTerminationRequest = this.onResponderTerminationRequest.bind(this);
 
         this._panResponder = PanResponder.create({
             // onStartShouldSetPanResponder: this.onStartShouldSetResponder,
             onMoveShouldSetPanResponderCapture: this.onMoveShouldSetResponder,
             // onMoveShouldSetPanResponder: this.onMoveShouldSetResponder,
             onPanResponderGrant: this.onResponderGrant,
             onPanResponderReject: this.onResponderReject,
             onPanResponderMove: this.onPanResponderMove,
             onPanResponderRelease: this.onPanResponderRelease,
             onPanResponderTerminationRequest: this.onResponderTerminationRequest,
             onPanResponderTerminate: this.onPanResponderTerminate,
             onShouldBlockNativeResponder: (evt, gestureState) => {
                 // Returns whether this component should block native components from becoming the JS
                 // responder. Returns true by default. Is currently only supported on android.
                 return true;
               },
         });
     }
 
     updateInnerScrollRef = (ref: any) => {
         // console.log('====== updateInnerScrollRef ', ref && ref.scrollToOffset);
         this.scrollRef = ref;
     };
 
     // updateInnerScrollState(enabled: boolean) {
     //     if (this.scrollRef) {
     //         console.log('====== innerScroll ', enabled);
     //         this.scrollRef.setNativeProps({
     //             scrollEnabled: enabled,
     //         });
     //     }
     // }
 
     // onStartShouldSetResponder(event, gestureState) {
     //     console.log('onStartShouldSetResponder', gestureState);
     //     return false;
     // }
 
     onMoveShouldSetResponder(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
         if (this.props.refreshing) {
             // 正在刷新中，不接受再次下拉
             return false;
         }
         return !this.state.scrollEnabled;
         if (this.innerScrollTop <= this.props.topPullThreshold && gestureState.dy > 0) {
             console.log(`====== moveShouldSetResponder  true`);
             return true;
         }
         console.log(`====== moveShouldSetResponder  false`, this.innerScrollTop, gestureState.dy);
         return false;
     }
 
     onResponderGrant(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
         // console.log(`====== grant`);
     }
 
     onResponderReject(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
         // console.log(`====== reject`);
     }
 
     onPanResponderMove(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
         if (gestureState.dy >= 0) {
             // const dy = Math.max(0, gestureState.dy);
             this.state.containerTop.setValue(gestureState.dy);
         } else {
             this.state.containerTop.setValue(0);
             if (this.scrollRef) {
                 if (typeof this.scrollRef.scrollToOffset === 'function') {
                     // inner is FlatList
                     this.scrollRef.scrollToOffset({
                         offset: -gestureState.dy,
                         animated: true,
                     });
                 } else if(typeof this.scrollRef.scrollTo === 'function') {
                     // inner is ScrollView
                     this.scrollRef.scrollTo({
                         y: -gestureState.dy,
                         animated: true,
                     });
                 }
             }
         }
     }
 
     onPanResponderRelease(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
         // 判断是否达到了触发刷新的条件
         const threshold = this.props.refreshTriggerHeight || this.props.headerHeight;
         if (this.containerTranslateY >= threshold) {
             // 触发刷新
             this.props.onRefresh();
         } else {
             // 没到刷新的位置，回退到顶部
             this._resetContainerPosition();
         }
         this.checkScroll();
     }
 
     onResponderTerminationRequest(event: GestureResponderEvent): boolean {
         // console.log(`====== terminate request`);
         return false;
     }
 
     onPanResponderTerminate(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
         // console.log(`====== terminate`, this.innerScrollTop, gestureState.dy, gestureState.dy);
         this._resetContainerPosition();
         this.checkScroll();
     }
 
     _resetContainerPosition() {
         Animated.timing(this.state.containerTop, {
             toValue: 0,
             duration: 250,
             useNativeDriver: true,
         }).start();
     }
 
     // 下拉容器的过程中，动态传递下拉的距离给 header 组件，直接调用方法，不走本组件的 setState，避免卡顿
     containerTopChange = ({ value }: { value: number }) => {
         this.containerTranslateY = value;
         if (this.headerRef) {
             this.headerRef.setProgress({
                 pullDistance: value,
                 percent: value / (this.props.refreshTriggerHeight || this.props.headerHeight),
             });
         }
     };
 
     innerScrollCallback = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
         this.innerScrollTop = event.nativeEvent.contentOffset.y;
         this.checkScroll();
     };
 
     checkScroll = () => {
         if (this.isInnerScrollTop()) {
             if (this.state.scrollEnabled) {
                 this.setState({
                     scrollEnabled: false,
                 });
             }
         } else {
             if (!this.state.scrollEnabled) {
                 this.setState({
                     scrollEnabled: true,
                 });
             }
         }
     };
 
     isInnerScrollTop() {
         return this.innerScrollTop <= this.props.topPullThreshold;
     }
 
     componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
         if (!prevProps.refreshing && this.props.refreshing) {
             // 从 未加载 变化到 加载中
             const holdHeight = this.props.refreshingHoldHeight || this.props.headerHeight;
             Animated.timing(this.state.containerTop, {
                 toValue: holdHeight,
                 duration: 150,
                 useNativeDriver: true,
             }).start();
         } else if (prevProps.refreshing && !this.props.refreshing) {
             // 从 加载中 变化到 未加载
             Animated.timing(this.state.containerTop, {
                 toValue: 0,
                 duration: 250,
                 useNativeDriver: true,
             }).start();
         }
     }
 
     componentWillUnmount() {
         this.state.containerTop.removeAllListeners();
     }
 
     renderHeader() {
         const style = {
             position: 'absolute',
             left: 0,
             width: '100%',
             top: -this.props.headerHeight,
             transform: [{ translateY: this.state.containerTop }],
         } as any;
         const percent = Animated.divide(this.state.containerTop, this.props.refreshTriggerHeight || this.props.headerHeight);
         const Header = this.props.HeaderComponent;
         return (
             <Animated.View style={style}>
                 <Header
                     ref={(c: any) => { this.headerRef = c; }}
                     percentAnimatedValue={percent}
                     pullDistance={this.containerTranslateY}
                     percent={this.containerTranslateY / this.props.headerHeight}
                     refreshing={this.props.refreshing}
                 />
             </Animated.View>
         );
     }
 
     render() {
         const child = React.cloneElement(this.props.children, {
             onScroll: this.innerScrollCallback,
             bounces: false,
             alwaysBounceVertical: false,
             scrollEnabled: this.state.scrollEnabled,
             ref: this.updateInnerScrollRef,
         });
         return (
             <View
                 style={this.props.style}
                 {...this._panResponder.panHandlers}
             >
                 <Animated.View style={[{ flex: 1, transform: [{ translateY: this.state.containerTop }] }]}>
                     {child}
                 </Animated.View>
                 {this.renderHeader()}
             </View>
         );
     }
 }
 