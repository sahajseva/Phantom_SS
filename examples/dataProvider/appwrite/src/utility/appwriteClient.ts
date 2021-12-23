import { Appwrite } from "appwrite";

const APPWRITE_URL = "https://refine.appwrite.org/v1";
const APPWRITE_PROJECT = "61c4368b4e349";

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);

export { appwriteClient };
