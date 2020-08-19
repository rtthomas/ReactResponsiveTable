## ReactResponsiveTable
A React component for rendering a sortable responsive table

### Rationale
I haven't found a simple React table component that displays a table responsively in these formats:
- the conventional header row followed by with content rows, or
- on small screens, in "columnar" form, displaying the data as successive groups of label/value pairs  

Most of the components I've found so far just add horizontal scrollbars. 

### Usage
The ResponsiveTable requires React Styled Components. In your project folder: 
    >npm install styled-components

If you want sortable columns, include a font awsome stylesheet for rendering the sort direction icons:
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"

Then just copy responsiveTable.js file into your project. The provided App.js component illustrates it's use.  
