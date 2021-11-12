
  const btns = document.querySelectorAll(".btn");
  const display = document.querySelector("#display") 
  let count=0; 
  btns.forEach(function(btn)
  {
    // btns.forEach or [...btns].forEach (getElementByClassName)
    btn.addEventListener("click", function (e) {
      const styles = e.target.classList;
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }

      if (count > 0) {
        display.style.color = "#26de81";
      } else if (count < 0) {
        display.style.color = "red";
      } else {
        display.style.color = "yellow";
      }
      display.textContent = count;
    })
  }
  )

