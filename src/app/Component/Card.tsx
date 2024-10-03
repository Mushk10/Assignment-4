interface Tprops{
    name:string,
    rollno:number,
    day:string 
}
const Card = (props:Tprops) => {
    return (
        <div  className="bg-gray-400 border border-b-8 border-blue-300 font-bold italic shadow-lg rounded-lg p-4 w-64 mx-auto my-4 transform transition-transform duration-300 hover:scale-105">
            <h1>Name:{ props.name} </h1>
            <h1>RollNo:{ props.rollno}</h1>
            <h1>Day:{props.day }</h1>
        </div>
    )
}
export default Card