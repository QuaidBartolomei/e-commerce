import { auth } from "utils/firebase.utils";

export async function signout() {
  await auth.signOut();
}