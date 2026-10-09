var formData = function (user) {
    return "User name is ".concat(user.name, " and age is ").concat(user.age, " and email is ").concat(user.email);
};
var user = {
    name: "Sairaj",
    age: 20,
    email: "sairaj@123"
};
console.log(formData(user));
