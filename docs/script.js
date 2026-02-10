document.addEventListener("DOMContentLoaded", () => {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const sum = Number(a.value) + Number(b.value);
    result.textContent = `Résultat : ${sum}`;
  });
});
