import '@passageidentity/passage-elements/passage-auth';

const LoginPage = () => {
  return (
    <div className='login'>

        <passage-auth
          app-id={process.env.REACT_APP_PASSAGE_APP_ID}
        ></passage-auth>

    </div>
  );
};
export default LoginPage;
