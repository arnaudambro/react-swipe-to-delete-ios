import React from 'react';
import PropTypes from 'prop-types';
import { cursorPosition } from './helpers';
import { Container, Delete, Content } from './styles';


class SwipeToDelete extends React.Component {

  state = {
    touching: null,
    translate: 0,
    deleting: false,
  }

  componentDidMount() {
    // to get ref dimensions
    this.forceUpdate();
    window.addEventListener('mousedown', this.testToResetState);
    window.addEventListener('touchstart', this.testToResetState);
  }

  testToResetState = (event) => {
    const container = document.getElementById('delete-container').parentElement;
    if (!container.contains(event.target)) {
      this.setState({
        touching: null,
        translate: 0,
        deleting: false,
      })
    }
  }

  onMouseDown = (e) => {
    if (this.state.touching) return;
    this.startTouchPosition = cursorPosition(e);
    this.initTranslate = this.state.translate;
    this.setState({ touching: true }, () => {
      this.addEventListenerToMoveAndUp()
    })
  };

  addEventListenerToMoveAndUp = (remove = false) => {
    if (remove) {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('touchmove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
      window.removeEventListener('touchend', this.onMouseUp);
    } else {
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('touchmove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
      window.addEventListener('touchend', this.onMouseUp);
    }
  }

  onMouseMove = (e) => {
    if (!this.state.touching) return
    cursorPosition(e)
    if (cursorPosition(e) > this.startTouchPosition - this.initTranslate) {
      this.setState({ translate: 0 })
      return;
    }
    this.setState({ translate: cursorPosition(e) - this.startTouchPosition + this.initTranslate })
  };

  onMouseUp = () => {
    this.startTouchPosition = null;
    const { deleteWidth } = this.props;
    const newState = {
      touching: false
    }
    const acceptableMove = -deleteWidth * 0.7;
    const showDelete = this.state.translate < acceptableMove;
    const notShowDelete = this.state.translate >= acceptableMove;
    const deleteWithoutConfirm = -this.state.translate >= this.deleteWithoutConfirmThreshold;
    if (deleteWithoutConfirm) newState.translate = -this.containerWidth;
    if (notShowDelete) newState.translate = 0;
    if (showDelete && !deleteWithoutConfirm) newState.translate = -deleteWidth;
    this.setState(newState, () => {
      if (deleteWithoutConfirm) this.onDeleteClick()
    });

    this.addEventListenerToMoveAndUp(true)
  }

  onDeleteClick = () => {
    const { transitionDuration, onDelete } = this.props;
    this.setState({ deleting: true }, () => {
      window.setTimeout(() => {
        onDelete();
      }, transitionDuration)
    })
  }

  componentWillUnmount() {
    this.addEventListenerToMoveAndUp(true);
    window.removeEventListener('mousedown', this.testToResetState);
    window.removeEventListener('touchstart', this.testToResetState);
  }

  render() {
    const { translate, touching, deleting } = this.state;
    const { deleteWidth, transitionDuration, deleteText, deleteColor, height, style = {} } = this.props;
    const cssParams = { deleteWidth, transitionDuration, deleteColor, heightProp: height };
    const shiftDelete = -translate >= this.deleteWithoutConfirmThreshold;
    return (
      <Container
        deleting={deleting}
        id="delete-container"
        style={style}
        {...cssParams}
        ref={c => {
          if (c) {
            this.container = c
            this.containerWidth = c.getBoundingClientRect().width;
            this.deleteWithoutConfirmThreshold = this.containerWidth * 0.75;
          }
        }}
      >
        <Delete
          id="delete"
          buttonMarginLeft={shiftDelete ? this.containerWidth + translate : this.containerWidth - deleteWidth}
          {...cssParams}
        >
          <button id="delete-button" onClick={this.onDeleteClick}>{deleteText}</button>
        </Delete>
        <Content
          {...cssParams}
          id="delete-content"
          deleting={deleting}
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onMouseDown}
          translate={translate}
          transition={!touching}

        >
          {this.props.children}
        </Content>
      </Container>
    )
  }
}

SwipeToDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  transitionDuration: PropTypes.number,
  deleteWidth: PropTypes.number,
  deleteColor: PropTypes.string,
  deleteText: PropTypes.string,
  style: PropTypes.object
}

SwipeToDelete.defaultProps = {
  transitionDuration: 250,
  deleteWidth: 75,
  deleteColor: 'rgba(252, 58, 48, 1.00)',
  deleteText: 'Delete',
}


export default SwipeToDelete;
