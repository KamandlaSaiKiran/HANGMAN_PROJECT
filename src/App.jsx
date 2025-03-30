import RoutesComponent from "./Components/RoutesComponent";


function App(){
  return(
    <div className="relative h-screen w-full bg-[url('/HangmanProfile.jpg')] bg-cover bg-center">
    {/* Blur effect on the background only */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

    {/* Content on top of the blurred background */}
    <div className="relative z-10">
     
     <RoutesComponent/>
    </div>
          
  </div>
  )
}
export default App;

