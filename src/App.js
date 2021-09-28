import logo from './logo.svg';
import './App.css';
// import { withAuthenticator } from '@aws-amplify/ui-react'
import { withAuthenticator } from 'aws-amplify-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Changed
      </header>
    </div>
  );
}

// export default withAuthenticator(App)
export default withAuthenticator(App , true)
