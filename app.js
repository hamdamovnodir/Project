window.addEventListener("load", function () {
  let cart = this.document.querySelectorAll(".cart");
  let plus = this.document.querySelectorAll(".plus");
  let num = this.document.querySelectorAll(".num");
  let minus = this.document.querySelectorAll(".minus");
  let price = this.document.querySelector(".cost2 h5 ");
  let buttons = this.document.querySelectorAll(".buttons");
  let number = this.document.querySelector(".number button");
  let num2 = this.document.querySelectorAll(".number h5");
  let buttons2 = this.document.querySelectorAll(".buttons2");
  let number2 = this.document.querySelector(".number2 button");
  let btn2 = this.document.querySelectorAll(".button2 button");
  let btn3 = this.document.querySelectorAll(".button3 button");
  let btn4 = this.document.querySelectorAll(".button4 button");
  let buttons3 = this.document.querySelectorAll(".buttons3");
  let number3 = this.document.querySelector(".num4 button");
  let butn = this.document.querySelector(".butn button");
  butn.addEventListener("click", () => {
    this.location.reload();
  });
  for (let i = 0; i < cart.length; i++) {
    plus[i].addEventListener("click", () => {
      if (num[i].innerHTML < 10) {
        num[i].innerHTML++;
        minus[i].classList.remove("opacity");
        price.innerHTML =
          +price.innerHTML + +cart[i].getAttribute("data-price");
        num2[i].innerHTML = num[i].innerHTML;
      }
    });
    minus[i].addEventListener("click", () => {
      if (num[i].innerHTML > 0) {
        num[i].innerHTML--;
        price.innerHTML = price.innerHTML - cart[i].getAttribute("data-price");
        num2[i].innerHTML = num[i].innerHTML;
      }
    });
  }

  for (let i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener("click", () => {
      if (num[i].innerHTML != 0) {
        buttons[i].style.display = "block";
      }
    });
  }
  number.addEventListener("click", () => {
    this.location.reload();
  });
  for (let i = 0; i < btn3.length; i++) {
    btn3[i].addEventListener("click", () => {
      if (num[i].innerHTML != 0) {
        buttons2[i].style.display = "block";
      }
    });
    number.addEventListener("click", () => {
      this.location.reload();
    });
  }
  for (let i = 0; i < btn4.length; i++) {
    btn4[i].addEventListener("click", () => {
      if (num[i].innerHTML != 0) {
        buttons3[i].style.display = "block";
      }
    });
    number.addEventListener("click", () => {
      this.location.reload();
    });
  }
  number.addEventListener("click", () => {
    buttons.classList.add("opacity");
  });

  number2.addEventListener("click", () => {
    buttons2.classList.add("opacity");
  });

  number3.addEventListener("click", () => {
    buttons3.classList.add("opacity");
  });
});

window.addEventListener("load", function () {
  let icon = this.document.querySelector(".icon i");
  let manuText = this.document.querySelector(".main_text");
  let maincard = this.document.querySelector(".main_card h1 ");
  let maincard2 = this.document.querySelector(".main_card p ");
  let button = this.document.querySelector(".button  a ");
  let text2 = this.document.querySelector(".text h2 ");
  icon.addEventListener("click", () => {
    text2.classList.add("active2");
    manuText.classList.add("active");
    icon.classList.add("opacity");
    maincard.classList.add("opacity2");
    maincard2.classList.add("opacity2");
    button.classList.add("opacity2");
  });
  icon.addEventListener("dblclick", () => {
    text2.classList.remove("active2");
    manuText.classList.remove("active");
    icon.classList.remove("opacity");
    maincard.classList.remove("opacity2");
    maincard2.classList.remove("opacity2");
    button.classList.remove("opacity2");
  });
  var text = new Text('#text', {
    strings: ['csdkc'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true,
    loop: true
  });
  // let manu = text2.innerHTML;
  // text2.innerHTML = " ";

  // let i = 0;
  // setInterval(() => {
  //   text2.innerHTML += manu[i];
  //   i++;
  // }, 50);
 
    
});
