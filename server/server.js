
// import 'dotenv/config';

// import express from 'express';
// import cors from 'cors';

// import connectDB from './Database Connection/DB.js';

// import projectRoutes from './Route/projectRoutes.js';
// import authRoutes from './Route/authRoutes.js';
// import clientRoutes from './Route/clientRoutes.js';
// import packageRoutes from './Route/packageRoutes.js';
// import notebookRoutes from './Route/notebookRputes.js';

// // =========================================================
// // 1. CREATE EXPRESS APP
// // =========================================================

// const app = express();

// // =========================================================
// // 2. BODY PARSING
// // =========================================================

// app.use(
//   express.json({
//     limit: '50mb',
//   })
// );

// app.use(
//   express.urlencoded({
//     limit: '50mb',
//     extended: true,
//   })
// );

// // =========================================================
// // 3. CORS
// // =========================================================

// const allowedOrigins = [
//   'https://habesha-film-production.onrender.com',
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow requests without an Origin header
//       // (Postman, server-to-server, etc.)
//       if (!origin) {
//         return callback(null, true);
//       }

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       console.log(
//         `❌ CORS blocked origin: ${origin}`
//       );

//       return callback(
//         new Error('Not allowed by CORS')
//       );
//     },

//     methods: [
//       'GET',
//       'POST',
//       'PUT',
//       'DELETE',
//       'PATCH',
//       'OPTIONS',
//     ],

//     allowedHeaders: [
//       'Content-Type',
//       'Authorization',
//       'Accept',
//       'Cache-Control',
//       'Pragma',
//     ],

//     credentials: false,

//     optionsSuccessStatus: 204,
//   })
// );

// // =========================================================
// // 4. HANDLE PREFLIGHT REQUESTS
// // =========================================================

// app.options(
  
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) {
//         return callback(null, true);
//       }

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       return callback(
//         new Error('Not allowed by CORS')
//       );
//     },

//     methods: [
//       'GET',
//       'POST',
//       'PUT',
//       'DELETE',
//       'PATCH',
//       'OPTIONS',
//     ],

//     allowedHeaders: [
//       'Content-Type',
//       'Authorization',
//       'Accept',
//       'Cache-Control',
//       'Pragma',
//     ],

//     credentials: false,

//     optionsSuccessStatus: 204,
//   })
// );

// // =========================================================
// // 5. DATABASE
// // =========================================================

// connectDB();

// // =========================================================
// // 6. REQUEST LOGGER
// // =========================================================

// app.use((req, res, next) => {
//   console.log(
//     `🔥 [${req.method}] Request made to: ${req.url}`
//   );

//   next();
// });

// // =========================================================
// // 7. ROUTES
// // =========================================================

// app.use(
//   '/api/projects',
//   projectRoutes
// );

// app.use(
//   '/api/auth',
//   authRoutes
// );

// app.use(
//   '/api/client',
//   clientRoutes
// );

// app.use(
//   '/api/packages',
//   packageRoutes
// );

// app.use(
//   '/api/notebook',
//   notebookRoutes
// );

// // =========================================================
// // 8. HEALTH CHECK
// // =========================================================

// app.get(
//   '/',
//   (req, res) => {
//     res.status(200).json({
//       success: true,
//       message:
//         'Habesha Film Production Server is running.',
//     });
//   }
// );

// // =========================================================
// // 9. 404 HANDLER
// // =========================================================

// app.use(
//   (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Route not found',
//       path: req.originalUrl,
//     });
//   }
// );

// // =========================================================
// // 10. GLOBAL ERROR HANDLER
// // =========================================================

// app.use(
//   (err, req, res, next) => {
//     console.error(
//       '🔥 Server Error:',
//       err
//     );

//     if (
//       err.message ===
//       'Not allowed by CORS'
//     ) {
//       return res.status(403).json({
//         success: false,
//         message:
//           'CORS policy blocked this origin.',
//         origin: req.headers.origin || null,
//       });
//     }

//     res.status(
//       err.status || 500
//     ).json({
//       success: false,
//       message:
//         err.message ||
//         'Internal server error',
//     });
//   }
// );

// // =========================================================
// // 11. START SERVER
// // =========================================================

// const PORT =
//   process.env.PORT || 5000;

// const server = app.listen(
//   PORT,
//   () => {
//     console.log(
//       `🚀 Server running on port ${PORT}`
//     );
//   }
// );

// // =========================================================
// // 12. SERVER TIMEOUT
// // =========================================================

// server.timeout = 300000;
// server.keepAliveTimeout = 300000;

// import 'dotenv/config';

// import express from 'express';
// import cors from 'cors';

// import connectDB from './Database Connection/DB.js';

// import projectRoutes from './Route/projectRoutes.js';
// import authRoutes from './Route/authRoutes.js';
// import clientRoutes from './Route/clientRoutes.js';
// import packageRoutes from './Route/packageRoutes.js';
// import notebookRoutes from './Route/notebookRputes.js';

// // =========================================================
// // 1. CREATE EXPRESS APP
// // =========================================================

// const app = express();

// // =========================================================
// // 2. BODY PARSING
// // =========================================================

// app.use(
//   express.json({
//     limit: '50mb',
//   })
// );

// app.use(
//   express.urlencoded({
//     limit: '50mb',
//     extended: true,
//   })
// );

// // =========================================================
// // 3. CORS
// // =========================================================

// const allowedOrigins = [
//   'https://nahome-film-production-dmf0.onrender.com',
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     // Allow requests without an Origin header
//     // (Postman, server-to-server, etc.)
//     if (!origin) {
//       return callback(null, true);
//     }

//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }

//     console.log(
//       `❌ CORS blocked origin: ${origin}`
//     );

//     return callback(
//       new Error('Not allowed by CORS')
//     );
//   },

//   methods: [
//     'GET',
//     'POST',
//     'PUT',
//     'DELETE',
//     'PATCH',
//     'OPTIONS',
//   ],

//   allowedHeaders: [
//     'Content-Type',
//     'Authorization',
//     'Accept',
//     'Cache-Control',
//     'Pragma',
//   ],

//   credentials: false,

//   optionsSuccessStatus: 204,
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // =========================================================
// // 4. DATABASE
// // =========================================================

// connectDB();

// // =========================================================
// // 5. REQUEST LOGGER
// // =========================================================

// app.use((req, res, next) => {
//   console.log(
//     `🔥 [${req.method}] Request made to: ${req.url}`
//   );

//   next();
// });

// // =========================================================
// // 6. ROUTES
// // =========================================================

// app.use(
//   '/api/projects',
//   projectRoutes
// );

// app.use(
//   '/api/auth',
//   authRoutes
// );

// app.use(
//   '/api/client',
//   clientRoutes
// );

// app.use(
//   '/api/packages',
//   packageRoutes
// );

// app.use(
//   '/api/notebook',
//   notebookRoutes
// );

// // =========================================================
// // 7. HEALTH CHECK
// // =========================================================

// app.get(
//   '/',
//   (req, res) => {
//     res.status(200).json({
//       success: true,
//       message:
//         'Nahome Film Production Server is running.',
//     });
//   }
// );

// // =========================================================
// // 8. 404 HANDLER
// // =========================================================

// app.use(
//   (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Route not found',
//       path: req.originalUrl,
//     });
//   }
// );

// // =========================================================
// // 9. GLOBAL ERROR HANDLER
// // =========================================================

// app.use(
//   (err, req, res, next) => {
//     console.error(
//       '🔥 Server Error:',
//       err
//     );

//     if (
//       err.message ===
//       'Not allowed by CORS'
//     ) {
//       return res.status(403).json({
//         success: false,
//         message:
//           'CORS policy blocked this origin.',
//         origin:
//           req.headers.origin || null,
//       });
//     }

//     res.status(
//       err.status || 500
//     ).json({
//       success: false,
//       message:
//         err.message ||
//         'Internal server error',
//     });
//   }
// );

// // =========================================================
// // 10. START SERVER
// // =========================================================

// const PORT =
//   process.env.PORT || 5000;

// const server = app.listen(
//   PORT,
//   () => {
//     console.log(
//       `🚀 Server running on port ${PORT}`
//     );
//   }
// );

// // =========================================================
// // 11. SERVER TIMEOUT
// // =========================================================

// server.timeout = 300000;
// server.keepAliveTimeout = 300000;


import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import connectDB from './Database Connection/DB.js';

import projectRoutes from './Route/projectRoutes.js';
import authRoutes from './Route/authRoutes.js';
import clientRoutes from './Route/clientRoutes.js';
import packageRoutes from './Route/packageRoutes.js';
import notebookRoutes from './Route/notebookRputes.js';

// =========================================================
// 1. CREATE EXPRESS APP
// =========================================================

const app = express();

// =========================================================
// 2. CORS CONFIGURATION
// CORS must run before body parsing and API routes.
// =========================================================

const allowedOrigins = [
  'https://nahome-film-production-dmf0.onrender.com',
  'http://localhost:5173',
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header.
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error(`CORS blocked origin: ${origin}`);

    return callback(new Error('Not allowed by CORS'));
  },

  methods: [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
  ],

  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'Cache-Control',
    'Pragma',
  ],

  credentials: false,
  optionsSuccessStatus: 204,
};

// Apply CORS to all routes.
app.use(cors(corsOptions));

// Explicitly handle browser preflight requests.
// RegExp works with Express 4 and Express 5.
app.options(/.*/, cors(corsOptions));

// =========================================================
// 3. BODY PARSING
// =========================================================

app.use(
  express.json({
    limit: '50mb',
  })
);

app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
  })
);

// =========================================================
// 4. REQUEST LOGGER
// =========================================================

app.use((req, res, next) => {
  console.log(
    `🔥 [${req.method}] Request made to: ${req.url}`
  );

  next();
});

// =========================================================
// 5. DATABASE
// =========================================================

connectDB();

// =========================================================
// 6. API ROUTES
// =========================================================

app.use('/api/projects', projectRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/client', clientRoutes);

app.use('/api/packages', packageRoutes);

app.use('/api/notebook', notebookRoutes);

// =========================================================
// 7. HEALTH CHECK
// =========================================================

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Nahom Film Production Server is running.',
  });
});

// =========================================================
// 8. 404 HANDLER
// =========================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl,
  });
});

// =========================================================
// 9. GLOBAL ERROR HANDLER
// =========================================================

app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err);

  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS policy blocked this origin.',
      origin: req.headers.origin || null,
    });
  }

  return res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

// =========================================================
// 10. START SERVER
// =========================================================

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// =========================================================
// 11. SERVER TIMEOUT
// =========================================================

server.timeout = 300000;
server.keepAliveTimeout = 300000;
