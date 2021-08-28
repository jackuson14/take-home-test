import React, {useState} from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import {addData} from './redux/actions'
const locations = [
  {
    id:0,
    name: 'Kuala Lumpur'
  },
  {
    id:1,
    name: 'Singapore'
  }
];

const App = ({addData, data}) => {
  const history = useHistory();
  const [api, setApi] = useState('ff9f895b2e884d6680530135202710')
  const [location, setLocation] = useState({})

  const handleChangeLocation = (event) => {
    setLocation(event.target.value)
  }

  const handleChangeApi = (event) => {
    setApi(event.target.value)
  }

  const onHandleSubmit = async () => {
    try{
    await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${location}`)
      .then(res => res.json())
      .then(result => {
      console.log("🚀 ~ file: App.js ~ line 37 ~ onHandleSubmit ~ result", result)
      addData(result)
      history.push('/Weather');
      });
      
    }catch (e){
    console.log("🚀 ~ file: App.js ~ line 43 ~ onHandleSubmit ~ e", e)
      
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <TextField fullWidth required id="standard-required" InputLabelProps={{style: { color: 'red' ,strink:true}}} label="API Key" onChange={handleChangeApi} value={api} defaultValue="ff9f895b2e884d6680530135202710" />
        <br />
        <TextField
          required
          fullWidth
          InputLabelProps={{style: { color: 'red' ,strink:true}}}
          id="select-location"
          select
          label="Select"
          value={location}
          onChange={handleChangeLocation}
          helperText="Please select your city"
        >
          {locations.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <br />
        
        <Button fullWidth variant="contained" to="/weather" color="secondary" onClick={onHandleSubmit}>Submit</Button>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>({ data:state.data })

const mapDispatchToProps = {
  addData
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
