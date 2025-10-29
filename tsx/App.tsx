import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// 1. Componente Mensagem
function Mensagem({ nome }: { nome: string }) {
  return <Text style={styles.titulo}>Bem-vindo ao meu site {nome}</Text>;
}

// 2. Contador simples
function Contador() {
  const [cont, setCont] = useState(0);

  return (
    <View style={styles.box}>
      <Text style={styles.texto}>Contador: {cont}</Text>
      <TouchableOpacity onPress={() => setCont(cont + 1)} style={[styles.botao, { backgroundColor: "green" }]}> 
        <Text style={styles.botaoTexto}>Aumentar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCont(cont - 1)} style={[styles.botao, { backgroundColor: "red" }]}> 
        <Text style={styles.botaoTexto}>Diminuir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCont(0)} style={[styles.botao, { backgroundColor: "black" }]}> 
        <Text style={styles.botaoTexto}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

// 3. Calculo de salário
function calcularAumento(salario: number, valor: number) {
  return salario + valor;
}

// 4. Calculo da média
function calcularMedia(n1: number, n2: number) {
  return (n1 + n2) / 2;
}

// 5. Área do Retângulo
function calcularAreaRetangulo(base: number, altura: number) {
  return base * altura;
}

// 6. Soma
function somar(a: number, b: number) {
  return a + b;
}

// 7. Subtração
function subtrair(a: number, b: number) {
  return a - b;
}

// 8. Multiplicação
function multiplicar(a: number, b: number) {
  return a * b;
}

export default function App() {
  const salario = calcularAumento(2000, 300);
  const media = calcularMedia(7, 9);
  const area = calcularAreaRetangulo(5, 10);
  const soma = somar(4, 6);
  const subtracao = subtrair(10, 3);
  const multi = multiplicar(4, 5);

  return (
    <View style={styles.container}>
      <Mensagem nome="Victor" />
      <Contador />

      <Text style={styles.texto}>Novo salário: R${salario}</Text>
      <Text style={styles.texto}>Média do aluno: {media}</Text>
      <Text style={styles.texto}>Área do retângulo: {area}</Text>
      <Text style={styles.texto}>Soma: {soma}</Text>
      <Text style={styles.texto}>Subtração: {subtracao}</Text>
      <Text style={styles.texto}>Multiplicação: {multi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 15,
  },
  texto: {
    fontSize: 18,
    marginBottom: 5,
  },
  box: {
    margin: 20,
    alignItems: "center",
  },
  botao: {
    padding: 10,
    marginVertical: 5,
    width: 120,
    alignItems: "center",
    borderRadius: 5,
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  }
});
