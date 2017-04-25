import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event){
    this.setState({ term: event.target.value }) //nutny bind kvuli this
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} //callback
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch); //akce spadne k reduceru
}

export default connect(null, mapDispatchToProps)(SearchBar);
