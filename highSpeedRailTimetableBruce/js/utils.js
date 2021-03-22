export function toggleDisplay(b1, b2, b3, b4) {
  b1.style.display = "flex"
  b2.style.display = "none"
  b3.style.background = "#3957f2";
  b3.style.boxShadow = "1px 3px 5px 2px #edeefa";
  b3.style.borderRadius = "10px";
  b4.style.background = "0";
  b4.style.boxShadow = "0";
  b4.style.borderRadius = "0";
}