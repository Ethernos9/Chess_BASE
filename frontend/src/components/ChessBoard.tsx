import { Chess, Color, PieceSymbol, Square } from 'chess.js';
import React, { useState } from 'react'
import { MOVE } from '../screens/Game';

// const ChessBoard = ({chess,setBoard,board,socket}:{
//   chess:any
//     board:({
//         square:Square;
//         type:PieceSymbol;
//         color:Color;
//     } | null) [][]
//     socket:WebSocket;
//     setBoard:any;
// }) => {

//     const [from,setFrom]= useState<null | Square>(null)
//     const [to,setTo]= useState <null | Square>(null)
//   return (
//     <div className='text-white-200 mt-8 pt-8'>
//         {board.map((row,i)=>{
          
//              return <div key= {i} className='flex'>
//                   {
//                     row.map((square,j)=>{
//                       const squareRepresentation = String.fromCharCode(97+(j%8)) + ""+(8-i) as Square  

//                          return <div onClick = {()=>{
//                              if (!from){
//                                 setFrom(squareRepresentation);
//                              }
//                              else{
                               
//                                 setTo(square?.square ?? null);
//                                 socket?.send(JSON.stringify({
//                                       type:MOVE,
//                                       payload:{
//                                         move:{
//                                           from,
//                                           to :squareRepresentation
//                                         }
                                      
//                                       }
//                                 }))
//                                 setFrom(null)
//                                 chess.move({

//                                   from,
//                                   to:squareRepresentation
//                                 })
//                                 setBoard(chess.board())

//                                 console.log({
//                                     from,
//                                     to : squareRepresentation
//                                 })
//                              }
//                          }} key = {j}className={`w-16 h-16 ${(i+j)%2 ===0 ? "bg-colorChess1":"bg-colorChess2"}`}>
//                         <div className='w-full justify-center flex h-full'>
//                              <div className=' h-full justify-center flex flex-col bg-red-200'></div>
//                               {square ? square.type :""}
//                         </div>
                        
//                           </div>
//                     })
//                   }
//              </div>
//         })}

//     </div>
//   )
// }
const ChessBoard = ({ chess, board, socket, setBoard }: {
  chess: Chess;
  setBoard: React.Dispatch<React.SetStateAction<({
      square: Square;
      type: PieceSymbol;
      color: Color;
  } | null)[][]>>;
  board: ({
      square: Square;
      type: PieceSymbol;
      color: Color;
  } | null)[][];
  socket: WebSocket;
}) => {
  const [from, setFrom] = useState <null | Square>(null);

  return <div className="text-white-200">
      {board.map((row, i) => {
          return <div key={i} className="flex">
              {row.map((square, j) => {
                  const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;

                  return <div onClick={() => {
                      if (!from) {
                          setFrom(squareRepresentation);
                      } else {
                          socket.send(JSON.stringify({
                              type: MOVE,
                              payload: {
                                  move: {
                                      from,
                                      to: squareRepresentation
                                  }
                              }
                          }))
                          
                          setFrom(null)
                          chess.move({
                              from,
                              to: squareRepresentation
                          });
                          setBoard(chess.board());
                          console.log({
                              from,
                              to: squareRepresentation
                          })
                      }
                  }} key={j} className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-gray-300' : 'bg-colorChess2'}`}>
                      <div className="w-full justify-center flex h-full">
                          <div className="h-full justify-center flex flex-col">
                              {square ? <img className="w-4" src={`/${square?.color === "b" ? square?.type : `${square?.type?.toUpperCase()} copy`}.png`} /> : null} 
                          </div>
                      </div>
                  </div>
              })}
          </div>
      })}
  </div>
}

export default ChessBoard