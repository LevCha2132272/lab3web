


function App() {
    return( <>
        <Header/>
        <SearchBar/>
        <BlogList/>
        
        <Footer/>
        </>);
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />)

