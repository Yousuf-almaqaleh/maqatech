function Logo({ height = 50 }) {
  const primary = '#6366f1';
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: `${height}px`, direction: 'ltr' }}>
      <div style={{ 
        fontFamily: "'Outfit', sans-serif", 
        fontSize: `${height * 0.48}px`, 
        fontWeight: '900',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1',
        textAlign: 'left'
      }}>
        <div style={{ letterSpacing: '-0.03em', color: 'white' }}>
          <span style={{ color: 'inherit' }}>About</span>
          <span style={{ color: primary }}>me</span>
        </div>

        <div style={{ 
          fontSize: '0.22em', 
          letterSpacing: '0.35em', 
          color: '#94a3b8', 
          marginTop: '5px',
          fontWeight: '700'
        }}>PORTFOLIO PRO</div>
      </div>
    </div>
  )
}

export default Logo


