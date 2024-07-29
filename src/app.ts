import express from "express";
import { Request, Response } from "express";
const PORT = 3500;
const app = express();


app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", (request: Request, response: Response) => {
  response.send("Api is live");
});

app.post("/create", (request: Request, response: Response) => {
  response.send(request.body);
});

app.put("/update", (request: Request, response: Response) => {
    response.send("update successfull");
});

app.delete("/delete", (request: Request, response: Response) => {
    response.send("delete successful");
});

const students = ["Sade", "tosin", "temi", "femi", "isaac", "wisdom", "Daniel", "Sammy" , "Ade" , "Sam"]

students.forEach((student)=>{
    console.log(student);
})

const parody = {
  name : "Sam",
  age : 7 ,
  married:true,
  location: ''
}

console.log(parody.age)
console.log(parody.name)
console.log(parody.married)
console.log(parody.location)