import { createAction } from "@reduxjs/toolkit";

// Note the more generic action-type name for this reset action, it starte with "app" and nor a slice name
// if you were not to call this action and log the response: `console.log(reset())` you'll get this `{type: "app/reset", payload: undefined}`
// in other words a proper action-craetor object
// and `console.log(reset.toString())` will output "app/reset"
// Also note that we manually export the action here so we can import it in a component
export const reset = createAction('app/reset');
