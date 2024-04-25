import React from 'react'

type DataTipi ={
    name: string;
    courseNumber:number;
    isBest: boolean;
}


export default function Home(props:DataTipi) {
  return (
    <>
    <div>{props.name} hoşgeldin</div>
    <div>{props.courseNumber} adet kurs var</div>
    <div>{props.isBest ? 'biz en iyisiyiz' : 'biz en iyisi değiliz.'}</div>
    </>
    
  )
}
