import{useContext} from "react";
import {ProductContext} from "../context/ProductContext";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
function AddProduct(){
    const {addProduct}=useContext(ProductContext);
    return(
    <Formik
    initialValues={{ name: "", price: "", category: "" }}
    validationSchema={Yup.object({
        name: Yup.string().required("Name required"),
        price: Yup.number().required("Price required"),
        category: Yup.string().required("Category required")
    })}
    onSubmit={(values, { resetForm }) => {
        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        })
          .then(res => res.json())
          .then(data => {
            addProduct(data); 
            resetForm();
          });
      }}
    >
      <Form>
        <h2>Add Product</h2>

        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" />

        <Field name="price" placeholder="Price" />
        <ErrorMessage name="price" />

        <Field name="category" placeholder="Category" />
        <ErrorMessage name="category" />

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}

export default AddProduct;
    