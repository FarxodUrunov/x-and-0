import "./App.css";
import React from "react";

class App extends React.Component {
   state = {
      squares: Array(9).fill(null),
      count: 0,
      isWinner: false,
      arr: [],
   };

   winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   winnerClass = "ttt-grid";
   zeroColor = "zeroColor";

   isWinner = () => {
      let s = this.state.count % 2 === 0 ? "X" : "0";
      for (let i = 0; i < this.winnerLine.length; i++) {
         let line = this.winnerLine[i];
         if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s) {
            let aa = [line[0], line[1], line[2]];

            this.setState({ arr: aa });

            this.setState({ isWinner: true });
         }
      }
   };

   clickHandler = (e) => {
      if (!this.state.isWinner) {
         let data = e.target.getAttribute("data");
         let current = this.state.squares;
         if (current[data] === null) {
            current[data] = this.state.count % 2 === 0 ? "X" : "0";
            this.setState({ count: this.state.count + 1 });
            this.setState({ squares: current });
         } else {
            this.setState({ isWinner: true });
         }
         if (this.state.count % 2 !== 0) {
            e.target.className = this.winnerClass + " " + this.zeroColor;
         } else {
            e.target.className = this.winnerClass;
         }

         this.isWinner();
      }
   };

   onRestart = () => {
      this.setState({ squares: Array(9).fill(null) });
      this.setState({ count: 0 });
      this.setState({ isWinner: false });
      this.setState({ arr: [] });
   };

   render() {
      return (
         <div className="App">
            <div className="tic-tac-toe">
               <div onClick={this.clickHandler} data="0" className={this.state.arr.includes(0) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[0]}
               </div>
               <div onClick={this.clickHandler} data="1" className={this.state.arr.includes(1) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[1]}
               </div>
               <div onClick={this.clickHandler} data="2" className={this.state.arr.includes(2) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[2]}
               </div>
               <div onClick={this.clickHandler} data="3" className={this.state.arr.includes(3) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[3]}
               </div>
               <div onClick={this.clickHandler} data="4" className={this.state.arr.includes(4) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[4]}
               </div>
               <div onClick={this.clickHandler} data="5" className={this.state.arr.includes(5) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[5]}
               </div>
               <div onClick={this.clickHandler} data="6" className={this.state.arr.includes(6) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[6]}
               </div>
               <div onClick={this.clickHandler} data="7" className={this.state.arr.includes(7) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[7]}
               </div>
               <div onClick={this.clickHandler} data="8" className={this.state.arr.includes(8) ? this.winnerClass + " winner" : this.winnerClass}>
                  {this.state.squares[8]}
               </div>
            </div>
            {this.state.isWinner ? <button onClick={this.onRestart}>Restart</button> : null}
         </div>
      );
   }
}

export default App;
