


function App() {
    return( <>
        <Header/>
        <BlogDetails/>
        <CommentList/>
        <Footer/>
        </>);
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />)

