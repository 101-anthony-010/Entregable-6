import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { registerUser } from "../store/slices/newUser.slice"

const DEFAULT_VALUES = {
  firstName : "",
  lastName : "",
  email : "",
  password : "",
  phone : ""
}

const Signup = () => {
  const {register, handleSubmit, reset} = useForm()

  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(registerUser(data))
    reset(DEFAULT_VALUES)
  }
  return (
    <main className="bg-gray-100 grid place-content-center text-gray-600">
      <form onSubmit={handleSubmit(submit)} className="bg-white p-4 rounded-md w-[300px]">
        <h2 className="text-2xl py-2  font-semibold">Sign up</h2>
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input {...register("email")} id="email" className="border p-1 px-3" type="email" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} id="firstName" className="border p-1 px-3" type="text" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} id="lastName" className="border p-1 px-3" type="text" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="password" className="border p-1 px-3" type="password" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone">Phone</label>
          <input {...register("phone")} id="phone" className="border p-1 px-3" type="number" />
        </div>
          <div className="grid gap-2 py-4">
            <button className="px-7 text-white py-2 bg-red-500 rounded-md">Sign up</button>
            <span className="text-xs">Already have an account?<Link className="text-blue-500" to="/login"> Sign up</Link> </span>
          </div>
      </form>
    </main>
  )
}

export default Signup
