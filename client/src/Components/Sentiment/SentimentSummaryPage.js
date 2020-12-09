import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
//import Header from '../../common/Header'
//import { fetchSentimentSummary } from '../../Apis/fetchSentimentSummary'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



const getMuiTheme = () => createMuiTheme({
  overrides: {
    MUIDataTableBodyRow: {
      root: {
        "&:nth-child(odd)": {
          backgroundColor: "#f2f2f2"
        }
      }
    },
    MUIDataTableToolbar: {
      root: {
        backgroundColor: "#4747d1",
        color: "#ffffff",
      }
    },
    MUIDataTableHeadCell: {
      root: {
        "&:nth-child(odd)": {
          backgroundColor: "#6666ff",
          color: "#ffffff",
        },
        "&:nth-child(even)": {
          backgroundColor: "#6666ff",
          color: "#ffffff",
                  }
      }
    }

  }
})

class SentimentSummaryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      summaryDataList:[]   
    }
  }



  componentDidMount() {
 console.log(JSON.parse(sessionStorage.getItem("userData")));
 this.state.summaryDataList = (JSON.parse(sessionStorage.getItem("userData"))).records;
 this.setState(this.state);
    }

    render() {
    const options = {
      filterType: 'checkbox',
      selectableRows: false,
    };

    const columns = [

      {
        name: "input_text",
        label: "Search Text",
        options: {
          filter: true
        }
      },
      {
        name: "ADD_DATE",
        label: "Search Date",
        options: {
          filter: true
        }
      },
      {
        name: "sentiment_score",
        label: "Score",
        options: {
          filter: true
        }
      }

    ];

    return (
     
          <div style={{"width":"100%","height":"960px","backgroundColor": "#008ae6"}}>
            <div style={{"width":"100%","height":"100px","color":"white","backgroundColor": "#0040ff", "text-align": "center","padding-top": "2 0px","padding-bottom": "80px"}}>
                <br></br>
                <h2> Welome to the Sentiment Analysis Page !    </h2>   
            </div>
            <br></br>
            <div style={{ margin: "40px 96px" }}>
            <MuiThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={"Sentiment Analysis Summary"}
                data={this.state.summaryDataList}
                columns={columns}
                options={options}
              />
              </MuiThemeProvider>
            </div>
         
        </div>
     
    );
  }
}

export default SentimentSummaryPage;
