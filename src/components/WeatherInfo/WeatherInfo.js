import React from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import './WeatherInfo.css';

const WeatherInfo = ({data}) => {
    return (
        <div className='App'>
            <div className='WeatherInfo'>
                <TextField fullWidth id="standard-read-only-input" InputLabelProps={{style: { color: 'red' },readOnly: true}} label="Celsius"  value={data.data && data.data.current && data.data.current.temp_c ? data.data.current.temp_c: 0} defaultValue="0" />
                <br />
                <TextField fullWidth id="standard-read-only-input" InputLabelProps={{style: { color: 'red' }, readOnly: true}} label="Fahrenheit" value={data.data && data.data.current && data.data.current.temp_f ? data.data.current.temp_f : 0} defaultValue="0" />
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>({ data:state.data })

export default connect(mapStateToProps)(WeatherInfo);
