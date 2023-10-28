import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    cep: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    password: string;
    confirmPassword: string;
    privacyPolicy: boolean;
}

const schema = yup.object().shape({
    fullName: yup.string().required("Nome completo é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    phone: yup.string().min(9, "Telefone deve ter 9 números").required("Telefone é obrigatório"),
    cep: yup.string().length(8, "CEP deve ter 8 números").required("CEP é obrigatório"),
    address: yup.string().required("Endereço é obrigatório"),
    number: yup.string().required("Número é obrigatório"),
    complement: yup.string().required("Complemento é obrigatório"),
    neighborhood: yup.string().required("Bairro é obrigatório"),
    city: yup.string().required("Cidade é obrigatória"),
    state: yup.string().required("Estado é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem coincidir").required("Confirmação de senha é obrigatória"),
    privacyPolicy: yup.boolean().oneOf([true], "Aceitar as políticas de privacidade é obrigatório"),
});

const Register = () => {
    const {register, handleSubmit, formState: { errors }, } = useForm<FormData>({
        resolver: yupResolver(schema) as any,
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        /*  Enviar dados do formulário para o servidor ou realiza outras operações com os dados */
        console.log(data);
    };

        console.log({ errors });

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome completo:</label>
                    <input
                        type="text"
                        {...register("fullName", { required: "Nome completo é obrigatório",
                        })}
                    />
                    {errors.fullName && <p>{errors.fullName.message}</p>}
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        {...register("email", { required: "E-mail é obrigatório",
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="phone"
                        {...register("phone", { required: "Telefone é obrigatório",
                        })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>
                <div>
                    <label>Cep:</label>
                    <input
                        type="cep"
                        {...register("cep", { required: "CEP é obrigatório" })}
                    />
                    {errors.cep && <p>{errors.cep.message}</p>}
                </div>
                <div>
                    <label>Endereço:</label>
                    <input
                        type="address"
                        {...register("address", { required: "Endereço é obrigatório", })}
                    />
                    {errors.address && <p>{errors.address.message}</p>}
                </div>
                <div>
                    <label>Numero:</label>
                    <input
                        type="number"
                        {...register("number", { required: "Número é obrigatório", })}
                    />
                    {errors.number && <p>{errors.number.message}</p>}
                </div>
                <div>
                    <label>Complemento:</label>
                    <input
                        type="complement"
                        {...register("complement", { required: "Complemento é obrigatório", })}
                    />
                    {errors.complement && <p>{errors.complement.message}</p>}
                </div>
                <div>
                    <label>Bairro:</label>
                    <input
                        type="neighborhood"
                        {...register("neighborhood", { required: "Bairro é obrigatório", })}
                    />
                    {errors.neighborhood && (
                        <p>{errors.neighborhood.message}</p>
                    )}
                </div>
                <div>
                    <label>Cidade:</label>
                    <input
                        type="city"
                        {...register("city", { required: "Cidade é obrigatória", })}
                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </div>
                <div>
                    <label>Estado:</label>
                    <input
                        type="state"
                        {...register("state", { required: "Estado é obrigatório", })}
                    />
                    {errors.state && <p>{errors.state.message}</p>}
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        {...register("password", { required: "Senha é obrigatória", })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div>
                    <label>Confirmação de Senha:</label>
                    <input
                        type="password"
                        {...register("confirmPassword", { required: "Confirmação de senha é obrigatória", })}
                    />
                    {errors.confirmPassword && (
                        <p>{errors.confirmPassword.message}</p>
                    )}
                </div>
                <div>
                    <label>Politica de privacidade:</label>
                    <input
                        type="checkbox"
                        {...register("privacyPolicy", { required: "Aceitar as políticas de privacidade é obrigatório", })}
                    />
                    {errors.privacyPolicy && (
                        <p>{errors.privacyPolicy.message}</p>
                    )}
                </div>

                <button type="button" onClick={Register}>
                    Cadastrar
                </button>
            </form>
            <Link href="/login">Já tem uma conta? Faça login</Link>
        </div>
    );
};

export default Register;
