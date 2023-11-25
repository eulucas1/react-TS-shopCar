import styles from "./Galeria.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from './Itens';

export default function Galeria() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Aqui você encontra os melhores
        </div>
      </header>
      <section className={styles.galeria}>
        <h3 className={styles.galeria__titulo}>Encontre seu carro:</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.galeria__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  )
}