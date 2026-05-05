import { Link } from 'react-router-dom';
import { BookOpen, ClipboardList, FileText, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="container py-20 flex flex-col items-center">
      
      <div className="text-center mb-12" style={{ maxWidth: '800px' }}>
        <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Antalya Bilim Üniversitesi
        </h1>
        <h2 style={{ color: '#2563eb', fontSize: '1.75rem', marginBottom: '1rem', fontWeight: '600' }}>
          Psikolojik Test Projesi
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
          Parafili hastaları için bilgilendirme, test ve psikolojik danışman desteği sunan akademik bir projedir.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1000px' }}>
        
        {/* Card 1 */}
        <Link to="/types" className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', padding: '2rem' }}>
          <div style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BookOpen size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0f172a' }}>Parafili Türlerine Göz At</h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Parafili bozuklukları hakkında detaylı bilgi edinin ve farklı türler hakkında bilgilenin.</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/test" className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', padding: '2rem' }}>
          <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ClipboardList size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0f172a' }}>Psikolojik Testimize Ücretsiz Katıl</h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Anonim ve ücretsiz psikolojik test ile katkıda bulunun. Sonuçlarınız gizli tutulacaktır.</p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/survey" className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', padding: '2rem' }}>
          <div style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FileText size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0f172a' }}>Bize Destek Olmak İçin Anketimize Katıl</h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Projemizi geliştirmek için geri bildirimlerinizi paylaşın ve araştırmamıza katkı sağlayın.</p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to="/volunteer" className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', padding: '2rem' }}>
          <div style={{ backgroundColor: '#ffedd5', color: '#c2410c', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Users size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0f172a' }}>Gönüllü Olarak Çalışmak İster Misiniz?</h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Projemizde gönüllü olarak yer almak isterseniz başvurunuzu yapabilirsiniz.</p>
          </div>
        </Link>

      </div>
    </div>
  );
}
