// canvas_draw.js

// Imports
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import P5 from 'p5';
import { drawingCanvas, shakyCanvas } from '../helpers/p5_helper';


class CanvasDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: null,
      mouseY: null,
    };
    this.canvas = null;
  }
  componentDidMount() {
    this.canvas = findDOMNode(this);
    console.log(this.canvas.getBoundingClientRect());
    const normalP5 = new P5(drawingCanvas, this.canvas);
    const shakyP5 = new P5(shakyCanvas, this.canvas);
    console.log(normalP5, shakyP5);
  }
  handleMouseMove(e) {
    this.setState({});
  }
  render() {
    return (
      <div className="activity-view" id="canvas-draw" />
    );
  }
}

export default CanvasDraw;
