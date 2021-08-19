import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import Swal from 'sweetalert2'

const maxLength = 50; //sets max chirp length, 50 to demo text formating
let createdAt = moment().calendar(); //timestamps

// Sweet Alert code
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

// inherit features by exteding react's component class
class App extends React.Component {

    constructor(props) {
        super(props);

        // unlike useState, in a class "ALL" state is in "ONE" object
        this.state = {
            chirp: '', //indiv chirp string
            chirps: [], //chirp array
            username: '', //username
            createdAt //timestamp
        };

    
    }

    //component lifecycle method

    // This is our starting state        
    componentDidMount() {

        setTimeout(() => {

            this.setState({

                chirps: [...this.state.chirps, 
                    {username: "Simon", id: uuidv4(), chirp:"aha omg computers are cool", createdAt: "random time in the past"},
                    {username: "Luke", id: uuidv4(), chirp:"lol omg Y2K is coming!", createdAt: "12/31/1999"},
                    {username: "Andrew", id: uuidv4(), chirp:" don't forget to berate your users!lmao", createdAt: Date.now() +" seconds ago"},  
                ]
            });
        
        }, 2000);
        
    }


    
        // submitbutton handle
        handleSubmit(e) {

            e.preventDefault();
            const newChirp = {

            }
                this.setState({
                    chirp: '',   //sets chirp string
                    username: '', //sets username
                    chirps: [{ createdAt: this.state.createdAt, username: this.state.username, id: uuidv4(), chirp:this.state.chirp}, ...this.state.chirps  ] //creates array of chirps with initial chirps spread at the end of array

                    });

                    console.log(`username ${this.state.username}`);
                    console.log(`chirp: ${this.state.chirp}`);
                    console.log(this.state.chirps);
                    console.log(this.state.createdAt);


                    Toast.fire({
                        icon: 'success',
                        title: 'Chirp successful! 🕊'
                      })

        }



    render() {
        return (
            
            <main className="container">

                <section className="row justify-content-center mt-5">

                    <div className="col-md-7">
                            <div>
                                <h1 class="my-2">👋 Hello! Welcome to Chirper!🐦  </h1>
                            </div>

                            <form action="" className="form-group">

                                <div>
                                        <label class ="my-2" className="text-lg"> Tell everyone what you think...because we care 
                                        </label>
                                </div>

                                <>

                                {/* input Username */}
                                <input class="my-2" 
                                    value= {this.state.username} 
                                    onChange = {e => this.setState({username: e.target.value})} 
                                    className="form-control" type="text-box" placeholder ="@username"  /> 
                                </>

                                {/* input chirp  */}
                                <input 
                                    value = {this.state.chirp}
                                    onChange = {e => this.setState({chirp: e.target.value})}
                                    className="form-control" placeholder ="What's on your mind?🤔" 
                                    maxLength={maxLength}/>

                                    <label className="text-sm" class="bg-light m-2 text-secondary" 
                                    
                                    className={this.state.chirp?.length < maxLength-10 ? "text-success" : "text-warning" }>Characters = {this.state.chirp.length}/{maxLength}</label>
                                        
                                        {/* submite button */}
                                    <div>  
                                        <button onClick= {e => this.handleSubmit(e)} type="button" className="btn-lg btn-primary my-2">Click to Chirp</button>
                                    </div>
                            </form>
                    </div>

                </section>



            <section className="row justify-content-center mt-3">
                <div className="col-md-6">
                    <ul className="list-group">

                        {this.state.chirps.map(chirp => (

                            <div class="card my-2 ">
                                <div class=" shadow-lg" className="card">
                                    <div className="card-header bg-info">  @{chirp.username}</div>

                                        <li className="list-group-item" key={`chirp-${chirp.id}`}> 
                                            <div class ="blockquote m-2" className="card-body">
                                                    <p>
                                                        {chirp.chirp}
                                                    </p>

                                                    <footer class="blockquote-footer my-1">Created: {chirp.createdAt} 
                                                    </footer>

                                                    <footer class="blockquote-footer my-1">ID: {chirp.id} 
                                                    </footer>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                                
                        ))}
                                                    
                        </ul>
                    </div>
                </section>

            </main>


        );
    }

}

export default App;


            
            
            
            



                                    
                                    
                              
                                    



