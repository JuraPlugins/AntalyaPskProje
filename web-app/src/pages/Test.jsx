import { useState } from 'react';
import { ArrowLeft, AlertTriangle, ShieldCheck, ShieldAlert, AlertOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  { 
    id: 1, text: "Atipik (olağandışı) veya rızasız cinsel fantezileriniz ne sıklıkla aklınıza geliyor?", 
    options: [
      { label: "Neredeyse hiç", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Ayda birkaç kez", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Haftada birkaç kez", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Neredeyse her gün, sürekli", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 2, text: "Bu fanteziler veya dürtüler ilk ne zaman başladı?", 
    options: [
      { label: "Çok yeni başladı", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Birkaç yıl oldu", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Ergenlikten veya çocukluktan beri var", riskPoints: { low: 2, mod: 0, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 3, text: "Bu düşünceler zihninizi ne kadar meşgul ediyor?", 
    options: [
      { label: "Çok az, hemen unutuyorum", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Biraz meşgul ediyor ama dikkatimi başka yöne çekebiliyorum", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Çok meşgul ediyor, kurtulmakta zorlanıyorum", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 4, text: "Fantezilerinizde genellikle kimler veya hangi durumlar var?", 
    options: [
      { label: "Sadece durumlar/nesneler, belirli kişiler yok", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Tanımadığım yetişkinler (kurgusal veya anonim)", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Gerçek hayattaki belirli yetişkinler (rızası olmayan)", riskPoints: { low: 0, mod: 0, high: 1, red: 0 } },
      { label: "18 yaş altı kişiler veya şiddet içeren durumlar", riskPoints: { low: 0, mod: 0, high: 0, red: 1 } }
    ] 
  },
  { 
    id: 5, text: "Bu fanteziler veya dürtüler yüzünden ne kadar utanç ve suçluluk duyuyorsunuz?", 
    options: [
      { label: "Hiç duymuyorum", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } }, 
      { label: "Biraz duyuyorum", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Çok yoğun bir utanç ve suçluluk hissediyorum", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 6, text: "Bu düşünceler romantik veya sosyal ilişkilerinizi olumsuz etkiliyor mu?", 
    options: [
      { label: "Hayır, hiç etkilemiyor", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Biraz uzaklaşmama sebep oluyor", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Evet, ilişkilerimi ciddi şekilde bozuyor", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 7, text: "Dürtüleriniz nedeniyle iş veya okul hayatınızda odaklanma sorunu yaşıyor musunuz?", 
    options: [
      { label: "Hayır", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Ara sıra", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Sıklıkla işimi/okulumu aksatacak seviyede", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 8, text: "Bu durumu bir sır olarak saklamak sizde nasıl bir his yaratıyor?", 
    options: [
      { label: "Önemsemiyorum", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Hafif bir stres yaratıyor", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Dayanılmaz bir yalnızlık ve korku yaratıyor", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 9, text: "Dürtüleriniz geldiğinde onları durdurabilme veya erteleyebilme kapasiteniz nedir?", 
    options: [
      { label: "Tamamen kontrol bende", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Bazen zorlansam da kendimi tutabiliyorum", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Kontrolü kaybetmek üzereymişim gibi hissediyorum", riskPoints: { low: 0, mod: 0, high: 2, red: 0 } }
    ] 
  },
  { 
    id: 10, text: "Tetikleyicilerle (görseller, ortamlar) karşılaştığınızda nasıl tepki verirsiniz?", 
    options: [
      { label: "Uzaklaşabiliyorum", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Bir süre izliyor/düşünüyor ama sonra bırakıyorum", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Kendimi durduramıyor ve saatlerce o konuya odaklanıyorum", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 11, text: "Bazen kendinizi 'otopilotta', ne yaptığınızı tam fark etmeden hareket ederken buluyor musunuz?", 
    options: [
      { label: "Hayır, ne yaptığımın hep farkındayım", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Bazen dalıp gidiyorum ama eyleme geçmiyorum", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Evet, bazen kendimi riskli durumlara doğru sürüklenirken buluyorum", riskPoints: { low: 0, mod: 0, high: 2, red: 0 } }
    ] 
  },
  { 
    id: 12, text: "Stresli, yalnız veya üzgün olduğunuzda bu dürtülerde artış oluyor mu?", 
    options: [
      { label: "Hayır", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Evet, bu benim duygusal bir kaçışım gibi", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } }
    ] 
  },
  { 
    id: 13, text: "Fantezilerinizi eyleme dökmeye yönelik belirli bir plan yaptığınız oluyor mu?", 
    options: [
      { label: "Hayır, sadece hayal gücümde kalıyor", riskPoints: { low: 1, mod: 0, high: 0, red: 0 } },
      { label: "Plan yapmıyorum ama 'acaba yapsam nasıl olur' diye düşünüyorum", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Evet, detaylı olarak nasıl yapabileceğimi planlıyorum", riskPoints: { low: 0, mod: 0, high: 3, red: 0 } }
    ] 
  },
  { 
    id: 14, text: "Bu dürtüleri gerçekleştirmek için uygun ortam veya fırsat kolladığınız oluyor mu?", 
    options: [
      { label: "Kesinlikle hayır", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Fırsat çıksa da kendimi geri çekerim", riskPoints: { low: 0, mod: 1, high: 0, red: 0 } },
      { label: "Evet, bazen uygun fırsat arayışı içine giriyorum", riskPoints: { low: 0, mod: 0, high: 3, red: 0 } }
    ] 
  },
  { 
    id: 15, text: "Çevrenizde bu düşünceleri eyleme dökebileceğiniz hedeflenmiş gerçek bir kişi var mı?", 
    options: [
      { label: "Hayır", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Evet, belli bir kişi/kişiler var", riskPoints: { low: 0, mod: 0, high: 3, red: 0 } }
    ] 
  },
  { 
    id: 16, text: "Kontrolünüzü tamamen kaybedip birine fiziksel veya psikolojik zarar vermekten korkuyor musunuz?", 
    options: [
      { label: "Hayır, kontrolüm tam", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Bazen endişeleniyorum", riskPoints: { low: 0, mod: 2, high: 0, red: 0 } },
      { label: "Evet, çok korkuyorum", riskPoints: { low: 0, mod: 0, high: 2, red: 0 } }
    ] 
  },
  { 
    id: 17, text: "Geçmişte veya yakın zamanda bu dürtüleri rızası olmayan birine karşı eyleme döktünüz mü?", 
    options: [
      { label: "Hayır, asla", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Sadece sözlü veya dijital ortamda sınırı aşmış olabilirim", riskPoints: { low: 0, mod: 0, high: 3, red: 0 } },
      { label: "Evet, fiziksel eyleme döktüm", riskPoints: { low: 0, mod: 0, high: 0, red: 1 } }
    ] 
  },
  { 
    id: 18, text: "Cinsel fantezileriniz, mesajlaşmalarınız veya eylemleriniz 18 yaş altı kişileri kapsıyor mu?", 
    options: [
      { label: "Hayır, kesinlikle", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Evet, kapsıyor", riskPoints: { low: 0, mod: 0, high: 0, red: 1 } }
    ] 
  },
  { 
    id: 19, text: "Karşınızdaki kişinin rızası veya izni olmadığı halde ona ısrarla cinsel içerikli mesaj atmak, dokunmak veya izlemek gibi eylemleriniz oldu mu?", 
    options: [
      { label: "Hayır", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Geçmişte oldu ama bir daha olmadı", riskPoints: { low: 0, mod: 0, high: 2, red: 0 } },
      { label: "Evet, yakın zamanda oldu veya devam ediyor", riskPoints: { low: 0, mod: 0, high: 0, red: 1 } }
    ] 
  },
  { 
    id: 20, text: "Şu anda, kendinize veya başkalarına zarar verme konusunda yakın bir tehlike (imminent risk) içinde olduğunuzu düşünüyor musunuz?", 
    options: [
      { label: "Hayır, güvendeyim", riskPoints: { low: 0, mod: 0, high: 0, red: 0 } },
      { label: "Evet, acil yardıma ihtiyacım var", riskPoints: { low: 0, mod: 0, high: 0, red: 1 } }
    ] 
  }
];

export default function Test() {
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (qIdx, optionIdx) => {
    setAnswers({ ...answers, [qIdx]: optionIdx });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length < questions.length) {
      alert("Lütfen testi tamamlamak için tüm soruları yanıtlayın.");
      return;
    }
    setIsFinished(true);
    window.scrollTo(0, 0);
  };

  const calculateRisk = () => {
    let scores = { low: 0, mod: 0, high: 0, red: 0 };
    
    Object.keys(answers).forEach((qIdx) => {
      const selectedOptionIdx = answers[qIdx];
      const points = questions[qIdx].options[selectedOptionIdx].riskPoints;
      scores.low += points.low;
      scores.mod += points.mod;
      scores.high += points.high;
      scores.red += points.red;
    });

    if (scores.red > 0) return 'RED';
    if (scores.high >= 3) return 'HIGH';
    if (scores.high > 0 || scores.mod >= 5) return 'MODERATE';
    if (scores.low >= 0 || scores.mod > 0) return 'LOW';
    return 'NO_RISK';
  };

  if (isFinished) {
    const riskLevel = calculateRisk();
    let resultContent = null;

    if (riskLevel === 'RED') {
      resultContent = (
        <>
          <div style={{ color: 'var(--danger)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <AlertOctagon size={48} />
          </div>
          <h2 className="mb-4" style={{ textAlign: 'center' }}>Kritik Risk Durumu (Red Risk)</h2>
          <p className="mb-6" style={{ fontSize: '1rem', color: 'var(--danger)', textAlign: 'center' }}>
            Yanıtlarınız, kendinize veya başkalarına zarar verme riski taşıdığınızı veya rızası olmayan bireylerin / çocukların dahil olduğu durumlar içinde olduğunuzu göstermektedir.
            <br/><br/>
            <strong>Test sonlandırılmıştır.</strong> Acilen bir ruh sağlığı uzmanına başvurmanız ve destek almanız gerekmektedir. Kimseye zarar vermeden önce yardım bulmak her zaman mümkündür.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="tel:112" className="btn btn-danger">112 Acil Çağrı Merkezi'ni Ara</a>
          </div>
        </>
      );
    } else if (riskLevel === 'HIGH') {
      resultContent = (
        <>
          <div style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <AlertTriangle size={48} />
          </div>
          <h2 className="mb-4" style={{ textAlign: 'center' }}>Yüksek Risk Durumu (High Risk)</h2>
          <p className="mb-6" style={{ fontSize: '1rem', textAlign: 'center' }}>
            Yanıtlarınıza göre düşüncelerinizi eyleme dökme konusunda bir planınız, fırsatınız veya belirli bir hedefiniz olabilir. Kontrolünüzü kaybetme ihtimaliniz yüksek görünüyor.
            <br/><br/>
            <strong>Öneri:</strong> Acil bir güvenlik planı oluşturun. Tetikleyicilerden ve hedef olabilecek kişi veya ortamlardan uzak durun. <strong>Hiç vakit kaybetmeden gizlilik çerçevesinde bir uzman (psikiyatrist/psikolog) seansına başvurmanız kritik önem taşır.</strong>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={() => window.location.href='/volunteer'}>Uzman Desteği Talep Et</button>
            <button className="btn btn-outline" onClick={() => { setAnswers({}); setIsFinished(false); }}>Testi Tekrar Çöz</button>
          </div>
        </>
      );
    } else if (riskLevel === 'MODERATE') {
      resultContent = (
        <>
          <div style={{ color: '#f59e0b', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <ShieldAlert size={48} />
          </div>
          <h2 className="mb-4" style={{ textAlign: 'center' }}>Orta Risk Durumu (Moderate Risk)</h2>
          <p className="mb-6" style={{ fontSize: '1rem', textAlign: 'center' }}>
            Dürtüleriniz güçlü ve onları kontrol etmekte zorlanıyorsunuz. İşlevselliğinizde kayıplar veya yoğun utanç duyguları yaşıyorsunuz. Ancak birine doğrudan zarar verme niyetiniz görünmüyor.
            <br/><br/>
            <strong>Öneri:</strong> Dürtü yönetimi tekniklerini öğrenmek ve riskin yükselmesini engellemek adına güvenli ortamlarda kalmaya özen gösterin. Utancınızın sizi izole etmesine izin vermeyin. Erken müdahale için bir psikoloğa başvurarak profesyonel destek almanız şiddetle tavsiye edilir.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={() => window.location.href='/volunteer'}>Rehberlik Al</button>
            <button className="btn btn-outline" onClick={() => { setAnswers({}); setIsFinished(false); }}>Testi Tekrar Çöz</button>
          </div>
        </>
      );
    } else {
      resultContent = (
        <>
          <div style={{ color: 'var(--success)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <ShieldCheck size={48} />
          </div>
          <h2 className="mb-4" style={{ textAlign: 'center' }}>Düşük Risk Durumu (Low Risk)</h2>
          <p className="mb-6" style={{ fontSize: '1rem', textAlign: 'center' }}>
            Yanıtlarınıza göre atipik düşünceler veya fantezileriniz olabilir ve bunlardan dolayı sıkıntı çekiyor olabilirsiniz. Ancak <strong>düşünmek eylem değildir.</strong> Herhangi bir hedefiniz, planınız veya yakın tehlike riskiniz bulunmuyor.
            <br/><br/>
            <strong>Öneri:</strong> Bu durumu anlamlandırmak, kendinize yönelik utancı azaltmak ve farkındalığınızı artırmak için projemizin psiko-eğitim materyallerini kullanabilirsiniz. Eğer bu düşünceler sizi rahatsız etmeye devam ederse bir uzmanla görüşmek her zaman faydalıdır.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-outline" onClick={() => { setAnswers({}); setIsFinished(false); }}>Testi Tekrar Çöz</button>
          </div>
        </>
      );
    }

    return (
      <div className="container py-12" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
            <ArrowLeft size={18} /> Ana Sayfaya Dön
          </Link>
          <h1 style={{ color: '#1e3a8a', fontSize: '2rem', marginBottom: '0.5rem' }}>Test Sonucu</h1>
        </div>
        <div className="glass-card">
          {resultContent}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12" style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
        <h1 style={{ color: '#1e3a8a', fontSize: '2rem', marginBottom: '0.5rem' }}>Psikolojik Test</h1>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
          Bu test tamamen gizli ve anonimdir. Lütfen soruları dürüstçe yanıtlayın. Verileriniz sadece akademik araştırma amacıyla kullanılacaktır.
        </p>
      </div>

      <div className="glass-card">
        <form onSubmit={handleSubmit}>
          
          <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
            Demografik Bilgiler
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem', fontWeight: '500' }}>Yaş Aralığı *</label>
              <select required>
                <option value="">Seçiniz</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55+">55 ve üzeri</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem', fontWeight: '500' }}>Cinsiyet *</label>
              <select required>
                <option value="">Seçiniz</option>
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
                <option value="Belirtmek İstemiyorum">Belirtmek İstemiyorum</option>
              </select>
            </div>
          </div>

          <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
            Test Soruları
          </h3>

          {questions.map((q, qIdx) => (
            <div key={q.id} style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: '500', color: '#1e293b', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                {q.id}. {q.text} *
              </p>
              <div className="radio-group">
                {q.options.map((opt, optIdx) => (
                  <label key={optIdx} className="radio-label">
                    <input 
                      type="radio" 
                      name={`q-${q.id}`} 
                      className="radio-input"
                      checked={answers[qIdx] === optIdx}
                      onChange={() => handleSelect(qIdx, optIdx)}
                      required
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
              Testi Tamamla
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
