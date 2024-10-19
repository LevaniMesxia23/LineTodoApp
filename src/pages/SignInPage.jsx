import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className=" w-full flex justify-center items-center h-[100vh]">
      <SignIn signUpUrl="/signup" forceRedirectUrl={"/"}/>
    </div>
  )
}
export default SignInPage;
