/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
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
 *                 description: "User's username"
 *               Password:
 *                 type: string
 *                 description: "User's password"
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
 *       - BearerAuth: []
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
 *       - Admin
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
 *       - BearerAuth: []
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
 *       - BearerAuth: []
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
 *     summary: "Get Visit Details"
 *     description: "Retrieve a list of visit details. Only accessible to admins."
 *     security:
 *       - BearerAuth: []
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
 *                   description: "Error message"
 */