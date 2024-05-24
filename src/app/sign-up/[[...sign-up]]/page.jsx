import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignUp path="/sign-up" appearance={{ baseTheme: dark }} />
    </div>
  );
}
