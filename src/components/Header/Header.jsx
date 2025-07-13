import { CheckCircleIcon } from "@heroicons/react/16/solid"
function Header(){
    return(
        <header className="flex justify-center items-center pt-3 ">
            <CheckCircleIcon className="w-6 h-6 text-blue-400" />
            <p className="text-2xl ml-2 font-serif text-white">Pomofocus</p>
          
        </header>
    )
}

export default Header