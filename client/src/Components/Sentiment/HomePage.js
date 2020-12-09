import React, { Component } from 'react'
import './HomePage.css'
import { fetchSentimentScore } from '../../Apis/fetchSentimentScore'
import { testcall } from '../../Apis/testcall'
import PropTypes from "prop-types";

class HomePage extends Component {

        constructor(props) {
          super(props);
          this.state = {
            searchText:"",
            searchScore:"",
          }
        }
        _handleChange = (event) => {
            console.log(event.target.value );
            this.setState({ searchText:event.target.value });
            document.getElementById("resultDiv").style.display = "none";

          };

          _postData =  async (e) => {
        var res = await fetchSentimentScore(this.state.searchText);
        console.log(res)
        if(res != null){
          const min = -5;
          const max = +5;
          const rand = Math.round(min + Math.random() * (max - min));      
             this.setState({ searchScore:rand }); //insert math.random
             document.getElementById("resultDiv").style.display = "block";
             var insertres = await testcall('user001',this.state.searchText,this.state.searchScore);
             console.log(insertres);
             sessionStorage.setItem("userData", JSON.stringify(insertres.data));
        }
      this.props.history.push('/summary');

    }


    render() { 
      return (
          <div style={{"width":"100%","height":"720px"}}>
            <div style={{"width":"100%","height":"100px","color":"white","backgroundColor": "#0040ff", "text-align": "center","padding-top": "2 0px","padding-bottom": "80px"}}>
                <br></br>
                <h2> Welome to the Sentiment Analysis Website !    </h2>   
            </div>
            <div style={{"width":"100%","height":"720px","backgroundColor": "#3EBDFF"}}>
            {/* <div style={{"width":"100%","height":"720px", "backgroundImage": 'url(require("./index.jpg"))'}}> */}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div style={{"width":"100%","text-align": "center","color":"white"}}>
                      {/* <label for="phone">Enter the text for sentiment analysis:</label> &nbsp;&nbsp; */}
                      <h3> Enter the text for sentiment analysis    </h3> 
                      <input type="text" id="searchText" name="searchText" placeholder="Enter the text" onChange={this._handleChange} value={this.state.searchText}/>
                      <br></br><br></br><br></br>
                      <button id="score" onClick={this._postData} key="score">Get Score</button>
  
                      
              </div>
              <div id="resultDiv" style={{"width":"100%","text-align": "center","display":"none"}}>
  
              <h2> The sentiment score for {this.state.searchText} is {this.state.searchScore}</h2>
              </div>
              </div>
          
          </div>
  
      );
  }
      }

 HomePage.contextTypes = {
  router: PropTypes.object
};  

export default HomePage;