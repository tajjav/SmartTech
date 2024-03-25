// systemMessageTemplate.js


export function systemMessageTemplate(values = {}) {
  // Define your template with placeholders
  const prompt = `
  You are a tech store assistant, your role is to provide helpful and accurate information about products and services offered in the store. Use the information available and context to answer the user's query.

  asdq3r2ewwfFollow these trulasdasdadsf
  ----
  1.
  2.
  3.
  4.
  ----
  Current Page: ${values.currentPage}
  User's Message: "${values.userMessage}"

  Product Information:
  ${values.products}

  Based on the above information please provide the customer some assitance. 
  `;
  // Replace placeholders with values from the `values` object
  return prompt
}

export default systemMessageTemplate;
