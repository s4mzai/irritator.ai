import { ModeToggle } from '@/components/mode-toggle'


const Navbar = ()=> {
    return(
        <>
            <div className='flex fixed w-full items-center justify-between px-4 md:px-20 border-b border-input'>
                <img className='w-15 h-15 block dark:hidden' src="/irritator-dark.png" alt="" />
                <img className='w-15 h-15 hidden dark:block' src="/irritator-light.png" alt="" />
                <div className=''>
                    <ModeToggle/>
                </div>
            </div>
        </>
    )
}

export default Navbar;