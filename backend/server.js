import express from "express";
import morgan from "morgan";
import userModel from "./models/user.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));
app.set("view engine", "ejs");

app.get(
  "/",
  (req, res, next) => {
    console.log("custom middleware yeahhh");
    next();
  },
  (req, res) => {
    res.render("index");
  }
);
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/dashboard", (req, res) => {
  res.send("dashboard");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = await userModel.create({
    name: name,
    email: email,
    password: password,
  });
  res.send(newUser);
});
app.get("/update-user", async(req, res) => {
  await userModel.findOneAndUpdate(
    {
      password: "sairajaf69",
    },
    {
      name: "Raj",
    }
  );
  res.send("updated");
});

app.get("/get-users", (req, res) => {
  userModel
    .find({
      name: "cristiano",
    })
    .then((userr) => {
      res.send(userr);
    });
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.listen(3000);
