import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

interface FormData {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

const Login = () => {
    const {register, handleSubmit, formState: { errors }, } = useForm<FormData>({
        resolver: yupResolver(schema) as any,
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data); 
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "E-mail é obrigatório", })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        type="password"
                        {...register("password", { required: "Senha é obrigatória", })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="button" onClick={Login}>
                    Entrar
                </button>
            </form>
            <Link href="/register">Não tem uma conta? Cadastre-se</Link>
        </div>
    );
};

export default Login;
