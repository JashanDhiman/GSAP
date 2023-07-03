import { useLayoutEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";

function App() {
 // const [count, setCount] = useState(0);
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
   tl.current = gsap.timeline().to(".square", { rotate: 360, duration: 2 }).to(".square2", { x: 200 });
  }, app);
  return () => ctx.revert();
 }, []);
 const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  gsap.to(e.target, { scale: 1.2 });
 };
 const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  gsap.to(e.target, { scale: 1 });
 };
 const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  gsap.to(e.target, { rotation: "50", yoyo: true, repeat: 1 });
 };
 return (
  <>w
   <div ref={app}>
    <div style={squareStyle} className="square" onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={handleClick}>
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
