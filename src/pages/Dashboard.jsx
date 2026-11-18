import { useState } from "react";
import { Header } from "../components/Header";
import { Statistics } from "../components/Statistics";
import { Students } from "./Students";
import { students } from "../data/students";

export function Dashboard() {
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [showStats, setShowStats] = useState(true);

  const filtered = students.filter((s) => !showActiveOnly || s.active)
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <Header />

      {/* אזור הפקדים (כפתורים וחיפוש) מעוצב בצורה נקייה ומרווחת */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', margin: '24px 0', alignItems: 'center' }}>
        <button 
          className="btn-primary" 
          onClick={() => setShowActiveOnly(true)}
          style={{ backgroundColor: showActiveOnly ? '#3730a3' : '#4f46e5' }}
        >
          להצגת תלמידות פעילות בלבד
        </button>

        <button 
          className="btn-primary" 
          onClick={() => setShowActiveOnly(false)}
          style={{ backgroundColor: !showActiveOnly ? '#3730a3' : '#4f46e5' }}
        >
          להצגת כל התלמידות
        </button>

        <input
          type="text"
          placeholder="חיפוש לפי שם..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '8px 14px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            fontSize: '0.9rem',
            outline: 'none',
            flex: '1',
            minWidth: '200px'
          }}
        />

        <button 
          className="btn-primary" 
          onClick={() => setShowStats(!showStats)}
          style={{ backgroundColor: '#64748b' }}
        >
          {showStats ? "הסתר סטטיסטיקה" : "הצג סטטיסטיקה"}
        </button>
      </div>

      {showStats && <Statistics students={students} />}
      
      <div style={{ marginTop: '32px' }}>
        <Students students={filtered} />
      </div>
    </div>
  );
}