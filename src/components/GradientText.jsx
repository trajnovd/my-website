export default function GradientText({
  children,
  className = '',
  colors = ['#22d3ee', '#a78bfa', '#22d3ee'],
  animationSpeed = 6,
}) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        backgroundSize: '300% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: `gradient ${animationSpeed}s linear infinite`,
      }}
    >
      {children}
    </span>
  )
}
