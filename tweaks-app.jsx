/* global React, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#A85B3E", "#c0795c"],
  "tone": "#F5F1E8",
  "display": "cormorant",
  "motion": true,
  "counter": true
}/*EDITMODE-END*/;

const DISPLAY_FONTS = {
  cormorant: "'Cormorant Garamond', 'Noto Serif TC', serif",
  serif:     "'Noto Serif TC', 'Cormorant Garamond', serif"
};

function CXTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement.style;
    const accent = Array.isArray(t.accent) ? t.accent : [t.accent, t.accent];
    r.setProperty('--cx-clay', accent[0]);
    r.setProperty('--cx-clay-soft', accent[1] || accent[0]);
    r.setProperty('--cx-accent', accent[0]);
    r.setProperty('--eye-rust', accent[0]);
    r.setProperty('--cx-bone', t.tone);
    r.setProperty('--cx-page-bg', t.tone);
    r.setProperty('--eye-paper', t.tone);
    r.setProperty('--font-display', DISPLAY_FONTS[t.display] || DISPLAY_FONTS.cormorant);
    document.body.classList.toggle('no-motion', !t.motion);
    document.body.classList.toggle('no-counter', !t.counter);
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand" />
      <TweakColor label="Accent" value={t.accent}
        options={[["#A85B3E", "#c0795c"], ["#8E4A30", "#b06b4a"], ["#B5704A", "#cf9170"], ["#9A4A36", "#c07a5e"]]}
        onChange={(v) => setTweak('accent', v)} />
      <TweakColor label="Page tone" value={t.tone}
        options={["#F5F1E8", "#F3ECDD", "#EFE7D8", "#FBF8F1"]}
        onChange={(v) => setTweak('tone', v)} />
      <TweakSection label="Type" />
      <TweakRadio label="Display" value={t.display}
        options={[{ label: 'Cormorant', value: 'cormorant' }, { label: 'Noto Serif', value: 'serif' }]}
        onChange={(v) => setTweak('display', v)} />
      <TweakSection label="Motion & chrome" />
      <TweakToggle label="Cinematic motion" value={t.motion} onChange={(v) => setTweak('motion', v)} />
      <TweakToggle label="Chapter counter" value={t.counter} onChange={(v) => setTweak('counter', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<CXTweaks />);
