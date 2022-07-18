import { Router } from "express";
import getCredentialsCtr from "../controllers/credentials/getCredentialsCtr.js";
import newCredentialCtr from "../controllers/credentials/newCredentialCtr.js";
import newCredentialSchemaMd from "../middlewares/schemas/credentials/newCredentialSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const credentialsRouter = Router();

credentialsRouter.post('/credentials',tokenBearerMd,newCredentialSchemaMd,newCredentialCtr);
credentialsRouter.get('/credentials',tokenBearerMd,getCredentialsCtr);

export default credentialsRouter;