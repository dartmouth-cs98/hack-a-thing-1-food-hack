// canvas_draw.js

//imports
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { drawingCanvas, shakyCanvas } from '../helpers/p5_helper';
import p5 from 'p5';


class CanvasDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: null,
      mouseY: null,
    };
    this.canvas = null;
  }
  componentDidMount(){
    this.canvas = findDOMNode(this);
    console.log(this.canvas.getBoundingClientRect());
    const normalP5 = new p5(drawingCanvas, this.canvas);
    const shakyP5 = new p5(shakyCanvas, this.canvas);
  }
  handleMouseMove(e){
    this.setState({});
  }
  render() {
    return(
      <div className="activity-view" id="canvas-draw" />
    );
  }
}

export default CanvasDraw;
