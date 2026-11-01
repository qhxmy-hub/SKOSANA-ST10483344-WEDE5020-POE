
# Themba Givers NPO Website
## WEDE5020 - Portfolio of Evidence Part 3

## 1. Project Overview

Themba Givers is a non-profit organisation that supports local communities by providing food parcels, organising feeding schemes, collecting clothing donations and encouraging people to volunteer.

This project is a five-page responsive website developed as part of the WEDE5020 Web Development Portfolio of Evidence.

The purpose of the website is to provide information about the organisation, explain the services it offers and allow visitors to make donation or volunteering enquiries.

## 2. Website Pages

The website contains five main pages:

- **Index.html:** The home page introduces Themba Givers and explains how visitors can support the organisation.
- **About.html:** Provides information about the organisation, its background, mission and vision.
- **Services.html:** Explains the community activities and services offered by Themba Givers.
- **Enquiry.html:** Allows visitors to enquire about donations and volunteering opportunities.
- **Contact.html:** Provides contact information and allows visitors to get in touch with the organisation.

## 3. Technologies Used

The following technologies were used to develop the website:

### HTML5

HTML5 was used to create the structure and content of the website. It was also used to create navigation links, images, headings, paragraphs and forms.

### CSS3

CSS3 was used to style the website and maintain a consistent appearance across all five pages.

The external stylesheet is stored in:

`CSS/style.css`

It contains the website colours, typography, layouts, buttons, hover effects and responsive design rules.

### JavaScript

JavaScript was used to add interactive features to the website.

The JavaScript file is stored in:

`JS/script.js`

It is used for features such as searching, image gallery controls and form validation.

### OpenStreetMap

OpenStreetMap is used as the source for the embedded map planned for the Services page. It helps visitors identify the Diepsloot area.

## 4. Project Folder Structure

The project files are arranged into the following folders:

```text
ST10483344_THEMBA_GIVERS_POE_PART3/
│
├── Index.html
├── About.html
├── Services.html
├── Enquiry.html
├── Contact.html
│
├── CSS/
│   └── style.css
│
├── JS/
│   └── script.js
│
├── IMAGES/
│   └── Website image assets
│
├── README.md
│
└── CHANGELOG.md
```

The HTML pages, CSS folder, JavaScript folder and images folder must remain together in the main project directory.

## 5. How to Open the Website

Follow these steps to open the website:

1. Extract the complete project folder if it was downloaded as a ZIP file.
2. Open the project folder.
3. Make sure the CSS, JS and IMAGES folders are still in their correct locations.
4. Open `Index.html` using a modern web browser.
5. Use the navigation menu to move between the different website pages.

The website can also be opened using Visual Studio Code and its Live Server extension.

The website uses relative file paths. For example:

- `CSS/style.css`
- `JS/script.js`
- `IMAGES/logo.png`

Moving individual files away from their original folders may cause images, styling or JavaScript features to stop working.

## 6. Website Features

The website includes the following features:

### Navigation

The navigation menu allows visitors to move between the five website pages.

### Search Functionality

The home page includes a search field that allows visitors to search for ways to support the organisation.

The JavaScript checks the search words and displays matching information.

### Image Gallery

The gallery feature allows visitors to select an image and view a larger version.

It also supports previous and next controls and keyboard navigation.

### Interactive Map

The Services page is intended to include an embedded OpenStreetMap showing the Diepsloot area.

### Enquiry Form

The enquiry form allows visitors to provide their details and select whether they would like to donate or volunteer.

JavaScript checks the information entered before preparing an email.

### Contact Form

The contact page is intended to include a form that allows visitors to enter their details and prepare a message for the organisation.

### Form Feedback

Visitors receive feedback when required information is missing or when the form information passes validation.

## 7. Form Submission Information

The website uses client-side JavaScript to validate form information.

When a form is completed correctly, the website prepares an email using the visitor's default email application.

The visitor must review and send the email manually.

This website does not automatically send or store enquiries because it does not currently use a server-side system or an email delivery service.

## 8. Responsive Design

The website uses CSS media queries to adjust its appearance on different screen sizes.

The responsive design includes:

- Flexible content widths.
- Cards that wrap when the screen becomes smaller.
- Images that adjust to the available screen width.
- Navigation adjustments for smaller devices.
- Changes to heading and paragraph sizes.
- Adjustments to form and footer layouts.

The stylesheet includes breakpoints at 768px and 480px.

## 9. SEO and Accessibility

Search Engine Optimisation (SEO) improvements include:

- A unique page title for each HTML page.
- Meta descriptions for each page.
- Relevant meta keywords.
- Descriptive image alternative text.

Accessibility improvements include:

- Navigation labels.
- Alternative text for images.
- Labels connected to form fields.
- Keyboard support for interactive elements.
- Feedback messages for form validation.

## 10. References

Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 1 November 2026).

Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 1 November 2026).

Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 1 November 2026).

OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 1 November 2026).

## 11. Student and Assessment Information

Student Number: ST10483344

Module: WEDE5020 - Web Development

Assessment: Portfolio of Evidence (POE), Part 3

Project: Themba Givers NPO Website
