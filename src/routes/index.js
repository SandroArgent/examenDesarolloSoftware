import { Router } from 'express';
import pacienteRoutes from "./pacienteRoutes.js"


const router = Router(); 

router.use('/api/pacientes', pacienteRoutes)


export default router