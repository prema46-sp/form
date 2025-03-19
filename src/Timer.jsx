import {useState,useEffect} from 'react'

export default function Timer(){

     const [time,setTime]=useState(new Date());
     useEffect(()=>{
       const timer=setInterval(()=>{
             setTime(new Date());
        });
       return ()=> clearInterval(timer);
     },[]);

     const formathour=(hour)=>{
             return hour === 0? 12:hour>12?hour-12:hour;
     };

     const formattwodigits = (digit)=>{
             return digit<10? `0${digit}`:digit;
     };
     
     const formatdate =(day)=> {
        const options ={weekday:"long" ,year:"numeric" ,month:"long", day:"numeric"}
          return day.toLocaleDateString(undefined,options);
     };

    return(
        <>
        <div className="timer ">
                <h1>DIGITAL  CLOCK</h1>
                <p className="time">{formattwodigits(formathour(time.getHours()))}:</p>
                <p className="minute">{formattwodigits(time.getMinutes())}:</p>
                <p className="seconds">{formattwodigits(time.getSeconds())}</p>
                <p className="trans"> {time.getHours()>12 ?`PM` :`AM`}</p>
                <h4 className="day"> {formatdate(time)}</h4>
        </div>
        </>
    );
}

