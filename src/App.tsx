import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import { gsap } from "gsap";

function App() {
 const [toggle, setToggle] = useState(false);
 const app = useRef<HTMLDivElement>(null);
 const tl = useRef<HTMLDivElement>(null);
 // gsap.to(square, { rotate: 360, duration: 3 });
 const squareStyle = {
  height: "100px",
  width: "100px",
  backgroundColor: "grey",
 };
 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   tl.current = gsap.timeline().to(".square", { rotate: 360, yoyo: true, duration: 2 }).to(".square2", { yoyo: true, x: 200 });
   //   gsap.to(".square", {
   //    rotation: 360,
   //    repeat: -1,
   //    repeatDelay: 1,
   //    yoyo: true,
   //   });

   //   gsap.to(".square2", {
   //    x: 100,
   //    repeat: -1,
   //    repeatDelay: 1,
   //    yoyo: true,
   //   });
  }, app);
  return () => ctx.revert();
 }, []);

 useEffect(() => {
  tl.current.reversed(toggle);
 }, [toggle]);

 // const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
 //  gsap.to(e.target, { scale: 1.2 });
 // };
 // const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
 //  gsap.to(e.target, { scale: 1 });
 // };
 // const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
 //  gsap.to(e.target, { rotation: "50", yoyo: true, repeat: 1 });
 // };

 return (
  <>
   <div ref={app}>
    <button onClick={() => setToggle(!toggle)}>Toggle</button>
    <div style={squareStyle} className="square">
     Hello World
    </div>
    <div style={squareStyle} className="square2">
     dlroW olleH
    </div>
   </div>
  </>
 );
}

export default App;
