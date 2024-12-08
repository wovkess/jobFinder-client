import Navbar from '../Navbar/Navbar'


const Home = () => {
    return (
        <>
            <Navbar />
            <main className="flex justify-center text-4xl mt-32 text-slate-600">
                <h1>Hello, dear user!</h1>
            </main>
        </>
    );
};

export default Home;