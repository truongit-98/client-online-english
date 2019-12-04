import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
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
import VocabularySearch from '../components/Vocabulary/VocabularySearch';
import ListVocabulary from '../components/Vocabulary/ListVocabulary';

class RouterUrl extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vocabulary/" exact component={Vocabulary} />
        <Route path="/ListVocabulary/" exact component={ListVocabulary} />
        <Route path="/DetailVoca/:topicName" exact component={DetailVoca} />
        <Route path="/TestToeic/" exact component={TestToeic} />
        <Route path="/TestToeicDetail/" exact component={TestToeicDetail} />
        <Route path="/grammar/" exact component={Grammar} />
        <Route path="/GrammarDetail/" exact component={GrammarDetail} />
        <Route path="/Music" exact component={Music} />
        <Route path="/Music/:songID" exact component={MusicDetail} />
        <Route path="/Search" exact component={VocabularySearch} />
        <Route path="/SigIn/" exact component={SigIn} />
        <Route path="/SigUp/" exact component={SigUp} />
      </Switch>
    );
  }
}

export default RouterUrl;