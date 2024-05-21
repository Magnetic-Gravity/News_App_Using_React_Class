import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;
  apiKey = '9183e2121dc94c48a1a3bd15fde0ad48';

  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/"             element={<News key="general"       setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"       />} />
            <Route path="business"      element={<News key="business"      setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business"      />} />
            <Route path="entertainment" element={<News key="entertainment" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="general"       element={<News key="general"       setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"       />} />
            <Route path="health"        element={<News key="health"        setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health"        />} />
            <Route path="science"       element={<News key="science"       setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science"       />} />
            <Route path="sports"        element={<News key="sports"        setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports"        />} />
            <Route path="technology"    element={<News key="technology"    setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology"    />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
