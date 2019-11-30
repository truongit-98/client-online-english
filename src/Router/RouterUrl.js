import React,{Component} from 'react';
import {Route, Switch } from "react-router-dom";
import Home from '../components/Home/Home';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import Grammar from '../components/Grammar/Grammar';
import DetailVoca from '../components/DetailVocabulary/DetailVoca';
import TestToeic from '../components/TestToeic/TestToeic';
import TestToeicDetail from '../components/TestToeicDetail/TestToecDetail';
import Music from '../components/Music/Music';
import MusicDetail from '../components/MusicDetail/MusicDetail';
import GrammarDetail from '../components/GrammarDetail/GrammarDetail';
import SigIn from '../components/Account/SigIn';
import SigUp from '../components/Account/SingUp';

class RouterUrl extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vocabulary/" exact component={Vocabulary} />
        <Route path="/DetailVocabulary/" exact component={DetailVoca} />
        <Route path="/TestToeic/" exact component={TestToeic} />
        <Route path="/TestToeicDetail/" exact component={TestToeicDetail} />
        <Route path="/grammar/" exact component={Grammar} />
        <Route path="/GrammarDetail/" exact component={GrammarDetail} />
        <Route path="/Music/" exact component={Music} />
        <Route path="/MusicDetail/" exact component={MusicDetail} />
        <Route path="/SigIn/" exact component={SigIn} />
        <Route path="/SigUp/" exact component={SigUp} />
      </Switch>
    );
  }
}

export default RouterUrl;