export default function Input({ id, type, reg }) {
  return (
    <>
      <label className="font-medium" htmlFor={id}>
        {id}
        <span className="text-red-600">*</span>
      </label>
      <input
        id={id}
        className="h-9 rounded-md border border-black/20"
        type={type}
        {...reg}
      />
    </>
  );
}
