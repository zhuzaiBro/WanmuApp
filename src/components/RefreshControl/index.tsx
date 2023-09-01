import React, { ReactElement } from 'react'
import { View, ScrollView, Animated, PanResponder, Text, UIManager, Dimensions, StyleSheet } from 'react-native'

import Animation from 'lottie-react-native';

interface IProps {
  isRefreshing: boolean
  pullHeight: number
  onRefresh: Function
  contentView: any
  animationBackgroundColor?: string
  onScroll?: Function
  onPullAnimationSrc?: any
  onEndRefreshAnimationSrc?: any
  onStartRefreshAnimationSrc?: any
  onRefreshAnimationSrc?: any
  children? :ReactElement
}

class AnimatedPullToRefresh extends React.Component<IProps>{
  _panResponder: any;
  state = {
    scrollY: new Animated.Value(0),
    refreshHeight: new Animated.Value(0),
    currentY: 0,
    isScrollFree: false,

    isRefreshAnimationStarted: false,
    isRefreshAnimationEnded: false,
    initAnimationProgress: new Animated.Value(0),
    repeatAnimationProgress: new Animated.Value(0),
    finalAnimationProgress: new Animated.Value(0)
  }
  constructor(props) {
    super(props);


    this.onRepeatAnimation = this.onRepeatAnimation.bind(this);
    this.onEndAnimation = this.onEndAnimation.bind(this);

    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }


  static defaultProps = {
    pullHeight: 180,
    animationBackgroundColor: 'white'
  }

  UNSAFE_componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
    });
  }

  componentWillReceiveProps(props) {
    if (this.props.isRefreshing !== props.isRefreshing) {
      // Finish the animation and set refresh panel height to 0
      if (!props.isRefreshing) {
      }
    }
  }

  _handleStartShouldSetPanResponder(e, gestureState) {
    return !this.state.isScrollFree;
  }

  _handleMoveShouldSetPanResponder(e, gestureState) {
    return !this.state.isScrollFree;
  }

  //if the content scroll value is at 0, we allow for a pull to refresh
  _handlePanResponderMove(e, gestureState) {
    if (!this.props.isRefreshing) {
      if ((gestureState.dy >= 0 && this.state.scrollY._value === 0) || this.state.refreshHeight._value > 0) {
        this.state.refreshHeight.setValue(-1 * gestureState.dy * .5);
      } else {
        // Native android scrolling
        this.refs.scrollComponentRef.scrollTo({ y: -1 * gestureState.dy, animated: true });
      }
    }
  }

  _handlePanResponderEnd(e, gestureState) {
    if (!this.props.isRefreshing) {
      if (this.state.refreshHeight._value <= -this.props.pullHeight) {
        this.onScrollRelease();
        Animated.parallel([
          Animated.spring(this.state.refreshHeight, {
            toValue: -this.props.pullHeight,
            useNativeDriver: true
          }),
          Animated.timing(this.state.initAnimationProgress, {
            toValue: 1,
            duration: 1000,
            useNativeDriver:true
          })
        ]).start(() => {
          this.state.initAnimationProgress.setValue(0);
          this.setState({ isRefreshAnimationStarted: true });
          this.onRepeatAnimation();

        })
      } else if (this.state.refreshHeight._value <= 0) {
        Animated.spring(this.state.refreshHeight, {
          toValue: 0,
          useNativeDriver: true
        }).start();
      }

      if (this.state.scrollY._value > 0) {
        this.setState({ isScrollFree: true });
      }
    }
  }

  onRepeatAnimation() {
    this.state.repeatAnimationProgress.setValue(0);

    Animated.timing(this.state.repeatAnimationProgress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      if (this.props.isRefreshing) {
        this.onRepeatAnimation();
      } else {
        this.state.repeatAnimationProgress.setValue(0);
        this.onEndAnimation();
      }
    })
  }

  onEndAnimation() {
    this.setState({ isRefreshAnimationEnded: true });
    Animated.sequence([
      Animated.timing(this.state.finalAnimationProgress, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.spring(this.state.refreshHeight, {
        toValue: 0,
        bounciness: 12,
        useNativeDriver: true
      })
    ]).start(() => {
      this.state.finalAnimationProgress.setValue(0);
      this.setState({
        isRefreshAnimationEnded: false,
        isRefreshAnimationStarted: false
      })
    })
  }


  onScrollRelease() {
    if (!this.props.isRefreshing) {
      this.props.onRefresh();
    }
  }

  isScrolledToTop() {
    if (this.state.scrollY._value === 0 && this.state.isScrollFree) {
      this.setState({ isScrollFree: false });
    }
  }

  render() {
    let onScrollEvent = (event) => {
      this.state.scrollY.setValue(event.nativeEvent.contentOffset.y)
    };

    let animateHeight = this.state.refreshHeight.interpolate({
      inputRange: [-this.props.pullHeight, 0],
      outputRange: [this.props.pullHeight, 0]
    });

    let animateProgress = this.state.refreshHeight.interpolate({
      inputRange: [-this.props.pullHeight, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const styles = StyleSheet.create({
    animationStyle : {position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: this.props.animationBackgroundColor,
      width: Dimensions.get('window').width,
      height: this.props.pullHeight
    }});

    return (
      <View
        style={{ flex: 1, backgroundColor: this.props.animationBackgroundColor }}
        {...this._panResponder.panHandlers}
      >
        {/* <Animation
          style={[styles.animationStyle, { opacity: this.props.isRefreshing ? 0 : 1 }]}
          source={this.props.onPullAnimationSrc}
          progress={animateProgress}
        />
        <Animation
          style={[styles.animationStyle, { opacity: (this.props.isRefreshing && !this.state.isRefreshAnimationStarted) ? 1 : 0 }]}
          source={this.props.onStartRefreshAnimationSrc}
          progress={this.state.initAnimationProgress}
        />
        <Animation
          style={[styles.animationStyle, { opacity: this.state.isRefreshAnimationStarted && !this.state.isRefreshAnimationEnded ? 1 : 0 }]}
          source={this.props.onRefreshAnimationSrc}
          progress={this.state.repeatAnimationProgress}
        />
        <Animation
          style={[styles.animationStyle, { opacity: this.state.isRefreshAnimationEnded ? 1 : 0 }]}
          source={this.props.onEndRefreshAnimationSrc}
          progress={this.state.finalAnimationProgress}
        /> */}

        <ScrollView ref='scrollComponentRef'
          scrollEnabled={this.state.isScrollFree}
          onScroll={onScrollEvent}
          onTouchEnd={() => { this.isScrolledToTop() }}
          onScrollEndDrag={() => { this.isScrolledToTop() }}
        >
          <Animated.View style={{ marginTop: animateHeight }}>
            <Text>刷新</Text>
          </Animated.View>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default AnimatedPullToRefresh;
