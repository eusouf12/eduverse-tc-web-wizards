import CreateToolbar from "./create.toolbar";

export default function ToolbarComponent() {
  return (
    <>
      <div className="my-3 flex flex-col-reverse items-center justify-between gap-2 md:flex-row">
        <CreateToolbar />
      </div>
    </>
  );
}
