import { useState } from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Survey() {
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
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6b21a8', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
            <ArrowLeft size={18} /> Ana Sayfaya Dön
          </Link>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ color: 'var(--success)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <CheckCircle size={64} />
          </div>
          <h2 className="mb-4" style={{ color: '#0f172a' }}>Katılımınız İçin Teşekkürler!</h2>
          <p style={{ color: '#475569' }}>
            Anket yanıtlarınız başarıyla alınmıştır. Geri bildirimleriniz projemizin gelişmesine büyük katkı sağlayacaktır.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12" style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6b21a8', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
        <h1 style={{ color: '#6b21a8', fontSize: '2rem', marginBottom: '0.5rem' }}>Projeye Destek Anketimiz</h1>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
          Lütfen aşağıdaki anketi doldurarak projemizin geliştirilmesine katkıda bulunun. Katılımınız tamamen anonimdir.
        </p>
      </div>

      <div className="glass-card">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label style={{ fontWeight: '500', color: '#1e293b' }}>Web sitesinin tasarımını nasıl buldunuz?</label>
            <select required>
              <option value="" disabled selected>Seçiniz</option>
              <option value="5">Çok İyi</option>
              <option value="4">İyi</option>
              <option value="3">Orta</option>
              <option value="2">Kötü</option>
              <option value="1">Çok Kötü</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label style={{ fontWeight: '500', color: '#1e293b' }}>Bu tür dijital araçların erken teşhiste faydalı olacağını düşünüyor musunuz?</label>
            <div className="radio-group" style={{ flexDirection: 'row', gap: '1.5rem', marginTop: '0.5rem' }}>
              <label className="radio-label">
                <input type="radio" name="helpful" value="yes" className="radio-input" required /> Evet
              </label>
              <label className="radio-label">
                <input type="radio" name="helpful" value="no" className="radio-input" /> Hayır
              </label>
              <label className="radio-label">
                <input type="radio" name="helpful" value="maybe" className="radio-input" /> Emin Değilim
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label style={{ fontWeight: '500', color: '#1e293b' }}>Eklemek İstediğiniz Geri Bildirimleriniz (Opsiyonel)</label>
            <textarea 
              style={{ minHeight: '120px', resize: 'vertical' }}
              placeholder="Görüş ve önerilerinizi buraya yazabilirsiniz..."
            ></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem', backgroundColor: '#6b21a8', borderColor: '#6b21a8' }}>
              Anketi Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
