import React, { useRef, useState } from 'react'
import styles from './TicTacToe.module.css'
import circle_icon from '../../assets/circle.png'
import cross_icon from '../../assets/cross.png'
import '../../../index.css'

let data = ["","","","","","","","",""]

export const TicTacToe = () => {

  let [count,setCount] = useState(0)
  let [lock,setLock] = useState(false)
  let titleRef = useRef(null)

  let box0 = useRef(null)
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)

  let boxArray = [box0,box1,box2,box3,box4,box5,box6,box7,box8]

  const toggle = (e,index) => {
    if (lock) {
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[index]="x";
      setCount((prev) => prev+1);
    }
    else{
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[index]="0";
      setCount((prevCount) => prevCount+1);
    }
    checkWin();
  }

  const checkWin = () => {
    if(data[0]===data[1] && data[1]===data[2] && data[0]!==""){
      won(data[0]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[3]!==""){
      won(data[3]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[6]!==""){
      won(data[6]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[0]!==""){
      won(data[0]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[1]!==""){
      won(data[1]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[2]!==""){
      won(data[2]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[0]!==""){
      won(data[0]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[2]!==""){
      won(data[2]);
    }
  }

  const won = (winner) => {
    setLock(true);
    if(winner==="x"){
      titleRef.current.innerHTML = `Congratulation: <img src='${cross_icon}'> Won !!!`
    }
    else{
      titleRef.current.innerHTML = `Congratulation: <img src='${circle_icon}'> Won !!!`
    }
  }

  const resetData = () => {
    setLock(false)
    data = ["","","","","","","","",""]
    titleRef.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`
    boxArray.map((box) => {
      box.current.innerHTML = ""
    })
  }

  return (
    <div className={styles.container}>
      <p className={styles.title} ref={titleRef}>Tic Tac Toe Game in <span>React</span></p>
      <div className={styles.board}>
        <div className={styles.row1}>
          <div className={styles.boxes} onClick={(e) => {toggle(e,0)}} ref={box0}></div>
          <div className={styles.boxes} onClick={(e) => {toggle(e,1)}} ref={box1}></div>
          <div className={styles.boxes} onClick={(e) => {toggle(e,2)}} ref={box2}></div>
        </div>
        <div className={styles.row2}>
          <div className={styles.boxes}  onClick={(e) => {toggle(e,3)}} ref={box3}></div>
          <div className={styles.boxes}  onClick={(e) => {toggle(e,4)}} ref={box4}></div>
          <div className={styles.boxes}  onClick={(e) => {toggle(e,5)}} ref={box5}></div>
        </div>
        <div className={styles.row3}>
          <div className={styles.boxes} onClick={(e) => {toggle(e,6)}} ref={box6}></div>
          <div className={styles.boxes} onClick={(e) => {toggle(e,7)}} ref={box7}></div>
          <div className={styles.boxes} onClick={(e) => {toggle(e,8)}} ref={box8}></div>
        </div>
      </div>
      <button className={styles.reset} onClick={() => {resetData()}}>Reset</button>
    </div>
  )
}
