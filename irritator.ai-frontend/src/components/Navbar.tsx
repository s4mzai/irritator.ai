import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const Navbar = ()=> {
    return(
        <>
            <div className='flex fixed w-full items-center justify-between px-4 md:px-20 border-b border-input h-15'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent'>Irritator.ai</h1>
                </div>
                <AnimatedThemeToggler  className='cursor-pointer'/>
            </div>
        </>
    )
}

export default Navbar;