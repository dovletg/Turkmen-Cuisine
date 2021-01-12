function Login() {
  return (
    <form>
      <h1>Login to start creating your order!</h1>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" autoComplete="off" />
      <br/>
      <label htmlFor="user-pw">Password: </label>
      <input type="password" name="user-pw" id="user-pw" autoComplete="off" />
      <br/>
      <input type="button" value="Login"/>
    </form>
  )
}

export default Login;