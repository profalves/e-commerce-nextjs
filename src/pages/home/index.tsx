import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div>
            <h1>Olá!!! Seja bem-vindo(a) à Mafê Makeup!!!</h1>
            <Link href="/login">Fazer login</Link>
            <Link href="/cadastro">Cadastrar</Link>
        </div>
    );
};

export default Home;
