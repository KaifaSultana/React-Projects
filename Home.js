import { Link } from "react-router-dom";
function Home(){

    return(
        <div>
            
            <h1>Hey,I'm Kaifa</h1>
            <div className='About'>I am a Btech undergraduate on Computer Science and Technology,currently I'm learning web development</div>
            <div className='app-root'>
        <header className='app-header'>
          <Link to='/'>Home</Link>
          <div>
            <Link to='/Fb'>Fb</Link>
            <br/>
            <Link to='/Insta'>Insta</Link>
            
          </div>
          </header>
        </div>
        </div>
    );
}
export default Home;