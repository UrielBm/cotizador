export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}
export function Calcularmarca(marca) {
  let incremento;
  if (marca === "americano") {
    incremento = 1.15;
  } else if (marca === "asiatico") {
    incremento = 1.05;
  } else if (marca === "europeo") {
    incremento = 1.3;
  }
  return incremento;
}
export function CalcularIncrementoPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}
