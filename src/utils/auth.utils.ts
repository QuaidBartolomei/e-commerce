import { auth } from "utils/firebase.utils";

export async function signout() {
  await auth.signOut();
}

export async function registerNewUser(email: string, password: string) {
  auth.createUserWithEmailAndPassword(email, password);
}

export async function signInWithEmail(email: string, password:string) {
 return auth.signInWithEmailAndPassword(email, password);
} 