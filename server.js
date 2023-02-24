//Setup
const app = express();
const port = 3000;


//RunApp
app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})