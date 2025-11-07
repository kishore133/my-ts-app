// main.ts - Real TypeScript file
const greet = (name: string): string => {
  return `Hello, ${name}! TypeScript is running perfectly from GitHub Pages.`;
};

const output = document.getElementById("output");
const btn = document.getElementById("btn");

if (output && btn) {
  btn.addEventListener("click", () => {
    output.textContent = greet("Kishore");
  });
}
