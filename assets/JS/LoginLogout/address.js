let index = parseInt(localStorage.getItem("index"));
document.querySelector(".hello .username").innerHTML = `${
  JSON.parse(localStorage.getItem("UsersInfo"))[index].lastNameUser
} ${JSON.parse(localStorage.getItem("UsersInfo"))[index].firstNameUser} !`;
document.querySelector(".hello .username").style.fontSize = "14px";
document.querySelector(".hello .username").style.fontWeight = "bold";
document.querySelector(".address-detail p .username").innerHTML = `${
  JSON.parse(localStorage.getItem("UsersInfo"))[index].lastNameUser
} ${JSON.parse(localStorage.getItem("UsersInfo"))[index].firstNameUser} !`;
document.querySelector(".address-detail p .username").style.fontSize = "14px";
document.querySelector(".address-detail p .username").style.fontWeight = "bold";
document.querySelector(".address-detail p .username").innerHTML = `${
  JSON.parse(localStorage.getItem("UsersInfo"))[index].lastNameUser
} 
${JSON.parse(localStorage.getItem("UsersInfo"))[index].firstNameUser}`;
document.querySelector(".address-detail p .phoneuser").innerHTML = `${
  JSON.parse(localStorage.getItem("UsersInfo"))[index].phoneUser
}`;
document.querySelector(".address-detail p .country").innerHTML = "Vietnam";
let email = JSON.parse(localStorage.getItem("UsersInfo"))[index].emailUser;
let address = JSON.parse(localStorage.getItem(email));
if (address === null) {
  localStorage.setItem(
    email,
    JSON.stringify([
      {
        index: 0,
        name: `${
          JSON.parse(localStorage.getItem("UsersInfo"))[index].lastNameUser
        } ${
          JSON.parse(localStorage.getItem("UsersInfo"))[index].firstNameUser
        }`,
        phone: `${
          JSON.parse(localStorage.getItem("UsersInfo"))[index].phoneUser
        }`,
        company: "",
        country: "Vietnam",
        city: "",
      },
    ])
  );
}
address = JSON.parse(localStorage.getItem(email));
localStorage.setItem("positionAddress", JSON.stringify(address.length - 1));
let nameUser = document.querySelector(".form-add-address #name");
let phoneUser = document.querySelector(".form-add-address #phone");
let companyUser = document.querySelector(".form-add-address #company");
let addressUser = document.querySelector(".form-add-address #address");
let countryUser = document.querySelector(".form-add-address #country");
let cityUser;
let boolName = false;
let boolPhone = false;
let boolCompany = false;
let boolAddress = false;
let checkName = () => {
  if (nameUser.value === "") {
    document.querySelector(
      ".form-add-address .name-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .name-error").style.color = "red";
    nameUser.style.border = "1px solid red";
    document.querySelector(".form-add-address .name-error").style.marginBottom =
      "16px";
    document.querySelector(".form-add-address .name-error").style.fontSize =
      "14px";
  } else if (!nameUser.value.match(/^[a-zA-Z ]+$/g)) {
    document.querySelector(
      ".form-add-address .name-error"
    ).innerHTML = `Thông tin điền cần chính xác !`;
    document.querySelector(".form-add-address .name-error").style.color = "red";
    nameUser.style.border = "1px solid red";
    document.querySelector(".form-add-address .name-error").style.marginBottom =
      "16px";
    document.querySelector(".form-add-address .name-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-add-address .name-error").innerHTML = "";
    document.querySelector(".form-add-address .name-error").style.color =
      "none";
    nameUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .name-error").style.marginBottom =
      "none";
    document.querySelector(".form-add-address .name-error").style.fontSize =
      "none";
    boolName = true;
  }
};

let checkPhone = () => {
  if (phoneUser.value === "") {
    document.querySelector(
      ".form-add-address .phone-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .phone-error").style.color =
      "red";
    phoneUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .phone-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .phone-error").style.fontSize =
      "14px";
  } else if (!phoneUser.value.match(/^0[0-9]{8,10}$/g)) {
    document.querySelector(
      ".form-add-address .phone-error"
    ).innerHTML = `Số điện thoại không tồn tại !`;
    document.querySelector(".form-add-address .phone-error").style.color =
      "red";
    phoneUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .phone-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .phone-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-add-address .phone-error").innerHTML = "";
    document.querySelector(".form-add-address .phone-error").style.color =
      "none";
    document.querySelector(
      ".form-add-address .phone-error"
    ).style.marginBottom = "none";
    phoneUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .phone-error").style.fontSize =
      "none";
    boolPhone = true;
  }
};

let checkCompany = () => {
  if (companyUser.value === "") {
    document.querySelector(
      ".form-add-address .company-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .company-error").style.color =
      "red";
    companyUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .company-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .company-error").style.fontSize =
      "14px";
  } else if (!companyUser.value.match(/^[A-za-z][A-za-z0-9 ]+$/g)) {
    document.querySelector(
      ".form-add-address .company-error"
    ).innerHTML = `Tên công ty không hợp lệ !`;
    document.querySelector(".form-add-address .company-error").style.color =
      "red";
    companyUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .company-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .company-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-add-address .company-error").innerHTML = "";
    document.querySelector(".form-add-address .company-error").style.color =
      "none";
    document.querySelector(
      ".form-add-address .company-error"
    ).style.marginBottom = "none";
    companyUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .company-error").style.fontSize =
      "none";
    boolCompany = true;
  }
};

let checkAddress = () => {
  if (addressUser.value === "") {
    document.querySelector(
      ".form-add-address .address-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .address-error").style.color =
      "red";
    addressUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .address-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .address-error").style.fontSize =
      "14px";
  } else if (
    !addressUser.value.match(/^[0-9 ]+\/[A-za-z ]+\/[a-zA-z0-9 ]+$/g)
  ) {
    document.querySelector(
      ".form-add-address .address-error"
    ).innerHTML = `Số nhà/Tên Đường/ Tên Quận!`;
    document.querySelector(".form-add-address .address-error").style.color =
      "red";
    addressUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .address-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .address-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-add-address .address-error").innerHTML = "";
    document.querySelector(".form-add-address .address-error").style.color =
      "none";
    document.querySelector(
      ".form-add-address .address-error"
    ).style.marginBottom = "none";
    addressUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .address-error").style.fontSize =
      "none";
    boolAddress = true;
  }
};
let checkCountry = () => {
  if (countryUser.value === "Vietnam") {
    document.querySelector(".form-add-address .VN").style.display = "block";
    cityUser = document.querySelector(".form-add-address .VN").value;
  } else {
    document.querySelector(".form-add-address .VN").style.display = "none";
  }
  if (countryUser.value === "Thailand") {
    document.querySelector(".form-add-address .TL").style.display = "block";
    cityUser = document.querySelector(".form-add-address .TL").value;
  } else {
    document.querySelector(".form-add-address .TL").style.display = "none";
  }
  if (countryUser.value === "United States") {
    document.querySelector(".form-add-address .USA").style.display = "block";
    cityUser = document.querySelector(".form-add-address .USA").value;
  } else {
    document.querySelector(".form-add-address .USA").style.display = "none";
  }
};
let checkAdd = () => {
  if (nameUser.value === "") {
    document.querySelector(
      ".form-add-address .name-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .name-error").style.color = "red";
    nameUser.style.border = "1px solid red";
    document.querySelector(".form-add-address .name-error").style.marginBottom =
      "16px";
    document.querySelector(".form-add-address .name-error").style.fontSize =
      "14px";
    boolName = false;
  } else if (!nameUser.value.match(/^[a-zA-Z ]{2,}$/g)) {
    document.querySelector(
      ".form-add-address .name-error"
    ).innerHTML = `Thông tin điền cần chính xác !`;
    document.querySelector(".form-add-address .name-error").style.color = "red";
    nameUser.style.border = "1px solid red";
    document.querySelector(".form-add-address .name-error").style.marginBottom =
      "16px";
    document.querySelector(".form-add-address .name-error").style.fontSize =
      "14px";
    boolName = false;
  } else {
    document.querySelector(".form-add-address .name-error").innerHTML = "";
    document.querySelector(".form-add-address .name-error").style.color =
      "none";
    document.querySelector(".form-add-address .name-error").style.marginBottom =
      "none";
    nameUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .name-error").style.fontSize =
      "none";
    boolName = true;
  }
  if (phoneUser.value === "") {
    document.querySelector(
      ".form-add-address .phone-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .phone-error").style.color =
      "red";
    document.querySelector(
      ".form-add-address .phone-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .phone-error").style.fontSize =
      "14px";
    boolPhone = false;
  } else if (!phoneUser.value.match(/^0[0-9]{8,10}$/g)) {
    document.querySelector(
      ".form-add-address .phone-error"
    ).innerHTML = `Số điện thoại không tồn tại !`;
    document.querySelector(".form-add-address .phone-error").style.color =
      "red";
    document.querySelector(
      ".form-add-address .phone-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .phone-error").style.fontSize =
      "14px";
    boolPhone = false;
  } else {
    document.querySelector(".form-add-address .phone-error").innerHTML = "";
    document.querySelector(".form-add-address .phone-error").style.color =
      "none";
    document.querySelector(
      ".form-add-address .phone-error"
    ).style.marginBottom = "none";
    phoneUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .phone-error").style.fontSize =
      "none";
    boolPhone = true;
  }
  if (companyUser.value === "") {
    document.querySelector(
      ".form-add-address .company-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .company-error").style.color =
      "red";
    companyUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .company-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .company-error").style.fontSize =
      "14px";
    boolCompany = false;
  } else if (!companyUser.value.match(/^[A-za-z][A-za-z0-9 ]+$/g)) {
    document.querySelector(
      ".form-add-address .company-error"
    ).innerHTML = `Tên công ty không hợp lệ !`;
    document.querySelector(".form-add-address .company-error").style.color =
      "red";
    companyUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .company-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .company-error").style.fontSize =
      "14px";
    boolCompany = false;
  } else {
    document.querySelector(".form-add-address .company-error").innerHTML = "";
    document.querySelector(".form-add-address .company-error").style.color =
      "none";
    document.querySelector(
      ".form-add-address .company-error"
    ).style.marginBottom = "none";
    companyUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .company-error").style.fontSize =
      "none";
    boolCompany = true;
  }
  if (addressUser.value === "") {
    document.querySelector(
      ".form-add-address .address-error"
    ).innerHTML = `Không được bỏ trống !`;
    document.querySelector(".form-add-address .address-error").style.color =
      "red";
    addressUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .address-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .address-error").style.fontSize =
      "14px";
    boolAddress = false;
  } else if (
    !addressUser.value.match(/^[0-9 ]+\/[A-za-z ]+\/[a-zA-z0-9 ]+$/g)
  ) {
    document.querySelector(
      ".form-add-address .address-error"
    ).innerHTML = `Số nhà/Tên Đường/ Tên Quận!`;
    document.querySelector(".form-add-address .address-error").style.color =
      "red";
    addressUser.style.border = "1px solid red";
    document.querySelector(
      ".form-add-address .address-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-add-address .address-error").style.fontSize =
      "14px";
    boolAddress = false;
  } else {
    document.querySelector(".form-add-address .address-error").innerHTML = "";
    document.querySelector(".form-add-address .address-error").style.color =
      "none";
    document.querySelector(
      ".form-add-address .address-error"
    ).style.marginBottom = "none";
    addressUser.style.border = "2px solid #eee";
    document.querySelector(".form-add-address .address-error").style.fontSize =
      "none";
    boolAddress = true;
  }
};

let checkAddSuccess = document.querySelector(".form-add-address .btn-add");
checkAddSuccess.addEventListener("click", (e) => {
  e.preventDefault();
  checkAdd();
  if (boolName && boolAddress && boolCompany && boolPhone) {
    let address = JSON.parse(localStorage.getItem(email));
    let position = parseInt(localStorage.getItem("positionAddress"));
    if (address.length <= 4) {
      address.push({
        index: position + 1,
        name: nameUser.value,
        phone: phoneUser.value,
        company: companyUser.value,
        country: countryUser.value,
        city: cityUser,
      });
      document.querySelector(".form-add-address .notification").innerHTML =
        "Thêm thành công,hãy nhấn f5 để có thể cập nhật địa chỉ !";
      document.querySelector(".form-add-address .notification").style.color =
        "green";
      document.querySelector(".form-add-address .notification").style.fontSize =
        "16px";
      document.querySelector(
        ".form-add-address .notification"
      ).style.marginBottom = "16px";
      ++position;
      localStorage.setItem("positionAddress", JSON.stringify(position));
      localStorage.setItem(email, JSON.stringify(address));
    } else {
      document.querySelector(".form-add-address .notification").innerHTML =
        "Không thể thêm tiếp địa chỉ!";
      document.querySelector(".form-add-address .notification").style.color =
        "red";
      document.querySelector(".form-add-address .notification").style.fontSize =
        "16px";
      document.querySelector(
        ".form-add-address .notification"
      ).style.marginBottom = "16px";
    }
  }
});

let closeTabAdd = () => {
  document.querySelector(".form-add-address").style.display = "none";
};

let openTabAdd = () => {
  document.querySelector(".form-add-address").style.display = "block";
};

let newAddress = JSON.parse(localStorage.getItem(email));
for (let i = 0; i < newAddress.length; i++) {
  document.querySelector(`.child-${i}`).style.display = "block";
  document.querySelector(`.child-${i} .username`).innerHTML =
    newAddress[i].name;
  document.querySelector(`.child-${i} .username`).style.fontWeight = "600";
  document.querySelector(`.child-${i} .phoneuser`).innerHTML =
    newAddress[i].phone;
  document.querySelector(`.child-${i} .country`).innerHTML =
    newAddress[i].country;
  document.querySelector(`.child-${i} .companyuser`).innerHTML =
    newAddress[i].company;
  document.querySelector(`.child-${i} .cityuser`).innerHTML =
    newAddress[i].city;
}
let closeFormEdit = () => {
  document.querySelector(".form-edit-address").style.display = "none";
};

let openFormEdit = () => {
  document.querySelector(".form-edit-address").style.display = "block";
};

let nameEdit = document.querySelector("#nameedit");
let phoneEdit = document.querySelector("#phoneedit");
let companyEdit = document.querySelector("#companyedit");
let addressEdit = document.querySelector("#addressedit");
let countryEdit = document.querySelector("#countryedit");
let cityEdit;
let boolNameEdit = false;
let boolPhoneEdit = false;
let boolCompanyEdit = false;
let boolAddressEdit = false;
let checkNameEdit = () => {
  if (nameEdit.value === "") {
    document.querySelector(".form-edit-address .name-error").innerHTML = "";
    document.querySelector(".form-edit-address .name-error").style.color =
      "none";
    nameEdit.style.border = "2px solid #eee";
    document.querySelector(
      ".form-edit-address .name-error"
    ).style.marginBottom = "none";
    document.querySelector(".form-edit-address .name-error").style.fontSize =
      "none";
    boolNameEdit = true;
  } else if (!nameEdit.value.match(/^[a-zA-Z ]+$/g)) {
    document.querySelector(
      ".form-edit-address .name-error"
    ).innerHTML = `Thông tin điền cần chính xác !`;
    document.querySelector(".form-edit-address .name-error").style.color =
      "red";
    nameEdit.style.border = "1px solid red";
    document.querySelector(
      ".form-edit-address .name-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .name-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-edit-address .name-error").innerHTML = "";
    document.querySelector(".form-edit-address .name-error").style.color =
      "none";
    nameEdit.style.border = "2px solid #eee";
    document.querySelector(
      ".form-edit-address .name-error"
    ).style.marginBottom = "none";
    document.querySelector(".form-edit-address .name-error").style.fontSize =
      "none";
    boolNameEdit = true;
  }
};

let checkPhoneEdit = () => {
  if (phoneEdit.value === "") {
    document.querySelector(".form-edit-address .phone-error").innerHTML = "";
    document.querySelector(".form-edit-address .phone-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .phone-error"
    ).style.marginBottom = "none";
    phoneEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .phone-error").style.fontSize =
      "none";
    boolPhoneEdit = true;
  } else if (!phoneEdit.value.match(/^0[0-9]{8,10}$/g)) {
    document.querySelector(
      ".form-edit-address .phone-error"
    ).innerHTML = `Số điện thoại không tồn tại !`;
    document.querySelector(".form-edit-address .phone-error").style.color =
      "red";
    phoneEdit.style.border = "1px solid red";
    document.querySelector(
      ".form-edit-address .phone-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .phone-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-edit-address .phone-error").innerHTML = "";
    document.querySelector(".form-edit-address .phone-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .phone-error"
    ).style.marginBottom = "none";
    phoneEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .phone-error").style.fontSize =
      "none";
    boolPhoneEdit = true;
  }
};

let checkCompanyEdit = () => {
  if (companyEdit.value === "") {
    document.querySelector(".form-edit-address .company-error").innerHTML = "";
    document.querySelector(".form-edit-address .company-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .company-error"
    ).style.marginBottom = "none";
    companyEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .company-error").style.fontSize =
      "none";
    boolCompanyEdit = true;
  } else if (!companyEdit.value.match(/^[A-za-z][A-za-z0-9 ]+$/g)) {
    document.querySelector(
      ".form-edit-address .company-error"
    ).innerHTML = `Tên công ty không hợp lệ !`;
    document.querySelector(".form-edit-address .company-error").style.color =
      "red";
    companyEdit.style.border = "1px solid red";
    document.querySelector(
      ".form-edit-address .company-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .company-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-edit-address .company-error").innerHTML = "";
    document.querySelector(".form-edit-address .company-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .company-error"
    ).style.marginBottom = "none";
    companyEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .company-error").style.fontSize =
      "none";
    boolCompanyEdit = true;
  }
};

let checkAddressEdit = () => {
  if (addressEdit.value === "") {
    document.querySelector(".form-edit-address .address-error").innerHTML = "";
    document.querySelector(".form-edit-address .address-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .address-error"
    ).style.marginBottom = "none";
    addressEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .address-error").style.fontSize =
      "none";
    boolAddressEdit = true;
  } else if (
    !addressEdit.value.match(/^[0-9 ]+\/[A-za-z ]+\/[a-zA-z0-9 ]+$/g)
  ) {
    document.querySelector(
      ".form-edit-address .address-error"
    ).innerHTML = `Số nhà/Tên Đường/ Tên Quận!`;
    document.querySelector(".form-edit-address .address-error").style.color =
      "red";
    addressEdit.style.border = "1px solid red";
    document.querySelector(
      ".form-edit-address .address-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .address-error").style.fontSize =
      "14px";
  } else {
    document.querySelector(".form-edit-address .address-error").innerHTML = "";
    document.querySelector(".form-edit-address .address-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .address-error"
    ).style.marginBottom = "none";
    addressEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .address-error").style.fontSize =
      "none";
    boolAddressEdit = true;
  }
};
let checkCountryEdit = () => {
  if (countryEdit.value === "Vietnam") {
    document.querySelector(".form-edit-address .VN").style.display = "block";
    cityEdit = document.querySelector(".form-edit-address .VN").value;
  } else {
    document.querySelector(".form-edit-address .VN").style.display = "none";
  }
  if (countryEdit.value === "Thailand") {
    document.querySelector(".form-edit-address .TL").style.display = "block";
    cityEdit = document.querySelector(".form-edit-address .TL").value;
  } else {
    document.querySelector(".form-edit-address .TL").style.display = "none";
  }
  if (countryEdit.value === "United States") {
    document.querySelector(".form-edit-address .USA").style.display = "block";
    cityEdit = document.querySelector(".form-edit-address .USA").value;
  } else {
    document.querySelector(".form-edit-address .USA").style.display = "none";
  }
};
console.log(cityEdit);
let checkEdit = () => {
  if (nameEdit.value === "") {
    document.querySelector(".form-edit-address .name-error").innerHTML = "";
    document.querySelector(".form-edit-address .name-error").style.color =
      "none";
    nameEdit.style.border = "2px solid #eee";
    document.querySelector(
      ".form-edit-address .name-error"
    ).style.marginBottom = "none";
    document.querySelector(".form-edit-address .name-error").style.fontSize =
      "none";
    boolNameEdit = true;
  } else if (!nameEdit.value.match(/^[a-zA-Z ]{2,}$/g)) {
    document.querySelector(
      ".form-edit-address .name-error"
    ).innerHTML = `Thông tin điền cần chính xác !`;
    document.querySelector(".form-edit-address .name-error").style.color =
      "red";
    nameEdit.style.border = "1px solid red";
    document.querySelector(
      ".form-edit-address .name-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .name-error").style.fontSize =
      "14px";
    boolNameEdit = false;
  } else {
    document.querySelector(".form-edit-address .name-error").innerHTML = "";
    document.querySelector(".form-edit-address .name-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .name-error"
    ).style.marginBottom = "none";
    nameEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .name-error").style.fontSize =
      "none";
    boolNameEdit = true;
  }
  if (phoneEdit.value === "") {
    document.querySelector(".form-edit-address .phone-error").innerHTML = "";
    document.querySelector(".form-edit-address .phone-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .phone-error"
    ).style.marginBottom = "none";
    phoneEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .phone-error").style.fontSize =
      "none";
    boolPhoneEdit = true;
  } else if (!phoneEdit.value.match(/^0[0-9]{8,10}$/g)) {
    document.querySelector(
      ".form-edit-address .phone-error"
    ).innerHTML = `Số điện thoại không tồn tại !`;
    document.querySelector(".form-edit-address .phone-error").style.color =
      "red";
    document.querySelector(
      ".form-edit-address .phone-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .phone-error").style.fontSize =
      "14px";
    boolPhoneEdit = false;
  } else {
    document.querySelector(".form-edit-address .phone-error").innerHTML = "";
    document.querySelector(".form-edit-address .phone-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .phone-error"
    ).style.marginBottom = "none";
    phoneEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .phone-error").style.fontSize =
      "none";
    boolPhoneEdit = true;
  }
  if (companyEdit.value === "") {
    document.querySelector(".form-edit-address .company-error").innerHTML = "";
    document.querySelector(".form-edit-address .company-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .company-error"
    ).style.marginBottom = "none";
    companyEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .company-error").style.fontSize =
      "none";
    boolCompanyEdit = true;
  } else if (!companyEdit.value.match(/^[A-za-z][A-za-z0-9 ]+$/g)) {
    document.querySelector(
      ".form-edit-address .company-error"
    ).innerHTML = `Tên công ty không hợp lệ !`;
    document.querySelector(".form-edit-address .company-error").style.color =
      "red";
    companyEdit.style.border = "1px solid red";
    document.querySelector(
      ".form-edit-address .company-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .company-error").style.fontSize =
      "14px";
    boolCompanyEdit = false;
  } else {
    document.querySelector(".form-edit-address .company-error").innerHTML = "";
    document.querySelector(".form-edit-address .company-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .company-error"
    ).style.marginBottom = "none";
    companyEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .company-error").style.fontSize =
      "none";
    boolCompanyEdit = true;
  }
  if (addressEdit.value === "") {
    document.querySelector(".form-edit-address .address-error").innerHTML = "";
    document.querySelector(".form-edit-address .address-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .address-error"
    ).style.marginBottom = "none";
    addressEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .address-error").style.fontSize =
      "none";
    boolAddressEdit = true;
  } else if (
    !addressEdit.value.match(/^[0-9 ]+\/[A-za-z ]+\/[a-zA-z0-9 ]+$/g)
  ) {
    document.querySelector(
      ".form-edit-address .address-error"
    ).innerHTML = `Số nhà/Tên Đường/ Tên Quận!`;
    document.querySelector(".form-edit-address .address-error").style.color =
      "red";
    addressEdit.style.border = "1px solid red";
    document.querySelector(
      ".form-edit-address .address-error"
    ).style.marginBottom = "16px";
    document.querySelector(".form-edit-address .address-error").style.fontSize =
      "14px";
    boolAddressEdit = false;
  } else {
    document.querySelector(".form-edit-address .address-error").innerHTML = "";
    document.querySelector(".form-edit-address .address-error").style.color =
      "none";
    document.querySelector(
      ".form-edit-address .address-error"
    ).style.marginBottom = "none";
    addressEdit.style.border = "2px solid #eee";
    document.querySelector(".form-edit-address .address-error").style.fontSize =
      "none";
    boolAddressEdit = true;
  }
};
let number0 = document.querySelector(".child-0 .edit");
number0.addEventListener("click", () => {
  openFormEdit();
  localStorage.setItem("Value", "0");
});
let number1 = document.querySelector(".child-1 .edit");
number1.addEventListener("click", () => {
  openFormEdit();
  localStorage.setItem("Value", "1");
});
let number2 = document.querySelector(".child-2 .edit");
number2.addEventListener("click", () => {
  openFormEdit();
  localStorage.setItem("Value", "2");
});
let number3 = document.querySelector(".child-3 .edit");
number3.addEventListener("click", () => {
  openFormEdit();
  localStorage.setItem("Value", "3");
});
let number4 = document.querySelector(".child-4 .edit");
number4.addEventListener("click", () => {
  openFormEdit();
  localStorage.setItem("Value", "4");
});
let checkEditSuccess = document.querySelector(".form-edit-address .btn-edit");
checkEditSuccess.addEventListener("click", (e) => {
  e.preventDefault();
  checkEdit();
  let value =parseInt(localStorage.getItem("Value"));
  if (boolNameEdit && boolPhoneEdit && boolCompanyEdit && boolAddressEdit) {
    address = JSON.parse(localStorage.getItem(email));
    if (nameEdit.value !== "") {
      address[value].name = nameEdit.value;
    }
    else {
      address[value].name = address[value].name;
    }
    if (phoneEdit.value !== "") {
      address[value].phone = phoneEdit.value;
    }
    else {
      address[value].phone = address[value].phone;
    }
    if (companyEdit.value !== "") {
      address[value].company = companyEdit.value;
    }
    else {
      address[value].company = address[value].company;
    }
    if (addressEdit.value !== "") {
      address[value].address = addressEdit.value;
    }
    else {
      address[value].address = address[value].address;
    }
    if (countryEdit.value !== "") {
      address[value].country = countryEdit.value;
    }
    else {
      address[value].country = address[value].country;
    }
    if (cityEdit !== "") {
      address[value].city = cityEdit;
    }
    else {
      address[value].city = address[value].city;
    }
    document.querySelector(".form-edit-address .notification").innerHTML =
      "Sửa thành công,hãy nhấn f5 để có thể cập nhật địa chỉ !";
    document.querySelector(".form-edit-address .notification").style.color =
      "green";
    document.querySelector(".form-edit-address .notification").style.fontSize =
      "16px";
    document.querySelector(
      ".form-edit-address .notification"
    ).style.marginBottom = "16px";
    localStorage.setItem(email, JSON.stringify(address));
  }
});
