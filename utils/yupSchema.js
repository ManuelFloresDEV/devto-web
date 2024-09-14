import * as yup from "yup";

export const loginSchema = yup
  .object({
    password: yup
      .string()
      .required("password is required")
      .min(6, "password must be at least 6 character")
      .test(
        "lowercase",
        "Password must contain at least one lowercase letter",
        (value) => /[a-z]/.test(value)
      )
      .test(
        "uppercase",
        "Password must contain at least one uppercase letter",
        (value) => /[A-Z]/.test(value)
      )
      .test("number", "Password must contain at least one number", (value) =>
        /\d/.test(value)
      )
      .test(
        "special",
        "Password must contain at least one special character",
        (value) => /[@$!%*?&]/.test(value)
      ),

    email: yup
      .string()
      .email("enter valid email")
      .required("the email is required"),
  })
  .required();

export default loginSchema;
