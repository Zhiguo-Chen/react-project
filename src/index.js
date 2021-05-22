import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Test } from './test1';
import { Root } from './page/root';
import DataMount from './state-props/DataMount';
import { State } from './state-props/State';
import { Parent } from './state-uplifting/Parent';
import { ControlledForm } from './form-related/controlled-form';
import {  Event } from './event/event';
import { MultiPickComponent } from './form-related/multi-pick';
import { TodoList } from './todolist/TodoList';
import { LifeTime } from './lifetime/lifetime01';
import { Context } from './context/context';
import { ContextRoot } from './context/ContextRoot';
import Hoc from './HOC/HocRoot';
import { PortalRoot } from './Portal/PortalRoot';
import SelfReduxRoot from './redux/self-redux/self-redux-root';
import TodoListRoot from './redux/todo-list/TodoListRoot';
import { Provider } from 'react-redux'
import store from './redux/todo-list/store'
import RouterRoot from './router/RouterRoot'
import RedirectComponent from './router/RedirectComponent'
import Auth from './router/Auth'
import ImmutableTest from './immutable/immutable.test'
import LazyLoad from './lazy-load/LazyLoad'
import Hooks from './hooks/Hooks.useState'
import UseEffectDemo from './hooks/Hooks.useEffect'

const Hi = ({name, width, green}) => {
  return <div>
    Hello <strong>{name}</strong>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    {5 + 10}
    'String'.toLowerCase()
<h2>{width}</h2>
  </div>
}

class MediaCard extends React.Component {
  render() {
    return (
      <div><h2>{this.props.title}</h2><p>{this.props.body}</p><img src={this.props.imageUrl}/></div>
    )
  }
}

// const MediaCard = ({title, body, imageUrl}) => {
//   return <div><h2>{title}</h2><p>{body}</p><img src={imageUrl}/></div>
// }

const Gate = ({isOpen}) => {
  return <div>{isOpen? 'open': 'close'}</div>
}

const Room = () => {
  const [isLit, setLit] = useState(false);
  return (
    <div className="room">
    the room is {isLit? 'lit': 'dark'}
    <br />
    <button onClick={() => setLit(!isLit)}>Lift </button>
    </div>
    );
}

// ReactDOM.render(<MediaCard title="Test" body="ABCDEFG" imageUrl="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3895630235,4212690360&fm=26&gp=0.jpg"/>, document.querySelector('#root'));
ReactDOM.render(
  <Provider store={store}>
    <UseEffectDemo />
  </Provider>,
document.querySelector('#root'));