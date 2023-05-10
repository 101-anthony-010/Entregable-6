import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { logOut, loginUser } from "../store/slices/userInfo.slice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const {token} = useSelector(store => store.userInfoSlice)

  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(loginUser(data))
  }

  const handleClickLogOut = () => {
    dispatch(logOut())
  }
  return (
    <main className="bg-gray-100 grid place-content-center">
    {
      token ? (
        <section>
          <h1>User logged</h1>
          <button onClick={handleClickLogOut}>salir</button>
        </section>
      ) : (
        <form onSubmit={handleSubmit(submit)} className="bg-white p-4 rounded-md max-w-[320px]">
        <h2 className="text-2xl font-semibold">Welcome! Enter your email and password to continue</h2>
        <section className="bg-blue-100 p-3 my-4 rounded-md">
          <h3 className="text-center">Test data</h3>
          <div>
            <i className="bx bx-envelope"></i>
            <span>john@gmail.com</span>
          </div>
          <div>
            <i className="bx bx-lock-alt"></i>
            <span>john1234</span>
          </div>
        </section>
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input className="border border-gray-300 p-1 outline-none rounded-md" id="email" type="email" {...register("email", {required: true})}/>
        </div>
        <div className="grid gap-2">
          <label htmlFor="password">Password</label>
          <input className="border border-gray-300 p-1 outline-none rounded-md" id="password" type="password" {...register("password", {required:true})}/>
        </div>
        <button>Login</button>
        <span>Don't have an account?<Link to="#"> Sign up</Link> </span>
      </form>
      )
    }
      
    </main>
  )
}

export default Login
