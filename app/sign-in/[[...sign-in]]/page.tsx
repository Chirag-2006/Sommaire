import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center mt-24 lg:min-h-[40vh]">
      <SignIn oauthFlow="popup" />
    </section>
  );
}
