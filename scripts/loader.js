const versionOrder = ['v1','v2','v3','v4','v5'];

function loadVersion(version) {
  const container = document.getElementById('particles-js');
  container.innerHTML = '';

  // remove previous particles
  try {
    window.pJSDom?.forEach(p => p.pJS?.fn?.vendors?.d?.pJS && p.pJS.fn.vendors.destroypJS(p.pJS));
  } catch {}

  // remove previous configuration scripts
  document.querySelectorAll('script[data-config]').forEach(s => s.remove());

  // download new configuration file
  const script = document.createElement('script');
  script.src = `scripts/config-${version}.js`;
  script.dataset.config = version;
  script.onload = () => {
    if (window.particlesConfig) {
      particlesJS('particles-js', window.particlesConfig);
      console.log(`✅ Loaded config: ${version}`);
    } else {
      console.error(`❌ Config ${version} not found`);
    }
  };
  document.body.appendChild(script);
}

// processing version-switcher button clicks
document.querySelectorAll('.version-switcher button').forEach(btn => {
  btn.addEventListener('click', e => {
    const version = btn.dataset.version;
    document.querySelectorAll('.version-switcher button')
      .forEach(b => b.setAttribute('aria-pressed','false'));
    btn.setAttribute('aria-pressed','true');
    loadVersion(version);
  });
});

// download v1
window.addEventListener('load', () => loadVersion('v1'));
