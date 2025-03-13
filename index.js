

function App() {
    return( <>
        <Header/>
        <BlogCard/>
        <Footer/>
        </>);
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />)

