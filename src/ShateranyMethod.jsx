import { useState } from "react";

const phases = [
  { number: "01", taino: "YUCAHU", name: "Las Raíces", subtitle: "Where did this begin?", color: "#8B4513", accent: "#D4A574", glyph: "🌳", description: "Empezamos con la historia familiar. Tu dolor no nació contigo — viajó a ti.", questions: ["¿Quién en tu familia vivió algo parecido a lo que tú vives hoy?", "¿Qué emociones nunca se nombraban en tu casa?", "¿A quién en tu familia te sientes más parecida — y a quién NO quieres parecerte?"], science: "Epigenética transgeneracional — Lipton & Corbera", what: "Mapeo del árbol emocional familiar" },
  { number: "02", taino: "ATABEY", name: "El Cuerpo Habla", subtitle: "What is your body telling you?", color: "#2D6A4F", accent: "#74C69D", glyph: "🌿", description: "Tu cuerpo no miente. Cada síntoma tiene un mensaje.", questions: ["¿Qué parte de tu cuerpo está hablando más fuerte ahora mismo?", "¿Cuándo empezó exactamente? ¿Qué estaba pasando en tu vida?", "Si tu cuerpo pudiera hablar, ¿qué te diría?"], science: "Decodificación Biológica — Bouron & Vilanova", what: "Lectura bio-emocional del síntoma" },
  { number: "03", taino: "GUABANCEX", name: "El Patrón", subtitle: "What keeps repeating?", color: "#1D3557", accent: "#A8DADC", glyph: "🌀", description: "Lo que se repite, te pertenece.", questions: ["¿En qué áreas de tu vida sientes que siempre termina igual?", "¿Qué situación describes como 'mala suerte' y se ha repetido más de dos veces?", "¿Qué emoción aparece en todas esas repeticiones?"], science: "Inconsciente y proyección — Bioneuroemoción (Corbera)", what: "Trazado del mapa de repetición inconsciente" },
  { number: "04", taino: "JURACÁN", name: "La Tormenta que Sana", subtitle: "Face the real conflict.", color: "#560BAD", accent: "#E0AAFF", glyph: "⚡", description: "Nombramos el conflicto real. Porque lo que puedes ver, lo puedes soltar.", questions: ["¿Qué es lo que más miedo te da admitir en esta situación?", "¿Qué necesidad tuya no se ha satisfecho?", "¿Qué estarías dejando ir si esta situación sanara completamente?"], science: "Conflicto emocional inconsciente — Bioneuroemoción (Corbera)", what: "Nombramiento y visibilización del conflicto raíz" },
  { number: "05", taino: "MABOYA", name: "La Liberación", subtitle: "Choose something different.", color: "#B5179E", accent: "#F72585", glyph: "🦋", description: "No hay sanación sin una nueva elección.", questions: ["¿Cómo querría sentirme si pudiera elegir libremente?", "¿Qué necesito honrar o soltar de mi historia familiar?", "¿Cuál es el primer paso concreto desde esta nueva conciencia?"], science: "Epigenética conductual — Lipton + Integración espiritual ancestral", what: "Ritual de cierre, integración y nueva elección" },
];

const pillars = [
  { icon: "🔬", label: "Ciencia", desc: "Epigenética y biología celular" },
  { icon: "🌀", label: "Método", desc: "Bioneuroemoción aplicada" },
  { icon: "🦴", label: "Cuerpo", desc: "Decodificación bio-emocional" },
  { icon: "🌳", label: "Ancestros", desc: "Sanación transgeneracional" },
  { icon: "🌙", label: "Espíritu", desc: "Sabiduría taína y cósmica" },
  { icon: "🗣️", label: "Voz", desc: "Lenguaje que llega al alma" },
];

const LINKS = {
  substack: "https://shaterany.substack.com/subscribe",
  instagram: "https://instagram.com/shaterany.living",
};

export default function ShateranyMethod() {
  const [active, setActive] = useState(null);
  const [hoveredPillar, setHoveredPillar] = useState(null);
  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "linear-gradient(160deg, #0a0a0f 0%, #0f1a12 40%, #0d0a1a 100%)", minHeight: "100vh", color: "#f0ead6", overflowX: "hidden" }}>
      <header style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "72px 24px 40px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "6px", color: "#74C69D", marginBottom: "16px", textTransform: "uppercase" }}>Shaterany.living · Método Exclusivo</div>
        <h1 style={{ fontSize: "clamp(36px, 7vw, 72px)", fontWeight: "400", margin: "0 0 8px", lineHeight: 1.1, background: "linear-gradient(135deg, #f0ead6 30%, #D4A574 70%, #E0AAFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>El Método RAÍCES</h1>
        <p style={{ fontSize: "clamp(13px, 2vw, 17px)", color: "#a09070", fontStyle: "italic", marginTop: "8px" }}>Decodificación Cosmoancestral · por Shaterany</p>
        <div style={{ margin: "32px auto", fontSize: "28px", opacity: 0.6 }}>✦</div>
        <p style={{ maxWidth: "620px", margin: "0 auto", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.8, color: "#c4b99a" }}>Un método de 5 fases que integra <em>ciencia epigenética</em>, decodificación bio-emocional y sabiduría ancestral taína.</p>
      </header>
      <section style={{ position: "relative", zIndex: 1, padding: "0 24px 64px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}><span style={{ fontSize: "11px", letterSpacing: "5px", color: "#E0AAFF", textTransform: "uppercase" }}>Los 6 Pilares</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
          {pillars.map((p, i) => (
            <div key={i} onMouseEnter={() => setHoveredPillar(i)} onMouseLeave={() => setHoveredPillar(null)} style={{ background: hoveredPillar === i ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px 12px", textAlign: "center", transition: "all 0.3s ease", transform: hoveredPillar === i ? "translateY(-4px)" : "none" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{p.icon}</div>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "#f0ead6" }}>{p.label}</div>
              <div style={{ fontSize: "11px", color: "#8a8070", marginTop: "4px" }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ position: "relative", zIndex: 1, padding: "0 24px 80px", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}><span style={{ fontSize: "11px", letterSpacing: "5px", color: "#D4A574", textTransform: "uppercase" }}>Las 5 Fases · R.A.Í.C.E.S.</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {phases.map((phase, i) => {
            const isOpen = active === i;
            return (
              <div key={i} style={{ border: `1px solid ${isOpen ? phase.accent + "60" : "rgba(255,255,255,0.07)"}`, borderRadius: "16px", background: isOpen ? `linear-gradient(135deg, ${phase.color}22 0%, rgba(0,0,0,0.4) 100%)` : "rgba(255,255,255,0.02)", overflow: "hidden", transition: "all 0.4s ease", cursor: "pointer" }} onClick={() => setActive(isOpen ? null : i)}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "24px 28px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2px", color: phase.accent, minWidth: "28px" }}>{phase.number}</div>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: `${phase.color}40`, border: `1px solid ${phase.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>{phase.glyph}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "8px", letterSpacing: "5px", color: phase.accent, textTransform: "uppercase", marginBottom: "4px" }}>{phase.taino}</div>
                    <div style={{ fontSize: "clamp(16px, 3vw, 22px)", fontWeight: "400", color: "#f0ead6" }}>{phase.name}</div>
                    <div style={{ fontSize: "12px", color: "#8a8070", fontStyle: "italic", marginTop: "2px" }}>{phase.subtitle}</div>
                  </div>
                  <div style={{ fontSize: "18px", color: phase.accent, opacity: 0.7, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}>+</div>
                </div>
                {isOpen && (
                  <div style={{ padding: "0 28px 28px" }}>
                    <div style={{ borderTop: `1px solid ${phase.accent}20`, paddingTop: "24px" }}>
                      <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#c4b99a", marginBottom: "28px", fontStyle: "italic" }}>"{phase.description}"</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                        <div>
                          <div style={{ fontSize: "10px", letterSpacing: "4px", color: phase.accent, textTransform: "uppercase", marginBottom: "14px" }}>Preguntas Clave</div>
                          {phase.questions.map((q, qi) => (
                            <div key={qi} style={{ display: "flex", gap: "10px", marginBottom: "12px", alignItems: "flex-start" }}>
                              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: phase.accent, flexShrink: 0, marginTop: "6px" }} />
                              <div style={{ fontSize: "13px", color: "#b0a080", lineHeight: 1.6 }}>{q}</div>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{ marginBottom: "20px" }}>
                            <div style={{ fontSize: "10px", letterSpacing: "4px", color: phase.accent, textTransform: "uppercase", marginBottom: "10px" }}>Qué Hacemos</div>
                            <div style={{ background: `${phase.color}30`, border: `1px solid ${phase.accent}30`, borderRadius: "8px", padding: "12px 16px", fontSize: "13px", color: "#d4c8a8", lineHeight: 1.6 }}>{phase.what}</div>
                          </div>
                          <div>
                            <div style={{ fontSize: "10px", letterSpacing: "4px", color: phase.accent, textTransform: "uppercase", marginBottom: "10px" }}>Base Científica</div>
                            <div style={{ fontSize: "12px", color: "#7a7060", fontStyle: "italic", lineHeight: 1.6 }}>{phase.science}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section style={{ position: "relative", zIndex: 1, padding: "48px 32px 40px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", maxWidth: "680px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", marginBottom: "24px", opacity: 0.5 }}>✦ ✦ ✦</div>
        <blockquote style={{ fontSize: "clamp(16px, 3vw, 22px)", fontStyle: "italic", lineHeight: 1.8, color: "#c4b99a", margin: "0 0 24px", fontWeight: "300" }}>"No vine a darte respuestas que ya tienes. Vine a ayudarte a escuchar lo que tu cuerpo, tu sangre y tus ancestros ya saben."</blockquote>
        <div style={{ fontSize: "14px", color: "#D4A574", letterSpacing: "3px" }}>— Shaterany</div>
      </section>
      <section style={{ position: "relative", zIndex: 1, padding: "20px 32px 90px", textAlign: "center", maxWidth: "620px", margin: "0 auto" }}>
        <div style={{ fontSize: "11px", letterSpacing: "5px", color: "#74C69D", textTransform: "uppercase", marginBottom: "16px" }}>Esto es solo el comienzo</div>
        <h2 style={{ fontSize: "clamp(26px, 5vw, 38px)", fontWeight: "400", margin: "0 0 16px", color: "#e8d9b5" }}>Sigamos juntas</h2>
        <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#c4b99a", marginBottom: "32px" }}>Descarga gratis tu <em>Decodificación Rápida</em> y únete a una comunidad de mujeres sanando desde la raíz. 🌿</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={LINKS.substack} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 32px", borderRadius: "50px", background: "linear-gradient(135deg, #D4A574, #E0AAFF)", color: "#0a0a0f", fontSize: "15px", fontWeight: "700", textDecoration: "none" }}>📥 Descarga tu guía gratis</a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 32px", borderRadius: "50px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", color: "#f0ead6", fontSize: "15px", textDecoration: "none" }}>🌙 Sígueme en Instagram</a>
        </div>
        <div style={{ marginTop: "56px", fontSize: "12px", color: "#5a5040", letterSpacing: "3px", textTransform: "uppercase" }}>Shaterany.living</div>
      </section>
    </div>
  );
}
