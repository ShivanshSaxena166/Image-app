import React from 'react';
import SearchBar from './SearchBar' 
import axios from 'axios'
class App extends React.Component
{
    state = { images:[] }
    async onSearchSubmit(term)
{
    console.log(term);
   const response= await  axios.get('https://api.unsplash.com/search/photos',{
params:{query:term},   
headers:{
    Authorization:'Client-ID O2Fs_p35SpnZvx7sp_TYC4rUPm1ZbGOmWI3zuOTGnz4'
}

    })
    this.setState({images:response.data.results})
}    
    render(){
return(<div className="ui container" style={{marginTop:'10px'}}>
    <SearchBar onSubmit={this.onSearchSubmit}/>
    Found:{this.state.images.length} images

</div>)
}}
export default App;