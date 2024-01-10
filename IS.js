const { error } = require('console');
const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');

//express.json
app.use(express.json())

// MongoDB setup
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://AlifAmsyar:LyqsVCvrCHHcHGg1@applicationcondo.zkxtny3.mongodb.net/?retryWrites=true&w=majority';

const swaggerUi = require('swagger-ui-express');

const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Condo Visitor Management API',
      version: '1.0.0',
    },
  },
  apis: ['./swagger.js'],
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//const client = new MongoClient(uri);

let visitDetailCollection;
let hostCollection;
let adminCollection;
let securityCollection;


MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(client => {
  console.log('Connected to MongoDB'); 
  const db = client.db('CondoVisitorManagement');
  adminCollection = db.collection('adminCollection');
  visitDetailCollection = db.collection('visitDetailCollectionName');
  hostCollection = db.collection('hostCollectionName');
  securityCollection = db.collection('securityCollectionName');

  // Start the server or perform other operations

  const { ObjectId } = require('mongodb');

  ////Function User Login
  async function Userlogin(reqUsername, reqPassword) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
  
      // Validate the request payload
      if (!reqUsername || !reqPassword) {
        throw new Error('Missing required fields');
      }
  
      let matchuser = await hostCollection.findOne({ Username: reqUsername });
  
      if (!matchuser) {
        throw new Error('User not found!');
      }

      const passwordMatch = await bcrypt.compare(reqPassword, matchuser.Password);

      if (passwordMatch) {
        return {
          user: matchuser,
        };
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      console.error('Login Error:', error);
      throw new Error('An error occurred during login.');
    } finally {
      await client.close();
    }
  }

  //Function Admin Login
  async function Adminlogin(reqAdminUsername, reqAdminPassword) {
   const client = new MongoClient(uri);
   try {
     await client.connect();

     // Validate the request payload
     if (!reqAdminUsername || !reqAdminPassword) {
       throw new Error('Missing required fields');
     }
     let matchuser = await adminCollection.findOne({ Username: reqAdminUsername });

     if (!matchuser) {
       throw new Error('User not found!');
     }

     const passwordMatch = await bcrypt.compare(reqAdminPassword, matchuser.Password);

     if (passwordMatch) {
       const token = generateToken(matchuser);
       return {
        user: matchuser,
        token: token,
       };
     } else {
       throw new Error('Invalid password');
     }
   } catch (error) {
     console.error('Login Error:', error);
     throw new Error('An error occurred during login.');
   } finally {
     await client.close();
   }
  }
 
  //Function Admin Register
  async function registerAdmin(reqAdminUsername, reqAdminPassword, reqAdminName, reqAdminEmail) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
 
 
      // Validate the request payload
      if (!reqAdminUsername || !reqAdminPassword || !reqAdminName || !reqAdminEmail) {
        throw new Error('Missing required fields');
      }
      
      // Check password strength
      if (!isStrongPassword(reqAdminPassword)) {
        throw new Error('Password does not meet strength criteria');
      }

      const hashedPassword = await bcrypt.hash(reqAdminPassword, 10);

      await adminCollection.insertOne({
        Username: reqAdminUsername,
        Password: hashedPassword,
        name: reqAdminName,
        email: reqAdminEmail,
      });
 
      return 'Registration Complete!!';
      } catch (error) {
      console.error('Registration Error:', error);
      throw new Error('An error occurred during registration.');
     } finally {
      await client.close();
    }
  }

  //Function User Register
  async function register(reqUsername, reqPassword, reqname, reqemail, reqtel, reqaddress) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
 
 
      // Validate the request payload
      if (!reqUsername || !reqPassword || !reqname || !reqemail || !reqtel || !reqaddress ) {
        throw new Error('Missing required fields');
      }

      // Check password strength
      if (!isStrongPassword(reqPassword)) {
        throw new Error('Your password must meet the following criteria:\n' +
          '- At least 8 characters\n' +            // Comment: Minimum length
          '- At least one uppercase letter\n' +    // Comment: Require an uppercase letter
          '- At least one lowercase letter\n' +    // Comment: Require a lowercase letter
          '- At least one number\n' +              // Comment: Require a number
          '- At least one symbol');                 // Comment: Require a symbol
      }

      const hashedPassword = await bcrypt.hash(reqPassword, 10);
      const visitorPass = generateVisitorPass();

      await hostCollection.insertOne({
        Username: reqUsername,
        Password: hashedPassword,
        name: reqname,
        Tel: reqtel,
        email: reqemail,
        address: reqaddress,
        visitorPass: visitorPass,
      });
 
      return 'Registration Complete!! Visitor Pass: ' + visitorPass;
      } catch (error) {
      console.error('Registration Error:', error);
      throw new Error('An error occurred during registration.');
     } finally {
      await client.close();
    }
   }

   // Function to generate a random visitor pass
  function generateVisitorPass() {
    const passLength = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    let pass = '';
    for (let i = 0; i < passLength; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pass;
  }

    // Function to check if a password is strong//
  function isStrongPassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigits &&
      hasSpecialChars
    );
  }

  //Function Generate Token
  function generateToken(user) {
    const payload = 
    {
      username: user.AdminUsername,
    };
    const token = jwt.sign
    (
      payload, '20Pa@ssword', 
      { expiresIn: '1h' }
    );
    return token;
  }
  
  //Function Verify
  function verifyToken(req, res, next) {
    let header = req.headers.authorization;
    console.log(header);
  
    let token = header.split(' ')[1];
  
    jwt.verify(token, '20Pa@ssword', function (err, decoded) {
      if (err) {
        return res.status(401).send('Invalid Token');
      }
  
      req.user = decoded;
      next();
    });
  }
  
  // Express setup
  app.use(express.json());

  //Login User
  app.post('/Userlogin', (req, res) => {
    console.log(req.body);
  
    Userlogin(req.body.Username, req.body.Password)
      .then((result) => {
        res.json(result.user); // Return user information without generating a token
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  });
  
  //Register User
  app.post('/register', (req, res) => {
    console.log(req.body);

    register(req.body.Username, req.body.Password, req.body.name, req.body.email, req.body.Tel, req.body.address)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
      res.status(400).send(error.message);
      });
  });
  
  app.post('/create-visit', async (req, res) => {
    try {
      const {visitorName, gender, citizenship, visitorAddress, phoneNo, vehicleNo, hostId, visitDate,place , purpose } = req.body;

      // Ensure all required fields are present
      if (!visitorName || !gender || !hostId || !visitDate || !purpose || !place || !citizenship || !visitorAddress || !phoneNo || !vehicleNo) {
        throw new Error('Missing required fields');
      }

      const db = client.db('CondoVisitorManagement');
      const visitDetailCollection = db.collection('visitDetailCollectionName');

      // Insert the visit data into the visitDetailCollection
      const visitData = {
        visitorName,
        gender,
        citizenship,
        visitorAddress,
        phoneNo,
        vehicleNo,
        hostId,
        visitDate,
        place,
        purpose
      };
      await visitDetailCollection.insertOne(visitData);

      res.send('Visit created successfully');
    } catch (error) {
      console.error('Error creating visit:', error);
      res.status(500).send('An error occurred while creating the visit');
    }
  });

 // Update visitor (only admin)
 app.patch('/update-visit/:visitName',verifyToken, (req, res) => {
  const visitName = req.params.visitName;
  const {visitorName, gender, citizenship, visitorAddress, phoneNo, vehicleNo, hostId, visitDate, place, purpose } = req.body;

  if (!visitorName && !gender && !citizenship && !visitorAddress && !phoneNo && !vehicleNo && !hostId && !visitDate && !place && !purpose) {
    res.status(400).send('No fields provided for update');
    return;
  }

  const updateData = {};

  if (visitorName) updateData.visitorName = visitorName;
  if (gender) updateData.gender = gender;
  if (citizenship) updateData.citizenship = citizenship;
  if (visitorAddress) updateData.visitorAddress = visitorAddress;
  if (phoneNo) updateData.phoneNo = phoneNo;
  if (vehicleNo) updateData.vehicleNo = vehicleNo;
  if (hostId) updateData.hostId = hostId;
  if (visitDate) updateData.visitDate = visitDate;
  if (place) updateData.place = place;
  if (purpose) updateData.purpose = purpose;

  visitDetailCollection
    .findOneAndUpdate({ _id: new ObjectId(visitName) }, { $set: updateData })
    .then((result) => {
      if (!result.value) {
        // No matching document found
        throw new Error('Done Update');
      }
      res.send('Visit updated successfully');
    })
    .catch((error) => {
      console.error('Error updating visit:', error);
      if (error.message === 'Done Update') {
        res.status(404).send('Done Update');
      } else {
        res.status(500).send('An error occurred while updating the visit');
      }
    });
});

  // Delete visit (only admin)
  app.delete('/delete-visit/:visitDetailId',verifyToken, (req, res) => {
    const visitDetailId = req.params.visitDetailId;
  
    visitDetailCollection
      .deleteOne({ _id: new ObjectId(visitDetailId) })
      .then(() => {
        res.send('Visit detail deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting visit detail:', error);
        res.status(500).send('An error occurred while deleting the visit detail');
      });
  });
  
  // Read visit details (only admin)  
  app.get('/visit-details', verifyToken, verifySecurityToken, (req, res) => {
    visitDetailCollection
      .find({})
      .toArray()
      .then((visitDetails) => {
        res.json(visitDetails);
      })
      .catch((error) => {
        console.error('Error retrieving visit details:', error);
        res.status(500).send('An error occurred while retrieving visit details');
      });
  });

  // Read specific visit detail (security and admin)
  app.get('/get-visitor-details/:visitDetailId', verifyToken, verifySecurityToken, (req, res) => {
    const visitDetailId = req.params.visitDetailId;

    // Validate visitDetailId
    if (!visitDetailId) {
      res.status(400).send('Missing visitDetailId');
      return;
    }

    // Check if the visitDetailId exists in the database
    visitDetailCollection
      .findOne({ _id: new ObjectId(visitDetailId) })
      .then((visitDetail) => {
        if (!visitDetail) {
          res.status(404).send('Visit detail not found');
          return;
        }

        res.json(visitDetail);
      })
      .catch((error) => {
        console.error('Error retrieving visit detail:', error);
        res.status(500).send('An error occurred while retrieving visit detail');
      });
  });

  
  //Register Admin
  app.post('/register-admin', (req, res) => {
    console.log(req.body);
  
    registerAdmin(req.body.Username, req.body.Password, req.body.name, req.body.email)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  });

  //Login Admin
  app.post('/login-Admin', (req, res) => {
    console.log(req.body);
  
    Adminlogin(req.body.Username, req.body.Password)
      .then((result) => {
        let token = generateToken(result);
        res.send(token);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  });
  

  /////////////////////////////
  ///// Security Part /////////
  /////////////////////////////

  //Function Security Login
  async function Securitylogin(reqSecurityUsername, reqSecurityPassword) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
 
      // Validate the request payload
      if (!reqSecurityUsername || !reqSecurityPassword) {
        throw new Error('Missing required fields');
      }
      let matchuser = await securityCollection.findOne({ Username: reqSecurityUsername });
 
      if (!matchuser) {
        throw new Error('User not found!');
      }
 
      const passwordMatch = await bcrypt.compare(reqSecurityPassword, matchuser.Password);
 
      if (passwordMatch) {
        const token = generateSecurityToken(matchuser);
        return {
         user: matchuser,
         token: token,
        };
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      console.error('Login Error:', error);
      throw new Error('An error occurred during login.');
    } finally {
      await client.close();
    }
   }


  //Function Security Register
  async function registerSecurity(reqSecurityUsername, reqSecurityPassword, reqSecurityName) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
 
 
      // Validate the request payload
      if (!reqSecurityUsername || !reqSecurityPassword || !reqSecurityName) {
        throw new Error('Missing required fields');
      }
      
      // Check password strength
      if (!isStrongPassword(reqSecurityPassword)) {
        throw new Error('Password does not meet strength criteria');
      }
      const hashedPassword = await bcrypt.hash(reqSecurityPassword, 10);

      await securityCollection.insertOne({
        Username: reqSecurityUsername,
        Password: hashedPassword,
        name: reqSecurityName,
      });
 
      return 'Security Registration Complete!!';
      } catch (error) {
      console.error('Registration Error:', error);
      throw new Error('An error occurred during registration.');
     } finally {
      await client.close();
    }
  }

  //Function Generate Security Token
  function generateSecurityToken(user) {
    const payload = 
    {
      username: user.SecurityUsername,
    };
    const token = jwt.sign
    (
      payload, 'itupassword', 
      { expiresIn: '1h' }
    );
    return token;
  }
  
  //Function Verify
  function verifySecurityToken(req, res, next) {
    let header = req.headers.authorization;
    console.log(header);
    
    let token = header.split(' ')[1];
    
    jwt.verify(token, 'itupassword', function (err, decoded) {
      if (err) {
        return res.status(401).send('Invalid Token');
      }
    
      req.user = decoded;
       next();
    });
  }

  //Register Security
  app.post('/register-security', (req, res) => {
    console.log(req.body);
  
    registerSecurity(req.body.Username, req.body.Password, req.body.name)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  });  

  //Login Security
  app.post('/login-Security', (req, res) => {
    console.log(req.body);
  
    Securitylogin(req.body.Username, req.body.Password)
      .then((result) => {
        let token = generateSecurityToken(result);
        res.send(token);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  });

// Read user details (only security)
app.get('/get-user-details/:identifier', verifyToken, verifySecurityToken, (req, res) => {
  const identifier = req.params.identifier;

  // Validate identifier
  if (!identifier) {
    res.status(400).send('Missing identifier');
    return;
  }

  let query;
  if (ObjectId.isValid(identifier)) {
    // If it's a valid ObjectId, search by hostId
    query = { _id: new ObjectId(identifier) };
  } else {
    // If it's not an ObjectId, search by Tel, email, or name
    query = {
      $or: [
        { Tel: identifier },
        { email: identifier },
        { name: identifier }
      ]
    };
  }

  // Check if the user exists in the database
  hostCollection
    .findOne(query)
    .then((user) => {
      if (!user) {
        res.status(404).send('User not found');
        return;
      }

      // Exclude sensitive information (e.g., password) before sending the response
      const userWithoutSensitiveInfo = {
        _id: user._id,
        name: user.name,
        email: user.email,
        Tel: user.Tel,
        visitorPass: user.visitorPass,
        // Add other fields as needed
      };

      res.json(userWithoutSensitiveInfo);
    })
    .catch((error) => {
      console.error('Error retrieving user details:', error);
      res.status(500).send('An error occurred while retrieving user details');
    });
});

// Visitor Get pass
app.route('/get-visitor-pass/:hostId')
  .post((req, res) => {
    const hostId = req.params.hostId;

    // Validate hostId
    if (!hostId) {
      res.status(400).send('Missing hostId');
      return;
    }

    // Check if the hostId exists in the database
    hostCollection.findOne({ _id: new ObjectId(hostId) })
      .then((host) => {
        if (!host) {
          res.status(404).send('Host not found');
          return;
        }

        // Generate a new visitor pass
        const visitorPass = generateVisitorPass();

        // Update the visitor pass in the database
        hostCollection.updateOne({ _id: new ObjectId(hostId) }, { $set: { visitorPass: visitorPass } });

        res.json({ visitorPass });
      })
      .catch((error) => {
        console.error('Error getting visitor pass:', error);
        res.status(500).send('An error occurred while getting the visitor pass');
      });
  })
  .get((req, res) => {
    const hostId = req.params.hostId;

    // Validate hostId
    if (!hostId) {
      res.status(400).send('Missing hostId');
      return;
    }

    // Check if the hostId exists in the database
    hostCollection.findOne({ _id: new ObjectId(hostId) })
      .then((host) => {
        if (!host) {
          res.status(404).send('Host not found');
          return;
        }

        // Retrieve the visitor pass from the database
        const visitorPass = host.visitorPass;

        res.json({ visitorPass });
      })
      .catch((error) => {
        console.error('Error getting visitor pass:', error);
        res.status(500).send('An error occurred while getting the visitor pass');
      });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})
  .catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});