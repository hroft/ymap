import React, { Component } from "react";
import "./App.css";
import Maps from "./Component/Maps/Maps";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data_a: [],
    };
  }

// function setPointer(data){
//  return (
   
//    Object.keys(data.rows.state_1.features) =>this.setState({data_a})
//  )
// }

  componentDidMount() {
    fetch('./main.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
   }


  render() {
    return (
      <div className="App container-fluid">
          <div className="head_wrap row">
            <div className=" col text-left">
            <a href="#">
              <i className="fa fa-fire" />
              <span>риски пб</span>
              </a>
              <div className="text">
              <span>региональная информационная система</span>  
              <br /> 
              <span> контроля индикаторов пожарной безопасности</span>
              </div>
            </div>
            <div className=" col text-right">
              <a href="#!">
                <i className="fa fa-bars" nc="" />
              </a>
            </div>
          </div>

        <div className="row navs">
           <span className="col btn-danger">Онлаин мониторинг</span>
           <span className="col btn-danger">Компании</span>
           <span className="col btn-danger">Авторизация</span>
        </div>
        <div className="row">
          <Maps  data={this.state.data}/>
          {console.log(this.state.data)}
        </div>
        <footer>подвал</footer>
      </div>
    );
  }
}

export default App;
