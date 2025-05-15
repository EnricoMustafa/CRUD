import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
export default function Home() {

    const handleClickLogin = (values) => console.log(values);
    const validationLogin = yup.object().shape({
        email: yup
        .string()
        .email("Não é um email valido")
        .required("Campo obrigatorio"),
        password: yup
        .string()
        .min(8, "Senha deve conter 8 caracteres")
        .required("Campo obrigatorio"),
    })
  return (
    <>
        <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
            <Formik 
            initialValues={{}}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
            >

            <Form className="flex flex-col h-96 w-96 bg-white rounded-lg p-6 shadow-lg">
                <h1 className="text-center text-3xl">Sign in With</h1>
                <div className="flex  flex-col items-start mx-auto mt-5">
                    <label className="font-semibold">Email</label>
                    <Field name="email" type="email" className="border rounded-lg bg-slate-200 w-60 p-1"/>
                    <ErrorMessage
                    component="span"
                    name="email"
                    className="text-red-500"
                    />
                </div>

                <div className="flex flex-col items-start mx-auto mt-5">
                    <label className="font-semibold">Password</label>
                    <Field name="password" type="password" className="border rounded-lg bg-slate-200 w-60 p-1"/>
                    <ErrorMessage
                    component="span"
                    name="password"
                    className="text-red-500"
                    />
                    <a className="underline text-slate-400 text-sm cursor-pointer hover:text-gray-800" href="">Forgot your password?</a>
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                <button type="submit" className="bg-gray-900 text-white rounded-lg p-2 w-44 hover:bg-white hover:shadow-xl hover:text-gray-900">Sign in</button> 
                </div>
                <p className="text-slate-400 mt-5 flex justify-center text-sm" href="">Not a member? <a className="underline px-1 cursor-pointer hover:text-gray-800" href="/signup">Sign up now</a></p>
            </Form>
            </Formik>
        </div>
    </>
  )
}
