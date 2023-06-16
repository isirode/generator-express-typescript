import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
      msg: "Hello World !",
    });
  }
);

try {
  app.listen(port, (): void => {
      console.log(`The server is listening on port ${port}`);
  });
} catch (error: any) {
    console.error(`An error occured: ${error.message}`);
}