import "./demo.css";
import "./signin.css";

function Apps(){
    return (
        <>
        <div id="main-div">
      <div class="container2 card-body">
          <div>
              <div class="col-md-12">
                  <div class="first">
                      <img src="https://s3b.cashify.in/gpro/uploads/2020/04/02060122/google-phone-news.jpg" alt=""/>
                  </div>
                  <div class="margin">
                      <div class="second">
                          <h4>Sign in</h4>
                      </div>
                      <div class="second">
                        <h6>Use your google account</h6>
                    </div>
                      <div class="third col-md-12">
                                 
                                  <label class="col-md-12 pure-material-textfield-outlined">
                                    <input placeholder="Email or phone"/>
                                    <span>Email or phone</span>
                                  </label>
                                  <span class="r">Forgot email?</span>
                                
                            </div>
                            <div class="col-md">
                                <span class="s ">Not your computer? Use Guest mode to sign in privately.</span>
                                <span class="r">Learn more</span>
                            </div>
                          
                          
                          
                          <div class="row">
                              <div class="col-md">
                                  <span class="c">Create account</span>
                              </div>
                              
                              <button class="q btn btn-primary btn-sm" type="submit">Next</button>
                          </div>
                      </div>
                  </div>
                </div>
          
          </div>
      </div>

          <div class="row">
              
              <div class="col-md-8">
                  <div class="m">
                      <a href="/#">Help</a>
                      <a href="/#">Privacy</a>
                      <a href="/#">Terms</a>
                  </div>
              </div>
          </div>
      
    
    </>
    );
}

export default Apps;