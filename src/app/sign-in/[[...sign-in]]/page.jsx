import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn path="/sign-in" appearance={{ baseTheme: dark }} />
    </div>
  );
}
