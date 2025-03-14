


function App() {
    return( <>
        <Header/>
        <BlogCard/>
        <BlogList/>
        <Footer/>
        </>);
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />)

