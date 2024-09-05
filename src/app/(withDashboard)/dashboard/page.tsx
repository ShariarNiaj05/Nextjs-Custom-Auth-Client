import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name}
      </h1>
      <h2 className="text-2xl text-center mt-10">
        Logged in using: {session?.user?.email}
      </h2>
      <Image
        src={session?.user?.image as string}
        alt={`Image of ${session?.user?.name}`}
        width={300}
        height={400}
      />
    </div>
  );
};

export default DashboardPage;
