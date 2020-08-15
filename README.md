## ReactResponsiveTable
A React component for rendering a responsive table

### Rationale
I haven't found a simple React table component that displays a table responsively in these formats:
- the conventional header row followed by with content rows, or
- on small screens, in "columnar" form, displaying the data as successive groups of label/value pairs  

Most of the components I've found so far just add horizontal scrollbars

### This is a Work in Progress
I plan to publish this eventually as a module on npm. Meanwhile..

#### 1. To Install 
Copy responsiveTable.js and responsiveTable.module.css to the folder appropriate to your project organization

#### 2. To Use It
The App.js file provides an example of its use:
- define the column labels
- define the array of objects comprising the row data
- define the table colors
- render the ResponsiveTable component

Note that data array in App.js illustrates that the property names in each row data object are irrelevant. The data are just tuples of values independent of their attribute names

### Upcoming Changes (I think..)

The current design is based on CSS Modules: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

I'm looking at the Styled Component Library as a mor efficient alternative: https://styled-components.com/
