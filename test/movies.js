/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log('fetch data: ');
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        this.setState({  
          dataSource: this.state.dataSource.cloneWithRows(res.movies),
          loaded: true,
        });
      })
      .done();
  }
  _onPress() {
    console.log(1);
  }

  render() {
    if(!this.state.loaded) return this.renderLoadingView();
    return (
      <ListView 
        dataSource = {this.state.dataSource}
        renderRow = {this.renderMovie.bind(this)}
        style = {styles.listView} />
    );
  }

  renderMovie(movie) {
    let self = this;
    return (
      <TouchableOpacity onPress={this._onPress.bind(this)}>  
        <View style={styles.container2}>
          <Image 
            style={styles.thumbnail} 
            source={{ uri: movie.posters.thumbnail }} 
          />
          <View style={styles.rightContainer}>
            <Text style={styles.move_title}>{movie.title}</Text>
            <Text style={styles.move_year}>{movie.year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  renderLoadingView() {
    return(
      <View style={styles.container}>
        <Text style={styles.loading}>Loading movies...</Text>
      </View>
    );
  }
}

class Movie extends Component {
  constructor(props) {
    super(props);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingBottom: 4,
    marginTop: 8
  },

  rightContainer: {
    flex: 1
  },
  move_title: {
    fontSize: 20,
    marginBottom: 8,
   
  },
  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    width: 53,
    height: 81,
    resizeMode: 'stretch',
    marginLeft: 10,
    marginRight: 10,
  },
  loading: {
    fontSize: 30
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('MyProject', () => MyProject);