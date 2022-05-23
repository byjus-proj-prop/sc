import * as React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import db from '../config'


var present = [];
var absent = [];
var dataread;

export default class Summary extends React.Component {
  constructor() {
    super();
    this.ret = "";
    this.ret2 = "";
    this.state = {
      present: [],
      absent: []
    }
  }

  read = () => {

    db.ref('class').on('value', (data) => {
      dataread = data.val();
    })

    var nd = new Date();
    var dd = nd.getDate();
    var mm = nd.getMonth() + 1;
    var yy = nd.getFullYear();
    
     if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    var today = dd + '-' + mm + '-' + yy;

    for(var i in dataread) {
      if(dataread[i]["today"] === "present") {
        present.push(dataread[i]);
      }
      if(dataread[i]["today"] === "absent") {
        absent.push(dataread[i]);
      }
    }

    console.log(today)
    present.sort((a, b) => {
      return a.roll_no - b.roll_no
    })

    absent.sort((a, b) => {
     return a.roll_no - b.roll_no
    })
    
    this.setState({
      present: present,
      absent: absent
    })

  }

  componentDidMount() {
    this.read();
  }
  
  rendernp=(z)=>{
      this.ret = "";
      for(let i =0; i < this.state.present.length; i++) {
        this.ret +=this.state.present[i].name+": "+ this.state.present[i].today+"\n";
        console.log(this.state.present)
      }
        this.ret2 = "";
      for(let i =0; i < this.state.absent.length; i++) {
        this.ret2 +=this.state.absent[i].name+": "+ this.state.absent[i].today+"\n";
        console.log(this.state.absent)
      }
     
    console.log(this.state.present.length)
  }
  render() {
    this.rendernp();
    return(
      <View>
        <Text style={st.headerpres}>Presente</Text>
        <Text>{this.ret}</Text>

        <Text style={st.headerabs}>Ausente</Text>
        <Text>{this.ret2}</Text>
      </View>
    )
  }
}


var st = StyleSheet.create({
  headerpres : {
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 30,
    backgroundColor: 'green',    
  },

  headerabs : {
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop:20,
    marginBottom: 30,
    backgroundColor: 'red',    
  },

  normal: {
    textAlign:'center',
    fontSize:20,
    fontFamily:"cursive",
    fontWeight:"bold"
  }
})