import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import "../styles/repositories.scss";


const repository = {
  name: "Teste",
  description: "Isso é um teste",
  link: "github.com/Joo-Dias",
};

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    // useEffect funciona como um gatilho
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
