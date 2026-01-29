Real Problem we were facing as Manual Validation  ,  lot of State handing , everywhere we were using error message
 
So we have third party library (packages)
FORMIK and Yup are the third party libraries which provides components to use in React
 
Npm install formik yup
 
Import{Formik , Form, Field , ErrorMessage} from "formik";
 
These are prebuilt React components provided by the formik library
 
 
<Formik
initialValue={{name="" , email:"" }}
validationSchema ={schema}
onSubmit={handleSubmit}
/>
 
It will be first creating a form state , it will track the value, tracks errors , handles the event (submit)  and also interact with yup for validation schema
 
Why not HTML <form > why Formik:
It attaches the submit handling
Prevents Page reload
Connects to a formik state
 
Form- > React -> validation ->submit login
 
 
 
<input type="text" placeholder="Enter Name" value={getName} onChange={(e)=> setName(e.target.value)}/>
 
Internally it replaces with
 
<Field name ="name">
<ErrorMessage name="name">  - This will read the yup validation errors and shows the error for that field which will be auto updated
 
Yub library is a JS validation engine
 
 
Import {*} from "yup" 
 
We are using an * here because all the error message or validation schema which you are applying contains string , number , object  for eg: as below we created earlier :
 
 
if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      isValid = false;
      errors.firstName = "Enter valid first name";
    }
 
 
So here in Yup it will internally wrap in an object
 
Yup.object({email: Yup.string[].email().required()})
 
So internally Yup will validates values , returns error messages and Formik will reads these errors 
 
So Formik is not validating itself  ( Formik uses or communicates with Yup for that)
 
 
Steps:
User types --> Formik stores values -> Formik asks Yup -> Yup validates --> Formik shows errors -> Fields updated --> ErrorMessage display it
 
Simple real example:
 
React is a car , formik is automatic gear system and yup is traffic rule checker