import '@passageidentity/passage-elements/passage-auth';
import '../styles/loginpage.css';
import person from '../assets/2.png';
import wordbubble from '../assets/wordbubble.png';

function Login() {
  return (
    <div className='login'>
      <img src={person} />
      <div className='passage'>
        <passage-auth
          app-id='e0EYlcepCkHve0EiiXrntHDA'
        ></passage-auth>
      </div>
    </div>
  );
}
export default Login;
