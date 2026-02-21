import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import windowsRoutes from './routes/windowsRoutes';
import officeRoutes from './routes/officeRoutes';
import softwareRoutes from './routes/softwareRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Huynhtu Backend API is running!');
});

app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Register Routes
app.use('/api/windows', windowsRoutes);
app.use('/api/office', officeRoutes);
app.use('/api/software', softwareRoutes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
