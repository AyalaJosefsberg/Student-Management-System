import { Link } from 'react-router-dom';

export function StudentCard(props) {
    return (
        <div className="card">
            <h3 style={{ margin: '0 0 12px 0', color: '#0f172a' }}>{props.name}</h3>
            <p style={{ margin: '6px 0', color: '#64748b' }}>ת.ז: {props.id}</p>
            <p style={{ margin: '6px 0', fontWeight: '600' }}>ציון: {props.grade}</p>            
            <div style={{ margin: '12px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {props.grade > 90 && <span className="badge-success">מצטיינת 🌟</span>}
                {props.grade < 60 && <span className="badge-warning">נדרש שיפור ⚠️</span>}
                <span style={{ fontSize: '0.85rem', alignSelf: 'center', color: props.active ? '#16a34a' : '#dc2626' }}>
                    {props.active ? "● פעילה" : "● לא פעילה"}
                </span>
            </div>

            <div style={{ marginTop: '16px' }}>
                <Link to={`/student/${props.id}`} className="btn-primary">
                    הצג פרטים מלאים
                </Link>
            </div>
        </div>
    );
}