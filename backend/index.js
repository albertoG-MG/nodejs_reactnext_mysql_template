const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const userRoutes = require('./routes/userRoutes');
const RolRoutes = require('./routes/RolRoutes');
const SubRolRoutes = require('./routes/SubRolRoutes');
const DepartamentoRoutes = require('./routes/DepartamentoRoutes');

const PORT = process.env.PORT || 3000;

//Middleware para parsear json
app.use(express.json());

// Usa las rutas definidas
app.use('/users', userRoutes);
app.use('/roles', RolRoutes);
app.use('/subroles', SubRolRoutes);
app.use('/departamentos', DepartamentoRoutes);

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en: http://localhost:${PORT}`);
});