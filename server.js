const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
  // Get applicant data from form submission
  const fullName = req.body['full-name'];
  const email = req.body.email;

  // Store the applicant data in a database or perform other actions
  // ...

  // Respond with a success message
  res.send('Application submitted successfully!');
});

app.get('/j', (req, res) => {
    // Get applicant data from form submission
    
  
    // Store the applicant data in a database or perform other actions
    // ...
  
    // Respond with a success message
    res.send('Application submitted successfully!');
  });
  
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
