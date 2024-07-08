import * as Yup from "yup";

export const RegistrationSchema = Yup.object({
  name: Yup.string()
    .required("Please provide your name to proceed.")
    .min(3, "Please enter a name with at least 3 characters.")
    .max(15, "Please enter a name with fewer than 15 characters.")
    .matches(/[^0-9]/, { message: "Please enter a valid name with letters." }),
  email: Yup.string()
    .required("Please provide your email to proceed.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please provide valid email."
    ),
  password: Yup.string()
    .required("Please provide password to proceed.")
    .min(8, "Must be at least 8 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .required("Please provide your email to proceed.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please provide valid email."
    ),
  password: Yup.string().required("Please provide password to proceed."),
});
// export default { RegistrationSchema };
