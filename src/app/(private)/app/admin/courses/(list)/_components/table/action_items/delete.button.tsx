"use client";

import { useDeleteCourses } from "@/lib/actions/course/item.delete";
import handleResponse from "@/lib/handle-response";
import { message, Popconfirm } from "antd";
import { AiTwotoneDelete } from "react-icons/ai";

interface DeleteButtonProps {
  id: string | number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const { mutateAsync: Delete, isPending: isDeleting } = useDeleteCourses();

  async function confirm() {
    const res = await handleResponse(() => Delete(id), 200);

    message.destroy();
    if (res.status) {
      message.success(
        res.message || "Course has been moved trash successfully."
      );
    } else {
      message.error(res.message);
    }
  }

  return (
    <Popconfirm
      title="Delete the course"
      description="Are you sure to delete this course?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
      disabled={isDeleting}
    >
      <AiTwotoneDelete className="text-lg" />
    </Popconfirm>
  );
}
