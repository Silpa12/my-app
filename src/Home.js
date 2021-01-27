import './Home.css';
import Text from './text';
import Radio from './radio';


function Home(){
    return(
        <div className="Home">
            <div className="headr">
              <h6>CREATE NEW ACCOUNT</h6>
             <h1>Let's get started</h1>
            </div>
             <form>
                <div className="form-group text-left">
                <input type="email" 
                       id="email" 
                       placeholder="Enter email"
                />
                </div>
                <br></br>
                <div className="form-group text-left">
                    <input type="password" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <br></br>
                <div className="form-group text-left">
                    <input type="password" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <br></br>
                <Radio/>
                <div className="para"><a href=""><h5>I already have an account.</h5></a></div><br></br>
                <button type="button" class="btn btn-primary btn-lg">
                CREATE A NEW ACCOUNT
                </button>
                <Text/>
            </form>
        </div>

    );
}
export default Home;