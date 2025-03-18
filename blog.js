


function App() {
    return( <>
        <Header/>
        <BlogDetails/>
        <Footer/>
        </>);
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />)

