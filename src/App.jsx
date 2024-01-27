import  { Component } from "react";
import FoodData from "./Components/FoodData";
import FoodBox from "./Components/FoodBox";
import './App.css'
import Search from "./Components/Search";

export default class App extends Component {
constructor(){
  super()
  this.state={
    searchValue:""
  }
}


handleSearch=(info)=>{
this.setState({searchValue:info})
}




  render() {
    return (
      <div>


<Search handleSearch={this.handleSearch}/>
        {
          FoodData.filter((el)=>{
            if(this.state.searchValue==""){
              return el
            }else if(el.name.toLowerCase().includes(this.state.searchValue.toLowerCase())){
              return el
            }
          }).map((el) => {
          return (
            <div key={el.id}>
              <FoodBox food={el}/>
            </div>
          );
        })
        }
      </div>
    );
  }
}