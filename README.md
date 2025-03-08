# **Form Validation Documentation**

## **Overview**
This documentation provides a comprehensive guide to the form validation implementation in the "form-validation" project. The project includes an HTML form that collects user information and validates the input fields using JavaScript.

## **Project Structure**
The project consists of the following key files:

- **HTML File**
  - `index.html`: Contains the structure of the form and links to CSS and JavaScript files.
  
- **CSS File**
  - `style/style.css`: Styles the form and its elements.

- **JavaScript File**
  - `script/script.js`: Contains the validation logic for the form.

- **Image Assets**
  - `image/zoro.png`: An image used in the form layout.

## **HTML Structure**
The `index.html` file includes the following sections:

- **Head Section**
  - Links to Bootstrap CSS for styling.
  - Links to custom CSS for additional styles.

- **Body Section**
  - A main container that holds the form and an image.
  - The form includes fields for:
    - Username
    - Email
    - Password
    - Gender (radio buttons)
    - Game Types (checkboxes)
    - Date of Birth

### **Form Elements**
- **Username**: Text input with validation for required field.
- **Email**: Text input with validation for required field.
- **Password**: Password input with validation for required field.
- **Gender**: Radio buttons with validation for selection.
- **Game Types**: Checkboxes with validation for at least one selection.
- **Date of Birth**: Date input with validation for required field.

## **CSS Styling**
The `style/style.css` file contains styles to enhance the visual appearance of the form:

- **Global Styles**: Resets margin and padding, and sets box-sizing to border-box.
- **Form Container**: Applies a linear gradient background and sets the height to 100vh.

## **JavaScript Validation Logic**
The `script/script.js` file implements the validation logic for the form:

### **Variable Declarations**
- Retrieves DOM elements for form fields and error messages.

### **Validation Function**
The `validation()` function checks each input field and displays error messages if validation fails:

- **Username Validation**: Checks if the username field is empty.
- **Email Validation**: Checks if the email field is empty.
- **Password Validation**: Checks if the password field is empty.
- **Gender Validation**: Checks if at least one gender option is selected.
- **Hobbies Validation**: Checks if at least one hobby is selected.
- **Date Validation**: Checks if the date of birth field is empty.

### **Form Submission Handling**
- An event listener is added to the form to prevent default submission and call the validation function when the submit button is clicked.

## **Error Handling**
Each input field has an associated error message that is displayed when validation fails. The error messages are hidden by default and shown only when the corresponding validation condition is not met.

## **Usage Instructions**
1. Open the `index.html` file in a web browser.
2. Fill out the form fields.
3. Click the "Submit" button.
4. Review any error messages displayed and correct the input as necessary.

## **Conclusion**
This documentation outlines the structure and functionality of the form validation project. The implementation ensures that users provide the necessary information before submission, enhancing the overall user experience.