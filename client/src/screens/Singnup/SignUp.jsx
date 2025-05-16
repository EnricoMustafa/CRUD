import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function SignUp() {
  const handleClickRegister = (values) => {
    axios
      .post("http://localhost:3001/signup", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        alert(response.data.msg);
      });
  };
  const validationRegister = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email valido")
      .required("Campo obrigatiorio"),
    password: yup
      .string()
      .min(8, "Senha deve conter 8 caracteres")
      .required("Campo obrigatorio"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais")
      .min(8, "Senha deve conter 8 caracteres")
      .required("Campo obrigatorio"),
  });

  return (
    <>
      <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleClickRegister}
          validationSchema={validationRegister}
        >
          <Form className="flex flex-col h-100 w-96 bg-white rounded-lg p-6 shadow-lg">
            <h1 className="text-center text-3xl">Sign Up</h1>
            <div className="flex  flex-col items-start mx-auto mt-3">
              <label className="font-semibold">Email</label>
              <Field
                name="email"
                type="Email"
                className="border rounded-lg bg-slate-200 w-60 p-1"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col items-start mx-auto mt-5">
              <label className="font-semibold">Password</label>
              <Field
                name="password"
                type="password"
                className="border rounded-lg bg-slate-200 w-60 p-1"
              />
              <ErrorMessage
                component="span"
                name="password"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col items-start mx-auto mt-5">
              <label className="font-semibold">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className="border rounded-lg bg-slate-200 w-60 p-1"
              />
              <ErrorMessage
                component="span"
                name="confirmPassword"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
              <button
                type="submit"
                className="bg-gray-900 text-white rounded-lg p-2 w-44 hover:bg-white hover:shadow-xl hover:text-gray-900"
              >
                Sign up
              </button>
              <p className="text-slate-400 mt-2 flex justify-center text-sm">
                <a
                  className="underline px-1 cursor-pointer hover:text-gray-800"
                  href="/"
                >
                  Sign in
                </a>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
