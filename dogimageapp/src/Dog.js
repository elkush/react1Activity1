//this is a template folder for you to move into your src folder after you have created a boilerplate
import React from "react";

export class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animal: "dog"};
    this.changeAnimal = this.changeAnimal.bind(this)
  }

  changeAnimal() {
 const newAnimal = this.state.animal==="dog" ? "cat" : "dog";
      this.setState({ animal: newAnimal }); 
  }

  render() {
    return (
      <div>
        {this.state.animal==="dog" ? <img 
          alt="dog"
          src="https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg"
        ></img> : <img 
        alt="dog"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"
      ></img>  }
        <button onClick={this.changeAnimal}>{this.state.animal==="dog" ? "I'm more of a cat person!" : "I'm more of a dog person!"} </button>
      </div>
    );
  }
}
