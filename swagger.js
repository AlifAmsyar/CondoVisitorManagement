/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *     AdminAuth:
 *       type: http
 *       scheme: bearer
 *       in: header
 *       name: Authorization
 *       description: Admin authentication token
 *       bearerFormat: JWT
 *     SecurityAuth:
 *       type: http
 *       scheme: bearer
 *       in: header
 *       name: Authorization
 *       description: Security authentication token
 *       bearerFormat: JWT
 * 
 */

/**
 * @swagger
 * /Userlogin:
 *   post:
 *     tags:
 *       - User
 *     summary: "User Login"
 *     description: "Authenticate a user and return user information."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *                 description: "User's Username"
 *               Password:
 *                 type: string
 *                 description: "User's Password"
 *     responses:
 *       200:
 *         description: "User authenticated successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   description: "User information"
 *       400:
 *         description: "Bad Request - Missing required fields"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       401:
 *         description: "Unauthorized - Invalid username or password"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */


/**
 * @swagger
 * /register-admin:
 *   post:
 *     tags:
 *       - Admin
 *     summary: "Admin Registration"
 *     description: "Register a new admin user."
 *     security:
 *       - AdminAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *                 description: "Admin's username"
 *               Password:
 *                 type: string
 *                 description: "Admin's password"
 *               name:
 *                 type: string
 *                 description: "Admin's name"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: "Admin's email address"
 *     responses:
 *       200:
 *         description: "Admin registered successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: "Success message"
 *       400:
 *         description: "Bad Request - Missing required fields"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - User
 *     summary: "User Registration"
 *     description: "Register a new user."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *                 description: "User's username"
 *               Password:
 *                 type: string
 *                 description: "User's password"
 *               name:
 *                 type: string
 *                 description: "User's name"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: "User's email address"
 *               Tel:
 *                 type: string
 *                 description: "User's telephone number"
 *               address:
 *                 type: string
 *                 description: "User's address"
 *     responses:
 *       200:
 *         description: "User registered successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: "Success message"
 *       400:
 *         description: "Bad Request - Missing required fields"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /create-visit:
 *   post:
 *     tags:
 *       - User
 *       - Visitor
 *     summary: "Create a Visit"
 *     description: "Create a new visit record."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               visitorName:
 *                 type: string
 *                 description: "Visitor's name"
 *               gender:
 *                 type: string
 *                 description: "Visitor's gender"
 *               citizenship:
 *                 type: string
 *                 description: "Visitor's citizenship"
 *               visitorAddress:
 *                 type: string
 *                 description: "Visitor's address"
 *               phoneNo:
 *                 type: string
 *                 description: "Visitor's phone number"
 *               vehicleNo:
 *                 type: string
 *                 description: "Visitor's vehicle number"
 *               hostId:
 *                 type: string
 *                 description: "ID of the host"
 *               visitDate:
 *                 type: string
 *                 format: date
 *                 description: "Date of the visit"
 *               place:
 *                 type: string
 *                 description: "Visit place"
 *               purpose:
 *                 type: string
 *                 description: "Purpose of the visit"
 *     responses:
 *       200:
 *         description: "Visit created successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: "Success message"
 *       400:
 *         description: "Bad Request - Missing required fields"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /update-visit/{visitName}:
 *   patch:
 *     tags:
 *       - Admin
 *     summary: "Update a Visit"
 *     description: "Update an existing visit record by visit name."
 *     security:
 *       - AdminAuth: []
 *     parameters:
 *       - name: visitName
 *         in: path
 *         description: "Name of the visit to update"
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               visitorName:
 *                 type: string
 *                 description: "Visitor's name"
 *               gender:
 *                 type: string
 *                 description: "Visitor's gender"
 *               citizenship:
 *                 type: string
 *                 description: "Visitor's citizenship"
 *               visitorAddress:
 *                 type: string
 *                 description: "Visitor's address"
 *               phoneNo:
 *                 type: string
 *                 description: "Visitor's phone number"
 *               vehicleNo:
 *                 type: string
 *                 description: "Visitor's vehicle number"
 *               hostId:
 *                 type: string
 *                 description: "ID of the host"
 *               visitDate:
 *                 type: string
 *                 format: date
 *                 description: "Date of the visit"
 *               place:
 *                 type: string
 *                 description: "Visit place"
 *               purpose:
 *                 type: string
 *                 description: "Purpose of the visit"
 *     responses:
 *       200:
 *         description: "Visit updated successfully"
 *       400:
 *         description: "Bad Request - No fields provided for update"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       404:
 *         description: "Visit not found"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /delete-visit/{visitDetailId}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: "Delete a Visit"
 *     description: "Delete a visit detail by visit detail ID. Only accessible to admins."
 *     security:
 *       - AdminAuth: []
 *     parameters:
 *       - name: visitDetailId
 *         in: path
 *         description: "ID of the visit detail to delete"
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: "Visit detail deleted successfully"
 *       404:
 *         description: "Visit detail not found"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /visit-details:
 *   get:
 *     tags:
 *       - Admin
 *       - Security
 *     summary: "Get Visit Details"
 *     description: "Retrieve a list of visit details. Only accessible to admins."
 *     security:
 *       - AdminAuth: []
 *       - SecurityAuth: []
 *     responses:
 *       200:
 *         description: "List of visit details retrieved successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: "Visit detail ID"
 *                   visitorName:
 *                     type: string
 *                     description: "Visitor's name"
 *                   gender:
 *                     type: string
 *                     description: "Visitor's gender"
 *                   citizenship:
 *                     type: string
 *                     description: "Visitor's citizenship"
 *                   visitorAddress:
 *                     type: string
 *                     description: "Visitor's address"
 *                   phoneNo:
 *                     type: string
 *                     description: "Visitor's phone number"
 *                   vehicleNo:
 *                     type: string
 *                     description: "Visitor's vehicle number"
 *                   hostId:
 *                     type: string
 *                     description: "ID of the host"
 *                   visitDate:
 *                     type: string
 *                     format: date
 *                     description: "Date of the visit"
 *                   place:
 *                     type: string
 *                     description: "Visit place"
 *                   purpose:
 *                     type: string
 *                     description: "Purpose of the visit"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */


/**
 * @swagger
 * /login-Admin:
 *   post:
 *     tags:
 *       - Admin
 *     summary: "Admin Login"
 *     description: "Authenticate an admin user and generate a JWT token."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *                 description: "Admin's username"
 *               Password:
 *                 type: string
 *                 description: "Admin's password"
 *     responses:
 *       200:
 *         description: "Admin authenticated successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: "JWT token for authentication"
 *       400:
 *         description: "Bad Request - Missing required fields"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       401:
 *         description: "Unauthorized - Invalid username or password"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /register-security:
 *   post:
 *     tags:
 *       - Security
 *     summary: "Security Registration"
 *     description: "Register a new security user."
 *     security:
 *       - SecurityAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *                 description: "Security's username"
 *               Password:
 *                 type: string
 *                 description: "Security's password"
 *               name:
 *                 type: string
 *                 description: "Security's name"
 *     responses:
 *       200:
 *         description: "Security registered successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: "Success message"
 *       400:
 *         description: "Bad Request - Missing required fields"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /login-Security:
 *   post:
 *     tags:
 *       - Security
 *     summary: "Security Login"
 *     description: "Authenticate an admin user and generate a JWT token."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *                 description: "Security's username"
 *               Password:
 *                 type: string
 *                 description: "Security's password"
 *     responses:
 *       200:
 *         description: "Security authenticated successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: "JWT token for authentication"
 *       400:
 *         description: "Bad Request - Missing required fields"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       401:
 *         description: "Unauthorized - Invalid username or password"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */

/**
 * @swagger
 * /get-visitor-pass/{hostId}:
 *   post:
 *     tags:
 *       - Visitor
 *     summary: "Get passVisit "
 *     description: "Generate and update a new visitor pass for a host."
 *     parameters:
 *       - in: path
 *         name: hostId
 *         required: true
 *         description: "ID of the host"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "New visitor pass generated successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 visitorPass:
 *                   type: string
 *                   description: "Generated visitor pass"
 *       400:
 *         description: "Bad Request - Missing hostId"
 *       404:
 *         description: "Host not found"
 *       500:
 *         description: "Internal Server Error"
 */


/**
 * @swagger
 * /get-user-details/{identifier}:
 *   get:
 *     tags:
 *       - Security
 *     summary: "Get User Details"
 *     description: "Retrieve user details by hostId, Tel, email, or name."
 *     parameters:
 *       - in: path
 *         name: identifier
 *         required: true
 *         description: "User identifier (hostId, Tel, email, or name)"
 *         schema:
 *           type: string
 *     security:
 *       - SecurityAuth: []
 *     responses:
 *       200:
 *         description: "User details retrieved successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: "User ID"
 *                 name:
 *                   type: string
 *                   description: "User's name"
 *                 email:
 *                   type: string
 *                   description: "User's email"
 *                 Tel:
 *                   type: string
 *                   description: "User's Tel"
 *                 visitorPass:
 *                   type: string
 *                   description: "Visitor Pass"
 *       400:
 *         description: "Bad Request - Missing identifier"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       404:
 *         description: "User not found"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 *       500:
 *         description: "Internal Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "Error message"
 */