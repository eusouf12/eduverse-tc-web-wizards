import Image from "next/image";
import ButtonGroup from "../../../../Clients/POS/shopkeepers-admin/src/app/_components/not-found-buttons/index.button";

export default function NotFound() {
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center gap-7 text-center">
      <Image
        src={"/404.svg"}
        alt="No Page Found"
        width={400}
        height={400}
        priority
      />
      <h2 className="text-xl font-semibold text-primary-500">Page Not Found</h2>
      <ButtonGroup />
    </div>
  );
}
