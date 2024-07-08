import * as Yup from "yup";
export const UpdateProfileSchema = Yup.object({
  name: Yup.string()
    .required("Please provide your name to proceed.")
    .min(3, "Please enter a name with at least 3 characters.")
    .max(25, "Please enter a name with fewer than 25 characters.")
    .matches(/[^0-9]/, { message: "Please enter a valid name with letters." }),
  //   email: Yup.string()
  //     .required("Please provide your email to proceed.")
  //     .matches(
  //       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //       "Please provide valid email."
  //     ),
  mno: Yup.string()
    .required("Please provide your mobile number to proceed.")
    .matches(/^[0-9]{10}$/, "Please provide your mobile number to proceed."),
});

export const UpdateAddressSchema = Yup.object({
  line1: Yup.string()
    .required("Please provide your address to proceed.")
    .min(3, "Please enter a address with at least 3 characters.")
    .max(100, "Please enter a address with fewer than 100 characters.")
    .matches(/[^0-9]/, {
      message: "Please enter a valid address with letters.",
    }),
  line2: Yup.string()
    .required("Please provide your address to proceed.")
    .min(3, "Please enter a address with at least 3 characters.")
    .max(100, "Please enter a address with fewer than 100 characters.")
    .matches(/[^0-9]/, {
      message: "Please enter a valid address with letters.",
    }),
  area: Yup.string()
    .required("Please provide your area to proceed.")
    .min(3, "Please enter a area with at least 3 characters.")
    .max(15, "Please enter a area with fewer than 15 characters.")
    .matches(/[^0-9]/, {
      message: "Please enter a valid address with letters.",
    }),
  pincode: Yup.string()
    .required("Please provide your pincode to proceed.")
    .matches(/^[0-9]{6}$/, "Please provide your pincode number to proceed."),
  state: Yup.string().required("Please provide your state to proceed."),
  city: Yup.string().required("Please provide your city to proceed."),
});
