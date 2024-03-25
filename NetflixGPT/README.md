
first we create thr login page 
next created a firebase authentication
next we created a firebase.jsx file in the app store and inserted the firebase register file
next deploy the authentication with some commands 
after sucessusfully creating 
go to the firebase documentation and search for authentication choose the web there u find the authentication code of email and password and import the files from it
-To import the file go to the firebase.jsx and import the auth and the const 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
