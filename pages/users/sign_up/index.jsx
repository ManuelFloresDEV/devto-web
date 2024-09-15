export default function Signup() {
  return (
    <form className="flex flex-col border border-red-700 max-w-xl mx-auto my-3">
      <h1>Create your account</h1>
      <label htmlFor="">
        Profile Image<span>*</span>
      </label>
      <input type="url" />
      <label htmlFor="">
        Name<span>*</span>
      </label>
      <input type="url" />
      <label htmlFor="">
        User <span>*</span>
      </label>
      <input type="url" />
      <label htmlFor="">
        Email<span>*</span>
      </label>
      <input type="url" />
      <label htmlFor="">
        Password<span>*</span>
      </label>
      <input type="url" />
      <label htmlFor="">
        Password Conformation <span>*</span>
      </label>
      <input type="url" />
    </form>
  );
}
