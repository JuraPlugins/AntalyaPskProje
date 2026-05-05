import { ArrowLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const types = [
  {
    name: 'Voyeurizm',
    badge: 'Orta',
    badgeClass: 'badge-orta',
    desc: 'Rızası olmayan kişileri gizlice izleme, özellikle özel anlarında veya çıplakken izleme arzusu.',
  },
  {
    name: 'Ekshibisionizm',
    badge: 'Orta',
    badgeClass: 'badge-orta',
    desc: 'Genital organları rızası olmayan kişilere gösterme veya cinsel davranışları başkalarının önünde sergileme dürtüsü.',
  },
  {
    name: 'Fetişizm',
    badge: 'Hafif',
    badgeClass: 'badge-hafif',
    desc: 'Cansız nesnelere veya vücudun cinsel olmayan bölgelerine aşırı cinsel odaklanma.',
  },
  {
    name: 'Frotörizm',
    badge: 'Orta',
    badgeClass: 'badge-orta',
    desc: 'Rızası olmayan bir kişiye sürtünme veya dokunma dürtüsü, genellikle kalabalık yerlerde.',
  },
  {
    name: 'Pedofili',
    badge: 'Yüksek',
    badgeClass: 'badge-yuksek',
    desc: 'Ergenlik öncesi çocuklara yönelik cinsel ilgi. Bu ciddi bir bozukluktur ve profesyonel yardım gerektirir.',
  },
  {
    name: 'Sadomazoşizm',
    badge: 'Orta',
    badgeClass: 'badge-orta',
    desc: 'Acı verme veya acı çekme yoluyla cinsel tatmin arayışı.',
  },
  {
    name: 'Transvestik Bozukluk',
    badge: 'Hafif',
    badgeClass: 'badge-hafif',
    desc: 'Karşı cinsin kıyafetlerini giyerek cinsel uyarılma.',
  }
];

export default function Types() {
  return (
    <div className="container py-12" style={{ maxWidth: '1000px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
        <h1 style={{ color: '#1e3a8a', fontSize: '2rem', marginBottom: '0.5rem' }}>Parafili Türleri</h1>
        <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '800px' }}>
          Parafili bozuklukları, alışılmadık cinsel ilgi ve dürtülerle karakterize edilen durumları ifade eder. Bu sayfa bilgilendirme amaçlıdır ve tanı koymak için kullanılmamalıdır.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #3b82f6', borderRadius: '0.5rem', marginBottom: '2.5rem' }}>
        <Info size={24} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ color: '#1e293b', fontWeight: '600', marginBottom: '0.25rem' }}>Önemli Not:</h4>
          <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>
            Bu bilgiler sadece eğitim amaçlıdır. Kendinizde veya sevdiklerinizde bu belirtileri fark ederseniz, lütfen profesyonel bir psikolog veya psikiyatristle iletişime geçin. Erken müdahale önemlidir.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {types.map((type, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="flex justify-between items-center mb-3">
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#0f172a' }}>{type.name}</h3>
              <span className={`badge ${type.badgeClass}`}>{type.badge}</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', flex: 1 }}>{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
