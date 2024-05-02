import * as yup from "yup";
export const receipeSchema = yup.object({
  title: yup.string().required("please enter Title  "),
  ist: yup.string().required("please enter Instruction  "),
  ing1: yup.string().required("please enter Ingridients  "),
  ing2: yup.string().required("please enter Ingridients  "),
  ing3: yup.string().required("please enter Ingridients  "),
  ing4: yup.string().required("please enter Ingridients  "),
  qty1: yup.string().required("please enter Quantity  "),
  qty2: yup.string().required("please enter Quantity  "),
  qty3: yup.string().required("please enter Quantity  "),
  qty4: yup.string().required("please enter Quantity  "),
  img: yup.string().required("please enter Image URL  "),
 
 


});