// Here goes the schema for the form
import * as yup from 'yup';

const schema = yup.object().shape({
username : yup.string().trim().
required("Username is required")
.min(3,"Username must be 3 characters long"),

email : yup.string().email("Must be a valid email")
.required("Must have an email"),

role : yup.string("")
.oneOf(["instructor","student","alumni"],"Role is required"),

civil : yup.string().oneOf(["married","single"],"Civil status is wired"),

hiking : yup.boolean(),
reading : yup.boolean(),
coding : yup.boolean()
})

export default schema;