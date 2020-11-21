import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom';
import { Motion, spring, presets } from 'react-motion';

export default class ScrollHorizontal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animValues: 0,
      isLockScrollTouchPadBack: false,
      isLockScrollTouchPadForward: false,
    };

    this.onScrollStart = this.onScrollStart.bind(this);
    this.resetMin = this.resetMin.bind(this);
    this.resetMax = this.resetMax.bind(this);

    this.handleMoveMouseUlockAllScrollsTouchPad = this.handleMoveMouseUlockAllScrollsTouchPad.bind(
      this
    );
    this.distanceChildParent = this.distanceChildParent.bind(this);
    this.reduceSpeedFalling = this.reduceSpeedFalling.bind(this);
    this.recalculateAfterScroll = this.recalculateAfterScroll.bind(this);

    // this.handleOnTouchStart = this.handleOnTouchStart.bind(this);
    // this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
    // this.handleOnTouchCancel = this.handleOnTouchCancel.bind(this);
    // this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this);
  }

  componentDidMount() {
    // Place the 'lock__' class on the HTML element - if toggled

    if (this.props.pageLock) {
      const orig = document.firstElementChild.className;
      document.firstElementChild.className =
        orig + (orig ? ' ' : '') + 'locked__';
    }

    DOM.findDOMNode(this.hScrollParent).addEventListener(
      'wheel',
      this.onScrollStart,
      { passive: false }
    );

    DOM.findDOMNode(this.hScrollParent).addEventListener(
      'mousemove',
      this.handleMoveMouseUlockAllScrollsTouchPad,
      { passive: false }
    );

    // DOM.findDOMNode(this.hScrollParent).addEventListener(
    //   'touchstart',
    //   this.handleOnTouchStart,
    //   { passive: false }
    // );
    // DOM.findDOMNode(this.hScrollParent).addEventListener(
    //   'touchmove',
    //   this.handleOnTouchMove,
    //   { passive: false }
    // );
    // DOM.findDOMNode(this.hScrollParent).addEventListener(
    //   'touchcancel',
    //   this.handleOnTouchCancel,
    //   { passive: false }
    // );
    // DOM.findDOMNode(this.hScrollParent).addEventListener(
    //   'touchend',
    //   this.handleOnTouchEnd,
    //   { passive: false }
    // );
  }

  componentWillUnmount() {
    if (this.props.pageLock) {
      document.firstElementChild.className = document.firstElementChild.className.replace(
        / ?locked__/,
        ''
      );
    }

    DOM.findDOMNode(this.hScrollParent).removeEventListener(
      'wheel',
      this.onScrollStart
    );
    DOM.findDOMNode(this.hScrollParent).removeEventListener(
      'mousemove',
      this.handleMoveMouseUlockAllScrollsTouchPad
    );
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.animValues !== this.props.animValues) {
      let currentAnimValues = this.state.animValues;
      this.setState(
        (prevState) => ({
          ...prevState,
          animValues: currentAnimValues + this.props.animValues,
        }),
        this.calculate()
      );
    } else {
      this.calculate();
    }
  };

  // handleOnTouchStart(e) {
  //   console.log('Start Touch', e);
  // }
  // handleOnTouchEnd(e) {
  //   console.log('End Touch', e);
  // }
  // handleOnTouchMove(e) {
  //   console.log('Move Touch', e);
  // }
  // handleOnTouchCancel(e) {
  //   console.log('Cancel Touch', e);
  // }

  handleMoveMouseUlockAllScrollsTouchPad() {
    this.setState((prevState) => ({
      ...prevState,
      isLockScrollTouchPadBack: false,
      isLockScrollTouchPadForward: false,
    }));
  }

  onScrollStart(e) {
    e.preventDefault();

    // If scrolling on x axis, change to y axis. Otherwise, just get the y deltas.
    // (Basically, this for Apple mice that allow horizontal scrolling by default)
    var rawData = e.deltaY ? e.deltaY : e.deltaX;
    var rawDataWeel = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDeltaX;
    var mouseY = 0;

    if (!this.state.isLockScrollTouchPadForward && rawData < 0) {
      this.setState((prevState) => ({
        ...prevState,
        isLockScrollTouchPadBack: false,
      }));
      mouseY = Math.floor(rawDataWeel);
    } else if (this.state.isLockScrollTouchPadForward && rawData > 0) {
      this.setState((prevState) => ({
        ...prevState,
        isLockScrollTouchPadForward: false,
      }));
      mouseY = Math.floor(rawDataWeel);
    } else if (!this.state.isLockScrollTouchPadBack && rawData > 0) {
      this.setState((prevState) => ({
        ...prevState,
        isLockScrollTouchPadForward: false,
      }));
      mouseY = Math.floor(rawDataWeel);
    } else if (this.state.isLockScrollTouchPadBack && rawData < 0) {
      this.setState((prevState) => ({
        ...prevState,
        isLockScrollTouchPadBack: false,
      }));
      mouseY = Math.floor(rawDataWeel);
    }

    // Bring in the existing animation values
    var animationValue = this.state.animValues;
    var newAnimationValue = animationValue + mouseY;
    var newAnimationValueNegative = animationValue - mouseY;

    if (!this.caniscroll()) {
      return;
    }

    var scrolling = () => {
      this.props.reverseScroll
        ? this.setState((prevState) => ({
            ...prevState,
            animValues: newAnimationValueNegative,
          }))
        : this.setState((prevState) => ({
            ...prevState,
            animValues: newAnimationValue,
          }));
    };

    // Begin Scrolling Animation
    window.requestAnimationFrame(scrolling);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      true &&
      // Ensure component has been loaded
      this.calculate.timer !== void 0 &&
      this.props.children === nextProps.children &&
      this.state.animValues === nextState.animValues &&
      this.props.animValues === nextProps.animValues
    ) {
      return false;
    }

    if (
      true &&
      this.props.children === nextProps.children &&
      this.caniscroll() === false
    ) {
      return false;
    }

    return true;
  }

  caniscroll() {
    let el = DOM.findDOMNode(this.hScrollParent);
    let rect = el.getBoundingClientRect();
    let scroller = el.firstElementChild;

    return (
      scroller.offsetLeft < rect.left ||
      scroller.offsetLeft + scroller.offsetWidth > rect.width
    );
  }

  calculate() {
    // Cancel the previous calculate
    clearTimeout(this.calculate.timer);

    // Lazy to calculate, prevent max recurse call
    this.calculate.timer = setTimeout(() => {
      // Calculate the bounds of the scroll area
      try {
        let parent = DOM.findDOMNode(this.hScrollParent);
        let parentRect = parent.getBoundingClientRect();
        let parentFirstPointX = Math.floor(parentRect.x);
        let parentWidth = Math.floor(parentRect.width);
        let parentLastPointX = parentFirstPointX + parentWidth;
        let child = parent.firstChild;
        let childRect = child.getBoundingClientRect();
        let childFirstPointX = Math.floor(childRect.x);
        let childWidth = Math.floor(childRect.width);
        let childLastPointX = childFirstPointX + childWidth;

        // let max = el.lastElementChild.scrollWidth;
        // let win = el.offsetWidth;

        // Get the new animation values
        // var curr = this.state.animValues;

        // Establish the bounds. We do this every time b/c it might change.
        // var bounds = -(max - win);

        // Logic to hold everything in place
        if (childFirstPointX > parentFirstPointX) {
          const distance = this.distanceChildParent(
            childFirstPointX,
            parentFirstPointX
          );

          const speed = this.reduceSpeedFalling(distance);

          this.setState((prevState) => ({
            ...prevState,
            isLockScrollTouchPadBack: true,
            isLockScrollTouchPadForward: false,
          }));

          this.resetMin(this.state.animValues - speed);
        } else if (childLastPointX < parentLastPointX) {
          const distance = this.distanceChildParent(
            childLastPointX,
            parentLastPointX
          );

          const speed = this.reduceSpeedFalling(distance);

          this.setState((prevState) => ({
            ...prevState,
            isLockScrollTouchPadBack: false,
            isLockScrollTouchPadForward: true,
          }));

          this.resetMax(this.state.animValues + speed);
        }
      } catch (error) {
        console.log('Ups ... Scroll Horizontal :>> ', error);
      }
    });
  }
  resetMin(x) {
    this.setState((prevState) => ({ ...prevState, animValues: x }));
  }

  resetMax(x) {
    this.setState((prevState) => ({ ...prevState, animValues: x }));
  }

  distanceChildParent = (childPositon, parentPosition) => {
    return Math.abs(Math.abs(childPositon) - Math.abs(parentPosition));
  };

  reduceSpeedFalling(distance) {
    if (distance > 600) {
      return 25;
    } else if (distance > 400) {
      return 10;
    } else if (distance > 200) {
      return 5;
    } else if (distance > 100) {
      return 2;
    } else {
      return 1;
    }
  }
  recalculateAfterScroll() {
    this.calculate();
  }

  render() {
    const { config, style, children } = this.props;
    const { width, height } = style;
    const springConfig = config || presets.noWobble;

    // Styles
    const styles = {
      height: height || `100%`,
      width: width || `100%`,
      overflow: `hidden`,
      position: `relative`,
      ...style,
    };

    return (
      <div
        ref={(r) => {
          this.hScrollParent = r;
        }}
        style={styles}
        className={`scroll-horizontal ${this.props.className || ''}`}
      >
        <Motion style={{ z: spring(this.state.animValues, springConfig) }}>
          {({ z }) => {
            this.recalculateAfterScroll();
            const scrollingElementStyles = {
              transform: `translate3d(${z}px, 0,0)`,
              display: `inline-flex`,
              height: `100%`,
              position: `absolute`,
              willChange: `transform`,
            };

            return (
              <div
                className="scroll-horizontal-child"
                style={scrollingElementStyles}
              >
                {children}
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}

ScrollHorizontal.propTypes = {
  reverseScroll: PropTypes.bool,
  pageLock: PropTypes.bool,
  config: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  animValues: PropTypes.number,
};

ScrollHorizontal.defaultProps = {
  reverseScroll: false,
  pageLock: false,
  config: null,
  style: { width: `100%`, height: `100%` },
  className: null,
  animValues: null,
};
