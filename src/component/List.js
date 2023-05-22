import React, { PureComponent } from 'react'

class list extends PureComponent {

    state = {
        score: 5,
        data:[
            {
                id:1,
                name:"Neethika",
                age:22
            },
            {
                id:2,
                name:"Nishaga",
                age:19
            }
        ]
    };

    incrementScore = () => {
        this.setState({
            score: 10
        });
    };
  render() {
    console.log(this.state.score);
    return (
      <div>
        <ul>
            {
                this.state.data.map((value,index) => (
                    
                        <li key={value.id}> 
                            {value.id} - {value.name} - {value.age}
                        </li>
                    
                ))
            }
        </ul>
        <button onClick={this.incrementScore}>Score click</button>
      </div>
    )
  }
}

export default list;
