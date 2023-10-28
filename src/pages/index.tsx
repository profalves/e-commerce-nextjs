import React from "react";
import Link from "next/link";

const App: React.FC = () => {
    return (
        <div>
            <h1>Minha Aplicação de E-Commerce</h1>
            <Link href="/home">Ir para a página inicial</Link><br />
            <Link href="/login">Faça login</Link><br/>
            <Link href="/cadastro">Crie uma conta</Link><br />
        </div>
    );
};

export default App;