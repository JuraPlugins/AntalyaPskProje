import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Types from './pages/Types';
import Test from './pages/Test';
import Survey from './pages/Survey';
import Volunteer from './pages/Volunteer';

function BackgroundWrapper({ children }) {
  const location = useLocation();
  const isVolunteer = location.pathname === '/volunteer';
  
  return (
    <div style={{ backgroundColor: isVolunteer ? 'var(--bg-volunteer)' : 'var(--bg-primary)', minHeight: '100vh', transition: 'background-color 0.3s' }}>
      {children}
    </div>
  );
}

function App() {
  const [showLegalWarning, setShowLegalWarning] = useState(true);

  return (
    <Router>
      <BackgroundWrapper>
        {/* Legal Warning Modal */}
        {showLegalWarning && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: '1rem' }}>
            <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
              <h2 style={{ marginBottom: '1rem', color: 'var(--text-title)' }}>Yasal Uyarı ve Bilgilendirme</h2>
              <p>
                Antalya Bilim Üniversitesi Psikolojik Test Projesi kapsamında hazırlanan bu web sitesi, 
                bireylerin parafili ve cinsel dürtü kontrolü konularında farkındalık kazanmalarına yardımcı olmayı amaçlamaktadır.
              </p>
              <p>
                <strong>Önemli:</strong> Bu site tıbbi bir tanı koymaz veya tedavi önermez. Sitede yer alan testler ve bilgiler 
                sadece ön bilgilendirme amaçlıdır ve profesyonel psikolojik/psikiyatrik desteğin yerine geçmez. 
              </p>
              <div className="flex justify-end mt-6">
                <button className="btn btn-primary" onClick={() => setShowLegalWarning(false)}>
                  Anladım
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main style={{ minHeight: 'calc(100vh - 100px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/types" element={<Types />} />
            <Route path="/test" element={<Test />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{ padding: '2rem 0', textAlign: 'center' }}>
          <div className="container">
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              &copy; 2026 Antalya Bilim Üniversitesi - Psikoloji Bölümü
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Bu proje akademik araştırma amaçlıdır ve etik kurul onayı altındadır.
            </p>
          </div>
        </footer>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
