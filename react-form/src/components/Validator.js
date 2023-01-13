import { string, object, date } from "yup";

const USERREGEX = /^[A-Za-z0-9_]+$/;
const POSTALCODEREGEX = /^[0-9]{6}$/;
const usernameAndPasswordValidation = object().shape({
  username: string()
    .required("Username is required")
    .min(8, "Username must be at least 8 characters long")
    .matches(
      USERREGEX,
      "Username can only contain alphanumeric charaters and underscores"
    ),
  password: string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[\d]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});

const addressValidation = object().shape({
  postalcode: string()
    .required()
    .matches(
      POSTALCODEREGEX,
      "Postal code must only be comprised of 6 digits only"
    ),
  state: string().required("Please select your state."),
});

const personalInformationValidation = object().shape({
  email: string().email(),
  website: string().url(),
  createdOn: date().default(function () {
    return new Date();
  }),
});

export {
  usernameAndPasswordValidation,
  addressValidation,
  personalInformationValidation,
};
