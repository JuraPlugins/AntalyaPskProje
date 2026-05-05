import { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="container py-12" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#c2410c', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
            <ArrowLeft size={18} /> Ana Sayfaya Dön
          </Link>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ color: 'var(--success)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <CheckCircle size={64} />
          </div>
          <h2 className="mb-4" style={{ color: '#0f172a' }}>Başvurunuz Alındı!</h2>
          <p style={{ color: '#475569' }}>
            Gönüllü başvurunuz ekibimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
            Desteğiniz için teşekkür ederiz.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12" style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#c2410c', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <h1 style={{ color: '#c2410c', fontSize: '2.25rem', margin: 0 }}>Gönüllü Başvuru Formu</h1>
        </div>
        <p style={{ color: '#475569', fontSize: '1rem' }}>
          Projemizde gönüllü olarak yer almak istiyorsanız, lütfen aşağıdaki formu doldurun. Farklı alanlarda gönüllülere ihtiyacımız var.
        </p>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: '#c2410c', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Gönüllü Olabileceğiniz Alanlar</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#1e293b', fontSize: '1rem', marginBottom: '0.75rem' }}>Akademik Destek:</h4>
            <ul style={{ color: '#475569', fontSize: '0.95rem', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Araştırma asistanlığı</li>
              <li>Veri analizi</li>
              <li>Literatür taraması</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#1e293b', fontSize: '1rem', marginBottom: '0.75rem' }}>Teknik Destek:</h4>
            <ul style={{ color: '#475569', fontSize: '0.95rem', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Web geliştirme</li>
              <li>Veri güvenliği</li>
              <li>Teknik dokümantasyon</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#1e293b', fontSize: '1rem', marginBottom: '0.75rem' }}>Psikolojik Destek:</h4>
            <ul style={{ color: '#475569', fontSize: '0.95rem', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Danışmanlık hizmeti</li>
              <li>Grup terapisi yardımcılığı</li>
              <li>Krize müdahale</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#1e293b', fontSize: '1rem', marginBottom: '0.75rem' }}>İdari Destek:</h4>
            <ul style={{ color: '#475569', fontSize: '0.95rem', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Koordinasyon</li>
              <li>İletişim</li>
              <li>Organizasyon</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card">
        <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1.5rem' }}>Kişisel Bilgiler</h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: '#1e293b', marginBottom: '0.5rem', fontWeight: '500' }}>Ad Soyad *</label>
            <input type="text" required placeholder="Adınız ve soyadınız" />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: '#1e293b', marginBottom: '0.5rem', fontWeight: '500' }}>E-posta Adresi *</label>
            <input type="email" required placeholder="ornek@email.com" />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: '#1e293b', marginBottom: '0.5rem', fontWeight: '500' }}>Destek Vermek İstediğiniz Alan *</label>
            <select required>
              <option value="">Seçiniz</option>
              <option value="Akademik Destek">Akademik Destek</option>
              <option value="Teknik Destek">Teknik Destek</option>
              <option value="Psikolojik Destek">Psikolojik Destek</option>
              <option value="İdari Destek">İdari Destek</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: '#1e293b', marginBottom: '0.5rem', fontWeight: '500' }}>Eklemek İstedikleriniz</label>
            <textarea style={{ minHeight: '100px' }} placeholder="Kendinizden veya motivasyonunuzdan kısaca bahsedin..."></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem', backgroundColor: '#c2410c', borderColor: '#c2410c' }}>
              Başvuruyu Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
