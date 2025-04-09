"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Botoes from "@/app/components/Botoes";

export default function Home() {
    return (
    <div className={styles.page}>
      <h1>Calculadora</h1>
      <Botoes valor={1} onClick={() => console.log("1")} > C </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > CE </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 7 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 8 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 9 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > X </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>
      <Botoes valor={2} onClick={() => console.log("2")} > 1 </Botoes>

    </div>
  );
}