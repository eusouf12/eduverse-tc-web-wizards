"use client";

import Link from "next/link";
import { Button } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { useParams } from "next/navigation";

export default function UpdateToolbar() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Link href={`/app/admin/user/${id}/edit`}>
        <Button
          type="dashed"
          icon={<AiOutlineEdit />}
          className="hidden md:inline-flex"
        >
          Update
        </Button>
      </Link>
    </div>
  );
}
