import { LogoRocket } from "./LogoRocket";


export function Footer() {
    return (
        <footer className="flex fixed-footer w-full mb-3 my-0-auto">
            <div className="flex">
                <div className="w-full mx-5">
                    <LogoRocket />
                </div>                
                
            </div>
            
            <div className="flex m-0-auto flex-wrap justify-content-end">
                
                <div className="">
                    <span className="text-gray-300">
                        Rocketseat- Todos os direitos reservados
                    </span>
                </div>            
            
                
            </div>
        
        </footer>
    )
}