const Home = () => {
    const btnClick = () => {
        console.log("Clicked");
    };

    return (
        <div className="home">
            <h1>Home Page</h1>
            <p>This is my first React App</p>
            <button className="click" onClick={btnClick}>
                Click me !
            </button>
        </div>
    );
};

export default Home;
