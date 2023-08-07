import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Header from "./components/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ContactUsComponent from "./components/ContactUsComponent";
import News from "./pages/News";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("posts")
    .select(
      `id,title, description,image, created_at, users ( full_name ), club ( name, icon )`
    );

  return (
    <div className="flex min-h-screen flex-col  bg-zinc-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900">
      <div className="flex h-screen w-full flex-grow flex-col ">
        <Header user={session.user} />
        {/* @ts-ignore */}
        <News newsPosts={data} />
      </div>
      <div className="flex h-screen w-full flex-grow flex-row">
        <ContactUsComponent />
      </div>
    </div>
  );
}
