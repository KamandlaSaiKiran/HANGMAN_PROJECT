
import Letters from "../LettersComponent/Letters";
function MaskedText({word,usedLetters}){
    function letterColor(letter) {
        return letter !== '_' ? "text-blue-500" : "text-black";
    }
    console.log("Word is " + word);
    console.log("USed Letters are "+usedLetters);
    function getAllCharacters(word, usedLetters) {
        usedLetters = usedLetters.map(letter => letter.toUpperCase());
        const guessedLetters = new Set(usedLetters);
        const characters = word?.toUpperCase().split('').map((char) => {
          if (guessedLetters.has(char)) {
            return char;
          }
          return '_';
        });
        return characters.join('');
      }
    
        //This function will return a string with all the characters of the word that have been guessed so far
       const letters=getAllCharacters(word,usedLetters);
       console.log(letters);
   
     return(
      
    
        <>
            <div className="flex justify-center text-5xl">
            {letters.split('').map((letter,index)=>{
                return (
                    <span key={`letter-${index}`}  className={` inline-block mx-1 ${letterColor(letter)}`}>{letter}</span>
                )
            })}
            </div>
           
        </>
     )
    

}

export default MaskedText;