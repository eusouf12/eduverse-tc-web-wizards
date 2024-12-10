"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "antd";
import Image from "next/image";
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center gap-7 text-center">
      <Image
        src={"/500.svg"}
        alt="No Page Found"
        width={400}
        height={400}
        priority
      />
      <h2 className="text-xl font-semibold text-primary-500">
        {error.message}
      </h2>
      <div className="flex flex-row items-center gap-2">
        <Button
          type="primary"
          icon={<FiArrowLeft />}
          onClick={() => router.back()}
        >
          Go Back
        </Button>
        <Button
          type="dashed"
          icon={<FiRefreshCw />}
          iconPosition="end"
          className="font-semibold"
          onClick={() => reset()}
        >
          Reload
        </Button>
      </div>
    </div>
  );
}
