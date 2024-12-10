import CreateForm from "./_components/create.form";

export default function CreateUser() {
  return (
    <>
      <main className="flex flex-row items-start justify-center">
        <div className="mx-auto w-full max-w-2xl">
          <CreateForm />
        </div>
      </main>
    </>
  );
}
