import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';

const App = (props) => (
  <div>
    <h1>React Router Tutorial</h1>
    <ul>
      <li><IndexLink to="/" activeStyle={styles.active}>Home</IndexLink></li>
      <li><Link to="/about" activeStyle={styles.active}>About</Link></li>
      <li><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
      <li><Link to="/user" activeStyle={styles.active}>User</Link></li>
      <li><Link to="/contacts" activeStyle={styles.active}>Contacts</Link></li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
