import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express()

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  });
  
app.use(limiter);


const GEMINI_API_KEY=process.env.GEMINI_API_KEY;

const gemini = new GoogleGenAI(GEMINI_API_KEY);

app.post("/api/explain-code", async (req, res) => {

    const explainLengths = {
        "small": "200-250",
        "medium": "700-800",
        "large": "1000-1200"
    }
    try {
      const { code, language, explainCharLength } = await req.body;
      
      if (!code) {
        return res.status(400).json({ error: "Code is required" });
      }
      
      const lengthRange = explainLengths[explainCharLength] || explainLengths["medium"];
    
      const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents:`Please explain this ${language || ""} code in simple terms, in ${lengthRange} characters :\n\n\`\`\`${language || ""}\n${code}\n\`\`\``,
        temperature: 0.9,
        topP: 1,
        topK: 1,
        maxOutputTokens: 800,
      });
  
      const explanation = response.text
      if (!explanation) {
        return res.status(500).json({ error: "Failed to explain code" });
      }
  
      res.json({ explanation, language: language || "unknown" });
    } catch (err) {
      console.error("Code Explain API Error:", err);
      res.status(500).json({ error: "Server error", details: err.message });
    }
});
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));