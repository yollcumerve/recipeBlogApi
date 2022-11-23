const app = require("express")();
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const port = process.env.PORT || 8080;

require("dotenv").config();

const { json, urlencoded } = require("body-parser");
app.use(json({ limit: "100kb" }));
app.use(urlencoded({ limit: "100kb", extended: true }));
app.use(expressLayouts);
app.use(cookieParser("CookingBlogSecure"));
app.use(
  session({
    secret: "CookingBlogSecretSession",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(fileUpload());

app.use(require("./routes/main"));

app.listen(port, () => {
  console.log(`Hikkaye Project Run! Target: ${port}`);
});
