import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <header className='flex items-center justify-between px-[120px]'>
            <Link to='/'>
                <h3 className='text-3xl font-bold'>FindJob</h3>
            </Link>

            <div className='w-[300px] h-[70px] flex items-center justify-between shadow-'>
                <Link to='/form'>
                    <button className='bg-cyan-800 text-white px-5 py-2.5 rounded text-xl w-[140px]'>Add user</button>
                </Link>

                <Link to='/table'>
                    <button className='bg-cyan-600 text-white px-5 py-2.5 rounded text-xl w-[140px]'>Show table</button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;