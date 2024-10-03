import Image from "next/image";
import Card from "./Component/Card"

export default function Home() {
  return (
   <>
     <div className="bg-zinc-300   flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold mb-6 italic underline">STUDENT ID CARD</h1>
      <Card name='Mushk' rollno={43995} day='monday'></Card> <hr></hr>
      <Card name='Hafsa' rollno={43996} day='monday'></Card> <hr></hr>
      <Card name='Nida' rollno={43997} day='monday'></Card>
     </div>
   </>
  );
}
