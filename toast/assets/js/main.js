const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const successBtn = $(".btn--success");
const warningBtn = $(".btn--warning");
// const errorBtn = $(".error-btn");
// const infoBtn = $(".info-btn");
const toastBox = $("#toast");


const app = {
  toast: function ({
    title="Hi!",
    message="Welcome to my profile!",
    type="success",
    duration=3000,
  }) {
    if (toastBox) {
      const toast = document.createElement("div");
      toast.classList.add("toast");

      const delay = (duration/1000).toFixed(1);
      toast.style.animation = `slideInLeft ease 1s,fadeOut linear 1s ${delay}s forwards`

      const icons = {
        success: "fa-solid fa-circle-check",
        warning: "fa-sharp fa-solid fa-circle-exclamation",
        error: "fa-solid fa-bug",
        info: "fa-solid fa-circle-info",
      };
      const icon = icons[type];
      toast.innerHTML = `
        <div class="toast">
            <div class="toast--${type}">
                <i class="${icon}"></i>
                <div class="toast__text">
                    <h1>${title}</h1>
                    <h4>${message} </h4>
                </div>
                <i class="fa-solid fa-xmark close"></i>
            </div> 
        </div>`;
      toastBox.appendChild(toast);
      const autoRemove = setTimeout(function () {
        toastBox.removeChild(toast);
      }, duration + 1000);
      toast.onclick = function (e) {
        if(e.target.closest('.close')){
            toastBox.removeChild(toast);
            clearTimeout(autoRemove)
        }
      }
    }
  },
  showSuccess: function () {
    this.toast({
      title: "Success",
      message: "Congratulations!",
      type: "success",
      duration: 5000,
    });
  },
  showWarning: function () {
    this.toast({
      title: "Warning",
      message: "Something went wrong",
      type: "warning",
      duration: 3000,
    });
  },
  showError: function () {
    this.toast({
      title: "Error",
      message: "Something went wrong",
      type: "error",
      duration: 3000,
    });
  },
  showInfo: function () {
    this.toast({
      title: "Info",
      message: "Something went wrong",
      type: "info",
      duration: 5000,
    });
  },
  handleToast: function () {
    successBtn.onclick = function () {
      app.showSuccess();
    };

    warningBtn.onclick = function () {
      app.showWarning();
    };

    errorBtn.onclick = function () {
      app.showError();
    };

    infoBtn.onclick = function () {
      app.showInfo();
    };


  },
  start: function () {
    this.handleToast();
    this.toast({});
  },
};

app.start();