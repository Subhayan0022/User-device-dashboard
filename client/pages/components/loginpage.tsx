
function LoginPage() {
  return (
    <div className="flex flex-col w-full h-5/6">
      <div className="flex w-full h-2/6 ">
        <h1 className="m-auto text-5xl font-bold text-white text-center">Log In to see your devices.</h1>
      </div>
      <div className="flex flex-col w-full h-full ">
        <div className="flex flex-col w-full h-full  justify-center ">
          <div className="flex w-full h-1/6">
            <input className="input-boxes" type="text" placeholder="Username" />
          </div>
          <div className="flex w-full h-1/6 mt-10 ">
            <input className="input-boxes" type="text" placeholder="Password" />
          </div>
        </div>
        <div className="flex flex-col w-full h-full ">
          <button onClick={() => { 

          }} className="buttons">LOG IN</button>
          <h1 className="m-auto text-2xl font-bold text-white mb-18">Don't have an account?</h1>
          <button onClick={() => { 

          }} className="buttons">REGISTER</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage