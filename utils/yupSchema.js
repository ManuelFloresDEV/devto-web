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
      .required("email is required"),
  })
  .required();

export const newPost = yup.object({
  tags: yup
    .string()
    .test("tags-required", "You must add at least one tag", function (value) {
      const { tags } = this.options.context;
      return tags.length > 0 || (value && value.trim() !== "");
    }),
  title: yup.string().required(),
  image: yup.string().required(),
  body: yup.string().required(),
});

export const signUp = yup.object({
  name: yup.string().required(),
  user: yup.string().required(),
  email: yup.string().required().email(),
  profilePic: yup.string().required().url(),
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
  passconf: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export default loginSchema;
