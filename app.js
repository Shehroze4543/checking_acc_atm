const sign_out_btn = document.querySelector(".sign-out");
const hide_content = document.querySelector("hidden-content");
const hide_login_screen = document.querySelector(".user-info");
const show_main_screen = document.querySelector(".account-container");
const user_name = document.querySelector(".user-name");
const user_pwd = document.querySelector(".user-pwd");
const login_btn = document.querySelector(".log-in-button");

const screen = document.querySelector(".screen");
let balance = [0];
screen.append(balance);

const screen2 = document.querySelector(".screen2");
const screen2_id = document.querySelector("#deposit-field").value;

// EVENT LISTENERS

sign_out_btn.addEventListener("click", user_log_out);

login_btn.addEventListener("click", function () {
  const user_name = document.querySelector(".user-name").value;
  const user_pwd = document.querySelector(".user-pwd").value;
  if (user_name === "Michael.Scott" && user_pwd === "1234") {
    user_login();
  } else if (user_name === "" && user_pwd === "") {
    alert("Please enter username or password");
  } else {
    alert(`Wrong username or password`);
  }
});

// FUNCTIONS
function user_login() {
  hide_login_screen.classList.add("hidden-content");
  show_main_screen.classList.remove("hidden-content");
}

function user_log_out() {
  show_main_screen.classList.add("hidden-content");
  hide_login_screen.classList.remove("hidden-content");
}

function option_btn() {
  let visible_text = document.querySelector(".btn-question1");

  if (visible_text.classList.contains("hide-visibility")) {
    visible_text.classList.remove("hide-visibility");
  } else {
    visible_text.classList.add("hide-visibility");
  }
}

function option_btn2() {
  let visible_text2 = document.querySelector(".btn-question2");

  if (visible_text2.classList.contains("hide-visibility")) {
    visible_text2.classList.remove("hide-visibility");
  } else {
    visible_text2.classList.add("hide-visibility");
  }
}
function option_btn3() {
  let visible_text3 = document.querySelector(".btn-question3");

  if (visible_text3.classList.contains("hide-visibility")) {
    visible_text3.classList.remove("hide-visibility");
  } else {
    visible_text3.classList.add("hide-visibility");
  }
}

////////////////// Deposit Function
function add_deposit() {
  const screen2_id = document.querySelector("#deposit-field").value;

  if (isNaN(screen2_id)) {
    alert(`Please Enter only Numbers`);
  } else {
    balance.push(Number(screen2_id));
    console.log(balance);

    let new_balance = balance.reduce(function (a, b) {
      return a + b;
    });

    screen.innerHTML = "";
    screen.append(new_balance);
    document.querySelector("#deposit-field").value = " ";
  }
}

////////////////// Withdraw Function
function withdraw() {
  const screen_id = document.querySelector("#withdraw-field").value;

  if (isNaN(screen_id)) {
    alert(`Please Enter only Numbers`);
  } else {
    balance.push(-Math.abs(Number(screen_id)));

    let new_balance2 = balance.reduce(function (acc, value) {
      let x = acc + value;
      if (x < 0) {
        console.log(balance);
        alert(
          `Sorry! You do not have sufficient balance to make this transaction`
        );
        balance.pop();
        return acc;
      } else {
        console.log(balance);
        balance.push[x];

        return acc + value;
      }
    });
    screen.innerHTML = "";
    screen.append(new_balance2);
    document.querySelector("#withdraw-field").value = " ";
  }
}
