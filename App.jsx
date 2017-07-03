import React, {Component} from 'react';

export default class App extends Component {
  constructor(){
     super();
     this.state = {left: 0, top: 0, dragging: false, rotation: 0}
     this.startDrag = this.startDrag.bind(this);
     this.stopDrag = this.stopDrag.bind(this);
     this.rotate= this.rotate.bind(this);
   }
   startDrag(event) {
     event.preventDefault();
     var target = event.target;
     this.setState({dragging:true});
     document.onmousemove = (event) => {
       if(!this.state.dragging) {
         return
       } else {
         this.setState({
           left: event.clientX-100,
           top: event.clientY-40
         });
       }
     }
   }
   stopDrag() {
       this.setState({dragging:false});
     }
   rotate() {
     let d = this.state.rotation;
     this.setState({rotation: (d+90)%360});
     console.log(this.state.rotation);
   }
   render() {
     let style = {
       left: this.state.left+'px',
       top: this.state.top+'px',
       transform: 'rotate('+this.state.rotation+'deg)'
     };
     return (
       <div className="wrapper">
         <div className="image-box">
           <img
             onMouseDown={this.startDrag}
             onMouseUp={this.stopDrag}
             src="http://bit.ly/1O9jV75"
             style={style}
            />
         </div>
         <button onClick={this.rotate}>Rotate</button>
       </div>
     );
   }
}
