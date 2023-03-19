import { useFormik } from "formik";
import React from "react";
import {
  Occasions,
  TablePreferences,
  TailwindClasses,
} from "../Constants/Constants";
import * as Yup from "yup";

const ApplyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      noOfGuests: "",
      email: "",
      Occasion: "",
      date: "",
      table_preference: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      noOfGuests: Yup.number()
        .required("Required")
        .min(1, "Minimum 1 guest")
        .max(10, "Maximum 10 guests"),
      email: Yup.string().email("Invalid email address").required("Required"),
      Occasion: Yup.string().required("Required"),
      date: Yup.date().required("Required"),
      table_preference: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      fetch("https://6417217d5269f51bfbf4d7fc.mockapi.io/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        formik.resetForm();
        formik.setSubmitting(false);
        alert("Booking Successful");
      }).catch((err) => {
        formik.setSubmitting(false);
        alert("Booking Failed");
      });
    },
  });
  console.log(formik.errors);
  return (
    <form className="grid grid-cols-2 gap-5" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={TailwindClasses.input}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Number Of Guests">Number Of Guests</label>
        <input
          type="number"
          name="noOfGuests"
          id="noOfGuests"
          value={formik.values.noOfGuests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={TailwindClasses.input}
        />
        {formik.touched.noOfGuests && formik.errors.noOfGuests ? (
          <div className="text-red-500">{formik.errors.noOfGuests}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={TailwindClasses.input}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Occasion">Occasion</label>
        <select
          name="Occasion"
          id="Occasion"
          value={formik.values.Occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={TailwindClasses.input}
        >
          {Occasions.map((occasion) => (
            <option key={occasion.value} value={occasion.value}>
              {occasion.label}
            </option>
          ))}
        </select>
        {formik.touched.Occasion && formik.errors.Occasion ? (
          <div className="text-red-500">{formik.errors.Occasion}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="date">Date</label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={TailwindClasses.input}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="text-red-500">{formik.errors.date}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="table_preference">Table Preference</label>
        <select
          name="table_preference"
          id="table_preference"
          value={formik.values.table_preference}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={TailwindClasses.input}
        >
          {TablePreferences.map((tablePreference) => (
            <option key={tablePreference.value} value={tablePreference.value}>
              {tablePreference.label}
            </option>
          ))}
        </select>
        {formik.touched.table_preference && formik.errors.table_preference ? (
          <div className="text-red-500">{formik.errors.table_preference}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className={TailwindClasses.button + `${formik.isValid || formik.isSubmitting ? '' : ' opacity-50 cursor-not-allowed'}`}
        disabled={!formik.isValid || formik.isSubmitting}
      >
        {
          formik.isSubmitting ? 'Submitting...' : 'Submit'
        }
      </button>
    </form>
  );
};

export default ApplyForm;
